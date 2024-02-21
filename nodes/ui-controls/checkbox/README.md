---
hide_title: true
hide_table_of_contents: true
title: Checkboxノード
---

{/*##head##*/}

# Checkbox

このノードは、ビジュアルツリーにカスタマイズ可能なチェックボックスを配置します。

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/checkbox/checkbox_visual.png)

</div>

クリックされると状態が切り替わるチェックボックスは、<span className="ndl-data">変数</span>や<span className="ndl-data">オブジェクト</span>などのデータソースに<span className="ndl-data">チェック済み</span>プロパティを接続できます。

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/checkbox/checkbox_node.png)

</div>

{/*##head##*/}

このコントロールには、アクセシビリティなどのすべてのロジックが含まれています。プロパティを介してスタイリングすることも、ロジックのみを使用して独自のデザインシステムでチェックボックスコンポーネントを作成することもできます。

<div className="ndl-image-with-background s">

![](/nodes/ui-controls/checkbox/checkbox.gif)

</div>

## 入力

Checkboxノードの主な入力は<span className="ndl-data">チェック済み</span>入力です：

<div className="ndl-table-35-65">

| データ                                             | 説明                                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">チェック済み</span>       | {/*##input:checked##*/}"チェック済み"または"未チェック"状態を設定するブール値。これはチェックボックスの値であり、データソースに接続できます。{/*##input##*/} |
| <span className="ndl-data">背景色</span>           | {/*##input:backgroundColor##*/}"チェック済み"時の背景色。{/*##input##*/}                                                                                         |

</div>

有効入力を使用して有効/無効にすることができます：

<div className="ndl-table-35-65">

@include "../../shared-props/inputs/_enabled.md"

</div>

Checkboxノードには設定できる一連のラベルプロパティがあります：

<div className="ndl-table-35-65">

| データ                                             | 説明                                                                                                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">ラベルを有効にする</span> | ラベルが表示されるかどうかを設定します。                                                                 |
| <span className="ndl-data">テキストスタイル</span>   | このノードに既存のテキストスタイルを設定するか、現在のプロパティから新しいテキストスタイルを作成します。 |
| <span className="ndl-data">ラベル</span>           | ボタン上に表示されるテキスト文字列。                                                                     |
| <span className="ndl-data">スペーシング</span>      | ラベルとチェックボックスの間隔。                                                                         |

</div>

同様に、一連のアイコンプロパティがあります：

<div className="ndl-table-35-65">

| データ                                           | 説明                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">アイコンを有効にする</span> | アイコンが表示されるかどうかを設定します。                                                               |
| <span className="ndl-data">タイプ</span>          | 事前定義された`アイコン`を使用するか、プロジェクトフォルダからカスタム`画像`を使用するかを設定します。   |
| <span className="ndl-data">ソース</span>         | アイコンを取得する場所。                                                                                 |
| <span className="ndl-data">配置</span>           | アイコンが`ラベル`の`左`または`右`に配置されるかどうかを設定します。                                     |
| <span className="ndl-data">サイズ</span>          | アイコンの幅（`px`単位）。                                                                               |
| <span className="ndl-data">色</span>             | アイコンの色を設定します。_タイプ_が`アイコン`に設定されている場合にのみ表示されます。                    |

</div>

<div className="ndl-table-35-65">

| シグナル                                         | 説明                                                                                                                         |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">チェックする</span>   | ユーザーがチェックボックスをチェックしたのと同じアクションを反映します。                                                     |
| <span className="ndl-signal">チェックを外す</span> | ユーザーがチェックボックスのチェックを外したのと同じアクションを反映します。                                                 |

</div>

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties/)をサポートしています:

- [マージン](/nodes/shared-props/inputs/visual-input-properties/#margin)
- [配置](/nodes/shared-props/inputs/visual-input-properties/#alignment)
- [寸法](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
- [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties/#-position)
- [スタイル](/nodes/shared-props/inputs/visual-input-properties/#style)
- [ボーダースタイル](/nodes/shared-props/inputs/visual-input-properties/#border-style)
- [コーナーの半径](/nodes/shared-props/inputs/visual-input-properties/#corner-radius)
- [ボックスシャドウ

](/nodes/shared-props/inputs/visual-input-properties/#box-shadow)
- [配置](/nodes/shared-props/inputs/visual-input-properties/#placement)
- [その他](/nodes/shared-props/inputs/visual-input-properties/#other)
- [高度なHTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## 出力

Checkboxノードの主な出力は<span className="ndl-data">チェック済み</span>出力です。

<div className="ndl-table-35-65">

| データ                                            | 説明                                                                                                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">チェック済み</span>     | {/*##output:checked##*/}このチェックボックスコントロールがチェックされている場合はtrue、そうでない場合はfalseのブール出力です。これは、チェックされたことを視覚的に表す独自のコンポーネントを使用する場合に便利です。{/*##output##*/} |

</div>

また、一連の<span className="ndl-signal">シグナル</span>が備わっています：

<div className="ndl-table-35-65">

@include "../../shared-props/outputs/_control-events.md"

</div>

### ステート

<span className="ndl-signal">シグナル</span>をトリガーするだけでなく、Checkboxノードは<span className="ndl-data">データ</span>出力を通じてその状態も通知します：

<div className="ndl-table-35-65">

@include "../../shared-props/outputs/_control-states.md"

</div>

### ビジュアル

このノードは、以下の[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties/)をサポートしています:

- [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
- [マウント](/nodes/shared-props/outputs/visual-output-properties/#mounted)
- [その他](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>