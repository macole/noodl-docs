---
title: メール検証
hide_title: true
---

# メール検証

クラウド機能は、さまざまなログインおよびサインアップフローを作成する際に重要な役割を果たします。[Sign Up](/nodes/data/user/sign-up)、[Log In](/nodes/data/user/log-in)、[Log Out](/nodes/data/user/log-out)のノードを使用して、ユーザーがユーザー名、オプションでメール、パスワードでサインアップし、ユーザー名とパスワードでログインする最も基本的なフローを作成できます。

:::note

サインアップ時に**ユーザー名**と**メール**の両方にメールを使用することが一般的です。つまり、ユーザーにメールとパスワードのみを求めるため、覚えるべきことが1つ少なくなります。

:::

ログインしたら、クラウドデータベースの[Access Control](/docs/guides/cloud-data/access-control)機能を使用して、ユーザーがアクセスできるものとできないものを制御できます。組み込みのロールシステムを使用して、ユーザーのチーム/グループのような機能を作成できます。

これは、アプリケーションの構築に集中し始める素晴らしい方法です。しかし、より多くのユーザーに公開し始めるところに達すると、より堅牢なサインアップおよびログインフローが必要になることがよくあります。最初の追加は、おそらくユーザーのメールを検証し、パスワードをリセットできるようにする必要があることです。このガイドではそれについて説明します。

サインアップ時にユーザーにメールを送信し、プロファイルの編集などをカバーする、より完全なサインアップおよびログインフローを含むプロジェクトテンプレートがあります。これは、フロントエンドからセキュリティ上の理由で実行できないいくつかのことを行うためにクラウド機能を使用します（クラウド機能は常にデータベースへの完全なアクセス権を持っています）。

テンプレートから新しいプロジェクトを開始するか、クラウド機能を既存のプロジェクトにインポートできます。ここでは、このガイドでケースバイケースでそれらをレビューします。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/signup-template.png)

</div>

## 設定

メール検証プロセスを機能させるためには、いくつかの設定パラメーターを提供する必要があります。これは、**クラウドサービス**のダッシュボードを開き、サイドバーを使用して**Config**タブに移動することで行われます。設定パラメーターについての詳細は、[Config](/nodes/data/cloud-data/config)ノードを見ることで学ぶことができます。必要な設定パラメーターは以下のとおりです：

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/settings.png)

</div>

- `EmailVerificationDomain` ここには、アプリケーションがデプロイされているドメインを`https://`から始めて入力する必要があります。これは、検証メールのリンクに使用されます。ローカルで実行している場合、これは自動的に`http://localhost:8574`になります。これは、ローカルのNoodl Webサーバーが実行されている場所です。
- `EmailVerificationFrom` これは、ユーザーに検証メールを送信する際に「from」メールとして使用されるメールアドレスを入れる場所です。これが**Send Grid**（アプリケーションで使用しているメール送信サービス）で有効なメールであることが重要です。
- `SendGridAPIKey` プロジェクトテンプレートとメール検証プリファブは、メールサービスとして[SendGrid](https://sendgrid.com/)を使用しています。これを使用するには、アカウントにサインアップして取得する必要があります（テストには無料です）。APIキーを作成し、設定に入れます。NoodlでSend Gridを使用する方法についての詳細は[こちら](/library/prefabs/sendgrid)で見つけることができます。

## サインアップ

サインアップは、[Sign Up](/nodes/data/user/sign-up)アクションノードで行われます。ユーザーが正常にサインアップした後、クラウド機能**Send Verification Email**が呼び出されます。この機能は、ユーザーに提供されたアドレスにメールを送信します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/sign-up

-1.png)

</div>

クラウド機能をもう少し詳しく見てみましょう。詳細に深入る必要はありませんが、主要なフローとブロックをレビューするのは良いことです。クラウド機能は、クラウド機能タブの**Sign Up**フォルダにあり、**Send Verification Email**と呼ばれています。機能が開始される最初のこの時、**Request Email Verification**アクションコンポーネントが使用されます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/sign-up-2.png)

</div>

このアクションは、秘密トークン（一時的なパスワードのような、文字のランダムな文字列）を作成し、現在のユーザーと共に保存します。このトークンは後でメールの一部としてユーザーに送信されます。メールがすでに検証されている場合、**Email Is Verified**にシグナルが発行され、クラウド機能のエラー結果として返されます。

次の部分は、実際にユーザーにメールを送信することです。これは、**Format Email**および**Send Email**アクションコンポーネントを使用して機能内で行われます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/sign-up-3.png)

</div>

**Format Email**アクションは、検証トークンとユーザーのメールを入力として受け取り、リンクを含むメールを作成します。**Format Email**ノードのプロパティを見ることで、メールの内容を確認できます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/sign-up-4.png)

</div>

見ての通り、HTMLリンクを含むメールが作成されます。このリンクはいくつかの洗練されたテンプレート構文を使用します。

