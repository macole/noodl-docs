---
title: Stripe
hide_title: true
---

# Stripe

支払いの受け入れやサブスクリプションの管理は、多くのデジタル製品において重要な部分であり、Noodlで構築する場合は、アプリに支払いを統合するためのサービスである**Stripe**を使用するのが最適です。このプリファブとこのガイドでは、ユーザーからの支払いを受け入れるためのいくつかの重要な側面をカバーします。

まず、アカウントを作成し、[Stripe Dashboard](https://dashboard.stripe.com)にアクセスできることを確認する必要があります。このガイドを完了するために完全に承認されたアカウントは必要ありません。実際、テストバージョンのアカウントで開始することが望ましいです。

このガイドに適切に従うためには、いくつかのNoodlの概念を既によく理解していることが推奨されます。

- **クラウドデータ**。クラウドサービスの設定とクラウドデータの操作方法を知っています。[こちら](/docs/guides/cloud-data/creating-a-backend)から始めてください。
- **クラウド関数**、クラウドで実行されるロジックの作成方法。[こちら](/docs/guides/cloud-logic/introduction)をご覧ください。
- **ページとナビゲーション**、ページとナビゲーションの作成方法。[こちら](/docs/guides/navigation/basic-navigation)から始めてください。
- **ユーザー管理**、新しいユーザーを作成し、ログインさせるアプリが必要です。[こちら](/nodes/data/user/sign-up)から始めてください。

## セットアップ

プリファブをインストールした後、**Stripe**という名前のコンポーネントのフォルダーがフロントエンドとクラウド関数の両方に表示されます。このガイドで使用する良いものがこれらのフォルダーに見つかります。しかし、最初にセットアップを完了する必要があります。

プロジェクトのクラウドサービスダッシュボードを起動し、**Config**タブを探します。ここで、`StripeAPIKey`（大文字と小文字に注意）という新しい設定パラメータを作成する必要があります。これには、[Stripe Dashboard](https://dashboard.stripe.com)からの**Secret Key**を入力する必要があります。**Stripe**のこのセクションを探し、**Secret Key**が必要であることを重要視してください。

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/stripe-key.png)

</div>

次に、クラウドサービスで設定を作成し、アクセスを**Master Key Only**に制限することを確認します。これにより、APIキーはクラウドサービス内で安全に保持されます。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/config-param.png)

</div>

## 一回限りの支払いの受け入れ

ユーザーがアプリケーションから製品を購入し、一回限りの支払いを行う基本的な例から始めましょう。まず、[Stripeで製品を作成し](https://support.stripe.com/questions/how-to-create-products-and-prices)、一回限りの価格があることを確認する必要があります。ダッシュボードで`Price Id`を見つけ、これは次のようになります。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/stripe-price-id.png)

</div>

これをコピーします。これからすぐに使用します。例えば、仮想製品を購入できるゲームを作成していて、チェックアウト画面が次のようになっているとします：

<div className="ndl-image-with-background ">

![](/library/prefabs/stripe/game-checkout.png)

</div>

ユーザーが**Checkout**ボタンをクリックすると、プリファブの一部である**Buy Products**ロジックコンポーネントを使用します。これにより、ユーザーはStripeがホストするチェックアウトページにリダイレクトされ、そこでクレジットカードの詳細を提供し、購入を完了することができます。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/buy-products-nodes.png)

</div>

リダイレクトを行いたいときに**Do**にシグナルを送信する必要があります。また、Stripeがユーザーに支払いを促す**Items**の配列を提供する必要があります。これは、購入する製品タイプごとに1つのオブジェクトを含む配列です（チェックアウトカートのようなもの）。上記のグラフの関数ノードには、次の短いコードがあります：

```javascript
Outputs.Items = [
  {
    PriceId: "your-price-id-from-stripe",
    Quantity: 1,
  },
];
```

また、支払いの**Owner Id**も提供する必要があります。これは、後で購入を履

行するために必要な**Id**です。この場合、魔法の剣アイテムをユーザーに割り当てるので、所有者としてユーザーを渡す必要があります。履行トピックの下でこれについて詳しく説明します。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/payment-owner-id.png)

