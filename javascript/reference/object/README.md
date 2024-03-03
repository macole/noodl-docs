---
hide_title: true
hide_table_of_contents: true
title: Noodl.Object
---

# Noodl.Object

[Object](/nodes/data/object/object-node)にJavascriptからアクセスすることを可能にします。Noodlアプリケーションでのオブジェクトの使用方法とその詳細については、[こちら](/docs/guides/data/objects)で学ぶことができます。

#### **`Noodl.Object.get(id)`**

指定されたIDのオブジェクトを返します。この関数は、IDが以前に使用されていない場合、新しい空のオブジェクトを返します。オブジェクトが存在するかどうかを確認したい場合は、`Noodl.Object.exists`関数を使用してください。これは`Noodl.Objects`を通じてオブジェクトにアクセスするのと同じです。

#### **`Noodl.Object.create(data)`**

この関数は新しいオブジェクトを作成し、それを返します。
オブジェクトのプロパティは、提供されたデータのものとなります。特別なケースは、id属性で、これはオブジェクトのプロパティの一部ではなく、オブジェクトのidとなります。
例えば、以下のコードは2つのプロパティを持ち、idが'A'に設定されたオブジェクトを作成します。

```js
Noodl.Object.create({
  id: "A",
  myProp1: 10,
  myProp2: "こんにちは",
  myProp3: Noodl.Object.create({ anotherProp: 15 }),
});
```

IDが提供されていない場合、新しく作成されたオブジェクトには一意のIDが割り当てられます。
上記の例で示されているように、オブジェクトのプロパティには他のオブジェクトへの参照を含むことができます。

#### **`Noodl.Object.exists(id)`**

指定されたIDのオブジェクトがNoodl.Object.getまたはNoodl.Object.createで作成されている場合、trueを返します。

#### **`object.on(event, listener)`**

#### **`object.off(event, listener)`**

オブジェクトからイベントリスナーを追加および削除します。
サポートされているイベント：

- `change` - オブジェクトの任意のプロパティが変更された
- `add` - オブジェクトが配列に追加された
- `remove` - オブジェクトが配列から削除された

使用例：

```js
myObject.on("change", function (args) {
  // 名前がargs.nameのプロパティが変更された
  // 新しい値はargs.valueに
  // 古い値はargs.oldに
});

myObject.on("add", function (args) {
  // オブジェクトが配列args.arrayに追加された
});

myObject.on("remove", function (args) {
  // オブジェクトが配列args.arrayから削除された
});
```

#### **`object.getId()`**

オブジェクトのIDを返します。

#### **`object.set(name, value, options)`**

オブジェクトのプロパティを設定します。プロパティの名前と値を関数に提供する必要があります。

`myObject.set('myProp1', 44)`

これはオブジェクトのプロパティを直接設定することと同等です：

`myObject.myProp1 = 44`

オプションで、ドット表記を使用してサブプロパティを設定することができます。
オブジェクトのプロパティが別のオブジェクトである場合、そのオブジェクトのプロパティを設定することができます
例えば、`myProp3.anotherProp`。これを有効にするには、オプション`{resolve: true}`を提供する必要があります。

`myObject.set('myProp3.anotherProp', 50, {resolve: true})`

#### **`object.setAll(data)`**

この関数は、指定されたオブジェクトのすべてのプロパティに対してsetを実行します。
これは、データオブジェクトのすべてのプロパティに対してsetを呼び出すことと同等です。
`id`プロパティの更新はサポートされておらず、無視されます。

```js
// Noodlオブジェクトを作成
Noodl.Object.create({
  id: "ユニーク",
  valueA: 1,
  valueB: 2,
});

// このオブジェクト、Noodl.Objects["ユニーク"]
// は現在 {valueA: 1, valueB: 2} を含んでいます

// setAllを呼び出すと
Noodl.Objects["ユニーク"].setAll({
  valueA: 3,
});

// オブジェクトは次のようになります：
// {valueA: 3, valueB: 2}
```

#### **`object.fill(value)`**

この関数は、現在のすべてのプロパティを新しい値に設定しますが、idを除きます。

```js
// Noodlオブジェクトを作成
Noodl.Object.create({
  id: "ユニーク",
  valueA: 1,
  valueB: 2,
});

// このオブジェクト、Noodl.Objects["ユニーク"]
// は現在 {valueA: 1

, valueB: 2} を含んでいます

// setAllを呼び出すと
Noodl.Objects["ユニーク"].fill(5);

// オブジェクトは次のようになります：
// {valueA: 5, valueB: 5}
```

#### **`object.get(name, options)`**

指定された名前のプロパティの値を返します。
set関数と同様に、オブジェクトが別のオブジェクトをプロパティとして持っている場合、オプション`{resolve: true}`が提供されている場合にドット表記が使用できます。

`myObject.get('myProp3.anotherProp', {resolve: true})`

これは直接プロパティを読むことと同等です：

`myObject.myProp3.anotherProp`