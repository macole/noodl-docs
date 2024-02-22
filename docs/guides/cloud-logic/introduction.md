---
title: クラウド関数入門
hide_title: true
---

# クラウド関数入門

Noodlの**クラウド関数**は、フロントエンドでビジネスロジックを構築するときに使用するのと同じ技術、つまりロジックとアクションノードをフローに接続し、必要に応じてJavaScriptを注入することで、クラウドで実行されるロジックを作成する方法です。

**クラウド関数**はプロジェクトの別のコンポーネントに過ぎませんが、フロントエンドコンポーネントの中には存在しません。代わりに**クラウド関数**タブで見つけることができます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/introduction/cloud-functions-tab.png)

</div>

新しい**クラウド関数**コンポーネントを作成するには、サイドバーの**+**アイコンをクリックし、**クラウドコンポーネント関数**を選択します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/introduction/new-cloud-function.png)

</div>

クラウド関数に名前を付けて**作成**をクリックします。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/introduction/cloud-function-name.png)

</div>

また、フロントエンドと同じように**フォルダー**や**ロジックコンポーネント**を作成して、物事を整理し、機能を再利用可能なロジックコンポーネントに分割することができます。

## クラウド関数の構造

新しい**クラウド関数**を作成すると、[Request](/nodes/cloud-functions/request)と[Response](/nodes/cloud-functions/response)の2つのノードが骨格となります。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/introduction/cloud-function-empty.png)

</div>

まず**Request**ノードを詳しく見てみましょう。クラウド関数がクライアントから呼び出されると、ここからロジックフローが始まります。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/introduction/cloud-function-request.png)

</div>

ロジックフローは<span class="ndl-signal">Received</span>シグナルによって開始されます。したがって、クラウド関数に実行させたい最初のアクションは、このシグナルに接続するべきです。**Request**ノードには、いくつかの重要なプロパティもあります：

**Allow unauthenticated**。これは重要なプロパティです。デフォルトでは、すべてのクラウド関数はユーザーがログインしている必要があります。しかし、何らかの理由でユーザーなしで関数を呼び出せるようにしたい場合は、このプロパティをチェックできます。すべてのクラウド関数はデータベースへの完全なアクセス権を持っており、セキュリティ上の理由からクライアントで制限されている可能性のある操作を行うことができるため、注意が必要です。

**Parameters**。ここにはクラウド関数のパラメーターを追加します。これらは**Request**ノードの出力と、関数を呼び出すためにフロントエンドで使用する**クラウド関数**ノードの入力になります。

非常にシンプルな上記の例では、**Set User Properties**ノードを使用してユーザーのパスワードを設定していますが、これにはログインしたユーザーが必要です（そうでなければ**Set User Properties**ノードは機能しません）。新しいパスワードをパラメーターとして受け入れ、**Received**シグナルでアクションノードをトリガーします。

**クラウド関数**が完了すると、成功または失敗のいずれかでなければなりません。これは、2番目の重要なクラウド関数ノード、つまり**Response**ノードを使用して行われます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/introduction/cloud-function-response.png)

</div>

関数が完了すると、**Response**ノード上で**Send**シグナルを送信する必要があります。デフォルトでは、これにより結果パラメーターなしで関数の成功が完了します。失敗を送信する必要がある場合は、**Status**プロパティを**Failure**に変更し、エラーメッセージを提供できます。

クライアントに結果を返す必要がある場合は、**Response**ノードのプロパティで結果**Parameters**を指定し、適切な接続を行います。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/introduction/cloud-function-results.png)

</div>

## クラウド関数の呼び出し

**クラウド関数**が配置されたら、フロントエンドから呼び出す必要があります。これは[Cloud Function](/nodes/data/cloud-data/cloud-function)ノードを使用して行います。最初

に、ノードのプロパティでドロップダウンを使用して呼び出したいクラウド関数を選択します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/introduction/cloud-function-call-props.png)

</div>

次に、ノードを接続できます。<span class="ndl-signal">Call</span>シグナル入力にシグナルを送信することで、関数を呼び出します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-logic/introduction/cloud-function-call.png)

</div>

選択したクラウド関数の**Request**ノードにパラメーターがある場合、それらは**クラウド関数**ノードの入力として表示されます。**Response**ノードの結果パラメーターも同様です。

クラウド関数の実行が完了すると、<span class="ndl-signal">Success</span>または<span class="ndl-signal">Failure</span>シグナルのいずれかになります。

## デプロイ

これがクラウド関数の基本です。このセクションのガイドを読み進めて、詳細やさまざまな使用例について学んでください。最終的にアプリケーションをデプロイしたいと思うでしょうが、クラウド関数が適切に機能するためには、デプロイ時にクラウドサービスが選択されていることを確認する必要があります。