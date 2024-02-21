---
hide_title: true
hide_table_of_contents: true
title: Textノード
---

{/*##head##*/}

# Text

このノードは、ビジュアルツリーにテキスト要素を配置します。単語1つからテキストの段落まで、幅広く使用できます。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/text/text_visual.png)

</div>

<span className="ndl-node">Text</span>ノードは、フォントファミリー、色、サイズなどでスタイリングできます。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/text/text_node.png)

</div>

{/*##head##*/}

## 入力

| データ                                         | 説明                                                                                                                                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">テキスト</span>       | 表示するテキスト文字列。                                                                                                                                                                    |
| <span className="ndl-data">テキスト配置</span>   | Textノードのバウンディングボックス内でのテキスト文字列の配置。                                                                                                                              |
| <span className="ndl-data">単語の折り返し</span> | 行の折り返しが許される場所を制御します。<br/><br/> `Normal`: スペースやその他の空白文字で折り返す <br/>`Break All`: 単語の内部を含む任意の2文字の間で行の折り返しを許可する                                 |

### ビジュアル

Textノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)を特徴としています。

-   [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [寸法](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [テキストスタイル](/nodes/shared-props/inputs/visual-input-properties#text-styles)
-   [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#-position)
-   [その他](/nodes/shared-props/inputs/visual-input-properties#other)
-   [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

多くのUIノードは同じ出力を共有しています。[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)のドキュメントを参照してください。

このノードは、以下の出力をサポートしています:

-   [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [マウント](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [ポインタイベント](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
-   [ホバーイベント](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
-   [その他](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>