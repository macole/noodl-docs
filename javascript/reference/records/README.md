---
hide_title: true
hide_table_of_contents: true
title: Noodl.Records
---

# Noodl.Records

**Records** を使うと、クラウドデータベースにレコードを問い合わせたり、読み書きしたりすることができます。すべての関数は **非同期** であり、失敗すると例外をスローします。

```javascript
try {
  await Noodl.Records.delete(myRecord);
} catch (e) {
  console.log(e);
}
```

#### **`Noodl.Records.query(className, query, options)`**  
これは、提供されたクエリを使用してデータベースを問い合わせ、結果を返すか、失敗した場合は例外をスローする**非同期**関数です。**query** パラメーターは、**Query Records** ノードの [高度なクエリ](/nodes/data/cloud-data/query-records#advanced-filters)と同じ形式です。

```javascript
const results = await Noodl.Records.query("myClass", {
  Completed: { equalTo: true },
});
```

結果は **Noodl.Object** の配列です。**options** はソートを指定するために使用でき、**Query Records** ノードの高度なフィルターと同じパターンに従います。

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["createdAt"],
  }
);
```

最大で何レコードを返すかの制限（デフォルトは100）を **limit** オプションで指定し、返されたレコードが特定のインデックスから始まるようにする場合は **skip** オプションを指定することもできます。

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["-createdAt"], // - を使用して降順にソート
    skip: 50,
    limit: 200,
  }
);
```

結果を制限する場合や、許可された最大返却数を超えるレコードがある場合は、ページネーションを有効にするために合計レコード数を知りたい場合があります。これは **count** オプションで行うことができます。このオプションを使用すると、返される値が **results** と **count** を含むオブジェクトに変わります。

```javascript
const res = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["-createdAt"], // - を使用して降順にソート
    skip: 50,
    limit: 200,
    count: true,
  }
);

console.log(res.results); // これは結果の配列です
console.log(res.count); // これはクエリに一致する合計数です
```

返されたレコードにポインターのプロパティがある場合、デフォルトでは指しているレコードの **Id** を含む文字列として返されます（もしあれば）。しかし、`include` オプションを使用することで、代わりにオブジェクト全体を含めることができます。以下の例では、**Customer** という名前のポインターのプロパティがあり、顧客レコードを指していると想像してください。`include` オプションを以下のように使用すると、返されるレコードにはポインター値の代わりにオブジェクト全体とすべてのプロパティが含まれるようになります。

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {},
  {
    include: "Customer",
  }
);
```

ドット表記を使用して、含まれるオブジェクト内のポインターを再帰的に含めることもできます。以下の例では、`Author` プロパティで指されるレコード、およびそれらのオブジェクト内で `Location` プロパティで指されるレコードも含めています。

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {},
  {
    include: "Customer,Author.Location",
  }
);
```

デフォルトでは、結果のすべてのレコードに対してすべてのプロパティが返されます。これは、数少ないプロパティを探している場合には大きな応答をもたらす可能性があるため、時には望ましくない方法です。`select` オプションを使用して、結果に含めたいプロパティの名前を指定できます。以下の例では、`Title` と `Body` のプロパティのみが結果に返されます。

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    select: "Title,Body",
  }
);
```

:::note
重要な注意点として、クラウドサービスから返されるプロパティが選択されている場合でも、以前に取得されたレコードデータモデル内の既存のプロパティとマージされることがあります。Noodlアプリケーションにおけるすべてのレコードオブジェクトはグローバルだからです。
:::

#### **`Noodl.Records.count(className, query)`**  
この関数は

、与えられたクラスのレコードの数を、オプションでクエリフィルターに一致するもののみを数えて返します。

```javascript
// データベースにあるmyClassのレコードの数
const count = await Noodl.Records.count("myClass");

// クエリに一致するmyClassのレコードの数
const completedCount = await Noodl.Records.count("myClass", {
  Completed: { equalTo: true },
});
```

#### **`Noodl.Records.distinct(className, property, query)`**  
**クラウドファンクションでのみ利用可能**  
この関数は、与えられたクラスのすべてのレコードに対して特定のプロパティのユニークな値の配列を返します。オプションでクエリフィルターを提供できます。

```javascript
// データベース内のmyClassのすべてのレコードの「category」プロパティのユニークな値。
const categories = await Noodl.Records.distinct("myClass", "category");

// クエリに一致する、すなわちCompletedプロパティがtrueに設定されているレコードの「category」プロパティのユニークな値。
const completedCount = await Noodl.Records.distinct("myClass", "category", {
  Completed: { equalTo: true },
});
```

#### **`Noodl.Records.fetch(objectOrId, options)`**  
この関数を使用して、特定のレコードの最新のプロパティをクラウドデータベースから取得します。オブジェクト/レコードが返されます。

```javascript
// レコードIDを使用する場合、クラスも指定する必要があります
const myRecord = await Noodl.Records.fetch(myRecordId, {
  className: "myClass",
});

// 以前に取得されたレコード、またはクエリから受け取られたレコードを
// 使用して、バックエンドから最新のプロパティを取得することもできます
await Noodl.Records.fetch(myRecord);
```

デフォルトでは、fetchはポインタープロパティを指しているオブジェクトの文字列**Id**として返します。しかし、`include` オプションを使用して、代わりにオブジェクトの内容を返すよう指定できます。

```javascript
// includeを使用すると、リクエストはポインターの文字列IDの代わりに
// すべてのプロパティを持つ指されたオブジェクトを返します
await Noodl.Records.fetch(myRecord,{
  include:["Customer","Author"]
});
```

#### **`Noodl.Records.save(objectOrId, properties, options)`**  
この関数を使用して、既存のレコードをクラウドデータベースに書き込みます。オプショナルなプロパティ引数を指定しない場合、レコード/オブジェクトのすべてのプロパティを保存しようとします。その場合、それらのプロパティを設定して保存します。

```javascript
Noodl.Objects[myRecordId].SomeProperty = "こんにちは";

