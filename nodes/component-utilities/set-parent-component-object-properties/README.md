---
hide_title: true
hide_table_of_contents: true
title: Set Parent Component Object Propertiesノード
---

{/*##head##*/}

# Set Parent Component Object Propertiesノード

このノードを使用して、最も近い親**Component Object**上のプロパティを設定できます。[Parent Component Object](/nodes/component-utilities/parent-component-object)ノードを使用して、最も近い親**Component Object**のプロパティにアクセスできます。

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/set-parent-component-object-properties/set-parent-component-object-properties.png)

</div>

{/*##head##*/}

## 入力

| シグナル                                   | 説明                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">実行</span>   | {/*##input:do##*/}プロパティパネルに入力されたり接続されたりしたプロパティを保存します。同じコンポーネント内のすべての**Component Object**ノード、および任意の[Parent Component Object](/nodes/component-utilities/parent-component-object)ノードが更新されます。 {/*##input##*/} |

| データ                                                    | 説明                                                                                                                                                 |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">カスタムプロパティ</span>       | {/*##input:prop-\*##*/}**Component Object**に設定するプロパティです。プロパティパネルに設定したいプロパティをリストアップできます。{/*##input##*/} |

## 出力

| シグナル                                     | 説明                                                                                               |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">完了</span>      | {/*##output:done##*/}設定アクションが完了したとき、この出力でシグナルが送信されます。{/*##output##*/} |