</div>

これにより、新しいタブが開き、Stripeのチェックアウトページが表示され、ユーザーは購入を完了することができます。ユーザーが成功するか、支払いがキャンセルされると、**Stripe**はあなたのアプリケーションにリダイレクトされます。これは、2つのリダイレクトURLを使用して行われます。これらをアプリケーションの**Config**に追加する必要があります。正確な値は、アプリをデプロイしたときのドメインと一致する必要がありますが、今のところ任意の値を入れることができます：

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/checkout-callbacks-config.png)

</div>

実際には、ローカルで実行している間（エディターでアプリを開発している間）に異なる値が得られます。この値をカスタマイズするには、クラウド関数の中にある**Stripe / Settings**コンポーネントを見てください。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/checkout-callbacks.png)

</div>

- `Checkout Success Url`はローカルで作業しているときに上書きされ、`http://localhost:8574/checkout-success`に設定されます
- `Checkout Cancel Url`はローカルで作業しているときに上書きされ、`http://localhost:8574/checkout-cancel`に設定されます

これらのURLにマッピングされるページを作成する必要があります。または、2つのURLをアプリケーションに合わせて更新する必要があります。アプリで設定を使用する方法について詳しくは、[Config](/nodes/data/cloud-data/config)ノードをチェックしてください。

:::note
予想通りに動作しない場合（間違っている可能性のある多くのことがあります）、**Stripe Dashboard**の**Developer**部分は調べ始めるのに良い場所です。ここでは、最新のリクエストがすべて表示され、エラーが表示され、何が間違っているのか手がかりを得ることができます。
:::

## 履行とWebhook

ユーザーがチェックアウトフローを完了すると、**Stripe**はアプリケーションにリクエストを履行できること（この場合は、ユーザーに魔法の剣を与えること）を通知します。これは**Webhook**を使用して行われます。私たちにとっては、これは**Stripe**がチェックアウトセッションが完了したことを知らせるために選択した**Cloud Functions**を呼び出すことを意味します。まず、Webhookを設定する必要があります。開発中には、**Stripe**にはNoodlエディタで完全なフローをテストできる便利なツールがあります。

**Stripe Dashboard**の[このページ](https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local)にアクセスして、コンピュータに必要なツールをインストールし、セットアップを行ってください。ツールを起動するときは、次のコマンドを使用してください：

```bash
$ stripe listen --forward-to localhost:8577/functions/stripe-webhook
```

次に、`stripe-webhook`（小文字）という名前のクラウド関数を作成する必要があります。これが、チェックアウトセッションが完了したときに呼び出される関数です。**Stripe / Events / Process Stripe Payment Event**ロジックコンポーネントを関数に追加して、次のように接続します：

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/stripe-webhook-1.png)

</div>

クラウド関数が認証なしで呼び出せるように、**Request**ノードのプロパティを編集してください。

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/allow-unauth.png)

</div>

:::note
Stripeにできるだけ早くレスポンスを返すことが良い慣行です。いくつかのデータベースの更新やAPIコールは問題ありませんが、複雑な長時間実行されるタスクはStripeが["タイムアウト"エラー](https://support.stripe.com/questions/webhooks-how-to-investigate-and-fix-timed-out)で失敗する原因となることがあります。
:::

支払いが成功すると、**Process Stripe Payment Event**ノードから**Payment Completed**シグナルが送信されます。これを使用して、仮想の魔法の剣を作成し、ユーザーに与えることができます。ここで重要ないくつかの出力がシグナルと共に送信されます。

- `Payment Owner Id` これは

、上記の**Buy Products**アクションでチェックアウトセッションを開始するときに提供した**Id**です。この場合、購入を行うユーザーを指すので、剣を作成するときに使用できます。
- `Items` は、購入されたアイテムを含むオブジェクトの配列です（**Buy Products**アクションに送信されたものと同じですが、重要なデータで拡張されています）。これがそのように見えるものです：

```javascript
[
  {
    Quantity, // このアイテムの数
    PriceId, // 購入時の価格
    ProductId, // Stripeダッシュボードからの製品のId
  },
];
```

クラウドサービスダッシュボードで**Product**という名前のレコードクラスを持っているとしましょう。ここでは、Stripeから取得した**productId**を持つアイテムを作成します（これにより、何が購入されたかがわかります）。そして、**ownerId**というユーザーへのポインタを持ちます。これにより、後でユーザーが購入した製品をすべてクエリすることができます。次のように接続できます：

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/stripe-webhook-2.png)

