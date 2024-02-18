---
hide_title: true
hide_table_of_contents: true
title: 新しいコアノードを作成する
---

# 新しいコアノードを作成する

Noodlは非常に拡張性が高いです。開発者として、新しいモジュールを追加して新しい機能を提供したり、データへの接続を作成したり、プロジェクト用の新しいビジュアルコンポーネントを作成することができます。このガイドでは、Noodlコマンドラインツールの動作方法と、単一の新しいノードを含む拡張モジュールの作成方法を示します。このノードは、Noodlの標準コアノードのように振る舞い、表示されます。

:::note
このガイドでは、<a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>と<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">npm</a>がインストールされていることが必要です。
:::

## 概要

このガイドでは、**Noodlモジュール**の作成方法を説明します。Noodlモジュールには、プロジェクトで使用するための新しいコアノードを含めることができます。たとえば、既存のJavaScriptライブラリをラップして、Noodl内のノードとして公開することができます。

一般的なプロセスは次のとおりです

- モジュールのコードを書くための新しい**モジュールプロジェクト**を設定します。
- 開発中にプロジェクト内でモジュールをテストします。
- 完了したら、モジュールをビルドして使用したいプロジェクトにデプロイします。

## Noodl CLIのインストール

まず、Noodlコマンドラインインターフェイスをインストールする必要があります。CLIがまだインストールされていない場合は、npmを介してインストールできます。

```bash
npm install -g @noodl/noodl-cli
```

## モジュールプロジェクトの作成

CLIツールを使用すると、テンプレートから新しいNoodlモジュールを簡単に作成できます：

```bash
noodl-cli new lib ./my-noodl-module
```

作成されるディレクトリ名を指定する必要があります。ディレクトリには、開始に必要なすべてが含まれます。上記のコマンドを使用すると、_my-noodl-module_ディレクトリが作成されます。

新しく作成されたディレクトリには以下の構造があります：

```
my-noodl-module/
    module/
    project/
    tests/
    icon.png
    module.json
```

ライブラリモジュールの内容についていくつか注意点：

- **module**ディレクトリには、モジュールのソースコード、ビルドスクリプト、およびフォント、cssなどのアセットが含まれています。
- **project**と**tests**フォルダは無視してかまいません

まず、**module**ディレクトリに入り、必要な依存関係をインストールします：

```bash
cd module
```

```bash
npm install
```

モジュールがNPMを通じて他の外部ライブラリを使用する場合、それらもインストールされます。

## モジュールの開発

`module/src/index.js`ファイルを編集することで主にモジュールを開発します。開始時には、ボイラープレートとして使用できる例示コードが含まれています。NoodlモジュールSDKの公式ドキュメントは現在ありませんが、[こちら](https://github.com/noodlapp)でいくつかのモジュールのソースコードを見ることができます。

モジュールを開発している間、ソースコードに変更を加えるたびに自動的にパッケージ化され、プロジェクトにデプロイされるようにしたいでしょう。そのためにはまず、テストプロジェクトとなる新しいNoodlプロジェクトを作成する必要があります。それが完了したら、設定（歯車アイコン）をクリックして「プロジェクトフォルダを開く」を選択し、そのプロジェクトのローカルフォルダの場所を見つけます。

<div class="ndl-image-with-background m">

![](/javascript/extending/open-project-folder.png)

</div>

そのフォルダの完全なパスをコピーします。次のステップで必要になります。

次に、`/module/src/webpack.config.js`ファイルを開きます。このファイルには、モジュールをデプロイする場所が指定されています。テストプロジェクトにデプロイされるようにしたいので、`var outputPath = ...`を含む行を次のように更新します。

```javascript
var outputPath = path.resolve(
  '<プロジェクトの絶対パス>',
  'noodl_modules/' + pjson.name
);
```

次に、`modules/`フォルダにある

ターミナルウィンドウに戻り、以下を入力します。

```bash
npm run dev
```

これにより、開発モードが開始され、ソースコードに変更を加えるたびにモジュールが自動的に再ビルドされ、プロジェクトに再デプロイされます。

`module/src/index.js`のボイラープレートコードから始めた場合、プロジェクトには既にモジュールがあります。Noodlプロジェクトを閉じて再度開くか、ノードエディタにいるときにctrl+R（Windows）/ cmd+R（Mac）を押してリロードします。次に、ノードピッカーを開き、「外部ライブラリ」の下に新しいコアノードが表示されるはずです。

## モジュールコードの概要

_index.js_ファイルにはノードのコードが含まれています。お気に入りのエディタで開いてみてください。ファイルには、シンプルな新しいコアノードのためのボイラープレートコードが含まれています。さまざまなセクションを見てみましょう：

まず、Noodl SDKをインポートする必要があります。

```javascript
const Noodl = require('@noodl/noodl-sdk');
```

次に、新しいノードのコードを定義します。

```javascript
const MyFullNameNode = Noodl.defineNode({
  category: 'My Utils',
  name: 'Full Name',
  inputs: {
    FirstName: 'string',
    LastName: 'string',
  },
  outputs: {
    FullName: 'string',
  },
  changed: {
    FirstName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
    LastName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
  },
});
```

- ノードの**name**を指定する必要があります。これは、新しいノードを作成するときにリストに表示される名前です。
- 任意で**category**を指定することもできます。これもNoodlで新しいノードをポップアップする際に使用されます。

最後に、モジュールの仕様を定義する必要があります。

```javascript
Noodl.defineModule({
  nodes: [MyFullNameNode],
  setup() {
    //これはスタートアップ時に一度呼ばれます
  },
});
```

再び、GitHubで[Noodl Repo](https://github.com/noodlapp)をチェックして、いくつかのモジュール例を確認してください。

## モジュールのデプロイ

モジュールに満足したら、適切なデプロイを行うことができます。`modules/`フォルダにあるターミナルウィンドウに戻り、以下を入力します。

```bash
npm run build
```

これにより、モジュールの最適化バージョンがデプロイされます。別のプロジェクトでモジュールを使用したい場合は、`/module/src/webpack.config.js`のパスを変更して`npm run build`を再度実行してください。