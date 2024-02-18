---
title: ユーザーインターフェイスの基本を構築する
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# ユーザーインターフェイスの基本を構築する

## このガイドで学べること

このガイドでは、ビジュアルキャンバス内でコンポーネントを配置し、グループ化する方法を学びます。

## UI要素の追加
現在選択されているビジュアルコンポーネントにUIコントロールや他のUI要素（テキストなど）を追加するには、ビジュアルキャンバスの上部にある**[+]**アイコンをクリックします。これにより**ノードピッカー**が表示され、**UI要素**セクションに進むことができます。追加したい要素をクリックすると、現在選択されているコンポーネントに追加されます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/add-ui-control.mp4")}/>
</div>

## プロパティの編集
UI要素のプロパティを編集するには、ビジュアルキャンバス（または一般的にはノードグラフエディター）内の要素をクリックすると、プロパティパネルが表示されます。ここでは、UI要素のすべてのプロパティを編集できます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/edit-properties.mp4")}/>
</div>

## ビジュアル階層
コンポーネントにUI要素を追加すると、ノードグラフエディターにビジュアル階層が構築されていくのが見られます。すべてのUI要素は青いノードとして表されます。ノードエディターのビジュアル階層について知っておくと便利なことがいくつかあります。

- すべてのコンポーネントには、**単一のルート**UI要素が必要です。これは、ほとんどの場合**グループ**ノードです。

- ノードグラフエディター内のUI要素をホバーすると、ビジュアルキャンバス内でそれらを明らかにすることができます。

- 他のデザインツールのレイヤーパネルのように、階層を操作できます。

- **ノードピッカー**を表示するには、ノードグラフエディターで**右クリック**します。新しく作成されたUI要素を他のUI要素の子として配置したい場合は、親要素を右クリックして**ノードピッカー**を表示します。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/ui-heirarchy.mp4")}/>
</div>

## グルーピングとレイアウト
新しいコンポーネントの配置方法を学んだので、次に重要な概念であるグルーピングを学びましょう。これは、UI要素をグループ化し、グループ下の要素のレイアウトを制御する方法です。**ノードピッカー**を使用して新しいグループを作成し、階層内の望む位置に配置し、グループの下に配置したいUI要素を選択してドラッグアンドドロップします。

**グループ**ノードには、ユーザーインターフェイスのレイアウトに関する多くのオプションが用意されています。レイアウトとグループノードの詳細については、この[ガイド](/docs/guides/user-interfaces/layout)でさらに学ぶことができます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/grouping.mp4")}/>
</div>