</div>

小さな関数ノードは、**Items**配列から最初の製品IDを抽出するために次の小さなスニペットを使用しています：

```javascript
if (Inputs.Items) Outputs.ProductId = Inputs.Items[0].ProductId;
```

これで、ユーザーに仮想の魔法の剣を販売することができます。デスクトップでアプリケーションを実行しているときに、ブラウザを開いて`http://localhost:8574`に移動することで、アプリケーションでの支払いフローをテストできます。Noodlは、ローカルで実行している間にアプリケーションを提供します。

支払いフローを完了すると、シグナルがトリガーされ、データがグラフを通って流れるため、クラウド関数がアクティブになるのが見えるはずです。接続上のデータを検査することで、問題を見つけることもできます。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/inspect-webhook.png)

</div>

:::note
Stripeの**Product Id**（[Stripe Dashboard](https://dashboard.stripe.com)で見つけることができます）は、製品の一意の識別子です。アプリ内で購入アイテムを識別するために、この**Id**を使用することが良いです。
:::

アプリケーションをデプロイするときは、上記の設定の2つのリダイレクトURLが正しいドメイン、顧客、またはサンドボックスを指していることを確認する必要があります。そして最も重要なことは、デプロイされたWebhook関数URLを**Stripe**に提供する必要があります。まず、デプロイされたアプリのクラウドサービスのエンドポイントを見つける必要があります。**Cloud Services**サイドバータブに移動し、**Manage cloud service**を選択します。

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/cs-manage-1.png)

</div>

これにより、次のポップアップが表示されます。ここで探しているのは**Endpoint** URLです。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/cs-manage-2.png)

</div>

次に、エンドポイントURL（上記のダイアログでエンドポイントの値を置き換える）を使用して、**Webhook**関数のエンドポイントが次のようになります：

```bash
https://backend.noodl.cloud/xyz/123/functions/stripe-webhook
```

このURLを手に入れたら、[Stripe Dashboard](https://dashboard.stripe.com/test/webhooks/create)にアクセスして、新しいWebhookエンドポイントを追加してください。また、関心のあるイベントをStripeに伝える必要があります。一回限りの支払いの場合は、次のイベントのみが必要です：

- `checkout.session.completed` これは**Checkout**タブの下にあります。

## 顧客IDの保存

今のところ、**Stripe**はチェックアウトセッションごとに新しい顧客を作成しますが、これは機能しますが、Stripeダッシュボードに多くの顧客が作成され、ユーザーが新しい購入を行うたびにクレジットカードの詳細を入力する必要があります。これを避けるために、**Stripe**からの**Customer Id**をアプリデータベースに保存し、後のチェックアウトで同じ顧客であることを**Stripe**に知らせることができます。この場合、顧客は**User**にマッピングされるため、**User**レコードに**stripeCustomerId**という新しいプロパティを作成し、**String**タイプ

を持たせます。

その後、**stripe-webhook**クラウド関数で、**Payment Completed**シグナルと共に受信した`Customer Id`をユーザーレコード（**Payment Owner Id**を使用してチェックアウトプロセスを開始したときに使用したユーザーを指す）に保存するように接続します。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/stripe-webhook-3.png)

</div>

これで、新しいチェックアウトセッションを開始するときに、ユーザーが1回購入を行った後に**stripeCustomerId**プロパティを使用できるようになりました。**Buy Products**アクションを開始するところにこれらの接続を追加してください。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/customer-id-connect.png)

</div>

`Customer Name`と`Customer Email`も提供することができます。その場合、それらはチェックアウトセッションのフォームに事前に入力されます。これを接続した後、新しいフローを2回試して、2回目には詳細が保持されていることがわかります。

## サブスクリプション

