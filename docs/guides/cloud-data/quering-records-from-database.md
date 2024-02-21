---
title: データベースからレコードをクエリする
hide_title: true
---

import CopyToClipboardButton from '../../../src/components/copytoclipboardbutton';

# データベースからレコードをクエリする

## このガイドで学べること

このガイドでは、[Query Records](/nodes/data/cloud-data/query-records)ノードを使用してデータベースから**レコード**を取得する強力なデータベースクエリを作成する方法を学びます。また、[Repeater](/nodes/ui-controls/repeater)ノードと[Record](/nodes/data/cloud-data/record)ノードを組み合わせて、クエリの結果を視覚化する方法も学びます。

## 概要

このガイドでは、以下のステップを踏みます。

-   シンプルなクエリを作成する
-   **Repeater**ノードを使用して結果をリストアイテムとして表示する
-   データプロパティを視覚ノードに接続する

クラウドバックエンドの設定、**クラス**と**レコード**の作成に既に慣れていることがこのガイドを最大限に活用するための条件です。以下のガイドを通じて、これらをすぐに学ぶことができます：

-   [バックエンドの作成](/docs/guides/cloud-data/creating-a-backend)
-   [クラスの作成](/docs/guides/cloud-data/creating-a-class)
-   [レコードの作成](/docs/guides/cloud-data/creating-new-database-records)

## "クエリ"とは何か？

データベースの世界では、クエリは条件に基づいて特定のサブセットのレコードをデータベースに要求する方法です。Noodlの場合、一つ以上の条件を満たす**クラス**内のすべての**レコード**に対して**クラウドサービス**に要求します。言葉で表すクエリの例は、「`isDone`プロパティがfalseである**クラス**`Task`内のすべての**レコード**を与えてください」となります。

## クエリの作成

まず、アクティブなバックエンドを持つプロジェクトを開始し、一つ以上の**クラス**にいくつかのデータが利用可能であることを確認してください。前述のクラウドデータガイドに従って、`task`（タスクの説明）と`isDone`（タスクが完了した場合は`true`、そうでない場合は`false`のブール値）というプロパティを持ついくつかのアイテムを持つ**クラス**`Task`を使用します。

空のプロジェクトから始めます。たとえば、「Hello World」テンプレートを使用してテキストノードを削除することができます。メイン**グループ**の子として[Repeater](/nodes/ui-controls/repeater/)ノードを追加します。後でクエリの結果を視覚化するために**Repeater**を使用する必要があります。

次に、[Query Records](/nodes/data/cloud-data/query-records)ノードを作成します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/query-1.png)

</div>

まず、この**Query Records**ノードが適用されるべき**クラス**を選択する必要があります。ノードをクリックしてクラスドロップダウンから**クラス**を選択します。このドロップダウンには、作成したすべての**クラス**が表示されるはずです。何らかの理由で表示されない場合は、プロジェクトを正しいクラウドサービスに接続していない可能性があります。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/quering-records-from-database/query-2.png)

</div>

今のところ、他の設定はそのままにしておきます。条件（Noodlでは"フィルタ"と呼ばれます）を追加しないので、このクエリは`Task`クラス内のすべての**レコード**を返します。実際には、**クラス**に多数のアイテムが含まれている場合にネットワークを溢れさせないように、Noodlにはクエリに対してデフォルトで100**レコード**の制限があります。`Use Limit`チェックボックスをチェックすることで制限を変更できますが、今は触れません。

クエリから返されるものを最初に見るために、結果を保存するための[Array](/nodes/data/array/array-node)ノードを作成します。次に、**Query Records**ノードの**Items**を**Array**の**Items**入力に接続します。2つのノード間の接続上でマウスをホバーすると、クエリの結果のデバッグ情報をすぐに確認できるはずです。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/quering-records-from-database/query-running.png)

</div>

Noodlは、入力シグナル**Do**が接続されていない限り

、**Query Records**が作成されるとすぐに自動的に実行されます。クエリとクエリの結果はネットワークを介して送信されるため、クエリを実行する正確なタイミングを制御することが重要な場合があります。そのような場合、クエリが実行されるタイミングを制御するために**Do**シグナルを接続することが重要です。しかし、このシンプルな例ではそれについて心配する必要はないので、接続しないままで問題ありません。

## Repeaterノードを使用してクエリ結果を視覚化する

結果を視覚化するために、もう少しNoodlingが必要です。各**レコード**を表すシンプルなリストアイテムを作成する必要があります。

