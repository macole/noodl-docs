---
hide_title: true
hide_table_of_contents: true
title: Show Popupノード
---

{/*##head##*/}

# Show Popupノード

このノードは、ウィンドウ全体の上にモーダルポップアップとしてコンポーネントを表示するために使用されます。

<div className="ndl-image-with-background">

![](/nodes/popups/show-popup/show-popup-2.png)

</div>

<span className="ndl-node">Show Popup</span>ノードを使用すると、<span className="ndl-signal">Show</span>入力でシグナルされたときにポップアップされるコンポーネントを指定できます。指定されたコンポーネントが持つ任意の<span className="ndl-node">Component Inputs</span>は、<span className="ndl-node">Show Popup</span>ノードの入力として利用可能になります。

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-1.png)

</div>

{/*##head##*/}

[Close Popup](/nodes/popups/close-popup)ノードでポップアップが閉じられると、**Results**と**Close Actions**を介してシグナルと値を送り返すことが可能です。これらは、ターゲットポップアップコンポーネントが**Close Popup**ノードを含む場合、**Show Popup**ノードの出力として利用可能になります。

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-3.png)

</div>

## 入力

| データ                                     | 説明                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">ターゲット</span> | {/*##input:target##*/}クローンされてウィンドウ全体の上に配置されるコンポーネントです。**Show**シグナルが受信されたときに表示されます。{/*##input##*/} |

| シグナル                                   | 説明                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| <span className="ndl-signal">Show</span> | {/*##input:show##*/}ここにシグナルを送ってポップアップを表示します。{/*##input##*/} |

| ミックス                | 説明                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Component Inputs** | ポップアップコンポーネントが持つ任意の**Component Inputs**が入力として利用可能になります。 |

<span className="hidden-props-for-editor">{/*##input:popupParam-\*##*/}**ターゲット**コンポーネントの**Component Input**からのパラメータ入力です。その値はコンポーネントに転送されます。{/*##input##*/}</span>

## 出力

| シグナル                                            | 説明                                                                                                                                                                         |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Closed</span>        | {/*##output:closed##*/}**Close Popup**ノードでポップアップが閉じられたときにシグナルが送信されます。[Close Popup](/nodes/popups/close-popup/)の詳細をご覧ください。 |
| <span className="ndl-signal">Close Actions</span> | ターゲットポップアップコンポーネントから[Close Popup](/nodes/popups/close-popup/)ノードを介して提供される任意の閉じるアクションシグナルがここで利用可能になります。                                |

<span className="hidden-props-for-editor">{/*##output:closeAction-\*##*/}**ターゲット**コンポーネントの**Close Popup**ノードからの結果シグナルです。{/*##output##*/}</span>

| データ                                            | 説明                                                                                                                                   |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Close Results</span> | ターゲットポップアップコンポーネントから[Close Popup](/nodes/popups/close-popup/)ノードを介して提供される任意の結果値がここで利用可能になります。 |

<span className="hidden-props-for-editor">{/*##output:closeResult-\*##*/}**ターゲット**コンポーネントの**Close Popup**ノードからの結果出力です。{/*##output##*/}</span>