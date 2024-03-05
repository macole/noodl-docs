---
title: プロジェクト構造
hide_title: true
---

# プロジェクト構造

プロジェクトフォルダは次のパスで見つけることができます：

Windowsパス：
```
%AppData%\Roaming\Noodl\projects
```

MacOSパス：
```
~/Library/Application Support/Noodl/projects
```

Noodl内のプロジェクト設定でこのボタンを使用して、プロジェクトを開くこともできます。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/open_project_folder.png)

</div>

## 何がデプロイされますか？

プロジェクトフォルダ内のすべてのファイルは、いくつかの例外を除いてフロントエンドにデプロイされます。

無視されるいくつかのファイルのリスト：
```
.gitattributes
.gitignore
project.json
```

無視されるいくつかのフォルダのリスト：
```
.git/
.noodl/
```

_これらのリストは完全ではない可能性があります。_

アプリをデプロイする際、NoodlはReactライブラリなどのいくつかの新しいファイルも追加します。