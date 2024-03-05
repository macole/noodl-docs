---
title: セルフホステッドバックエンドの使用
hide_title: true
---

# セルフホステッドバックエンドの使用

## このガイドで学べること

このガイドでは、外部データベースを使用してセルフホステッドバックエンドを作成する方法を説明します。これは、**Noodlクラウドサービス**を使用する代わりの方法です。これを行いたい理由は次のようなものがあります：

- データがどこに保存されているか、または他のプライバシー上の理由で、自分のデータベースをホストしたい場合。
- AWSやGoogle Cloud Platformなどのクラウドサービスで自分のバックエンドをホストしたい場合。

## 概要

次のステップを順に実行します。

- MongoDB Atlasでデータベースクラスタを設定します（MongoDBまたはPostgresデータベースがサポートされています）。
- NoodlバックエンドのDockerイメージを使用してコンテナを起動します。
- Noodlプロジェクトからセルフホステッドバックエンドに接続します。

## Noodlアプリの異なる部分

背景として、Noodlアプリが以下の三つの部分から構成されていることを知っておくと良いでしょう：

- **データベース** すべてのNoodlアプリケーションはデータベースをバックエンドとして必要とします。MongoDBまたはPostgres互換のデータベースを使用できます。ここにユーザーやその他のレコードが保存されます。**レコードのクエリ**のようなノードは、バックエンドのWebサービスを介してデータベースにアクセスします。

- **バックエンドサービス** これはDockerイメージを介して提供され、ほとんどのクラウドプロバイダーでインスタンスを起動できるNoodlバックエンドサービスです。Noodlバックエンドは、多くの重要な機能をサポートする活発な基盤を持つソリッドなオープンソースプロジェクトである[Parse Platform](https://parseplatform.org)をベースにしており、バックエンドサービスに適しています。

- **静的フロントエンドのホスティング** NoodlアプリケーションはSPA（シングルページアプリケーション）であり、アプリケーションのフロントエンドを提供する場所が必要です。Noodlからアプリケーションをデプロイすると、フロントエンドが作成されます。

このガイドでは、独自のセルフホステッド**データベース**と**バックエンド**の設定に焦点を当てます。

## データベース

MongoDBまたはPostgres互換の任意のデータベースを選択できます。このガイドでは、無料ティアが提供されており、GCP、AWS、またはAzureでホスティングすることを選択できる[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)の使用をお勧めします。バックエンドサービスと同じクラウドプロバイダーを使用して、できれば同じリージョンでデータベースをホストするようにしてください。

開始するのも非常に簡単です。アカウントを設定するための指示に従ってください。新しいデータベースを作成します。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/atlas-1.png)

</div>

無料プランを選択し（後でいつでもアップグレードできます）、データベースをホストしたいクラウドプロバイダーとリージョンを選択できます。次に、セットアップのセキュリティセクションが表示されます。これは、データベースにアクセスできる人を制御します。ユーザーを作成する必要はありません。デフォルトでは管理者ユーザーがありますが、データベースにアクセスできるIPアドレスを制限することを選択できますが、今は心配しないでください（後でいつでも編集できます）。**完了して閉じる**をクリックします。

データベースが稼働し始めたら、次のステップのために接続の詳細を取得する必要があります。まず、**管理者**ユーザーのパスワードを取得する必要があります。データベースユーザーは、**データベースアクセス**セクションで見つけることができます。

<div className="ndl-image-with-background m">

![](/docs/guides/deploy/using-an-external-backend/atlas-3.png)

</div>

**管理者**ユーザーを見つけて**編集**をクリックします。**パスワード**タブで**パスワードの編集**をクリックし、新しいパ

スワードを生成してコピーします。安全な場所に保管しておいてください。次のステップで必要になります。次に進む前に**ユーザーを更新**をクリックするのを忘れないでください。

次に、接続URIを見つける必要があります。クラスターダッシュボードで、_接続_を選択します。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/atlas-2.png)

</div>

その後、**アプリケーションに接続**を選択します。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/atlas-4.png)

</div>

バージョンが**3.6以降**であることを確認します。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/atlas-5.png)

</div>

次に、以下に示す接続URIをコピーして保管します。以下のような形になります：

```bash
mongodb+srv://Admin:<password>@cluster0.xxxxxxx.mongodb.net/?retryWrites=true&w=majority
```

`<password>`を前に生成した**管理者**のパスワードに置き換える必要があります。また、URLにデータベースの名前を挿入する必要があります。好きな名前を選べますが、`noodldb`としましょう。最終的なURLは以下のようになります：

```bash
mongodb+srv://Admin:<password>@cluster0.xxxxxxx.mongodb.net/noodldb?retryWrites=true&w=majority
```

このURIを保管しておくと、データベースへのフルアクセスが可能になります。

## バックエンドサービス

次に、アプリケーションを指すNoodlバックエンドサービスのインスタンスをデプロイします。Amazon Web ServicesまたはGoogle Cloud PlatformでNoodlを設定するためのガイドを提供しています。以下のリンクをフォローし、コンテナをセットアップしてください。準備ができたら、以下の**アプリケーションをセルフホステッドバックエンドに接続**に進んでください。

- **AWSでバックエンドを設定する** AWSアカウントを作成していることを確認し、[このガイド](/docs/guides/deploy/setting-up-backend-on-aws)に従ってください。

- **GCPでバックエンドを設定する** Google Cloud Platformでアカウントを作成していることを確認し、[このガイド](/docs/guides/deploy/setting-up-backend-on-gcp)に従ってください。

### アプリケーションをセルフホステッドバックエンドに接続する

これで、Noodlアプリケーションから新しいセルフホステッドバックエンドに接続できるようになります。プロジェクトを開きます。サイドバーの「クラウドサービス」アイコンを探します。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/cloud-services.png)

</div>

新しいクラウドサービスを作成するために、上部のプラスアイコンを探します。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/cloud-services-2.png)

</div>

新しいクラウドサービスを作成します。**セルフホステッド**のチェックボックスがオンになっていることを確認してください：

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/noodl-external-backend.png)

</div>

情報を入力します。

- **名前** - 任意の名前を付けます。これは、バックエンドのリストでのバックエンドの名前になります。
- **説明** - バックエンドの説明テキスト。
- **エンドポイント** - 前のステップで作成したバックエンドサービスのURLです。
- **アプリケーションID** - 前のステップでバックエンドサービスを設定する際に提供したアプリケーションIDです。これは自分で選んだ単なる識別子です。
- **マスターキー** - 前のステップで作成したバックエンドサービスのマスターキーです。エディターがダッシュボード、クエリノードなどのためにデータベースにアクセスするために必要です。これはローカルに保存され、暗号化されています。バックエンドとデータベースへのフルアクセスがあるため、これを安全に保管する必要があります。

いくつかの簡単なテストを行うことができます。例えば、**ダッシュボード**を開いて**クラス**を作成して、動作するか確認することができます。それで、セルフホステッドのNoodlクラウドサービスが稼働しています。

## Noodlクラウドサービスからの移行

Noodlクラウドサービスから移行する場合、新しいデータ

ベースに復元できるデータベースダンプを提供できます。[サポートにメールを送ってリクエスト](mailto:support@noodl.net)してください。バックアップファイルを手に入れたら、MongoDBデータベースツールをインストールする必要があります。指示は[こちら](https://www.mongodb.com/docs/database-tools/installation/installation/)で見つけることができます。

その後、以下のコマンドを使用してデータを移行します：

```bash
$ mongorestore --gzip --archive="path-to-backup-file" --uri="the-uri-to-your-mongodb-from-above"
```