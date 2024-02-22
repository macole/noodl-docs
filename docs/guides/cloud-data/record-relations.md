---
title: レコード関係
hide_title: true
---
# レコード関係

## このガイドで学べること

このガイドでは、データベース内の異なる**レコード**間の関係について見ていきます。これは例えば、ある**レコード**に格納された別の**レコード**を指す _ポインター_ のようなものです。また、"多対多"の関係性で、一つの**レコード**が他の複数の**レコード**への _ポインター_ のリストを持つこともあります。

これは、例えばデータベース内にブログ投稿の**クラス**があり、その投稿に「いいね」した**ユーザー**（別の**クラス**）を追跡したい場合など、_リレーショナルデータ_ を扱う際に非常に便利です。

## 概要

まずは**ポインター**、つまり _一対多_ の関係性について見ていきます。次に、**リレーション**、つまり _多対多の関係性_ について見ていきます。

バックエンド、データベース、**レコード**の操作にある程度の経験があることがこのガイドを最大限に活用するために推奨されます。まだの場合は、以下のガイドを先に進めることをお勧めします。

-   [バックエンドの作成](/docs/guides/cloud-data/creating-a-backend)
-   [クラスの作成](/docs/guides/cloud-data/creating-a-class)
-   [レコードの作成](/docs/guides/cloud-data/creating-new-database-records)

## レコード間の関係

例えば、_Post_ クラスがブログ投稿を含み、_Comment_ クラスがこれらの投稿に対するコメントを含むような異なる**クラス**を持つアプリを想像してみましょう。これらのクラスの**レコード**は関連している必要があり、これらの関係をクエリできる必要があります。

## ポインター - 一対多の関係性

最も単純な関係は**ポインター**です。このタイプの関係は一般に _一対多_ の関係と呼ばれます。例えば、ブログの_Post_ は多くの*Comment*を持ちますが、各_Comment_ は一つの _Post_ にのみ属します。この種の関係を作成するには、**ポインター**と呼ばれる特別な種類のプロパティを使用します。

**ポインター**プロパティは、その_Id_を介して特定のクラスの別の**レコード**を参照できます。この場合、_Comment_ の所有者である _Post_ を参照したいとします。そこで、`Owner`と呼ぶプロパティを_Comment_ クラスに作成し、_ポインター_ タイプを与えて_Post_ レコードを指すように指定します。

?> これは _Comment_ が _Post_ を指すという、_後方_ の関係と呼ばれます。_Post_ に対する全ての_Comment_ を見つけたい場合は、単純にその_Post_ に対して指し戻している全ての_Comment_ を探します。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/create-pointer.png)

</div>

ポインターを設定するには、**Post** レコードの **id** を渡すことができます。例えば、新しい_Comment_ **レコード** を作成するときにこれを行うことができます。ポインターとして指定された**レコード**が正しいタイプであることが重要です。この場合は_Post_です。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/insert-pointer.png)

</div>

後で、_Post_ に対する全ての_Comment_ を取得したい場合は、**Query Records** ノードを使用して、**Owner** プロパティが特定のコメントを指している全ての**Comments**を求めるだけです。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-pointer-1.png)

</div>

具体的に探している**id**は、入力を通じて提供します。

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-pointer-2.png)

</div>

関係性をデータブラウザで調べることができます。クラウドサービスの_ダッシュボード_を開いて_Comment_ クラスを見つけると、ポインターが現在指しているレコード_Id_を見ることができ、クリックするとその特定のレコードにジャンプできます。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/comments-owner.png)

</div>

## リレーション - 多対多の関係性

新しい**クラス** _Group_ を導入し、_Post_ が多くの異なる*Group*の一部になることができるとしましょう

。この場合、前の例での後方向のポインティングメカニズムを使用することはできません。_Post_ から_Group_ への単一のポインターでは機能しません。なぜなら、_Post_ は多くの_Groups_ の一部である可能性があるからです。代わりに**リレーション**と呼ばれる概念を使用する必要があります。_Group_ **レコード**に_Relation_ タイプの新しいプロパティを作成し、ポインターと同様に_タイプ_を指定して名前を付ける必要があります。

?> この場合、_前方_ の参照になります。つまり、_Group_ がリレーションプロパティを持っています。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/create-relation.png)

</div>

リレーションを扱うのは最初は少し難しいかもしれません。これを見る一つの方法は、この例では、_Group_ がそれに属する全ての_Posts_ をそのリストにあるポインターをたどることで簡単に見つけることができるということです。逆の質問、つまり_Post_ が自分が属している_Groups_ を知りたい場合（複数の可能性がある！）は、そのリストに自分を指しているポインターを持っている全ての_Groups_ をクエリすることで見つけることができます。

**レコード**に_Relation_ プロパティがある場合、[Add Record Relation](/nodes/data/cloud-data/add-record-relation) と [Remove Record Relation](/nodes/data/cloud-data/remove-record-relation) ノードを使用して管理する必要があります。これらのノードでは、リレーションプロパティを持つ**レコード**の**id**（この場合はGroup）と、関係に追加または削除したい**レコード**の**id**を提供する必要があります。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/record-relation-1.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/record-relation-2.png)

</div>

_Pointers_ と同様に、クラウドサービスの_ダッシュボード_に行ってモデルの関係を表で見ることができます。_View relation_ をクリックすると、この特定のモデルの関係の表が表示されます。

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/view-relation.png)

</div>

最後に、関係をクエリする必要があります。2つのケースがあります：

1. _Group_ に関連する全ての_Post_ を見つけたい場合。その場合、_Post_ のクラスの**Query Records**を作成します（クエリから_Posts_を返したい）。次に、以下の画像に従ってフィルターを設定できます

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-relation-1.png)

</div>

プロパティを持っているクラス（この場合は_Group_）のリレーションプロパティの名前も指定する必要があることに注意してください。

2. 逆のクエリを行いたい場合、つまり_Post_ に関連する全ての_Groups_ を求めたい場合は、_Group_ のクラスで**Query Records** ノードを作成します（クエリから_Groups_を返したい）。_Post_ **レコード**を持っていて（_Post_ **レコード**の_Id_を持っていて）、それに属している全ての_Groups_を見つけたい場合、**Group** クラスに設定された**Query Records**で以下のjavascriptクエリを使用します。

```javascript
where({
    posts: { pointsTo: Inputs.PostId },
})
```

上記のように、_Group_ コレクションの関係フィールド、この場合は_posts_を正しく使用することも確認する必要があります。