// レコードIDを使用して保存する場合、クラス名を明示的に指定する必要があります
// プロパティにnullまたはundefinedを指定すると、
// レコードのすべてのプロパティが保存されます
await Noodl.Records.save(myRecordId, null, { className: "myClass" });

// オブジェクトを直接使用する
await Noodl.Records.save(Noodl.Objects[myRecordId]);

// 指定されたプロパティを設定し、それらをバックエンドに保存する
await Noodl.Records.save(myRecord, {
  SomeProperty: "こんにちは",
});
```

#### **`Noodl.Records.increment(objectOrId, properties, options)`**  
この関数は、特定のレコードのプロパティを増加（または減少）させ、クラウドデータベースに保存します。これは通常、最初に現在の値を読み、それを変更してデータベースに保存する必要がありますが、ここでは1つの操作で行うことができます。

```javascript
// クラウド内の指定された数字を変更します
await Noodl.Records.increment(myRecord, {
  Score: 10,
  Life: -1,
});

// saveと同様に、レコードIDとクラスを使用できます
await Noodl.Records.save(myRecordId, { Likes: 1 }, { className: "myClass" });
```

オプションを使用すると、この[ガイド](/docs/guides/cloud-data/access-control)で説明されているように、アクセス制御を指定することもできます。これにより、特定のレコードにアクセスできるユーザーを制御できます。アクセス制御は以下のように指定されます。

```javascript
await Noodl.Records.save(myRecord, null, {
  acl: {
    "*": { read: true, write: false }, // "*" は全員を意味し、このルールは全員に読み取りアクセスを与えますが、書き込みアクセスは与えません
    "a-user-id": { read: true, write: true }, // 特定のユーザーに書き込みアクセスを与えます
    "role:a-role-name": { read: true, write: true }, // 特定の役割に書き込

みアクセスを与えます
  },
});
```

#### **`Noodl.Records.create(className, properties, options)`**  
この関数は、クラウドデータベースに新しいレコードを作成し、新しく作成されたレコードの **Noodl.Object** を返します。成功しない場合は例外をスローします。

```javascript
const myNewRecord = await Noodl.Records.create("myClass", {
  SomeProperty: "こんにちは",
});

console.log(myNewRecord.SomeProperty);
```

**options** 引数を使用して、**Noodl.Records.save** で詳述されているように、アクセス制御ルールを指定できます。

#### **`Noodl.Records.delete(objectOrId, options)`**  
この関数を使用して、クラウドデータベースから既存のレコードを削除します。

```javascript
// 削除するレコードのIDを指定する場合、オプションでクラス名も提供する必要があります
await Noodl.Records.delete(myRecordId, { className: "myClass" });

// 以前に取得されたレコード、またはクエリから受け取られたオブジェクトを直接使用する
await Noodl.Records.delete(Noodl.Objects[myRecordId]);
```

#### **`Noodl.Records.addRelation(options)`**  
この関数を使用して、2つのレコード間に関係を追加します。

```javascript
// IDとクラスを直接指定することもできます
await Noodl.Records.addRelation({
  className: "myClass",
  recordId: "owning-record-id",
  key: "the-relation-key-on-the-owning-record",
  targetRecordId: "the-id-of-the-record-to-add-a-relation-to",
  targetClassName: "the-class-of-the-target-record",
});

// 以前に取得されたレコード、またはクエリから返された2つのレコードがすでにある場合
await Noodl.Records.addRelation({
  record: myRecord,
  key: "relation-key",
  targetRecord: theTargetRecord,
});
```

#### **`Noodl.Records.removeRelation(options)`**  
この関数を使用して、2つのレコード間の関係を削除します。

```javascript
// IDとクラスを直接指定することもできます
await Noodl.Records.removeRelation({
  className: "myClass",
  recordId: "owning-record-id",
  key: "the-relation-key-on-the-owning-record",
  targetRecordId: "the-id-of-the-record-to-remove-a-relation-to",
  targetClassName: "the-class-of-the-target-record",
});

// 以前に取得されたレコード、またはクエリから返された2つのレコードがすでにある場合
await Noodl.Records.removeRelation({
  record: myRecord,
  key: "relation-key",
  targetRecord: theTargetRecord,
});
```

#### **`Noodl.Records.aggregate(className, aggregates, query)`**  
**クラウドファンクションでのみ利用可能**  
この関数は、レコードのプロパティに基づいて一連の集計を計算します。クエリによって制限することができます。以下の集計関数を使用できます：

- `sum` 一致するレコードの数値プロパティの合計を計算します。
- `min` 一致するレコードの数値プロパティの最小値を計算します。
- `max` 一致するレコードの数値プロパティの最大値を計算します。
- `avg` 一致するレコードの数値プロパティの平均値を計算します。

```javascript
// これにより、myClassのすべてのレコードに対して2つの平均が計算されます。TotalCostはすべてのCostプロパティの合計となり、AverageSalaryはすべてのSalaryプロパティの平均となります
const categories = await Noodl.Records.aggregate("myClass", {
  TotalCost: { sum: "Cost" },
  AverageSalary: { avg: "Salary" },
});

// これにより、CategoryがRemoteと等しいレコードに対して最小および最大の年齢が計算され返されます
const completedCount = await Noodl.Records.aggregate(
  "myClass",
  {
    MinAge: { min: "Age" },
    MaxAge: { max: "Age" },
  },
  {
    Category: { equalTo: "Remote" },
  }
);
```