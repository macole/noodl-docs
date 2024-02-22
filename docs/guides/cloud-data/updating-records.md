---
title: レコードの更新
hide_title: true
---
# データベース内のレコードの更新

## このガイドで学べること

このガイドでは、[Set Record Properties](/nodes/data/cloud-data/set-record-properties) ノードを使用してデータベース内のデータを更新する方法について学びます。

## 概要

このガイドでは、以下のステップを通じて進めます

-   以前にクエリした**レコード**の更新

このガイドを最大限に活用するには、クラウドバックエンドの設定方法、**クラス**と**レコード**の作成方法、およびそれらのクエリ方法に既に慣れていることが最善です。以下のガイドを通じてこれを素早く学ぶことができます：

-   [バックエンドの作成](/docs/guides/cloud-data/creating-a-backend)
-   [クラスの作成](/docs/guides/cloud-data/creating-a-class)
-   [レコードの作成](/docs/guides/cloud-data/creating-new-database-records)
-   [レコードのクエリ](/docs/guides/cloud-data/quering-records-from-database)

## データベース内のレコードの更新

[Set Record Properties](/nodes/data/cloud-data/set-record-properties) ノードを使用してデータベース内の**レコード**を更新するのは簡単です。基本的に、**Id**を正しい**レコード**に設定し、プロパティを望む値に設定して**Do**入力をトリガーします。

試してみるには、プロジェクトにアクティブなクラウドサービスがあることを確認してください。データベースに**クラス**を設定し、いくつかの**レコード**を入れます。最後に、**データベース**からアイテムをクエリします。以前の"クラウドデータを使った作業"ガイドに従えば、そこで作成されたシンプルなタスクリストを使用できます。それは以下のようなものです：

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/updating-records/items-2.png)

</div>

アプリには、"App"と呼ばれるメインコンポーネントと"Task Item"と呼ばれるリストアイテムがあります。

メインコンポーネントは以下のように見えます：

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/updating-records/orig-app.png)

</div>

リストアイテムは以下のようになります

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/updating-records/record-3.png)

</div>

この小さなアプリの明らかな欠点は、タスクを完了してそのチェックボックスをチェックしても、データベースが実際には更新されないことです。`isDone`プロパティは変更されません。

いくつかのアイテムをクリックしてアプリをリロードして、変更が視覚的にのみであり、基礎となるデータが変更されていないことをダブルチェックできます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/updating-records/checkbox-anim.gif)

</div>

### Set Record Properties ノード

**レコード**を更新するには、[Set Record Properties](/nodes/data/cloud-data/set-record-properties) ノードを使用します。

リストアイテムにノードを追加します。クリックしてそのプロパティを編集し、正しい**クラス**が選択されていることを確認してください。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/updating-records/list-item-1.png)

</div>

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/updating-records/set-record-prop-1.png)

</div>

`Store to`オプションにも注意してください。変更をローカルとクラウドのどちらに保存するか、またはローカルのみに保存するかを選択できます。データベースに直接変更を保存したいので、`Cloud and locally`に設定されているままにします。

場合によっては、最初に変更をローカルにのみ保存することが理にかなっています。例えば、複数のフィールドと"保存"ボタンがあるフォームがある場合、最初にローカルにのみ保存し、ユーザーが"保存"を押したときに一度にすべての変更を保存することが理にかなっているかもしれません。

これで、**Set Record Properties**の**Id**が**Repeater**が提供する**Id**に正しく設定されていることを確認する必要があります。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/updating-records/set-record-prop-2.png)

</div>

残りの2つの作業は、**チェックボックス**を`isDone`プロパティに接続し、**Set Record Properties**の**Do**シグナルをトリガーすることです。**チェックボックス**の状態が更新されるたびに保存したいので、**チェックボックス**から出てくる**Changed**

シグナルを**Do**に接続しましょう。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/updating-records/list-item-2.png)

</div>

完了しました！異なるタスクをクリックして、`isDone`プロパティが正しく保存されているかをダブルチェックするために、**ダッシュボード**を表示してください。ビューを更新するために**ダッシュボード**で`Refresh`を忘れずに押してください。