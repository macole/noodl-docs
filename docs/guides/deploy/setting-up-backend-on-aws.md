---
title: Amazon Web Servicesでバックエンドを設定する
hide_title: true
---

# Amazon Web Servicesでバックエンドを設定する

このガイドでは、NoodlバックエンドDockerイメージを使用してAWS上でNoodlバックエンドを開始する方法について説明します。AWSアカウントの設定が必要です。使用するサービスは**App Runner**と呼ばれています。そのサービスのコンソールから始めてください。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-1.png)

</div>

そこで新しいサービスを作成できます。

<div className="ndl-image-with-background m">

![](/docs/guides/deploy/using-an-external-backend/aws-2.png)

</div>

新しいサービスを設定する際、イメージがコンテナレジストリから取得されることを指定する必要があります。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-3.png)

</div>

使用するイメージURLは以下の通りです：

```bash
public.ecr.aws/noodl/noodl-self-hosted-cloud-services:latest
```

インスタンスの再デプロイを手動で制御するかどうかを選択できます。これは、Noodlバックエンドイメージが更新され、サービスに更新を適用したい場合に必要です。自動的に変更を追跡することも選択できます。完了したら**次へ**をクリックします。

次の画面で、サービスに**名前**を付け、サービスの設定を変更できます。ほとんどの部分では標準の設定をそのまま使用できますが、いくつか変更する必要があります。

- **ポート** アプリケーションのポートは**3000**に設定する必要があります。

インスタンスにいくつかの環境変数を提供する必要があります。これは**環境変数を追加**ボタンを使用して行います。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-4.png)

</div>

次の変数が必要です：

- **APP_ID** これは自分で選ぶことができ、Noodlエディターでバックエンドに接続する際に提供する必要があります。
- **MASTER_KEY** これは、安全に保管する必要があるパスワードです。このパスワードでバックエンドに完全なアクセスが可能になり、Noodlからバックエンドに接続する際にも必要です。
- **DATABASE_URI** これは、前のステップで設定したMongoDBデータベースのURLです。PostgresのURLでも構いません。

- **PUBLIC_SERVER_URL**（オプション）ファイルのアップロードとダウンロードをサポートしたい場合は、この環境変数が必要です。その場合、次のステップでURLを受け取った後、ここに戻ってこの環境変数を更新する必要があるかもしれません。この変数は、`https://`で始まるクラウドサービスが到達可能な公開URLである必要があります。

これで設定を確認し、サービスをデプロイする準備が整いました。新しいサービスの完全なセットアップには数分かかる場合があります。

サービスが稼働し始めたら、最後のステップはサービスのURLを見つけることです。サービスの詳細ページに移動すると、以下のように表示されます：

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/aws-5.png)

</div>

そのURL、マスターキー、およびアプリIDを手に、[セルフホスティングガイド](/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend)に戻ります。

# ファイルストレージ

ファイルのアップロードとダウンロードをサポートする場合は、上記で指摘したように**PUBLIC_SERVER_URL**環境変数を指定する必要があります。デフォルトでは、ファイルはアプリケーションのデータベースに保存されますが、代わりにS3バケットをストレージとして使用する場合は、バケットとポリシーを作成する必要があります。その手順は[こちら](http://docs.parseplatform.org/parse-server/guide/#configuring-s3adapter)で見つけることができます。次に、これらの追加の環境変数を指定します：

- **S3_ACCESS_KEY** 必要な権限を持つユーザーのAWSアクセスキー。必須。
- **S3_SECRET_KEY** ユーザーのAWSシークレットキー。必須。
- **S3_BUCKET** S3バケットの名前。S3全体でグローバルに一意である必要があります。必須。
- **S3_REGION**（オプション）接続するAWSリージョン。デフォルト：「us-east-1」
-

 **S3_BUCKET_PREFIX**（オプション）指定された接頭辞をファイル名に追加してすべてのファイルを作成します。'folder/'のようにアプリのすべてのファイルをフォルダに入れるために使用できます。
- **S3_DIRECT_ACCESS**（オプション）読み取りがS3を直接行うか、Parse Serverを通じてプロキシされるかどうか。trueに設定すると、ファイルは公開アクセス可能になり、読み取りはプロキシされません。デフォルト：false
