---
hide_title: true
hide_table_of_contents: true
title: Component Inputsノード
---

{/*##head##*/}

# Component Inputs

このノードは、再利用可能なコンポーネントのための入力を作成するために使用されます。

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-inputs/ci_node.png)

</div>

<span className="ndl-node">Component Inputs</span>ノードは、コンポーネント内のノードの入力に接続される複数のポートを持つことができます。

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-inputs/ci_node2.png)

</div>

{/*##head##*/}

Noodlの非常に強力な機能の一つは、アプリケーション内で再利用可能なノードとして機能する**コンポーネント**を作成する能力です。

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-inputs/component-inputs.png)

</div>

コンポーネントの核となる概念は、組み込みのノードのように入力と出力を持つことができるということです。

コンポーネントの入力は**Component Inputs**ノードから始まり、コンポーネント内の任意のノードに接続されます。

**Component Inputs**ノードが作成されると、ポートは存在しません。ポートを追加するには、ノードを検査（左クリック）してから、**+Port**ボタンをクリックします。
好きなようにポートを作成し、名前を付けることができます。

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-inputs/component-inputs-add.png)

</div>

単一のコンポーネントに複数の**Component Inputs**ノードを持つことができます。同じ名前のポートを持つ複数の**Component Inputs**ノードがある場合、それらは一つの入力に統合されます。対象ポートは同じか互換性のあるタイプを持っていることが重要です。そうでない場合、ポートはコンポーネントのインスタンスで表示されない可能性があります。

また、**+Group**ボタンを使用して、Component Inputsのグループを作成することもできます。特定のグループの入力は、コンポーネントインスタンスノードのプロパティでヘッダとして持つことになります。