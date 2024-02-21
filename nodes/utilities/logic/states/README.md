---
hide_title: true
hide_table_of_contents: true
title: Statesノード
---

{/*##head##*/}

# Statesノード

このノードは論理状態の切り替えに使用されます。各状態は値を保持し、その間で遷移することができます。必要なだけ多くの状態と値を定義できます。

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/states/states_visual.gif)

</div>

<span className="ndl-node">State</span>ノードは、ユーザーインタラクションに対するアニメーションの作成や状態マシンの作成によく使用されます。State Nodeガイドで詳細を学びましょう。

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/states/states_node.gif)

</div>

{/*##head##*/}

詳細を知るには、[Statesガイド](/docs/guides/user-interfaces/states)をご覧ください。

## 入力

| データ | 説明  |
| ------------------------------------------------- | ---------------------------------- |
| <span className="ndl-data">States</span>          | **States**ノードには必要なだけ多くの状態を追加できます。新しい状態を追加するにはプラスボタンをクリックします。                                                                                                          |
| <span className="ndl-data">Values</span>          | 各状態は独自の値セットを持ちます。追加された各状態に対してすべての値を設定する必要があります。                                                                                                               |
| <span className="ndl-data">State</span>           | {/*##input:state##*/}現在の状態を制御する入力です。この入力を利用可能な状態の名前と同じに設定すると、**State**ノードがその状態に変更されます。{/*##input##*/}                                 |
| <span className="ndl-data">Use Transitions</span> | {/*##input:useTransitions##*/}これを<span className="ndl-data">true</span>に設定すると、状態間の移動時に遷移が有効になり、<span className="ndl-data">false</span>に設定すると遷移が無効になります。{/*##input##*/} |

| シグナル   | 説明    |
| ------------------------------------------ | ------------------------------ |
| <span className="ndl-signal">Toggle</span> | {/*##input:toggle##*/}このシグナルをトリガーすると、**State**ノードが状態リストの次の状態に移動します。現在の状態が最後のものであれば最初の状態に戻ります。{/*##input##*/} |

### 値のタイプ

各値にはタイプを指定できます。デフォルトは**Number**です。

<div className="ndl-image-with-background">
    <img src="/nodes/animation/states-value-types.png" className="ndl-image small"></img>
</div>

### 状態の値

各状態には、その特定の状態で持つべき各値を指定できます。他のノードに接続することで、各状態の値を設定することもできます。

<span className="hidden-props-for-editor">{/*##input:.\*##*/}特定の状態のプロパティの値です。{/*##input##*/}</span>

<div className="ndl-image-with-background">
    <img src="/nodes/animation/state-values.png" className="ndl-image small"></img>
</div>

### 状態の遷移

目的の状態への遷移があるかどうかをここで指定します。指定した状態に切り替えると、時間をかけて滑らかに遷移します。各状態にはデフォルトの遷移と、**Number**および**Color**タイプの個別の遷移があります。カーブエディターを使用して、遷移のタイミングを指定します。

<div className="ndl-image-with-background">
    <img src="/guides/states/change-size-curve.gif" className="ndl-image med"></img>
</div>

詳細を知るには、[Statesガイド](/docs/guides/user-interfaces/states)をご覧ください。

### 状態へのアクション

各状態には、状態名に続く**To**というシグナル入力があります。これは、シグナルがトリガーされたときに状態ノードをその状態に移動させるために使用できるシグナルに接続することができます。

<span className="hidden-props-for-editor">{/*##input:to-\*##*/}この状態に移動するために**State**ノードをトリガーします。{/*##input##*/}</span>

## 出力

| データ                                     | 説明                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| <span className="ndl-data">State</span>  | {/*##output:state##*/}現在の状態の名前です。{/*##output##*/}                    |
| <span className="ndl-data">Values</span> | 現在の状態のすべての値と、アクティブな遷移がある場合のそれらの値。 |

<span className="hidden-props-for-editor">{/*##output:.\*##*/}現在の状態と遷移を考慮したプロパティの値です。{/*##output##*/}</span>

| シグナル                                                         | 説明                                                                                                                                                          |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">State Changed</span>              | {/*##output:stateChanged##*/}現在の状態が変更されたときに送信されるシグナルです。{/*##output##*/}                                                                        |
| <span className="ndl-signal">At `[State Name]`</span>          | 現在選択されている状態が`[State Name]`である場合にTrueです。例えば、_State_ノードに_Started_という状態があれば、_At Started_という出力シグナルがあります。 |
| <span className="ndl-signal">Has Reached `[State Name]`</span> | 状態`[State Name]`へのアニメーションが完了したときに送信されるシグナル。                                                                                            |

<span className="hidden-props-for-editor">{/*##output:at-\*##*/}この状態がアクティブである場合は<span className="ndl-data">true</span>、そうでない場合は<span className="ndl-data">false</span>の値です。{/*##output##*/}</span>
<span className="hidden-props-for-editor">{/*##output:reached-\*##*/}特定の状態に到達したときに送信されるシグナルです。{/*##output##*/}</span>