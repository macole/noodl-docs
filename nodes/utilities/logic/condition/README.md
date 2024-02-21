---
hide_title: true
hide_table_of_contents: true
title: Conditionノード
---

{/*##head##*/}

# Conditionノード

このノードは条件を評価し、条件が<span className="ndl-data">true</span>か<span className="ndl-data">false</span>かに応じて2つの<span className="ndl-signal">シグナル</span>のうちの1つを送信します。

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/condition/condition_node.png)

</div>

入力<span className="ndl-data">Condition</span>は<span className="ndl-data">boolean</span>として扱われ、<span className="ndl-signal">Evaluate</span>入力に明示的な<span className="ndl-signal">シグナル</span>が接続されていない限り、入力が変更されたときに評価が行われます。

{/*##head##*/}

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/condition/condition.gif)

</div>

## 入力

| データ                                        | 説明                                                                                                                                                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Condition</span> | {/*##input:condition##*/}**Evaluate**シグナルがトリガーされたとき、または**Evaluate**シグナルが接続されていない場合は条件が変更されるたびに、どちらの出力シグナル（**On true**または**On false**）がトリガーされるかを決定するbooleanです。{/*##input##*/} |

| シグナル                                       | 説明                                                                                                                                                                                                      |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Evaluate</span> | {/*##input:evaluate##*/}**Condition**入力を評価し、それぞれの出力シグナルをトリガーします。**Evaluate**にシグナルが接続されていない場合、ノードは入力が変更されるたびに入力を評価します。{/*##input##*/} |

## 出力

| データ                                       | 説明                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Is True</span>  | {/*##output:result##*/}最後に評価された**Condition**入力がtrueの場合に<span className="ndl-data">true</span>になる<span className="ndl-data">boolean</span>です。{/*##output##*/}    |
| <span className="ndl-data">Is False</span> | {/*##output:isfalse##*/}最後に評価された**Condition**入力がfalseの場合に<span className="ndl-data">false</span>になる<span className="ndl-data">boolean</span>です。{/*##output##*/} |

| シグナル                                       | 説明                                                                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">On True</span>  | {/*##output:ontrue##*/}**Evaluate**がトリガーされ、**Condition**が<span className="ndl-data">true</span>の場合にトリガーされます。{/*##output##*/}   |
| <span className="ndl-signal">On False</span> | {/*##output:onfalse##*/}**Evaluate**がトリガーされ、**Condition**が<span className="ndl-data">false</span>の場合にトリガーされます。{/*##output##*/} |