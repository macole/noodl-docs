---
title: ビルドスクリプトの作成
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# ビルドスクリプト

Noodlでは、エディタからトリガーされるさまざまなビルドイベントにフックする方法があります。

:::danger

これは実験的な機能であり、将来変更される可能性があります。

:::

### どこで使用するか？

- [サイトマップと静的ページの生成](/javascript/extending/build-script/sitemap-and-seo)
- [ビルド時のノード変更](/javascript/extending/build-script/change-nodes-at-build-time)

## ビルドスクリプトの作成

ビルドスクリプトを追加するには、プロジェクト内のフォルダに配置する必要があります。
ファイルが `.build.js` で終わる限り、Noodlによって検出されます。

ビルドスクリプトの実行順序は、アルファベット順に基づいています。

```
my-noodl-project/
    .noodl/
        build-scripts/
            [ここ]
```

### 例

ここに、リッスンできるイベントの例を示します：

```js
module.exports = {
  async onPreBuild(context) {
    // ビルド前に発生します。
  },
  async onPostBuild(context) {
    // ビルド後に発生します。
  },
  async onPreDeploy(context) {
    // ビルドがデプロイされる前に発生します。
  },
  async onPostDeploy(context) {
    // ビルドがデプロイされた後に発生します。
  },
};
```

## Context（コンテキスト）とは？

Contextは各メソッドで少し異なりますが、
一般的には同じメソッドを持っています。

:::note

後日、さらなるドキュメントが追加されます！

:::

### 一般

```ts
project: ProjectModel;

environment: {
  name: string;
  description: string;
  masterKey: string;
  appId: string;
} | undefined;

/**
 *
 * @param options
 * @param callback
 */
activity(options: { message: string; successMessage?: string; }, callback: () => Promise<void>): Promise<void>;

/**
 *
 * @param type
 * @param message
 */
notify(type: 'notice' | 'success' | 'error', message: string): void;

/**
 * 絶対パスでのすべてのページのリストを返します。
 *
 * @returns [
 *    {
 *      title: "ページのタイトル",
 *      path: "/path-1/path-2",
 *      meta: {}
 *    },
 *    // ...
 *  ]
 */
getPages(options: {
  expandPaths?: (route: RouteNode) => Promise<string[]>;
}): Promise<readonly PageObject[]>;

/**
 * ウェブアプリ用に作成されたindex.htmlページを作成します。
 *
 * @returns HTMLコードを含む文字列。
 */
createIndexPage(options: {
  /**
   * プロジェクト設定からのタイトルをオーバーライドします。
   *
   * デフォルト: undefined
   */
  title?: string;

  /**
   * プロジェクト設定からのheadcodeを追加します。
   *
   * デフォルト: undefined
   */
  headCode?: string;
}): Promise<string>;

/**
 * ノードのトラバーサルグラフを返します。
 *
 * @param selector
 * @returns
 */
graphTraverse(
  selector: (node: NodeGraphModel.Node) => boolean,
  options: NodeGraphTraverserOptions
): NodeGraphTraverser;
```