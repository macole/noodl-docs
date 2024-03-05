---
title: スタイルバリアント
hide_title: true
---

# スタイルバリアント

## このガイドで学ぶこと

アプリを構築する際、同じスタイリングを複数の場所で使用することが非常に一般的です。このガイドでは、スタイルを再利用する最も一般的な方法であるスタイルバリアント機能の使用方法について説明します。

## 概要

このガイドでは、以下のステップを順を追って説明します：

-   スタイルバリアントを作成する
-   オーバーライドとバリアントの違いを学ぶ
-   スタイルバリアントを編集する

このガイドを通してのビデオもあります。

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zFF8hoC-JM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## 早いけれど雑な方法

スタイルが施されたノードを単純にコピー＆ペーストすることもできますが、それにはいくつかのデメリットがあります。

まず、新しい場所にそれを含める必要があるたびに、ページやコンポーネントをすべて調べて、スタイルが施されたビジュアルノードを見つけなければなりません。

同様に、デザインを微調整する必要がある場合、すべてのページやコンポーネントを通じて、このコピーされたノードのすべてのインスタンスを手動で更新する必要があります。

再利用性と保守性を実現するためのより良い方法は、スタイルバリアントを使用することです。

## スタイルバリアントの作成

実際に試してみましょう。デザインシステムでは、メインアクションを示すための「プライマリー」ボタンと、もう少し控えめな「セカンダリー」ボタンがあります。これらを構築して、アプリで使用しましょう。

まず、ノードツリーでボタンを作成します。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/create-button.png)

</div>

左右のパディングをもう少し増やし、高さを高くし、角をより丸くします。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/button.png)

</div>

これで良さそうです。次に別のボタンを作成しましょう。

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/style-variants/second-button.png)

</div>

おっと、新しいボタンにはなぜ変更が反映されていないのでしょうか。これは、変更をバリアントとして保存していなかったため、これらはこの特定のボタンインスタンスに対するオーバーライドになったからです。

これを修正し、変更をバリアントとして保存して、再利用できるようにしましょう。

再スタイルが施されたボタンのプロパティパネルの上部にある「プラス」をクリックし、「新しいバリアントを作成」を選択し、名前を付けて確認します。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/style-variants/create-variant.png)

</div>

これにより、すべてのオーバーライドが現在のインスタンスから削除され、他の非オーバーライドされたプロパティとともに新しいバリアントとして保存されます。

これで、2番目のボタンを選択し、「プライマリー」バリアントを使用するように設定できます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/style-variants/set-variant.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/style-variants/styled-buttons.png)

</div>

## スタイルバリアントの編集

「プライマリー」ボタンを持つようになったので、次は「セカンダリー」バリアントを作成しましょう。

実演目的で、あなたが最も好きなワークフローを選べるように、別の方法をお見せします。この方法では、バリアントの編集方法もカバーされます。

「セカンダリー」バリアントは「プライマリー」に非常に似ているため、ボタンを作成し、「プライマリー」バリアントを使用するように設定します。この方法では、すでに行ったスタイリングを繰り返す必要がありません。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/style-variants/set-variant.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/style-variants/styled-buttons.png)

</div>

今回はスタイルをオーバーライドせず、す

ぐに新しいバリアントを作成し、「セカンダリー」と名付けます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/style-variants/new-variant.png)

![](/docs/guides/user-interfaces/style-variants/name-new-variant.png)

</div>

これで「セカンダリー」バリアントが「プライマリー」と同一のものができました。

すでにご存知のように、今プロパティを変更すると、それはオーバーライドとしてカウントされ、この特定のボタンノードインスタンスにのみ保存されます。したがって、バリアントではなくインスタンスを編集するために、「バリアントを編集」ボタンを押します。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/edit-variant.png)

</div>

プロパティパネルの境界線が役立つティールカラーに変わるのがわかります。これは、バリアントエディターであることを思い出すためです。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/helpful-teal.png)

</div>

このバリアントに「プライマリー」の色のテキスト、透明な背景、および「プライマリー」の色のボーダーを与えましょう。

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/style-variants/two-buttons.png)

</div>

「ビジュアルステート」のガイドで、デザイナーの友人からホバー状態のスタイルを忘れていたというフィードバックを受けたので、今回は彼らを喜ばせ、ホバースタイルを更新しましょう。背景を素敵な「プライマリーライト」色にしましょう。すべてのビジュアルステートはバリアントに紐付けられ、それに保存されます。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/visual-state.png)

</div>

バリアントを編集している間に行われたすべての変更は自動的に保存されるため、スタイリングが完了した今、他に何もする必要はありません。しかし、何らかの理由でインスタンスの編集に戻りたい場合は、「閉じる」ボタンをクリックしてバリアントエディターを終了できます。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/style-variants/close.png)

</div>

これで、アプリ全体に同一のボタンを配置でき、常にブランドガイドラインで定義されたスタイリングに従っていることを確認できます。また、ガイドラインが変更された場合、バリアントを簡単に編集して、アプリ全体でそれを更新できます。