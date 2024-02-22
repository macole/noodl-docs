---
title: ロギングとデバッグ
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# ロギングとデバッグ

クラウド関数を構築する際には、エラーや問題を迅速に特定する方法を知っておくことが重要です。ここでロギングとデバッグが役立ちます。

## ローカルでの実行

Noodlエディターでアプリケーションを実行している場合、すべてのクラウド関数はローカルコンピューター上で実行されます。プロジェクトのアクティブなクラウドサービスにアクセスしており、デプロイされた場合と同様に動作します。クラウド関数のエラーを見つける最も簡単な方法は、関数がローカルで実行されている間にノードグラフ内のデータとシグナル接続を検査することです。

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/cloud-logic/logging/cf-inspect.mp4")}/>
</div>

単にクラウド関数タブを開き、検査したい関数を選択してから、アプリプレビューからトリガーします。グラフを通じてデータとシグナルの流れを見ることができ、フロントエンドコンポーネントと同様に、後で値を検査することができます。

時にはこれだけでは不十分で、**クラウドランタイムデバッガー**を開く必要があります。クラウド関数タブのサイドバーの上部から起動できます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/logging/open-debug.png)

</div>

これにより、フロントエンドをデバッグするときと同様のWebデバッガーが開きます。クラウド関数がローカルで実行されるとき、それらはWebランタイムで実行されるため、同じデバッグツールすべてにアクセスできます。特に、関数からのネットワーク呼び出しをデバッグしたり、コンソールへのロギングを行ったりすることができます。

上記の**クラウド関数を更新**ボタンも、エラーメッセージをクリアしてデータを検査し、関数をクリーンに実行したい場合に非常に便利です。

ローカルで実行している間に外部ツールからクラウド関数を呼び出したい場合は、ローカルのNoodlクラウド関数サーバーに直接アクセスすることでこれを行うことができます。

```bash
curl -X POST http://localhost:8577/functions/my-func -H 'Content-Type: application/json' -d '{"someParameter":"value"}'
```

これは、特にWebhookなどをローカルでテストする際に非常に便利です。

## ロギング

関数が期待通りに実行されていることを確認するためのもう1つの重要なツールはロギングであり、特にデプロイされたアプリケーションの問題を見つける際に重要です。ローカルで実行している場合、ログは**クラウドランタイムデバッガー**の**コンソール**タブで見つけることができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/logging/console-log.png)

</div>

クラウド関数からロギングを行うために使用できる関数は3つあります：

```javascript
// これらの2つは両方とも"info"の重大度としてメッセージをログに記録します
console.log('Some message')
console.info('Another message')

// これは"error"の重大度でログに記録され、
// 重要な問題のみに予約されるべきです。そうすることで、見つけやすくなります。
console.error("An error occured")
```

アプリケーションをデプロイした場合、ログはデプロイ先のクラウドサービスのダッシュボードで見つけることができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/logging/log-dashboard-info.png)

</div>

ログは、上記で使用したログ関数に応じて**info**と**error**に分けられます。より重大な問題にエラーを予約しておくと、それらを見つけやすくなります。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/logging/log-dashboard-error.png)

</div>