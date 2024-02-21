---
hide_title: true
hide_table_of_contents: true
title: Insert Into Arrayノード
---

{/*##head##*/}

# Insert Object Into Array

このノードは_Object_を_Array_に挿入するために使用されます。ArrayもObjectもそれぞれの_Id_を通じて参照されます。挿入は_Do_アクションがトリガーされたときに行われます。

<div className="ndl-image-with-background l">

![](/nodes/data/array/insert-into-array/insert-object-into-array.png)

</div>

{/*##head##*/}

## 入力

| データ                                        | 説明                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------- |
| <span className="ndl-data">Array Id</span>  | {/*##input:collectionId##*/}Objectを挿入するArrayの_Id_です。{/*##input##*/} |
| <span className="ndl-data">Object Id</span> | {/*##input:modifyId##*/}Arrayに挿入するObjectの_Id_です。{/*##input##*/}     |

| シグナル                                 | 説明                                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | {/*##input:do##*/}この入力にシグナルを送ると、入力_Object Id_に設定された_Id_のObjectが、入力_Array Id_に設定された_Id_のArrayに挿入されます。{/*##input##*/} |

## 出力

| シグナル                                   | 説明                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | {/*##output:done##*/}挿入が準備できたときに送信されるシグナルです。{/*##output##*/} |