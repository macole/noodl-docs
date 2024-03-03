---
title: ビルド時のノード変更
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# ビルド時のノード変更

:::note

これは2.7.xでの使用を推奨します。

2.6.xで使用する場合、現在のプロジェクトが変更され、
ビルド中に一時的ではなくなります。

:::

```js
module.exports = {
  async onPreBuild(context) {
    // すべての「Function」ノードを取得する
    const functionNodes = context.project.getNodesWithType('JavaScriptFunction');
    functionNodes.forEach((node) => {
      // スクリプト内のすべての「Hello World」を「Hello」に置き換える
      node.parameters.functionScript = node.parameters.functionScript
        .replace("Hello World", "Hello");
    });
  },
};
```