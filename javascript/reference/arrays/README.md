---
hide_title: true
hide_table_of_contents: true
title: Noodl.Arrays
---

# Noodl.Arrays

**フロントエンドでのみ利用可能**  
Noodlのグローバルデータモデルの第三部分は、配列です。各配列は`Noodl.Arrays`プレフィックスを使用して、その**Id**によって参照されます。これはオブジェクトや変数と似ています。配列についての詳細は、[配列ガイド](/docs/guides/data/arrays)で学ぶことができます。配列を変更すると、対応する**Id**を持つすべての**Array**ノードの更新がトリガーされます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/arrays/arrays.png)

</div>

:::note
一般的に、Noodlの配列にはオブジェクトが含まれることを想定しています。他のものを配列に入れることを阻止するものはありませんが、
:::

```javascript
// これにより、IdがMyArrayの配列が変更され、そのIdを持つすべてのArraysノードが更新されます。
Noodl.Arrays.MyArray = [{ Hello: "There" }];

// 配列のIdにスペースがある場合はこれを使用します
Noodl.Arrays["レシピリスト"] = [{ Name: "ファンシーバーガー" }];

// 配列の読み取り
console.log(Noodl.Arrays.MyArray);

// 警告、このように配列にアクセスすることはできますが、これによってNoodlでの更新はトリガーされません。
// このように配列を変更することは避けるべきです。
Noodl.Arrays.MyArray.push({ Hello: "Again" });

// 代わりに、新しい配列を作成します。これにより、IdがMyArrayのすべてのArrayノードに更新がトリガーされます。
Noodl.Arrays.MyArray = Noodl.Arrays.MyArray.concat([{ Hello: "Again" }]);
```