---
hide_title: true
hide_table_of_contents: true
title: Noodl.Objects
---

# Noodl.Objects

**Variable**よりも上の階層にあるのが**Object**です。
これはNoodlオブジェクトのグローバルデータモデルです。
各オブジェクトは**Id**で参照され、一連のプロパティを含むことができます。
`Noodl.Objects`プレフィックスとその**Id**を使用して、プロジェクト内のすべてのオブジェクトにアクセスできます。
オブジェクトのプロパティを変更すると、対応する**Id**とプロパティを持つオブジェクトノードからのすべての接続がトリガーされます。
Noodlアプリケーションでのオブジェクトの使用方法とその詳細については、[こちら](/docs/guides/data/objects)で学ぶことができます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/objects/objects.png)

</div>

```javascript
// これにより、プロパティMyPropertyが変更されます
// idがMyObjectIdのオブジェクトのプロパティが変更され、
// プロジェクト内のすべてのオブジェクトノード（そのidを持つもの）がトリガーされます
Noodl.Objects.MyObjectId.MyProperty = "こんにちは";

// この表記法は、そのオブジェクトのidにスペースが含まれている場合に使用します
Noodl.Objects["Form Values"].input_text = "おっと";

Noodl.Objects["Form Values"]["スペースを含むプロパティ"] = 20;

// オブジェクトのプロパティを読み込む
console.log(Noodl.Objects.CurrentUser.Name);

// これにより、割り当てたオブジェクトのすべてのプロパティが
// id "SomeId" のオブジェクトに設定されます
// この方法では、idプロパティを設定することはできません。
// 割り当てるオブジェクトの一部である場合、そのプロパティは無視されます
Noodl.Objects.SomeId = { ... }
```