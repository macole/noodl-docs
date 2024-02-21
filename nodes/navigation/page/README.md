---
hide_title: true
hide_table_of_contents: true
title: Pageノード
---

{/*##head##*/}

# Pageノード

**Page**ノードは、[Page Router](/nodes/navigation/page-router)を使用してウェブタイプのナビゲーションを作成する際の基本的な構成要素です。

:::note

**Page**ノードはノードピッカーから作成することはできず、コンポーネントリストで新しい**Page**を追加することでのみ作成できます。

:::

**Pages**は通常、**Page**にパラメータを提供できるように[Page Inputs](/nodes/navigation/page-inputs)ノードと一緒に使用されます。

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/create-page.png)

</div>

{/*##head##*/}

## 入力

| データ                                       | 説明                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">タイトル</span>    | {/*##input:title##*/}このプロパティは**Page**のタイトルを制御します。つまり、**Page**がアクティブなときにブラウザウィンドウのタイトルが表示する内容です。{/*##input##*/}                                                                                                    |
| <span className="ndl-data">URLパス</span> | {/*##input:urlPath##*/}このプロパティは、[Page Router](/nodes/navigation/page-router)に対するこの**Page**のURLルートを制御します。{/*##input##*/} ルーティングの仕組みについては、[Page Router](/nodes/navigation/page-router)のドキュメントを参照してください。 |

このノードは以下の[Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/)をサポートしています：

-   [Padding](/nodes/shared-props/inputs/visual-input-properties#padding)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

### Visual

このノードは以下の[Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/)をサポートしています：

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>