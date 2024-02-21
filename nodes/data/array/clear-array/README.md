---
hide_title: true
hide_table_of_contents: true
title: Clear Arrayノード
---

{/*##head##*/}

# Clear Array

このノードは_Array_からすべての_Objects_を削除するために使用されます。Arrayはその_Id_を通じて参照されます。_Do_アクションを使用して、Array内のすべての_Objects_を削除します。

<div className="ndl-image-with-background l">

![](/nodes/data/array/clear-array/clear-array.png)

</div>

{/*##head##*/}

## 入力

| データ                                       | 説明                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| <span className="ndl-data">Array Id</span> | {/*##input:collectionId##*/}クリアされるArrayの_Id_です。{/*##input##*/} |

| シグナル                                 | 説明                                                                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | {/*##input:do##*/}このアクションは、入力_Array Id_に設定された_Id_のArrayからすべてのObjectsを削除します。{/*##input##*/} |

## 出力

| シグナル                                   | 説明                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | {/*##output:done##*/}削除が完了し、Arrayが空になったときに送信されるイベントです。{/*##output##*/} |