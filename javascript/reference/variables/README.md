---
hide_title: true
hide_table_of_contents: true
title: Noodl.Variables
---

# Noodl.Variables

変数は、Noodlにおける最も単純な形のグローバルデータモデルです。変数についての詳細は、[ガイド](/docs/guides/data/variables)で学ぶことができます。`Noodl.Variables` オブジェクトを通じて、アプリケーション内のすべての変数にアクセスできます。変数を変更すると、プロジェクト内の対応する変数名を持つすべての **Variable** ノードのすべての接続が更新されます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/variables/variables.png)

</div>

```javascript
// これにより、MyVariable という名前の変数が変更され、
// プロジェクト内のすべての変数ノードがトリガーされます
Noodl.Variables.MyVariable = "こんにちは";

// 変数名にスペースがある場合はこれを使用します
Noodl.Variables["My Variable"] = 10;

Noodl.Variables.userName = "Mickeeeey";

// 変数の読み取り
console.log(Noodl.Variables.userName);
```