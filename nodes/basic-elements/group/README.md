---
hide_title: true
hide_table_of_contents: true
title: Groupノード
---

{/*##head##*/}

# Group

このノードはスタイル可能なコンテナです。他のビジュアルノードを内部にネストできます。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/group/group_visual.png)

</div>

<span className="ndl-node">Group</span>は、レイアウトを作成し、ビジュアルエレメントを配置する際に最も基本的なノードです。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/group/group_node.png)

</div>

{/*##head##*/}

**Group**ノードは通常、子をスタックする（デフォルト）ために使用されますが、ビジュアルノードのグループにマージンやパディングを提供するために使用することもできます。**Group**ノードの詳細については、[レイアウトガイド](/docs/guides/user-interfaces/layout)をご覧ください。

## 入力

多くのUIノードは同じ入力を共有しています。[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)のドキュメントを参照してください。

このノードは、以下のプロパティをサポートしています:

- [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
- [パディング](/nodes/shared-props/inputs/visual-input-properties#padding)
- [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
- [寸法](/nodes/shared-props/inputs/visual-input-properties#dimensions)
- [レイアウト](/nodes/shared-props/inputs/visual-input-properties#layout)
- [コンテンツの整列と配置](/nodes/shared-props/inputs/visual-input-properties#align-and-justify-content)
- [スクロール](/nodes/shared-props/inputs/visual-input-properties#scroll)
- [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
- [ボーダースタイル](/nodes/shared-props/inputs/visual-input-properties#border-style)
- [コーナーの半径](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
- [ボックスシャドウ](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
- [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
- [寸法制約](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
- [フォーカス](/nodes/shared-props/inputs/visual-input-properties#focus)
- [その他](/nodes/shared-props/inputs/visual-input-properties#other)
- [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

多くのUIノードは同じ出力を共有しています。[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)のドキュメントを参照してください。

このノードは、以下のプロパティをサポートしています:

- [スクロール](/nodes/shared-props/outputs/visual-output-properties#scrolling)
- [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
- [マウント](/nodes/shared-props/outputs/visual-output-properties#mounted)
- [ポインタイベント](/nodes/shared-props/outputs/visual-output-properties#pointer-events)
- [ホバーイベント](/nodes/shared-props/outputs/visual-output-properties#hover-events)
- [フォーカス](/nodes/shared-props/outputs/visual-output-properties#focus)
- [その他](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>