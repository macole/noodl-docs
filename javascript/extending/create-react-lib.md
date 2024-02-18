---
hide_title: true
hide_table_of_contents: true
title: Reactでビジュアルノードを作成する
---

# Reactでビジュアルノードを作成する

NoodlはReactで構築されているため、カスタムまたはコミュニティのReactコンポーネントをプロジェクトに簡単に追加できます。このガイドでは、Reactライブラリを一から作成し、それをNoodlプロジェクトにプッシュする方法を説明します。

## セットアップ

このガイドを完了するためには、_Noodl CLI_をインストールし、モジュールをプロジェクトにプッシュする方法を学ぶ必要があります。まず[このガイド](/javascript/extending/create-lib)を確認してください。

CLIツールを使用すると、テンプレートから新しいreactライブラリモジュールを簡単に作成できます：

```bash
noodl-cli new react-lib ./my-react-lib
```

作成されるディレクトリ名を指定する必要があります。そのディレクトリには、開始に必要なすべてが含まれます。上記のコマンドを使用すると、_my-react-lib_ディレクトリが作成されます。

新しく作成されたディレクトリには以下の構造があります：

```
my-react-lib/
    module/
    project/
    tests/
    icon.png
    module.json
```

紹介された[ガイド](/javascript/extending/create-lib)と同様に、**project**と**tests**のサブフォルダが含まれており、これらをNoodlにインポートすることができます。特に**tests**フォルダは、ライブラリを試して、コンポーネントが期待通りに動作していることを確認するための良い場所です。

:::note
**project**と**tests**フォルダの名前を変更しないことが重要です。_module_フォルダ内のビルドスクリプトはこれらの名前に依存しており、名前を変更するとモジュールが正しくビルドされず、プロジェクトで使用できなくなります。
:::

## コードの概要

これで、テンプレートから新しいReactライブラリモジュールを作成し、Noodlにプッシュしました。少しコードを見てみましょう。

Reactのコードは**module**ディレクトリ内にあります。

```
my-react-lib/
    module/
        src/
            index.js
        assets/
            manifest.json
        package.json
        webpack.config.js
    project/
        ...
```

お気に入りのエディタで_index.js_を開きます。このファイルには、シンプルなReactコンポーネントとそのNoodlへのエクスポートが含まれています。Noodlでビジュアルコンポーネントとして公開したい各コンポーネントは、エクスポートする必要があります。

まず、シンプルなReactコンポーネント：

```javascript
function MyCustomReactComponent(props) {
  const style = {
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    borderRadius: '10px',
    padding: '20px',
    marginBottom: props.marginBottom,
  };

  return (
    <div style={style} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
```

次に、コンポーネントをNoodlにエクスポートする方法：

```javascript
const MyCustomReactComponentNode = Noodl.defineReactNode({
  name: 'Custom React Component',
  category: 'Tutorial',
  getReactComponent() {
    return MyCustomReactComponent;
  },
  inputProps: {
    backgroundColor: { type: 'color', default: 'white' },
    marginBottom: {
      type: { name: 'number', units: ['px'], defaultUnit: 'px' },
      default: 10,
    },
  },
  outputProps: {
    onClick: { type: 'signal', displayName: 'Click' },
  },
});
```

紹介[ガイド](/javascript/extending/create-lib)で説明されているような、シンプルなNoodlノードを指定する方法に加えて、_getReactComponent_関数を提供する必要があります。これはReactコンポーネントを返します。また、Reactノードのプロパティにマッピングされ、Noodlノードの入力と出力になる_inputProps_と_outputProps_も指定できます。

Reactでの出力は通常、コールバック経由で行われます。これらのコールバックをキャプチャし、Noodlの出力として提供することができます。

最後に、モジュール宣言の一部としてコンポーネントを提供します。ここでは、Noodlがそれをビジュアルノードとして認識するように、_reactNodes_セクションの下に置く必要があります。

```javascript
Noodl.defineModule({
  reactNodes: [MyCustomReactComponentNode],
  nodes: [],
  setup() {
    //これはスタートアップ時に一度呼ばれます
  },
});
```