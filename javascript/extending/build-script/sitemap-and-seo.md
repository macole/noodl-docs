---
title: サイトマップと静的ページの生成用ビルドスクリプト
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# サイトマップと静的ページの生成

SEOにとって非常に重要なのが`sitemap.xml`の存在です。
これにより、検索エンジンはウェブサイトの良いマップを作成できます。

Noodlでは、ビルド後にファイルを変更するビルドスクリプトを作成できます。
この機能の本当にクールな点は、プロジェクトがどのように構築されたかに関する情報をすべて見つけることができ、
すべてのページノードを見つけて素敵なサイトマップを生成し、さらに静的なindex.htmlファイルを作成してSEOをさらに向上させることができることです！

## 例

ここに、すべてのページからサイトマップを生成するスクリプトの2つの例を示します。

### Sitemap.xmlのための静的ページ

動的ページがない場合、このスクリプトは非常に簡単に使用できます。

```js
const fs = require("fs");

/**
 * サイトマップXMLを構築するのに役立つSitemapクラス。
 */
class Sitemap {
  constructor() {
    this.urls = [];
  }

  add(entry) {
    this.urls.push(entry);
  }

  toXml() {
    let xml = `<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >`;

    xml += this.urls
      .map((item) => {
        let entry = `<url>`;
        Object.keys(item).forEach((key) => {
          entry += `<${key}>${item[key]}</${key}>`;
        });
        return entry + `</url>`;
      })
      .join("");

    return xml + `</urlset>`;
  }
}

module.exports = {
  async onPostBuild(context) {
    /**
     * this.getPages()は、すべてのページのフラットな配列を返します。
     * 例えば、以下のように：
     *
     *  [
     *      {
     *          title: "ページのタイトル",
     *          path: "/path-1/path-2",
     *      }
     *  ]
     *
     */
    const pages = await context.getPages();

    // Sitemapクラスを作成
    const sitemap = new Sitemap();

    // すべてのページをループ
    pages.forEach((page) => {
      // サイトマップに使用したいタグとともにページを追加
      //
      // ここに使用できるタグの種類があります：
      // https://www.sitemaps.org/protocol.html
      sitemap.add({
        // 注：この例では、pathは絶対URLではないため、サイトマップが正しく機能するためには必要です。
        loc: page.path,
        changefreq: "weekly",
        priority: 0.5,
      });
    });

    // sitemap.xmlをoutputPathに書き込む
    //
    // クラウドサービス経由でデプロイする場合、
    // このファイルもアップロードされます。
    await fs.promises.writeFile(
      `${context.outputPath}/sitemap.xml`,
      sitemap.toXml()
    );
  },
};
```

### Sitemap.xmlのための動的ページ

このものを動かすためには、Noodlが動的ページに必要な情報を理解するために必要な情報を提供する必要があります。

```js
// 「getPages」メソッドにもっと情報を送ることができます。
const pages = await context.getPages({
  // 変数があるページごとに呼び出される非同期関数。
  async expandPaths(route) {
    // 現在のページのパスをチェック。
    if (route.current.path === "page-3/{id}") {
      // 拡張されたパスのリストを返す。
      return [
        {
          title: "私のカスタムタイトル",
          path: "page-3/0",
          meta: {
            description: "私の説明",
            keywords: "",
          },
        },
        {
          path: "page-3/1",
        },
        {
          path: "page-3/2",
        },
      ];
    }

    // デフォルト値を返す。
    // パスに変数がある場合にのみ呼び出されます。
    // ここでは無効なパスを返しています。
    return [
      {
        path: route.current.path,
      },
    ];
  },
});

// ...

// ページのメタデータにアクセスするには
// pages[0].metaを呼び出す
```

### 静的ページの生成

Sitemap.xmlのための動的ページの前の例を拡張できます。
この場合、すべての情報を取得し、各ページに対してindex.htmlファイルを書き込みたいと考えています。

```js
const fs = require('fs');
const path = require('path');

// ...

// すべてのページをループ
for (let index = 0; index < pages.length; index++) {
  const page = pages[index];

  // 新しいindex.htmlファイルを保存したいファイルパスを作成。
  const page

Dir = path.join(context.outputPath, page.path);

  // カスタムタイトルとheadcodeを使ってindex.htmlファイルを生成。
  const content = await context.createIndexPage({
    title: page.title,
    headCode: `
      <meta name="description" content="${page.meta.description}">
      <meta name="keywords" content="${page.meta.keywords}">
    `,
  });

  // パスへのすべてのフォルダを作成。
  await fs.promises.mkdir(pageDir, {
    recursive: true,
  });

  // 新しいindex.htmlファイルを保存。
  await fs.promises.writeFile(path.join(pageDir, "index.html"), content);
}
```