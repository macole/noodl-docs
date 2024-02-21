---
hide_title: true
hide_table_of_contents: true
title: Static Arrayノード
---

{/*##head##*/}

# Static Array

アイテムで[Array](/nodes/data/array/array-node)を満たすための静的データを保存します。Static Arrayノードは、リストなどの静的ローカルデータを提供するのに適しています。たとえば、**For Each**ノードへの入力として使用できます。

<div className="ndl-image-with-background l">

![](/nodes/data/array/static-array/static-array-1.png)

</div>

データは**CSV**形式または**JSON**形式で提供できます。**items**出力は**Noodl.Array**形式です。
配列の内容は、アプリケーションがリフレッシュされるたびにリセットされます。

{/*##head##*/}

## 入力

| データ                                   | 説明                                                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Type</span> | データの形式を選択します。<br/><br/>`CSV`: カンマ区切り値<br/>`JSON`: JavaScriptオブジェクト記法 |

### CSV

最初の行はすべてのプロパティの名前を定義します。次の行はデータ値を定義します。
例:

```
lamp,topic
Kitchen Lamp,/lamps/1
Office Lamp,/lamps/2
Office Lamp 2,/lamps/4
```

### JSON

プロパティの名前とデータをJSON配列を使用して定義します。
例:

```json
[
    {
        "lamp": "Kitchen Lamp",
        "topic": "/lamps/1"
    },
    {
        "lamp": "Office Lamp",
        "topic": "/lamps/2"
    },
    {
        "lamp": "Office Lamp 2",
        "topic": "/lamps/4"
    }
]
```

## 出力

| データ                                    | 説明                                                                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span> | {/*##output:items##*/}`Noodl.Array`オブジェクトで、たとえば[Array](/nodes/data/array/array-node)、[JavaScript](/docs/guides/business-logic/javascript)、[Repeater](/nodes/ui-controls/repeater)に接続できます。{/*##output##*/} |