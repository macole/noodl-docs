---
hide_title: true
hide_table_of_contents: true
title: Imageノード
---

{/*##head##*/}

# Image

このノードは、ビジュアルツリーに画像を配置します。幅広いデザインオプションとブレンドモードを特徴としています。

<span className="ndl-data">ソース</span>はURLまたはファイルから設定できます。コンピュータから画像をドラッグしてNoodlにドロップすると、プロジェクトフォルダに追加され、<span className="ndl-node">Image</span>ノードのプロパティパネルで<span className="ndl-data">ソース</span>として選択できるようになります。

{/*##head##*/}

## 入力

| データ                                         | 説明                                                                                                                                                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">ソース</span>     | 画像ソースパス。プロジェクト内の画像を選択するか、アクセス可能な有効なURLを指定します。                                                                                                                                     |
| <span className="ndl-data">ソースセット</span> | 異なる解像度に対して異なる画像ソースを指定し、よりレスポンシブにするためのプロパティです。[こちら](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)で詳しく学ぶことができます。 |

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています:

-   [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [寸法](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#-position)
-   [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
-   [ボーダースタイル](/nodes/shared-props/inputs/visual-input-properties#border-style)
-   [コーナーの半径](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
-   [ボックスシャドウ](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [寸法制約](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
-   [その他](/nodes/shared-props/inputs/visual-input-properties#other)
-   [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

多くのUIノードは同じ出力を共有しています。[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)のドキュメントを参照してください。

このノードは、以下のプロパティをサポートしています:

-   [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [マウント](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [ポインタイベント](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
-   [ホバーイベント](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
-   [その他](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>