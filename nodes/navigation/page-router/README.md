---
hide_title: true
hide_table_of_contents: true
title: Page Routerノード
---

{/*##head##*/}

# Page Routerノード

このノードを使用すると、<span className="ndl-node">[Navigate](/nodes/navigation/navigate)</span>や<span className="ndl-node">[Navigate To Path](/nodes/navigation/navigate-to-path)</span>ノードを使用して、<span className="ndl-node">[Page](/nodes/navigation/page)</span>ノード間をナビゲートできます。また、<span className="ndl-node">[External Link](/nodes/navigation/external-link)</span>ノードを使用して、アプリの外部のページにナビゲートすることもできます。

[Component Stack](/nodes/component-stack/component-stack-node)といくらか似ているが、**Page Router**はウェブタイプのナビゲーション（アプリタイプとは対照的に）に最適化されており、ナビゲーションの一部としてURLとルーティングを使用し、ブラウザの履歴を利用します。

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/page-router-1.png)

</div>

すべての<span className="ndl-node">Page Router</span>には<span className="ndl-data">Start Page</span>があります。ページは<span className="ndl-node">Page Router</span>内にレンダリングされます。<span className="ndl-node">Page Router</span>がそのコンテンツをどのようにラップするかを決定するために、<span className="ndl-data">Clip Behavior</span>オプションを使用できます。

{/*##head##*/}

## 実装

**Page Router**は標準的なブラウザナビゲーションを使用しており、これはユーザーがブラウザの**Back**ボタンを使用して**Page Router**の履歴を戻ることができることを意味します。

**Page Router**は[Pages](/nodes/navigation/page)間のみをナビゲートします。**Pages**はノードピッカーを通じて作成することはできません。コンポーネントサイドバーの**Create Page**を使用して作成します。

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/create-page.png)

</div>

**Pages**を作成すると、プロジェクトに複数の**Page Routers**がない限り、自動的に**Page Router**に追加されます。複数の**Page Routers**がある場合は、手動で所属する場所に追加する必要があります。

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/pages-in-router.png)

</div>

## スタートページ

**Page Router**にページを作成して追加するときは、**Page Router**のプロパティ内のページ項目のメニューを開いて「_Make Start Page_」を選択することで、そのページのうちの1つをスタートページとして設定する必要があります。

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/make-start-page.png)

</div>

## ナビゲーション

### Page RoutersとPagesへのURL

Noodlは、**Page Router**を特定の**Page**にルーティングするためにURLを使用します。**Page Router**にはオプションで**URL Path**を持つことができます。各ページには、そのページへのURLルートを一意に識別する**URL Path**もあります。

一般的に、**Page**へのルートは以下のようになります

`<domainname>#/<route1>/<route2>/<route3>...`

ここで、`<domainname>`はアプリをホストしているドメインであり、各`<route>`は**Page Router**または**Page Router**内の**Page**のいずれかを指します。`<route>`には**Page Parameter**と**Query Parameters**も含まれる場合があります（以下参照）。

たとえば、**URL Path**が'myrouter'の**Page Route**があり、**URL Paths** _page1_ と _page2_ の2つの可能なページがある場合、2つの可能なルートがあります：`myrouter/page1` と `#myrouter/page2`です。ルートの始まりには常に'#'文字が追加されることに注意してください。例えば、Noodlアプリが`app.mynoodlapps.com`ドメインにデプロイされている場合、ブラウザに`https://app.mynoodlapps.com#myrouter/page2`を入力すると、**URL Path** _myrouter_ の**Page Router**が**URL Path** _page2_ の**Page**にナビゲートします。

### Navigationノードを使用したナビゲーション

アプリ内のページ間をナビゲートする最も直接的な方法は、[Navigate](/nodes/navigation/navigate)ノードを使用することです。このノードは、**Navigation**ノードで選択された**Page**にナビゲートします。これにより、そのページを指すルートにブラウザのURLが更新されます。また、[Navigate To Path](/nodes/navigation/navigate-to-path)ノードを使用すると、例えば複数の**Page Routers**を同時にナビゲートするために完全なURLパスを指定することができます。

## 複数のPage Routers

必要に応じて、複数の**Page Routers**を同時に使用できます。これは、たとえば、上位レベルのナビゲーションフロー内に

複数のナビゲーションフローがある場合に使用できます。例えば、_Home_、_Settings_、_Content_のページ間でのトップレベルナビゲーションと、各セクション内の特定のページへのサブナビゲーションを持つ場合があります。

![](/nodes/navigation/page-router/multi-router.png)

@include "../_common-navigation.md"

## ビジュアルな外観

**Page Router**はビジュアルノードです。現在のレイアウトで利用可能なすべてのスペースを自動的に拡張しますが、その**Clipping Behavior**が**Expand To Content Size**に設定されている場合は、表示している**Page**のサイズと同じサイズになります（利用可能な場合）。

## 入力

| データ                                               | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">名前</span>             | {/*##input:name##*/}**Page Router**の名前です。複数の**Page Routers**がある場合、名前を使用してそれらを識別します。{/*##input##*/}                                                                                                                                                                                                                                                                                                                                                          |
| <span className="ndl-data">URLパス</span>         | {/*##input:urlPath##*/}URLに向かってルーティングする際の**Page Router**のオプションのパスです。{/*##input##*/}                                                                                                                                                                                                                                                                                                                                                                                               |
| <span className="ndl-data">クリップ動作</span>    | {/*##input:clip##*/}このプロパティは、**Page Router**のサイズとクリッピング動作を制御します。3つの可能な値があります: **Expand To Content Size**、**Scroll**、**Clip Content**。{/*##input##*/}<br/><br/>`Expand To Content Size`: **Page Router**のサイズを、現在表示している**Page**のサイズに合わせて変更します。<br/>`Scroll`: **Page Router**ができるだけ多くのスペースを取るようにします。**Page Router**内に収まらない**Page**はスクロール可能になります。 |
| <span className="ndl-data">背景色</span> | {/*##input:backgroundColor##*/}**Page Router**を覆っている**Page**がないとき、または**Page**が透明の場合に表示される色です。{/*##input##*/}                                                                                                                                                                                                                                                                                                                                     |
| <span className="ndl-data">マウント済み</span>          | {/*##input:mounted##*/}このプロパティは、ノードをDOMから完全に削除するために使用されます。このプロパティがfalseに設定されている場合、ノードはDOMから削除されます。_Visible_プロパティとは異なり、ノードはDOMの一部でありながらも見えなくなります。{/*##input##*/}                                                                                                                                                                                                                                   |

| シグナル                                    | 説明                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">リセット</span> | {/*##input:reset##*/}このアクションをトリガーすると、**Page Router**がリセットされ、スタートページが表示されます。{/*##input##*/} |

### ビジュアル

このノードは、[Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/)から[Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)ガジェットもサポートしています。

## 出力

| データ                                                 | 説明                                                                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">現在のページタイトル</span> | {/*##output:current page title##*/}この**Page Router**で現在表示されているページのタイトルです。{/*##output##*/} |

### ビジュアル

このノードは、以下の[Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/)をサポートしています：

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>