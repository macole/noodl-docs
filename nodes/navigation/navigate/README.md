---
hide_title: true
hide_table_of_contents: true
title: Navigateノード
---

{/*##head##*/}

# Navigateノード

このノードは、<span className="ndl-node">[Page](/nodes/navigation/page)</span>ノード間でナビゲートするために使用され、<span className="ndl-node">[Page Router](/nodes/navigation/page-router)</span>で設定されます。

<div className="ndl-image-with-background l">

![](/nodes/navigation/navigate/navigate-page-inputs.png)

</div>

ナビゲート先の<span className="ndl-node">Page</span>にパラメータを渡すために、[Page Inputs](/nodes/navigation/page-inputs)ノードを使用できます。追加した<span className="ndl-data">Path Parameters</span>または<span className="ndl-data">Query Parameters</span>は、その<span className="ndl-node">Page</span>を<span className="ndl-data">Target Page</span>として選択すると、<span className="ndl-node">Navigate</span>ノードの入力として表示されます。

{/*##head##*/}

## 入力

<div className="ndl-table-35-65">

| データ                                              | 説明                                                                                                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Router</span>          | この**Navigation**ノードが作用する**Page Router**をここで選択します。この入力は、プロジェクト内に複数の**Page Routers**がある場合のみ利用可能です。 |
| <span className="ndl-data">Target Page</span>     | ナビゲートする**Page**をここで選択します。利用可能なページは、この**Navigation**ノードが関連付けられている**Page Router**に基づきます。                     |
| <span className="ndl-data">新しいタブで開く</span> | 新しいページを新しいブラウザタブで開きます。                                                                                                                              |

| シグナル                                       | 説明                                                                                                       |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigate</span> | {/*##input:navigate##*/}この入力にシグナルを送ると、**Target Page**へのナビゲーションが実行されます。{/*##input##*/} |

| ミックス               | 説明                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Page Parameters** | **Page**が使用する[Pages Inputs](/nodes/navigation/page-inputs)で設定されたページパラメータは、**Navigate**ノード上で入力として利用可能になります。 |

<span className="hidden-props-for-editor">{/*##input:pm-\*##*/} **Target Page**の**Page Inputs**ノードから発生する入力パラメータです。{/*##input##*/}</span>

</div>

## 出力

<div className="ndl-table-35-65">

| シグナル                                        | 説明                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigated</span> | {/*##output:navigated##*/}ナビゲーションが実行されたときにトリガーされるイベントです。{/*##output##*/} |

</div>