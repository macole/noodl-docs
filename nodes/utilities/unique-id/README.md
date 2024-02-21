---
hide_title: true
hide_table_of_contents: true
title: Unique Idノード
---

{/*##head##*/}

# Unique Idノード

このノードはユニークIDを生成します。これは、Noodl Cloud Servicesのようなバックエンドにデータを保存する際に非常に便利です。

<div className="ndl-image-with-background l">

![](/nodes/utilities/unique-id/unique-id.png)

</div>

データベース内の各エンティティにユニークIDを生成することで、内容に関係なく、簡単に検索や参照が可能になります。

{/*##head##*/}

## 入力

| シグナル                                  | 説明                           |
| --------------------------------------- | ------------------------------------- |
| <span className="ndl-signal">New</span> | Id出力を新しいユニークidに設定します。 |

## 出力

| データ                                 | 説明                            |
| ------------------------------------ | -------------------------------------- |
| <span className="ndl-data">Id</span> | このノードによって生成された現在のidです。 |