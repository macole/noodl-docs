---
title: Figma Plugin
hide_title: true
---

# Figmaプラグイン

:::info
こちらからプラグインをダウンロードしてください: https://www.figma.com/community/plugin/1006908263044642341/Noodl
:::

Figmaユーザーであれば、Figmaドキュメントを使用してNoodl内でノードを作成することができます。

FigmaのレイヤーはNoodl内のノードにマッピングされ、複雑な形状は画像としてエクスポートされます。

Noodlプラグインは以下をエクスポートできます：

-   塗りつぶしまたはストロークが1つの円、長方形、線などの形状。これらは対応するNoodlノードにマッピングされます。
-   ベクターパスやブーリアン操作のような複雑な形状は画像としてエクスポートされます
-   テキストスタイル
-   位置とサイズは絶対レイアウトと固定寸法にマップされます
-   正しい順序と親/子関係を持つ、レイヤー階層全体。

現在、Noodlプラグインでは以下をエクスポートできません：

-   オートレイアウト
-   制約
-   プロトタイプのインタラクション

このガイドでは、FigmaコミュニティからのデザインリソースであるToni GemayelによるモバイルUIキットを使用しています：
https://www.figma.com/community/file/836596421863073964/Mobile-UI-kit

## レイヤーをエクスポートする

1. レイヤーを選択します
2. Noodlプラグインを開いて「エクスポート」をクリックします。Noodlが実行中でプロジェクトが開いていることを確認してください。
3. Noodlがフォーカスされます。Noodlノードをノード階層に配置してください。画像などのアセットは、プロジェクトディレクトリに自動的に配置されます。

<iframe width="560" height="315" style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/GsczhwfoyEE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

Figmaの楕円形が、正しいサイズ、画像アセット、枠線でNoodlの`Image`ノードにマッピングされたことに注意してください。

:::info
こちらは、異なるソースと境界線の半径でNoodl内で複製された同じノードです
:::

![](/docs/guides/user-interfaces/figma-plugin/image2.png ':class=img-size-l')

## テキストとテキストスタイルをエクスポートする

エクスポートされたテキストレイヤーが使用するすべてのテキストスタイルは自動的にインポートされます。

Figmaはシステムにインストールされているフォントを使用します。Noodlアプリでは、プロジェクトで必要なフォントファイルを定義する必要があります。[Google Fonts経由でフォントをインポートする](https://www.youtube.com/watch?v=lgMZZC6XoAs)か、[フォントファイル経由でインポートする](https://www.youtube.com/watch?v=P76v0Q38eKI)ことができます。

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/sZm0eBZvLaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

テキストスタイルがNoodlのスタイルタブに追加されたことに注意してください。![](/docs/guides/user-interfaces/figma-plugin/text-styles.png ':class=img-size-l')

## 複雑な形状をエクスポートする

Noodlの視覚ノードにマッピングされない複雑な形状、このベクターパスのようなものは、画像としてエクスポートされます。画像をエクスポートする解像度を指定するために「デフォルト画像サイズ」オプションを使用できます。

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/mqML1OL0SUk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

## より大きなレイヤー構造をエクスポートする

迅速に始めるために、全ページなどの全体構造をエクスポートすることができます。アプリケーションを構築するにつれて、コンポーネントを抽出し、静的レイアウトを動的レイアウトに置き換え、デザインをデータ駆動型にすることができます。

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/

5miB0PD4z9k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

:::info
一度にエクスポートされた別のページ
:::

![](/docs/guides/user-interfaces/figma-plugin/whole-page.png ':class=img-size-l')

## ワークフローに関する注意

ほとんどのアプリケーションは、Figmaで通常設計されるものよりも動的です。テキスト入力はインタラクティブであり、ラベルと値はデータ駆動型であり、リスト内のアイテムの数は固定されていません、グループにはパディングがあります、などです。これは、エクスポートされたノードにまだ行うべき作業があることを意味します。

-   **アプリケーション**: リストアイテム、ボタンなどの小さな部品をエクスポートし、Noodlで一つずつ構築します。全体構造は、しばしば再構築が必要になるため、エクスポートが難しいことがあります。

-   **プロトタイプ**: ページ全体を一つずつエクスポートし、Noodl内でナビゲーション構造を構築します。次に、動的でインタラクティブな要素が必要な部分を置き換え、レイアウトをより柔軟にする必要がある場所を調整します。