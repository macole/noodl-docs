---
hide_title: true
hide_table_of_contents: true
title: Component Outputsノード
---

{/*##head##*/}

# Component Outputsノード

このノードは、再利用可能なコンポーネントの出力を作成するために使用されます。

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-outputs/co_node1.png)

</div>

<span className="ndl-node">Component Output</span>ノードは、必要なだけ多くのポートを持つことができ、カスタムコンポーネント上でノードからの出力プロパティを利用可能にします。

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-outputs/co_node2.png)

</div>

{/*##head##*/}

Noodlの非常に強力な機能は、アプリケーションで再利用可能なノードとして機能する**コンポーネント**を作成する能力です。コンポーネントの核心的な概念は、内蔵ノードと同様に、入力と出力を持つことができるということです。

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-outputs/component-outputs.png)

</div>

コンポーネントの出力は**Component Outputs**ノードから派生し、コンポーネント内の他の任意のノードに接続されます。

**Component Outputs**ノードが作成されると、ポートは何もありません。ポートを追加するには、ノードを検査（左クリック）し、**+Port**ボタンをクリックする必要があります。必要に応じてポートを作成し、名前を付けることができます。

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-outputs/component-output-ports.png)

</div>

**Component Outputs**ノードに出力ポートを作成したら、コンポーネントノードグラフ内の任意のノードの任意のポートを**Component Outputs**に接続できます。これらの接続されたポートは、Noodlアプリケーションの他の場所でコンポーネントが使用されるときに、コンポーネントからの出力として利用可能になります。

1つのコンポーネントに複数の**Component Outputs**ノードを持つことができます。同じ名前のポートを持つ複数のノードがある場合、それらは1つの出力に統合されます。

**+Group**ボタンを使用してコンポーネント出力のグループを作成することもできます。リスト内で出力を上下にドラッグできます。グループのラベルは、コンポーネントインスタンスノードの接続パネルに表示されます。