- `$Domain` これは、フォーマットメールノードによってアプリケーションがデプロイされたドメインに置き換えられます。これにより、リンクがアプリに戻ります。後ほど詳細を説明します。
- `{Token}` これは前に生成されたトークンです。
- `{Email}` これはユーザーのメールであり、次のステップでユーザーを取得してメールを検証済みとしてマークするために使用されます。

**Format Email**ノードは、上記のプレースホルダーに正しい値が挿入された最終メールを出力します。このメール内容は、実際にユーザーにメールを送信する**Send Email**ノードに送られます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/sign-up-5.png)

</div>

それでおしまいです。これで、ユーザーは受信トレイに**Email Verification!**という件名の新しいメールを持っているはずです。**Send Email**アクションの**Subject**プロパティを編集できます。

## メールの検証

メール検証フローを機能させるためには、もう1つのことが必要です。検証メールのリンクが指すページが必要です。**Format Email**アクションがメールテンプレートをフォーマットし、**Token**、**Email**、**Domain**を挿入した結果、リンクは次のようになります。

`<a href="https://your-app.sandbox.noodl.app/verify-email?token=abc&email=user@email.com">verify</a>`

この小さなリンクは、ユーザーをアプリに戻します（テストのために`http://localhost:8574`をドメインとして使用できることを覚えておいてください。アプリがデプロイされる前に）そして、`/verify-email`のページに具体的に戻ります。したがって、プロジェクトテンプレートのページを見てみましょう。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/verify-email-1.png)

</div>

ここには多くのものがありますが、重要なのは**Page Inputs**です。ここで、リンクのクエリパラメータ（リンクの`?`の後ろのもの）の一部として**Token**と**Email**を取得し、これらは**Sign Up / Verify Email**クラウド機能に渡され、ページがロードされるとすぐに**Did Mount**シグナルで呼び出されます。

成功した場合、メールが検証され、ユーザーはアプリのログインページに**Navigate**ノードとトーストメッセージが表示されて送られます。失敗した場合、画面にメッセージが表示され、**Show Toast**コンポーネントを使用してトーストが表示されます（これはプリファブの中にあり、プロジェクトにインストールできます。**Loading Spinner**も同様です）。

アプリにログインしたら、任意の**User**ノードにマウスを合わせることでユーザーオブジェク

トを検査できます。ここでは、メール検証クラウド機能によって設定されたいくつかのプロパティを確認できます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/verify-email-2.png)

</div>

最も重要なのはユーザーの**emailVerified**プロパティです。これは、ユーザーがメールを検証したかどうかを示します。サインアッププロジェクトテンプレートでは、メールアドレスが検証されていなくても、ユーザーは実際にアプリのホーム画面に送られ、バナーが表示されます。たとえば、ユーザーがメールを検証した場合にのみ、アプリケーションの特定の部分を有効にすることができます。

メールが適切に受信されなかった場合、またはユーザーが別の検証メールを送信したい場合は、単に**Sign Up / Send Verification Email**クラウド機能を再度呼び出すことができます。

:::note
**Set User Properties**アクションノードでメールを更新すると、ユーザーの**emailVerified**プロパティが自動的にfalseに切り替わります。
:::

## パスワードのリセット

失われたユーザーパスワードをリセットすることは、検証のためのメールを送信するのと同じパターンに従います。まず、ユーザーがパスワードを回復するためにメールアドレスを入力できる何らかのUIを提示する必要があります。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/reset-password-1.png)

</div>

**Sign Up / Request Password Reset**と呼ばれる関数があり、これは単に**Email**を受け入れ、ユーザーがログインしていなくても呼び出すことができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/reset-password-2.png)

</div>

クラウド機能は、メール検証を送信するときとほぼ同じパターンに従います。これは、秘密トークンを含むリンクを使用して、メールアドレスを検証するときと同じように、ユーザーにメールを送信します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/reset-password-3.png)

</div>

**Request Password Reset**アクションは、秘密トークンを生成し、これをユーザーのメールと共に**Format Email**に渡します。今回は、`/reset-password`というページへのリンクを生成します。**Format Email**ノードのメールの内容を編集できます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/reset-password-4.png)

</div>

結果として得られるリンクは次のようになります：

`<a href="https://your-app.sandbox.noodl.app/reset-password?token=abc&email=user@email.com">link</a>`

このリンクは、ユーザーを`/reset-password`ページに送り、ここにはユーザーが新しいパスワードを提供できる**Text Input**を含めることができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/reset-password-6.png)

</div>

ユーザーがリセットボタンを押したとき、リンクのクエリパラメータと**Page Inputs**ノードを介して受け取った秘密トークンとユーザーメールを供給して、**Sign Up / Reset Password**クラウド機能を呼び出します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/email-verification/reset-password-5.png)

</div>

秘密トークンが正しく、有効期限が切れていない場合（トークンは24時間有効です）、パスワードが更新されます。その後、ユーザーを**Log In**ページに送ることができます。

それでおしまいです。これが、メール検証とパスワードリセットフローを作成するためにクラウド機能を使用する方法です。バックエンドで完全なデータベースアクセスを必要とするユーザー管理タスクを実行するために、多くの場合、クラウド機能を使用します。