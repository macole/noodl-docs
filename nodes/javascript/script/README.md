---
hide_title: true
hide_table_of_contents: true
title: スクリプトノード
---

{/*##head##*/}

# スクリプト

このノードを使用すると、アプリケーションに複雑なJavaScriptを追加できます。
APIについて詳しく知るために、[スクリプトガイド](/docs/guides/business-logic/javascript)を参照してください。
しかし、覚えておいてください - 大きな力には大きな責任が伴います。

<div className="ndl-image-with-background l">

![](/nodes/javascript/script/script.png)

</div>

ほとんどの場合、カスタムJavaScriptにはよりシンプルな<span className="ndl-node">[Function](/nodes/javascript/function)</span>ノードを使用した方が良いでしょう。

## 入門

Javascript [ガイド](/docs/guides/business-logic/javascript)を読むと、それがどのように機能するかの広い理解を得ることができます。

ここでは、ノードグラフ内で呼び出すことができる関数を作成する例を示します：

```js
Script.Inputs = {
  Prefix: "string",
  Value: "number"
};

Script.Outputs = {
  Done: "signal",
  Value: "string",
};

Script.Signals.MyFunction = function (value) {
  // JavaScriptコードを実行する
  
  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;
  Script.Outputs.Done();
};
```

これは、`MyFunction`シグナルを呼び出さなくてもsetterを使用して行うこともできます。

```js
Script.Inputs = {
  Prefix: "string",
  Value: "number"
};

Script.Outputs = {
  Done: "signal",
  Value: "string",
};

function onChange() {
  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;
  Script.Outputs.Done();
}

Script.Setters.Prefix = onChange;
Script.Setters.Value = onChange;
```

### ノードがアンマウントされたときの処理

ノードが異なるページに移動するなどしてアンマウントされると、`OnDestroy`メソッドが呼び出されます。
このメソッドでは、アプリのパフォーマンスを保つために、リスナーやライブラリのクリーンアップを行うことができます。

```js
Script.OnDestroy = function () {
  // ノードがアンマウントされたときに呼び出される
}
```

{/*##head##*/}

## 入力

入力は、スクリプトの内容やプロパティで明示的に入力を指定することによって定義されます。
詳細については、javascript [ガイド](/docs/guides/business-logic/javascript)を参照してください。

## 出力

出力は、スクリプトの内容やプロパティで明示的に出力を指定することによって定義されます。
詳細については、javascript [ガイド](/docs/guides/business-logic/javascript)を参照してください。