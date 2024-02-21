---
hide_title: true
hide_table_of_contents: true
title: Remove From Arrayノード
---

{/*##head##*/}

# Remove Object From Array

このノードは_Object_を_Array_から削除するために使用されます。ArrayもObjectもそれぞれの_Id_を通じて参照されます。削除は_Do_アクションがトリガーされたときに行われます。
削除される_Object_が配列にない場合、何も起こりません。

<div className="ndl-image-with-background">

![](/nodes/data/array/remove-from-array/remove-object-from-array.png)

</div>

{/*##head##*/}

## 入力

| データ                                        | 説明                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Array Id</span>  | {/*##input:collectionId##*/}Objectが削除されるArrayの_Id_です。{/*##input##*/} |
| <span className="ndl-data">Object Id</span> | {/*##input:modifyId##*/}Arrayから削除するObjectの_Id_です。{/*##input##*/}                 |

| シグナル                                 | 説明                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | {/*##input:do##*/}このアクションは、入力_Object Id_に設定された_Id_のObjectを、入力_Array Id_に設定された_Id_のArrayから削除します。{/*##input##*/} |

## 出力

| シグナル                                   | 説明                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | {/*##output:done##*/}削除が完了したときに送信されるシグナルです。{/*##output##*/} |