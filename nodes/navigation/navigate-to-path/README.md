---
hide_title: true
hide_table_of_contents: true
title: Navigate To Pathノード
---

{/*##head##*/}

# Navigate To Pathノード

このノードを使用すると、<span className="ndl-node">[Page Router](/nodes/navigation/page-router)</span>内の特定の<span className="ndl-node">[Page](/nodes/navigation/page)</span>ノードにナビゲートできます。

<div className="ndl-image-with-background l">

![](/nodes/navigation/navigate-to-path/navigate-to-path.png)

</div>

ほとんどの場合、ナビゲーションには<span className="ndl-node">[Navigate](/nodes/navigation/navigate)</span>または<span className="ndl-node">[External Link](/nodes/navigation/external-link)</span>ノードを使用することをお勧めします。Navigate To Pathノードは、より高度で特定のユースケースに適した低レベルの実装です。

{/*##head##*/}

## 使い方

ナビゲーションを実行する**Page Router**を指定する必要はありません。提供されたパスを使用して暗黙的に解決されます。例えば、**URL path**が`router1`の**Page Router**を持ち、**URL path**が`page1`の**Page**を持ち、その中に**URL path**が`pageA`の名前のない**Page**を含む場合、**Path**`/router1/page1/pageA/`を提供すると、2つの**Page Routers**がそれぞれのページにナビゲートします。

ある意味で、**Navigate To Path**はブラウザのアドレスバーに直接URLを書き込むようなものです。しかし、このノードはNoodlプロジェクト内の**Pages**間でナビゲートするためにのみ使用されます。外部URLにナビゲートしたい場合は、[External Link](/nodes/navigation/external-link)ノードを代わりに使用してください。

## 入力

<div className="ndl-table-35-65">

| データ                                               | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Path</span>             | {/*##input:path##*/}ナビゲートするパスを設定するためにこのプロパティを使用します。**Path**にはドメインを含めず、Noodlプロジェクト内のルートのみを含めるべきです。**Path**には、受信する**Page**に転送される**Path Parameter**を最後の部分として含めることができます。また、`{}`を使用して**Path**の一部を動的にし、その部分を入力として公開することができます。例えば、パス`/{a}/{b}/`は2つの新しい入力_a_と_b_を公開します。{/*##input##*/} |
| <span className="ndl-data">Query Parameters</span> | 受信する[Page](/nodes/navigation/page/)に転送される任意の数の**Query Parameters**を追加できます。これらは、[Page](/nodes/navigation/page-inputs/)ノードを通じて転送されます。                                                                                                                                                                                                                                                                                      |
| <span className="ndl-data">新しいタブで開く</span>  | 新しいページを新しいブラウザタブで開きます。                                                                                                                                                                                                                                                                                                                                                                                                                                |

| シグナル                                       | 説明                                                                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigate</span> | {/*##input:navigate##*/}この入力にシグナルを送ると、提供された**Path**に従ってナビゲーションが実行されます。{/*##input##*/} |

<span className="hidden-props-for-editor">{/*##input:q-\*##*/}受信する**Page**ノードに転送される**Query Parameter**です。これは、**Page Inputs**ノードを通じて転送されます。{/*##input##*/}</span>

<span className="hidden-props-for-editor">{/*##input:p-\*##*/}**Path**の一部となる**Path Parameter**です。{/*##input##*/}</span>

</div>