---
hide_title: true
hide_table_of_contents: true
title: コンポーネント
---

# コンポーネント

**フロントエンドでのみ利用可能**  
`Component` オブジェクトは、[Function](/nodes/javascript/function) および [Script](/nodes/javascript/script) ノードでのみ利用可能であり、**Function** や **Script** ノードが実行されているコンポーネントスコープに関連する内容を含んでいます。

`Component.Object` は現在のコンポーネントの [コンポーネントオブジェクト](/nodes/component-utilities/component-object) であり、他の [Noodl.Object](/javascript/reference/object) と同様に使用できます。これは通常、オブジェクトのプロパティにアクセスすることを意味します。プロパティを設定すると、このコンポーネントインスタンスの**コンポーネントオブジェクト**ノードがそれに応じて更新されます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/component/component-object.png)

</div>

上記の例では、_Update selection_ と呼ばれる **Function** ノードが **コンポーネントオブジェクト** を変更し、**Selection** のための新しい配列を作成しています。これは、コンポーネントオブジェクト内の **Checkboxes** 配列にアクセスし、その配列をフィルタリングおよびマッピングすることによって行われます。

```javascript
Component.Object.Selection = Component.Object.Checkboxes.filter(
  (o) => o.Checked
).map((o) => ({ Value: o.Value }));
```

`Component.ParentObject` は類似していますが、このオブジェクトは [親コンポーネントオブジェクト](/nodes/component-utilities/parent-component-object)、つまりビジュアル階層内の親コンポーネントの **コンポーネントオブジェクト** です。これも他の [Noodl.Object](/javascript/reference/object) と同様に使用されます。

`Component.RepeaterObject` このコンポーネントがリピーターのテンプレートである場合、このオブジェクトには、この特定のコンポーネントインスタンスに対応するアイテム配列のオブジェクトが含まれます。これは、以下に示すようにオブジェクトの **Id Source** を **From Repeater** に設定した場合と同じオブジェクトです。

<div className="ndl-image-with-background l">

![](/javascript/reference/component/from-repeater-props.png)

</div>

以下は、コンポーネント内のそのようなオブジェクトの例です。

<div className="ndl-image-with-background l">

![](/javascript/reference/component/repeater-object.png)

</div>

このコンポーネントがリピーターによって使用されるテンプレートの直接的なものではなく、代わりにサブコンポーネントである場合でも、オブジェクトにアクセスすることができます。オブジェクトは、コンポーネントのインスタンス親チェーンに沿って解決され、リピーターテンプレートインスタンスであるコンポーネントに到達します。