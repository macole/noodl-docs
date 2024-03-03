---
hide_title: true
hide_table_of_contents: true
title: Noodl.SEO
---

# Noodl.SEO

**Noodl.SEO** APIを使用すると、windowオブジェクトに直接アクセスせずにメタタグやドキュメントのタイトルを変更できます。これは、windowが存在しないサーバーサイドレンダリングで必要です。

:::info

これはすべてフロントエンドでのみ利用可能です。

:::

### リファレンス

#### **`Noodl.SEO.setTitle(value)`**  
この関数はウィンドウのタイトルを更新します。

#### **`Noodl.SEO.meta`**  
現在使用されているすべてのメタタグを取得します。

#### **`Noodl.SEO.clearMeta()`**  
現在存在するすべてのメタタグをクリアします。

#### **`Noodl.SEO.getMeta(key)`**  
キーで特定のメタタグを取得します。

#### **`Noodl.SEO.setMeta(key, value)`**  
キーと値でメタタグを設定します。