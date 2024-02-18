---
title: データベースクラスの作成
hide_title: true
---

# データベースにクラスを作成する

## このガイドで学べること

このガイドでは、データベースに新しい**クラス**を作成し、それに新しい**カラム**を追加する方法を学びます。**クラス**は、Noodlのデータベース内で**レコード**を保持するために使用されます。

## 概要

このガイドでは、以下のステップを説明します：

- **ダッシュボード**を使用してデータベースに新しい**クラス**を追加する
- クラスに新しい**カラム**を追加する
- **ダッシュボード**を通じてクラス内にいくつかの新しい**レコード**を追加する

このガイドを始める前に、クラウドサービスが有効になっており、プロジェクトに対してアクティブなものがあることを確認してください。これについては、[この](/docs/guides/cloud-data/creating-a-backend)ガイドで学ぶことができます。

## **ダッシュボード**を使用してデータベースに新しいクラスを追加する

まず、プロジェクトに対してアクティブなクラウドサービスがあることを確認してください。次に、クラウドサービスのサイドバー内の`Dashboard`ボタンをクリックします。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-class/dashboard-1.png)

</div>

左側のメニューの黄色いボタン`Create a Class`をクリックするか、`Edit`メニューを開いて`Add a Class`を選択することで、データベースに新しいクラスを追加できます。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-class/create-class-1.png)

</div>

<div className="ndl-image-with-background m">

![](/docs/guides/cloud-data/creating-a-class/create-class-2.png)

</div>

次に、**クラス**に名前を付けます。例えば`Task`と入力し、タイプが`Custom`であることを確認してください。`Create class and add columns`を選択できます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-a-class/add-class.png)

</div>

## クラスにカラムを追加する

### カラムとは何か？

Noodlの各**クラス**には、クラスの各**レコード**が持つことができるデータの種類を定義する多くのカラムがあります。例えば、タスク管理アプリを構築している場合、`Task`というクラスに`task`と`isDone`という2つのカラムがあり、タスクの説明とタスクが完了したかどうかを保持することができます。Noodlでは、**カラム**は[Record](/nodes/data/cloud-data/record)ノードのプロパティとして表され、入力または出力として使用できます。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-a-class/class.png)

</div>

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-class/record-1.png)

</div>

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-class/record-2.png)

</div>

:::note

[関係](/docs/guides/cloud-data/record-relations?id=relation-many-to-many-relationships)はここでは例外です。それらはクエリを通じてのみ使用でき、Recordノードのプロパティとしては表示されません。

:::

### カラムタイプ

各**カラム**には特定のデータタイプがあり、それによって保持できるデータの種類が決まります。
利用可能なデータタイプには11種類あります：

- **String** - 文字列値
- **Boolean** - ブール値（`true`または`false`が可能）
- **Number** - 数値
- **Date** - 日付（ISO形式で保存）
- **Object** - JavaScriptオブジェクト
- **Array** - JavaScript配列
- **Geopoint** - 地球上の位置を示すジオポイント
- **Polygon** - GEOJSONポリゴンオブジェクト
- **File** - ファイルへの参照
- **Pointer** - 別の**クラス**の**レコード**へのポインター
- **[関係](/docs/guides/cloud-data/record-relations?id=relation-many-to-many-relationships)** - 別の**クラス**の**レコード**への関係リスト。これらは直接**レコード**ノードに表示されず、クエリで利用可能です。

このガイドでは、より単純なデータタイプである`String`、`Boolean`、`Number`に焦点を当てます。

`task`（`String`タイプのカラム）と`isDone`（`boolean`）という2つのカラムを**クラス**に追加しましょう。各カラムには、新しい**レコード**にそのカラムのエントリが設定されていない

場合に設定されるデフォルト値を選択することもできます。この場合、`isDone`のデフォルト値を`false`に設定しましょう。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-a-class/add-new-column.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-a-class/add-new-column-2.png)

</div>

新しい**レコード**が**クラス**に追加されるためには、**カラム**が必須かどうかを選択することもできます。`true`に設定されている場合、その**カラム**に値が提供されていない新しい**レコード**の挿入は拒否されます。今回はそれを望んでいないので、両方の**カラム**で`No`の状態を維持します。

### デフォルトカラム

新しいTaskクラスを**ダッシュボード**で調べると、他にいくつかの**カラム**が含まれていることがわかります。これらは自動的に作成され、一般的には削除しないでください。実際にはかなり便利です。デフォルトのカラムは

- **objectId** - 各**レコード**の一意の識別子です。この識別子は、**レコード**ノードを使用して参照する際に`id`プロパティとなります。
- **createdAt** - **レコード**が作成された日時を含む日付オブジェクトです。
- **updatedAt** - **レコード**が最後に更新された日時を含む日付オブジェクトです。
- **ACL** - このオブジェクトを取得および保存する権利を持つユーザーとロールを追跡するための特別なカラムです。今のところ、そのままにしておきましょう。

## 新しいレコードの追加

Taskクラスに新しい**レコード**を追加する時が来ました。`Add a row`ボタンをクリックするか、`Edit`メニューから`Add row`または`Add row through modal`を選択することで**レコード**を追加できます。後者のボタンをクリックしましょう。これにより、新しい**レコード**の各**カラム**の値を入力できるフォームが表示されます。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-a-class/add-row-1.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/cloud-data/creating-a-class/add-row-2.png)

</div>

いくつかの**レコード**を追加して、それらが**クラス**に表示されるのを見てみましょう。それらを選択し、`Edit`->`Delete these rows`をクリックして削除することも試してみてください。