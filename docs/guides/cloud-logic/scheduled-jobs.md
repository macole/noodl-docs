---
title: スケジュールされたジョブ
hide_title: true
---

# スケジュールされたジョブ

クラウド関数にとって非常に便利なタスクの一つが、スケジュールされたジョブです。これは、15分ごと、1時間ごと、または毎日など、特定の間隔でクラウドで実行したいロジックです。これらのジョブは通常、アプリケーションの「バックグラウンド」で実行されるハウスキーピングタスクを処理します。

この例では、アプリケーションが実行されると多くのレコードがデータベースのクラスに作成され、不必要なデータストレージを使用しないように、48時間より古いレコードを削除したいとします。

## ジョブクラウド関数
まず、クラウドジョブを行うシンプルなクラウド関数を作成します。これを**Cleanup**と呼びましょう。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-1.png)

</div>

この関数には、48時間より古い**Photos**をすべて見つける小さなロジックフローを追加します。これは、[Query Records](/nodes/data/cloud-data/query-records)ノードと日付フィルターを使用し、小さな**Function**スニペットを介して比較したい日付**createdAt**を渡すことで行います。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-nodes-1.png)

</div>

比較する**Date**オブジェクトは以下のように計算されます（現在の日付から48時間戻します）。私たちは、この日付より小さい（以前の）**Photo**レコードをすべて欲しいのです。

```javascript
Outputs.FilterDate = new Date(Date.now() - 48*60*60*1000)
```

成功した場合、写真は[Run Tasks](/nodes/data/run-tasks)という便利なノードに渡されます。このノードは、それに供給された配列の各アイテムに対してロジックコンポーネントタスクを実行し、すべてが処理されたときに**Done**を報告します。ロジックコンポーネントを作成する必要があります。私はそれを**Delete Task**と呼び、クラウド関数の子コンポーネントとして追加しました。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-delete-0.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-delete-1.png)

</div>

**Delete Task**は非常にシンプルで、**Do**が送信されたときにトリガーされる[Delete Record](/nodes/data/cloud-data/delete-record)ノードを使用します。このシグナルは**Run Tasks**ノードによって送信されます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-delete-2.png)

</div>

**Run Tasks**ノードは、配列の各アイテム（削除したい各**Photo**）に対してタスクコンポーネント（**Delete Task**）のインスタンスを作成し、[Repeater](/nodes/ui-controls/repeater)ノードと同様に、**Delete Record**ノードが現在のレコードに対して操作を行うことを指定できます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-delete-3.png)

</div>

**Cleanup**クラウド関数に必要なもう一つのことは、**認証なし**で呼び出すことができるようにすることです。これについては後で少し戻ります。**Cleanup**クラウド関数の**Request**ノードがこのプロパティをチェックしていることを確認してください。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-noauth.png)

</div>

## テストとデプロイ

バックグラウンドジョブをテストする最も簡単な方法は、アプリケーションのUIから手動でトリガーすることです。アプリの管理パネルなどにどこかにボタンを追加し、単純に関数を実行します。これにより、デプロイする前にNoodlエディターで適切にテストしてデバッグできます。

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-test-1.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/cleanup-test-2.png)

</div>

好みに合うように動作したら、バックエンドにデプロイします。デプロイについての詳細は、この[ガイド](/docs/guides/cloud-logic/introduction#deploying)を参照してください。

## ジョブのスケジューリング

クラウド関数がデプロイされたら、私たちが望む間隔で実行されるようにスケジュールする必要があります。デプロイされたクラウド関数はNoodlの外部から

実行することができ、これは外部プロバイダーなどとの支払い処理などのタスクに非常に便利であり、クラウドジョブのスケジューリングにも非常に便利です。まず、クラウドサービスタブでクラウドサービスを見つけ、**クラウドサービスを管理**を探します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/bg-schedule-1.png)

</div>

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/bg-schedule-2.png)

</div>

これにより、選択したクラウドサービスに関する情報を表示するポップアップが開きます。私たちが探しているのは**エンドポイント**で、これはクラウドサービスにアクセスするために使用するHTTPアドレスです。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/bg-schedule-3.png)

</div>

エンドポイントは以下の形式を持ちます：

```
https://backend.noodl.cloud/xyz/123
```

エンドポイントを手に入れたら、クラウドジョブのスケジューリングを設定できます。HTTPコールのスケジューリングには幅広いツールがあり、私の絶対的なお気に入りは[cron-job.org](https://cron-job.org/)です。それはクリーンでシンプルで無料です。

アカウントを作成してサインインしたら、**Create Cronjob**ボタンを探します。

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/cron-1.png)

</div>

最初に、スケジュールしたいバックグラウンドジョブであるクラウド関数のエンドポイントを提供します。上記のエンドポイントを使用し、```/functions/{function-name}```を追加します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/cron-2.png)

</div>

:::note
一部のツールは大文字と小文字のURLを扱えないため、クラウド関数の名前には小文字のみを使用し、スペースやその他の特殊文字を使用しない方が良いかもしれません。
:::

次に、バックグラウンドジョブのスケジュール間隔を選択します：

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/cron-3.png)

</div>

:::note
タスクを頻繁にスケジュールしないでください。Noodlがホストするクラウドサービス（一般的に自己ホスティングも）では、クラウド関数が実行される時間量に応じて課金され、無料プランを使用していて多くのクラウド関数を実行すると、しばらくするとスロットルされ、アプリケーションのパフォーマンスが低下します。
:::

最後に、**Advanced**タブに移動して追加の設定を行います。主に、Noodlでクラウド関数を呼び出す方法として**POST**に**Request Method**を変更する必要があることです。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/cron-4.png)

</div>

それでおしまいです。**Test Run**ボタンを使用して関数をテストし、正常に実行されるはずです。それから、それを作成してください。

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/cron-5.png)

</div>

これで、クラウド関数がスケジュールされ、写真がキレイに整理されるのを見守るだけで済みます（またはバックグラウンドジョブで行うことを選択したもの）。

## セキュリティ

最後にセキュリティに関する注意点です。上記でクラウド関数を**認証なしのリクエストを許可**に設定しました。これは、誰でもこの関数をいつでも呼び出すことができることを意味します。これは、写真をもっと頻繁に剪定するだけなので、大きな問題ではありません。しかし、私たちの請求額を増やす可能性があります。そこで、呼び出しに必要な秘密キーを追加しましょう。

クラウド関数に**Secret**というパラメータを追加し、関数の始めにそれを検証する小さなロジックを追加します（好きな秘密を選べます）。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/scheduled-jobs/security-1.png)

</div>

この関数を呼び出すときに提供された秘密が一致しない場合は、エラーレスポンスを返送します。

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-logic/scheduled-jobs/security-2.png)

</div>

これにより、秘密を知らない限り、誰もあなたの関数を呼び出すことができなくなります（少な

くとも、可能性のある高額な作業を行うことはありません）。最後に、バックグラウンドジョブをスケジュールするときに同じ秘密を提供します。これは、[cron-job.org](https://cron-job.org/)の**Advanced**タブで行うことができます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/scheduled-jobs/security-3.png)

</div>

これで、スケジュールされたクラウドジョブが稼働しました。このように外部サービスからクラウド関数を呼び出すことは、Noodlを他のサービスと統合するための非常に便利なパターンであり、他のガイドでも繰り返し出現するパターンなので、知っておくと良いでしょう。