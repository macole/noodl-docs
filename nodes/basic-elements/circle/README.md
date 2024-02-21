---
hide_title: true
hide_table_of_contents: true
title: Circleノード
---

{/*##head##*/}

# Circle

このノードは、ビジュアルツリーに円（または円のセグメント）を配置します。幅広いデザインオプションを備えています。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/circle/circle_visual.png)

</div>

{/*##head##*/}

## 入力

| データ                                           | 説明                                                                                                                                                                          |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">サイズ</span>         | 円のサイズをピクセル単位で指定します。                                                                                                                                           |
| <span className="ndl-data">開始角度</span>       | 円のセグメントの開始角度を指定します。                                                                                                                                           |
| <span className="ndl-data">終了角度</span>       | 円のセグメントの終了角度を指定します。                                                                                                                                           |
| <span className="ndl-data">塗りつぶし</span>     | 円を塗りつぶすかどうかを指定します。                                                                                                                                             |
| <span className="ndl-data">塗りつぶし色</span>   | 塗りつぶし色を指定します。                                                                                                                                                     |
| <span className="ndl-data">ストローク</span>     | 円のストロークを有効にします。                                                                                                                                                    |
| <span className="ndl-data">ストローク幅</span>   | 円のストロークの幅を設定します。                                                                                                                                               |
| <span className="ndl-data">ストローク色</span>   | 円のストロークの色を設定します。                                                                                                                                               |
| <span className="ndl-data">ラインキャップ</span> | 円のストロークの端にどのようなキャップがあるかを指定します。<br/><br/>`Butt`: 円のストロークの端が直接切断された、丸くない形。<br/>`Round`: 円のストロークの端が丸い形。 |

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています:

-   [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#position)
-   [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [その他](/nodes/shared-props/inputs/visual-input-properties#other)
-   [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

多くのUIノードは、同じ出力を共有しています。[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)のドキュメントを参照してください。

このノードは、以下のプロパティをサポートしています:

-   [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [マウント](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [ポインタイベント](/nodes/shared-props/outputs/visual-output-properties#pointer-events)
-   [ホバーイベント](/nodes/shared-props/outputs/visual-output-properties#hover-events)
-   [その他](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>