---
title: クラウドサービスの作成
hide_title: true
---

# プロジェクトのためのクラウドサービスの作成

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-backend/dashboard-1.png)

</div>

## このガイドで学べること

このガイドでは、Noodlプロジェクトのための**クラウドサービス**を作成するプロセスを説明します。クラウド**データベース**でアプリケーションのデータを取得および保存したい場合、または**クラウドファンクション**を実行およびデプロイしたい場合に**クラウドサービス**が必要になります。

### 概要

このガイドでは、以下のステップを説明します：

- クラウドサービスの作成
- プロジェクトのためのクラウドサービスの選択
- **ダッシュボード**を使用して**クラウドサービスデータベース**の調査
- 新しい**クラウドサービス**の作成と切り替え

## クラウドサービスとは何か、そしていつ必要か？

**クラウドサービス**は、Noodlアプリにデータとクラウド機能を提供するためにクラウドで実行されるソフトウェアの一部です。プロジェクトで**クラウドサービス**を使用する主な理由は、その**データベース**を使用することです。例えば、[Record](/nodes/data/cloud-data/record)や[Query Records](/nodes/data/cloud-data/query-records)ノードは、プロジェクトにアクティブな**クラウドサービス**がある場合にのみ使用できます。また、[クラウドファンクション](/docs/guides/cloud-logic/introduction)を実行するためにも必要です。

各**クラウドサービス**には専用のデータベースがあり、プロジェクトに複数の**クラウドサービス**を利用可能にしたい場合があります。例えば、テストデータ用と本番データ用に一つずつです。一度にアクティブにできる**クラウドサービス**は一つだけですが、プロジェクトをデプロイする際に使用するサービスを選択できます。

また、**クラウドサービス**はすべてのNoodlプロジェクトからアクセスできることに注意してください。

### クラウドサービスの作成

新しいクラウドサービスを追加するには、サイドバーの**クラウドサービス**タブアイコンをクリックします。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-backend/cloud-services-tab.png)

</div>

次に、サイドバーの上部にある**プラス**アイコンをクリックします。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-backend/cloud-services-add.png)

</div>

**Add Cloud Service**タブに移動します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-backend/add-cloud-service.png)

</div>

クラウドサービスに名前を付けます。例えば「My Cloud Service」とし、説明に「My cloud service for development」と入力します。各クラウドサービスが独自のデータベースを持つため、同じプロジェクトに複数のクラウドサービスを持つと良いかもしれません。これにより、データを混乱させても問題ない開発用のクラウドサービスと、本番用のクラウドサービスを持つことができます。

## アクティブなクラウドサービスの選択

これで、新しく作成したクラウドサービスをプロジェクトのアクティブなサービスとして選択できます。サイドバーで`Use in editor`をクリックします。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-a-backend/cloud-service-created.png)

</div>

これは、エディタで実行される際に、例えば[Query Records](/nodes/data/cloud-data/query-records)からのデータリクエストがこのクラウドサービスを使用することを意味します。

## ダッシュボードを使用してクラウドサービスの調査

これで、プロジェクトは**データベース**を持つ**クラウドサービス**に接続されました。データベースの概要を把握する最良の方法は、**ダッシュボード**を開くことです。クラウドサービスの`Open dashboard`ボタンをクリックして開きます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-backend/dashboard-1.png)

</div>

これで、`Browser`の下にあるメニューから**データベース**の内容を見ることができます。現在、データベースには`User`と`Role`の2つの_クラス_が含まれています。これらのクラ

スは自動的に作成されます。これらのクラスは、アプリ内でのログインと認証を管理するために使用されますが、このガイドではそれらについては扱いません。

### クラス

データベースの**クラス**は、同じタイプの**レコード**のコレクションです。他のデータベースでは、これらはしばしば**テーブル**や**コレクション**として参照されます。`User`クラスの場合、それにはユーザー名、メールアドレスなどのデータプロパティを持つ**ユーザーレコード**が含まれています。典型的なアプリには多くの異なるクラスがありますが、このガイドでは新しいクラスを作成しません。代わりに、今のところ**ダッシュボード**ウィンドウを閉じても構いません。

## 新しいクラウドサービスの作成と切り替え

上記と同じプロセスに従って2つ目のクラウドサービスを作成できます。例えば`Second cloud service`という名前と`My production service`という短い説明を付けます。これで、リストに2つ目のクラウドサービスがあり、`Use in editor`をクリックすることでエディタのアクティブなバックエンドにすることができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-backend/second-backend.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-a-backend/second-backend-2.png)

</div>

これで、2つのクラウドサービス間を自由に切り替えることができます。しかし、通常は一方を開発用、もう一方をデプロイ時に使用します。

## クラウドサービスを使用したデプロイ

アプリケーションをデプロイするときには、デプロイに使用するクラウドサービスを選択します。たとえば、開発またはテスト用のクラウドサービスを使用しているサンドボックスにテストデプロイを行い、本番用のクラウドサービスを使用してカスタムドメインに別のデプロイを行うことができます。