---
title: データベースに新しいレコードを作成する
hide_title: true
---

# データベースでのデータの保存と取得

## このガイドで学べること

このガイドでは、[新しいレコードの作成](/nodes/data/cloud-data/create-new-record)ノードを使用して、クラウドデータベースに新しいエントリー - **レコード**を作成し挿入する方法を学びます。

## 概要

このガイドでは、以下のステップを説明します：

- データベースに**レコード**を作成する
- 新しく作成された**レコード**の**ID**を取得する
- **レコード**の初期値を設定する

このガイドを始める前に、クラウドサービスが有効で、データベースに少なくとも1つの**クラス**があることを確認してください。これについては、[この](/docs/guides/cloud-data/creating-a-backend)ガイドと[この](/docs/guides/cloud-data/creating-a-class)ガイドで学ぶことができます。

## 新しいレコードの作成ノードを使用してレコードを作成する

**ダッシュボード**を試した場合、そこから**レコード**を作成できることを確認できたでしょう。今回は、アプリ内から**レコード**を作成する方法を学びます。

新しいNoodlプロジェクトを作成します。例えば`Hello World`テンプレートを使用できます。

再度、**クラウドサービス**が有効で、少なくとも1つの**クラス**を設定したアクティブな**クラウドサービス**が設定されていることを確認してください。`クラウドサービス`サイドバーを開くと、以下の画像のように、`エディターで使用`されているクラウドサービスが選択されているはずです。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-new-database-records/cloud-service-active.png)

</div>

ノードグラフエディターパネルで右クリックしてノードピッカーを開き、**新しいレコードの作成**ノードを作成します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-new-database-records/node-picker-1.png)

![](/docs/guides/cloud-data/creating-new-database-records/create-new-record-1.png)

</div>

### 新しいレコードの作成ノード

その名前が示すように、このノードはデータベースの**クラス**に新しい**レコード**を作成して挿入するために使用されます。まず、どの**クラス**に**レコード**を挿入するかを設定する必要があります。ノードをクリックして、バックエンドで設定した**クラス**のうちの1つを選択します。この例では、**クラス** **Task**を選択します。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-new-database-records/create-new-record-2.png)

</div>

### 初期値

**クラス**を**新しいレコードの作成**ノードのために選択すると、クラスを作成する際に追加した**カラム**、すなわち`task`と`isComplete`プロパティがノードの新しいプロパティとして即座に表示されます。

いつでも**ダッシュボード**で**カラム**を追加または削除し、その**クラス**を参照するすべてのノードがそれに応じて更新されます。使用しているノードで**カラム**を削除した場合、Noodlで警告が表示されます。

おそらくすでに気付いているように、ノードのこれらのプロパティを設定することで、作成する際の**レコード**の初期値を制御できます。したがって

、以下のようにいくつかの値でプロパティを埋めましょう。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/creating-new-database-records/create-new-record-3.png)

</div>

### レコードの作成

実際に**レコード**を作成することは簡単です。**新しいレコードの作成**ノードの**Do**入力シグナルをトリガーする必要があります。その目的で[ボタン](/nodes/ui-controls/button)を追加しましょう。画面のどこかに追加します。この例では、**テキスト**ノードの後に追加し、中央に配置してラベルを変更します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-new-database-records/app1.png)

</div>

**ボタン**から**新しいレコードの作成**ノードへ**クリック**出力シグナルを**Do**シグナルにドラッグして接続します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/creating-new-database-records/connecting-1.png)

</div>

2つのノードが接続されたら、アプリを試す準備ができました。アプリのボタンを数回クリックします。**クリック**から**Do**への接続が点灯するはずです。すべてが期待通りに動作した場合、クリックするたびにデータベースに新しい**レコード**が作成されるはずです。**ダッシュボード**を開いて、**クラス**で確認できます。注：アイテムを表示するには、**ダッシュボード**で**更新**ボタンをクリックする必要がある場合があります。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-new-database-records/create-record.gif)

![](/docs/guides/cloud-data/creating-new-database-records/dashboard-1.png)

</div>

## 新しく作成されたレコードのIDの取得

見ての通り、**新しいレコードの作成**ノードは、**Do**がトリガーされるたびに新しい**レコード**を作成する工場のようなものです。それらをどのように追跡しますか？

ノードには出力**Id**があり、これはちょうど作成された**レコード**の識別子になります。副次的な注意として、作成がうまくいったと仮定すると、**レコード**が作成されたときに**成功**出力シグナルも同時にトリガーされます。作成に失敗した場合（例えば、**レコード**のプロパティの1つが必須であり、提供されていなかった場合など、[この](/docs/guides/cloud-data/creating-a-class/)ガイドを参照）、代わりに**失敗**シグナルがトリガーされます。

**新しいレコードの作成**ノードの出力**Id**を**文字列**ノードに接続して、それをよりよく見てみましょう。

**Id**は**レコード**の特別なプロパティです。新しく作成された**レコード**の**Id**が**ダッシュボード**の**objectId**と一致することが最初に注目されるでしょう。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-new-database-records/inspect-id.png)

![](/docs/guides/cloud-data/creating-new-database-records/inspect-2.png)

</div>

**Id**は、この特定の**レコード**を参照するために使用されます。例えば、特定の**レコード**のプロパティを変更したい場合は、[Set Record Properties](/nodes/data/cloud-data/set-record-properties)ノードを使用し、その**Id**が正しい**レコード**を参照していることを確認します。[Record](/nodes/data/cloud-data/record)ノードや[Delete Record](/nodes/data/cloud-data/delete-record)にも同様です。したがって、**Id**を追跡することが重要です。

## レコードの初期値の設定

それでは、新しいタスク**レコード**が異なるタスクテキストを持ち、`isDone`が`true`または`false`に設定されるように、いくつかのUIを追加しましょう。[Text Input](/nodes/ui-controls/text-input)と[Checkbox](/nodes/ui-controls/checkbox/)を追加し、それらを`新しいレコードの作成`ノードに接続します。**クラス**の**カラム**から来る2つのプロパティが、**新しいレコードの作成**ノードの入力として利用可能であることがわかります。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/creating-new-database-records/initial-props.png)

</div>

アプリを試して、ランダムなタスクの説明を書いたり、チェックを入れたり外したりしてみてください。**ダッシュボード**のデータを見て、正しく動作していることを確認してください。