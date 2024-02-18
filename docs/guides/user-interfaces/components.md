---
title: コンポーネント
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# コンポーネント

## このガイドで学べること

このガイドでは、再利用可能なUIコンポーネントを作成するための視覚的コンポーネントの作成方法について学びます。これは、後ほど学ぶデータに接続された動的なユーザーインターフェイスを作成するために不可欠です。

## 視覚的コンポーネントの作成

視覚的コンポーネントは、再利用可能なユーザーインターフェイスの一部です。新しい視覚的コンポーネントは、**コンポーネントパネル**を使用して作成します。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/create-component.mp4")}/>
</div>

次に、それに名前を付けると、コンポーネントリストと視覚的キャンバスに表示されます。新しく作成された視覚的コンポーネントには、単一のルート**グループ**ノードのみが含まれています。コンポーネントの作成が完了したら、すでに学んだように作業を開始するか、再利用可能にしたい他のコンポーネントからUI要素をカットアンドペーストすることができます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/cut-n-paste.mp4")}/>
</div>

コンポーネントが完成したら、コンポーネントパネルからドラッグして、アプリケーションのユーザーインターフェイスのどこにでも再利用することができます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/drag-component.mp4")}/>
</div>

好みに応じて、ノードピッカーでもコンポーネントを見つけることができます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/components/create-from-node-picker.png)

</div>

## コンポーネントの入力と出力

それはかなり便利なテクニックです。これで、自分自身の再利用可能なUIコンポーネントを作成することができます。しかし、それらをテンプレートに変えて、作成するUIコンポーネントのインスタンスごとにいくつかのことを変更できるようにすると、さらに強力になります。ここで**コンポーネント入力**が登場します。これは、コンポーネント内のいくつかのノードの特定の入力を、コンポーネントインスタンスの入力として公開できる概念です。これは**コンポーネント入力**ノードを使用して行われます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/components/component-inputs.png)

</div>

このノードのプロパティを編集すると、**ポート**を追加できることがわかります。各ポートは、アプリケーションでコンポーネントを使用するときに、コンポーネントインスタンスの入力（およびプロパティ）になります。この例では、**ラベル**と**ボタンカラー**という2つの**ポート**を作成します。

<div className="ndl-image-with-background m">

![](/docs/guides/user-interfaces/components/create-input.png)

</div>

それが完了したら、**コンポーネント入力**ノードから、各**ポート**を接続したい入力に接続を行うことができます。

- **ラベル**ポートは**テキスト**ノードの**テキスト**入力に接続したいです。
- **ボタンカラー**ポートは**ボタン**ノードの**背景色**に接続したいです。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/connect-inputs.mp4")}/>
</div>

新しいコンポーネント入力が配置されると、ポートがコンポーネントインスタンスのプロパティとして表示され、個別にカスタマイズすることができます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/edit-inputs.mp4")}/>
</div>

これは、コンポーネントの出力についても同様に機能し、代わりに**コンポーネント出力**ノードを使用するだけです。これは、UIコントロールを介して何らかのユーザー入力を受け入れるUIコンポーネントを作成するときに非常に便利です。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/components/component-outputs.png)

</div>

コンポーネントの入力と出力、およびこれらに接続することは、再利用可能なUIコンポーネントを作成するためだけでなく、データをユーザーインターフェイスに接続し、動的なデータ駆動型アプリ

ケーションを作成する上でのコアコンセプトでもあります。これについては、[データの操作](/docs/guides/data/overview)セクションで詳しく見ていきます。

## シート

アプリケーションが成長するにつれて、ますます多くのコンポーネントが作成され、やがてビジュアルキャンバスが混雑してくることがあります。このような場合は、アプリケーションをシートに整理するとよいでしょう。各シートは、より多くのコンポーネントを配置できる新しい空のビジュアルキャンバスです。新しいシートを作成するには

<div className="ndl-image-with-background m">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/components/create-sheet.mp4")}/>
</div>

コンポーネントをシート間で移動するには、コンポーネントパネルからドラッグして、移動したいシートにドロップするだけです。