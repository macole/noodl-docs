---
hide_title: true
hide_table_of_contents: true
title: Noodl.CloudFunctions
---

# Noodl.CloudFunctions

**フロントエンドでのみ利用可能**  
**Noodl.CloudFunctions** サービスを使用すると、Noodlのクラウド機能を呼び出すことができます。

#### **`Noodl.CloudFunctions.run(functionName, parameters)`**  
この関数はバックエンドのクラウド機能を呼び出します。

```javascript
const result = await Noodl.CloudFunctions.run("myFunctionName", {
  SomeParamater: "yes",
});
```