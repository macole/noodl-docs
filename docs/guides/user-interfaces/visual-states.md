---
title: ビジュアルステート
hide_title: true
---

# ビジュアルステートの扱い方

## このガイドで学ぶこと

このガイドでは、ユーザーのインタラクションに基づいて**ビジュアルノード**を異なるスタイルで表示する方法を学びます。

## 概要

このガイドでは、以下のステップを順を追って説明します：

-   ボタンを作成する
-   その`ニュートラル`状態をスタイルする
-   `ホバー`状態で異なるスタイルを適用する

このガイドを通してのビデオもあります。

<iframe width="560" height="315" src="https://www.youtube.com/embed/ATyqeK_deu4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## さあ、始めましょう！

ビジュアルノードを扱う際、ユーザーのインタラクションに基づいてノードを異なるスタイルで表示したいという状況にしばしば遭遇します。例えば、ボタンにホバーした際に異なる背景色を表示したり、チェックボックスがチェックされたことを示したりする場合です。これは**ビジュアルステート**を使用して、**プロパティパネル**内のノード設定で行われます。

まず、ノードツリーでボタンを作成し、簡単にスタイリングしましょう。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/visual-states/node-created.png)

</div>

ブランドガイドラインによると、すべてのボタンはダークカラーで、角は丸くないことが指定されています。

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/visual-states/wrong-hover.gif)

</div>

OK、現在のところ良さそうですが、これをデザイナーの友人に送ったら、ボタンはニュートラル状態では良いが、ホバー時は全く違うと言われました。ボタンはプライマリーライトカラーであり、テキストはダークである必要があります。それを修正しましょう。ホバー状態を変更することで。

ボタンノードを選択したまま、ビジュアルステートセレクターに移動してホバーオプションをクリックします。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/visual-states/states.png)

</div>

プロパティパネルが少し変化します。インタラクション状態で変更する意味がないプロパティは、Noodlが隠してくれます。

ラベルと背景色のプロパティまでスクロールダウンして更新しましょう。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/visual-states/update-states.png)

</div>

これで、ブランドガイドラインに従っています。

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/visual-states/right-hover.gif)

</div>