このプリファブを使用して、ユーザーにサブスクリプションまたはプランを提供するアプリケーションを構築することもできます。これは上記の一回限りの支払いと非常に似ているため、ここでは詳細には触れませんので、一回限りの支払いのすべてのステップを完了していることを確認してください。

一回限りの支払いと同様に、製品を設定し、製品に価格を設定する必要があります。定期的な価格を持つ製品は、プランタイプ（たとえば、Basic、Proなど）に対応し、製品にはいくつかの価格と請求期間があります。プランがない場合は、初期に`free`プランにいると想定します。したがって、プリファブを適切に機能させるためには、すべてのプランを含む`Plans`配列を初期化する必要があります。これは、例えばホームの`App`コンポーネントで行うことができます。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/init-plans.png)

</div>

配列は特定のスキーマに従う必要があります。これは、上記の関数ノードに入れることができる例です：

```javascript
Outputs.Items = [
  {
    Name: "Free",
    Desc: "Description",
    id: "free",
  },
  {
    ProductId: "xyz",
    Name: "Basic",
    Desc: "基本プランでは、A、B、Cの機能が提供されます。月額課金です。",
    id: "stripeからのこのプランの価格ID",
    Period: "month",
    Price: "$99",
    Details: [
      {
        Text: "共有ツール",
        InPlan: true,
      },
      {
        Text: "デザインツール",
        InPlan: true,
      },
      {
        Text: "プライベートメッセージ",
        InPlan: false,
      },
      // ... その他の詳細
    ],
  },
  // .... その他のプラン
];
```

`free`プロダクトが必要です（これが現在のサブスクリプションがない場合にデフォルトで表示されるプランです）。そして、各サブスクリプション製品と価格ごとに1つのエントリが必要です。プリファブは`month`と`year`の請求期間のフィルタリングをサポートしているので、配列のエントリにタグを付けることができます。いくつかの注意点：

- `Details`はプランの機能の配列です。これを提供すると、好きなように使用できる`Plan Picker`ビジュアルコンポーネントに表示されます。**Text**と**IsPlan**を提供できます。**IsPlan**は、この特定の機能がプランに含まれているかどうかを示すブール値です。

:::note
以下の例では、現在の**User**がサブスクリプションの所有者であると仮

定しますが、多くの場合、**Orginization**や**Team**など、別のレコードが該当する場合があります。以下と同じパターンを使用して別のレコードクラスを使用します。その場合、**Orginization**または**Team**が顧客となるため、そこに**stripeCustomerId**と**plan**を保存します。
:::

まず、現在のプランを表示するための便利な小さなビジュアルコンポーネントを使用しましょう。それは`Current Plan Badge`と呼ばれ、フロントエンドの`Stripe/Subscriptions`フォルダにあります。現在のプランを表示するページにこのバッジを配置し、以下に示すように接続します。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/current-plan-badge-1.png)

</div>

このコンポーネントから送信されるいくつかの重要なシグナルがあります。

- **Upgrade** ユーザーがアップグレードボタンをクリックすると、このシグナルが送信されます。この場合、アップグレードできるすべてのプランを表示する新しいページにナビゲートします。後で詳しく説明します。
- **Plan Canceled** プランがキャンセルされた場合、このシグナルが送信されます。
- **Plan Renewed** プランが更新された場合、このシグナルが送信されます。
- **Failure** 操作が失敗した場合、このシグナルが送信されます。エラーは**Error**出力で見つけることができます。

これがその見た目です：

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/current-plan-badge-2.png)

</div>

しかし、新しいユーザーの場合、プランがないため、無料プランが表示され、アップグレードを求められます。この例では、すべてのオプションを表示する新しいページにナビゲートします。

## プランの購入

プランの購入には、フロントエンドにある`Stripe/Subscriptions/Plan Picker`という便利なビジュアルコンポーネントを使用することができます。それをページに配置し、以下に示すように接続します：

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/plan-picker-1.png)

</div>

重要なのは、以前と同様に**stripeCustomerId**を接続することです。これにより、コンポーネントは現在のプランを取得し、チェックアウトプロセスで**Stripe**に顧客情報を保存することを許可します。さらに、**Owner Id**入力を介してサブスクリプションの所有者IDを提供する必要があります。この場合、**User**レコードをサブスクリプションの所有者として使用しています。これにより、次のような結果が得られます：

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/plan-picker-2.png)

