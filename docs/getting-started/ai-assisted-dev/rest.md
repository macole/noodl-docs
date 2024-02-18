---
title: REST APIコール
hide_title: true
---

# Chat GPTを使ったREST APIコールの作成

Noodlでは、外部サービスにアクセスするためにREST APIリクエストを行うために通常[REST](/nodes/data/rest)ノードを使用します。これにはリクエストの設定とレスポンスの解析に少しコーディングが必要です。また、使用したいAPIの動作を理解し、文書を読むための知識も少し必要です。

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/rest-node.png)

</div>

上記の例は、非自明なREST APIリクエストです。Wikipediaのページ名を取り、指定されたサイズでそのページのメインイメージを取得します。これを理解するのには私も少し時間がかかりますし、かなり退屈で興味のない作業です。[REST](/nodes/data/rest)ノードには4つの重要な部分が必要です：

* **エンドポイント** REST APIのHTTPエンドポイント。
* **メソッド** APIコールのメソッド、例えば`POST`や`GET`。
* **リクエストスクリプト** ノードの入力を元に、REST APIコールに渡すすべてのパラメーターと内容を設定するJavaScriptコードの一部です。
* **レスポンススクリプト** 受け取ったレスポンスを解析し、それをノードの出力に変換する別のJavaScriptスニペットです。

<div class="ndl-image-with-background l">

![](/docs/getting-started/ai-assisted-dev/rest/screenshot.png)

</div>

NoodlでAIアシスト開発を使ってこれを達成する方法を見てみましょう。

## RESTノードスクリプトのためのプライミング

GPT-4を搭載したChatGPTを使用します。鍵となるのは、単一のプロンプトからRESTノードが動作するために必要なすべての内容を生成させることです。これを行うためには、まずAIにコンテキストを提供する必要があります。これがNoodlと上手く連携する鍵です。これを_プライマー_と呼び、[REST](/nodes/data/rest)ノード用に実験しているものがこちらです：

````markdown
こんにちはChatGPT。こちらがあなたの指示です。すべてに従ってください。

- NoodlのREST APIコールのためのJavaScript関数をNoodlで書いていきます。
- Noodl関数の入力は"Inputs.InputName"の形式に従います。
- Noodl関数の入力は読み取りのみで、書き込まれることはありません。
- Noodl関数の出力は"Outputs.OutputName = value"の形式に従います。
- Noodl関数の変数は出力を格納しません。
- Noodl関数の入力と出力はグローバルです。
- Noodl関数はimport文を使用しません。
- Noodl関数はexport文を使用しません。
- 定数をNoodl関数の入力として定義します。
- REST APIリクエストを準備する関数と、レスポンスを処理する関数の2つを作成する必要があります。
- リクエストを準備する関数には次の形式があります。これは"リクエストスクリプト"と呼ばれます。関数にラップする必要はなく、JavaScriptコードだけです。

```js
// すべてのRESTオプションは次のようにRequestオブジェクトに設定されるべきです
// APIコールに必要なヘッダーをheadersオブジェクトに入れます
// content-typeをapplication/jsonに設定する必要はありません。これは自動的に行われます
Request.headers['authorization'] = "Bearer " + Inputs.APIKey;

// APIコールに必要なクエリパラメーターをparametersオブジェクトに入れます
Request.parameters['limit'] = Inputs.NumberOfItems;

// POSTメソッドリクエストを行う場合、内容をcontentオブジェクトに入れます
// 文字列化する必要はありません。標準のJSONオブジェクトのみ
Request.content = {
    'param' : 'something'
}
```

- REST APIリクエストの結果を解析する関数には次の形式があります。これは"レスポンススクリプト"と呼ばれます。関数にラップする必要はなく、JavaScriptコードだけです。

```js
// レスポンスの内容はResponse.contentオブジェクトにあります
Outputs.Results = Response.content.results;

```

- 最後に、次の形式でエンドポイントとHTTPメソッドをリストします。エンドポイントには{paramName}構文を使用してパラメーターを含めることができます。

エンドポイント: https://example-endpoint.com/{userId}/fetch
メソッド: POST

指示が明確であれば"Okidoki"と返信し、そうでなければ明確にしてください
````

このプライマーをChatGPT GPT-4にコピー＆ペーストし、次のプロンプトに続けて：

```
Wikipediaのページ

名を与えて、そのページのメイン画像を取得する
```

小さなロボットは、RESTノードを準備するために必要なすべてのものを提供してくれます。簡単な説明の後に、必要なリクエストとレスポンススクリプトを得ます：

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-1.png)

</div>

これらを単純にRESTノードの対応するプロパティにコピー＆ペーストします。次に、**エンドポイント**と**メソッド**がきちんとリストされています。これらのパラメータもRESTノードのプロパティにコピーします。ノードの入力の設定方法や出力の使用方法についても少し説明してくれます。

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-2.png)

</div>

これで、上記の例に示されたようにRESTノードを接続し、Wikipediaのページ名と画像のサイズを入力するだけで、画像ノードに接続できる結果のURLを取得できます。

## あなたの答えを洗練する

時には、正しい答えが返ってくるかもしれませんが、結果が正確に何であるかわからない場合があります。Noodlで接続してテストし、出力を表示して結果が期待に合っているかを確認することができます。または、単にChat GPTに尋ねることもできます。この例では、spotify APIの統合を作成するように依頼しました。プロンプトは：

```
spotify APIを使用してプレイリストの曲を取得する
```

RESTノードにコピー＆ペーストするために必要なすべてを提供してくれました。

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-3.png)

</div>

しかし、出力の内容が何であるか確信が持てなかったので、尋ねました：

```
songs出力のオブジェクトの形式は何ですか？
```

そして、いくつかの例とともに、オブジェクトの大まかな概要を教えてくれました。

入力や出力が気に入らなかったり、求めていたことを正確に行っていなかったりする場合は、より多くのコンテキストを提供して、コードの変更を依頼してみてください。

## コンテキストを提供する

ChatGPTモデルは2021年までのデータでトレーニングされているため、実際には自分自身のAPIなど、いくつかの最近のAPIが欠けています。しかし、コードを生成するように依頼するときにコンテキストを提供することができます。

```
このAPIを使用して https://platform.openai.com/docs/api-reference/chat/create 文字列の配列としてメッセージを提供し、レスポンスを取得したい
```

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-4.png)

</div>

素敵なコードを提供してくれますが、RESTノードにコピー＆ペーストしてテストすると、期待される結果が得られません。このケースでは、`undefined`の配列だけが返ってきます。それは奇妙です。ChatGPTはそれについてどう思うでしょうか。

```
undefinedの配列が返ってきました
```

問題を修正し、新しい更新された関数を提供してくれます。これはずっと良い動作をします。それはかなり驚異的です！

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-5.png)

</div>

時にはRESTコールが失敗してHTTPエラーを生成することがあります。エラーがRESTノードに表示されない場合は、ウェブデバッガーでエラーを見つけることができます。フロントエンドにいる場合は、トップバーのデバッグアイコンをクリックします：

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/debug-1.png)

</div>

クラウド関数にいる場合は、クラウド関数ランタイムのデバッガーを開きます：

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/debug-2.png)

</div>

デバッガーで**ネットワーク**タブを探します：

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/network.png)

</div>

失敗したコールは一般的に赤でハイライト表示されます。エンドポイントを見つけて、リクエストからのレスポンスを見ます。エラーメッセージを見つけて、ChatGPTにエラーを知らせて、それを修正してもらうように試みてください。

NoodlとAIアシスト開発で遊んで、Discordコミュニティで発見を教えてください！