---
hide_title: true
hide_table_of_contents: true
title: Buttonノード
---

{/*##head##*/}

# Button

このノードは、ビジュアルツリーにカスタマイズ可能なボタンを配置します。

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/button/button_visual.png)

</div>

ボタンには、アクションをトリガーするために使用できる<span className="ndl-signal">クリック</span>シグナルがあります。

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/button//button_node.png)

</div>
{/*##head##*/}

このコントロールには、アクセシビリティなどのすべてのロジックが含まれています。プロパティを介してスタイルを設定できます。
バリエーションを使用して、異なるタイプのボタンを作成します。

## 入力

ボタンは、有効入力を使用して有効/無効にすることができます：

@include "../../shared-props/inputs/_enabled.md"

ボタンノードには、設定できる一連のラベルプロパティがあります：

| データ                                             | 説明                                                                                                  |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">ラベルを有効にする</span>   | ラベルが表示されるかどうかを設定します。                                                                |
| <span className="ndl-data">テキストスタイル</span>     | このノードに既存のテキストスタイルを設定するか、現在のプロパティから新しいテキストスタイルを作成します。 |
| <span className="ndl-data">ラベル</span>             | ボタン上に表示されるテキスト文字列。                                                                    |

同様に、一連のアイコンプロパティがあります：

| データ                                           | 説明                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">アイコンを有効にする</span> | アイコンが表示されるかどうかを設定します。                                                               |
| <span className="ndl-data">タイプ</span>          | 事前定義された`アイコン`を使用するか、プロジェクトフォルダからカスタム`画像`を使用するかを設定します。   |
| <span className="ndl-data">ソース</span>         | アイコンを取得する場所。                                                                                 |
| <span className="ndl-data">スペーシング</span>    | テキストとアイコンの間隔。                                                                               |
| <span className="ndl-data">配置</span>           | アイコンが`ラベル`の`左`または`右`に配置されるかどうかを設定します。                                     |
| <span className="ndl-data">サイズ</span>          | アイコンの幅（`px`単位）。                                                                               |
| <span className="ndl-data">色</span>             | アイコンの色を設定します。_タイプ_が`アイコン`に設定されている場合にのみ表示されます。                    |

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています:

-   [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [パディング](/nodes/shared-props/inputs/visual-input-properties#padding)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [寸法](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#position)
-   [テキストスタイル](/nodes/shared-props/inputs/visual-input-properties#text-styles)
-   [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
-   [ボーダースタイル](/nodes/shared-props/inputs/visual-input-properties#border-style)
-   [コーナーの半径](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
-   [ボックスシャドウ](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [寸法制約](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
-   [その他](/nodes/shared-props/inputs/visual-input-properties#other)
-   [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

ボタンの主な出力は、クリック<span className="ndl-signal">シグナル</span>です：

| シグナル                                       | 説明                                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| <span className="ndl-signal">クリック</span>     | {/*##output:onClick##*/}ボタンがクリックされたときにこの出力でシグナルが送信されます。{/*##output##*/} |

また、より詳細な<span className="ndl-signal">シグナル</span>のセットも備えています：

@include "../../shared-props/outputs/_control-events.md"

### ステート

<span className="ndl-signal">シグナル</span>をトリガーするだけでなく、Buttonノードは<span className="ndl-data">データ</span>出力を通じてその状態も通知します：

@include "../../shared-props/outputs/_control-states.md"

### ビジュアル

このノードは、以下の[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties/)をサポートしています:

-   [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties

/#bounding-box)
-   [マウント](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [その他](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>