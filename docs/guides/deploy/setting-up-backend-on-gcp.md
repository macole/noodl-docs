---
title: Google Cloud Platformでバックエンドを設定する
hide_title: true
---

# Google Cloud Platformでバックエンドを設定する

このガイドでは、NoodlバックエンドDockerイメージを使用してGCP上でNoodlバックエンドを開始する方法について説明します。GCPアカウントの設定が必要です。使用するサービスは**Cloud Run**と呼ばれています。そのサービスのコンソールから始めてください。

<div className="ndl-image-with-background m">

![](/docs/guides/deploy/using-an-external-backend/gcp-1.png)

</div>

そこで新しいサービスを作成できます。「サービスの作成」ボタンを見つけてください。

新しいサービスを設定する際には、NoodlバックエンドDockerイメージへのURLを提供する必要があります。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/gcp-2.png)

</div>

使用するイメージURLは以下の通りです：

```bash
gcr.io/noodlapp/noodl-self-hosted-cloud-services:latest
```

重要な設定の一つは、新しいサービスが認証されていないリクエストを処理できるようにすることです。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/gcp-3.png)

</div>

ほとんどの部分では標準の設定をそのまま使用できますが、いくつか変更する必要があります。これらは**コンテナ、接続、セキュリティ**セクションを展開することで見つけることができます。

* **コンテナポート** アプリケーションのポートは**3000**に設定する必要があります。

インスタンスにいくつかの環境変数を提供する必要があります。これは**+ 変数を追加**ボタンを使用して行います。

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/gcp-4.png)

</div>

次の変数が必要です：

* **APP_ID** これは自分で選ぶことができ、Noodlエディターでバックエンドに接続する際に提供する必要があります。
* **MASTER_KEY** これは、安全に保管する必要があるパスワードです。このパスワードでバックエンドに完全なアクセスが可能になり、Noodlからバックエンドに接続する際にも必要です。
* **DATABASE_URI** これは、前のステップで設定したMongoDBデータベースのURIです。PostgresのURIでも構いません。

* **PUBLIC_SERVER_URL**（オプション）ファイルのアップロードとダウンロードをサポートしたい場合は、この環境変数が必要です。その場合、次のステップでURLを受け取った後、ここに戻ってこの環境変数を更新する必要があるかもしれません。この変数は、`https://`で始まるクラウドサービスが到達可能な公開URLである必要があります。

これで新しいサービスを作成する準備が整いました。**作成**ボタンをクリックしてください。

サービスが稼働し始めたら、最後のステップはサービスのURLを見つけることです。サービスの詳細ページに移動することで見つけることができます。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/gcp-5.png)

</div>

そのURL、マスターキー、およびアプリIDを手に、[セルフホスティングガイド](/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend)に戻ります。

# ファイルストレージ

ファイルのアップロードとダウンロードをサポートする場合は、上記で指摘したように**PUBLIC_SERVER_URL**環境変数を指定する必要があります。デフォルトでは、ファイルはアプリケーションのデータベースに保存されますが、代わりにGCSバケットをストレージとして使用する場合は、以下の環境変数を提供できます。

* **GCP_PROJECT_ID** Google Developer’s ConsoleのプロジェクトID。必須。
* **GCS_BUCKET** GCSバケットの名前。必須。
* **GCP_CLIENT_EMAIL** バケットへのアクセス権を持つサービスアカウントのクライアントメール。
* **GCP_PRIVATE_KEY** バケットへのアクセス権を持つサービスアカウントのクライアントメールに関連付けられた秘密鍵。
* **GCS_BUCKET_PREFIX**（オプション）指定された接頭辞をファイル名に追加してすべてのファイルを作成します。'folder/'のようにアプリのすべてのファイルをフォルダに入れるために使用できます。
* **GCS_DIRECT_ACCESS**（オプション）読み取りがGCSを直接行う

か、Parse Serverを通じてプロキシされるかどうか。デフォルト：false