コンポーネントの下にある"+"アイコンをクリックし、「視覚コンポーネント」を選択して新しい視覚コンポーネントを作成します。新しいコンポーネントに適切な名前を付けます。私たちのアイテムは1つのタスクを表すので、「Task Item」と呼びます。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/new-component.png)

</div>

視覚コンポーネントに、既存の**グループ**ノードの下に2つのノード、[Checkbox](/nodes/ui-controls/checkbox)と[Text](/nodes/basic-elements/text)ノードを追加します。**Checkbox**は`isDone`プロパティを表し、**Text**ノードはタスクの説明を保持します。また、**グループ**の**レイアウト**を**水平方向**に設定し、パディングとマージンを追加してレイアウトを整理します。**Checkbox**のラベルも削除されました。（以下の画像のボタンを使用してノードをコピーし、プロジェクトに貼り付けることもできます。）

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/quering-records-from-database/task-item.png)

<CopyToClipboardButton
    json={{"nodes":[{"id":"d4117337-b6cf-64cc-e2dd-70de4cfb10e6","type":"Group","x":0,"y":0,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","paddingLeft":{"value":5,"unit":"px"},"paddingTop":{"value":2,"unit":"px"},"paddingBottom":{"value":2,"unit":"px"},"paddingRight":{"value":5,"unit":"px"}},"ports":[],"children":[{"id":"e5bdf35a-988f-9c6b-981e-0275f1884912","type":"net.noodl.controls.checkbox","x":20,"y":46,"parameters":{"useLabel":false,"alignY":"center"},"ports":[],"children":[]},{"id":"5fbfaf9d-919f-699f-1e1a-fcbdd20c7631","type":"Text","x":20,"y":92,"parameters":{"marginLeft":{"value":10,"unit":"px"},"sizeMode":"contentSize"},"ports":[],"children":[]}]}],"connections":[],"comments":[]}}
  />

</div>

見た目は今は重要ではありませんし、異なる種類のデータを扱う場合はリストアイテムが少し異なるかもしれません。

次に、メインアプリに戻って**Repeater**ノードの**テンプレート**を、新しく作成したTask Itemを使用するように設定します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/repeater-template.png)

</div>

最後に、以前作成した**Array**ノードを削除し、クエリ結果を直接**Repeater**ノードにフィードします。**Query Records**ノードの**Items**を**Repeater**の**Items**入力に接続します。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/quering-records-from-database/query-to-repeater.png)

</div>

接続が完了すると、リストに多くのアイテムが含まれていることがわかります。実際には、**クラス**に含まれているアイテムの数だけ含まれているはずです。

**Repeater**ノードは、**レコード**ごとにリストアイテムのインスタンスを1つ作成しました。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/quering-records-from-database/items-1.png)

</div>

唯一の問題は、アイテムが**レコード**の内容を表示していないことです。これを修正するには、**Repeater**ノードが**レコード**の配列とどのように扱うかを理解する必要があります。

### Repeaterとレコード

アイテムに正しいデータを表示させるには、正しいデータを持つ**レコード**を取得する必要があります。これを行うには、[Record](/nodes/data/cloud-data/record)ノードを使用します。以前に作成したリストアイテムに**Record**ノードを追加します。ノードをクリックして、その**クラス**が表示したいクラスを指していることを確認します。このガイドでは、`Task`クラスを指すように設定します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/record-1.png

)

</div>

今、**レコード**の**Id**が重要になります - それをリストアイテムが表す**レコード**に対応する**Id**に設定する必要があります。明らかに、各リストアイテムに対して異なる**Id**が必要になります。幸いにも、**Repeater**ノードがこれを解決します。それは正しい**Id**を正しいリストアイテムに割り当てます。以下の画像を参照してください。

<div className="ndl-image-with-background xl">

![](/docs/guides/cloud-data/quering-records-from-database/records-database-illustration.png)

</div>

私たちがする必要があるのは、**Record**ノードに正しい場所からその**Id**を取得するように指示することだけです。再び**Record**ノードをクリックし、**Id Source**を`From repeater`に変更します。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/quering-records-from-database/id-source.png)

</div>

これで、**Repeater**にマウスをホバーすると、リストアイテムの1つにデータが入っていることがわかります。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/record-2.png)

</div>

### レコードプロパティの接続

最後に、レコードのデータ - そのプロパティ - を**Text**ノードと**Checkbox**に接続しましょう。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/quering-records-from-database/record-3.png)

</div>

これで、アプリで**レコード**を見ることができるはずです。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/quering-records-from-database/items-2.png)

</div>