# モジュールマニフェスト

:::note

作業中

:::

このドキュメントは、manifest.jsonファイルに必要なすべてを知るために必要です。

# React と Node モジュール

```json
{
  "name": "名前",
  "main": "index.js",
  "dependencies": [
    "http ..."
  ],
  "runtimes": ["browser"]
}
```

## アイコンセット

```json
{
  "name": "Material Icons",
  "type": "iconset",
  "browser":{
    "stylesheets": ["https://fonts.googleapis.com/css2?family=Material+Icons"]
  },
  "iconClass": "material-icons",
  "icons": ["10k", ...]
}
```