</div>

**Upgrade**ボタンがクリックされると、ユーザーは一回限りの支払いと同様に**Stripe**のチェックアウトフローにリダイレクトされ、同じプロセスを使用してアプリケーションにリダイレクトされます。

## サブスクリプションの履行

一回限りの支払いと同様に、サブスクリプションに変更があると、**Stripe**は**Webhook**を使用して私たちに警告します。今回は、`Stripe/Events/Process Stripe Subscription Event`コンポーネントを使用します。このコンポーネントは、重要なイベント、つまりサブスクリプションが開始されたとき、更新されたとき、または削除されたときにシグナルを発します。

まず、**User**レコードに新しいプロパティを作成します。それを`plan`

と呼び、**String**タイプを与えます。このプロパティには、現在のプランを保存します。これにより、アプリケーションでどの機能が利用可能かを決定することができます。現在のプランを購読しているユーザーに対応する機能を提供するために、現在のプランを追跡するために必要なすべてを次のように接続します。

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/stripe-webhook-4.png)

</div>

3つのシグナルを少し詳しく見てみましょう：

- **Subscription Created** これは、サブスクリプションが正常に購入されたときに発行されます。ここでは、**Subscription Owner Id**で指されるレコード（この場合は**User**レコード）に**Customer Id**を保存します。また、プランの**Product Id**も保存します。この**Id**をアプリのユーザーに使用して、アプリケーションでどの機能が利用可能かを決定することができます。
- **Subscription Updated** ユーザーがプランを更新した場合、ここで同じシグナルが発行されます。作成時と同じように、プランの**Product Id**を保存します。これにより、アプリケーションで対応する機能を提供することができます。
- **Subscription Deleted** 最後に、サブスクリプションが終了した場合、ここでシグナルが送信されます。ここでは、無料プランに戻す必要があります。これは、サブスクリプションの所有者（ユーザー）に対して**Set Record Properties**ノードを使用し、プランに`free`を指定することで行います。

<div className="ndl-image-with-background l">

![](/library/prefabs/stripe/stripe-webhook-5.png)

</div>

これで、サブスクリプションの購入と管理フローを構築するために必要なすべてが揃いました。

最後に注意しておきたいのは、デプロイされたWebhookをStripeに登録するとき（上記で説明したように、[Stripe Dashboard](https://dashboard.stripe.com/test/webhooks/create)で行います）、これらのイベントをリッスンするようにStripeに指定することです。これらは**Customer**セクションの下にあります：

- `customer.subscription.created`

- `customer.subscription.updated`

- `customer.subscription.deleted`

## 請求書

ユーザーがプランにサブスクライブし、請求を支払っている場合、請求書を表示し、領収書を収集する必要がある場合があります。**Stripe**に成功した請求書の支払い時に顧客にメールを送信させることができますが、アプリケーションの請求部分にリストを表示することも良いでしょう。これは、以下に示すように`Stripe/List Invoices`クラウド関数を使用して行うことができます：

<div className="ndl-image-with-background xl">

![](/library/prefabs/stripe/list-invoices.png)

</div>

前の手順で保存したはずの**Stripe Customer Id**を提供することを確認してください。返される配列には次のスキーマがあります：

```javascript
{
  id: "...";
  Status: "paid"; // 可能な請求書のステータスについてはStripeのドキュメントを確認してください
  ManageUrl: "https://..."; // 請求書を管理するためにユーザーをリダイレクトできるURL
  PdfUrl: "https://..."; // 請求書をPDFとしてダウンロードするためにユーザーをリダイレクトできるURL
  PeriodStart: "2022-12-08T14:38:50.000Z"; // 請求期間の開始
  PeriodEnd: "2022-12-08T14:38:50.000Z"; // 期間の終了
  AmountDue: 3500;
  AmountPaid: 3500;
  Currency: "usd";
}
```

このガイドを楽しんでいただけたことを願っています。そして、**Stripe**を使用してアプリに素晴らしい支払い機能を構築するためのツールがいくつか手に入ったことを願っています。