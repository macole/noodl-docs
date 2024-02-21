---
hide_title: true
hide_table_of_contents: true
title: Close Popupノード
---

{/*##head##*/}

# Close Popupノード

このノードは、以前に<span className="ndl-node">Show Popup</span>ノードで表示されたポップアップを閉じるために使用されます。<span className="ndl-signal">Close</span>入力へのシグナル送信により、ポップアップが閉じられ、コンポーネントインスタンスが削除されます。

<div className="ndl-image-with-background l">

![](/nodes/popups/close-popup/close-popup-1.png)

</div>

<span className="ndl-data">Result</span>値と<span className="ndl-signal">Close Action</span>シグナルを追加することで、ポップアップをトリガーしたコンポーネントにデータを返すこともできます。これは、ユーザーに何らかの入力やアクションを促すポップアップ、例えば**名前**、**確認**、または**キャンセル**などで典型的に使用されます。

{/*##head##*/}

### 結果と閉じるアクション

トリガー元のコンポーネントにデータを送り返すには、**Result**値と**Close Action**シグナルを追加します。結果値はデータを返すための入力となり、アクションはシグナルを返すためのシグナル入力になります。これは、例えば**名前**のような入力を取るポップアップや、ユーザーが**確認**や**キャンセル**のような異なるアクションを実行できる場合に特に便利です。

<div className="ndl-image-with-background">

![](/nodes/popups/close-popup/close-popup-2.png)

</div>

プロパティで結果と閉じるアクションを指定した後、対応する入力が**Close Popup**ノードに利用可能になります。

:::info

**Close Popup**は**Open Popup**が開いた同じコンポーネント内で呼び出す必要があります。

:::

<div className="ndl-image-with-background l">

![](/nodes/popups/close-popup/close-popup-3.png)

</div>

これらの**Result**値と**Close Actions**は、**Close Popup**ノードを含むコンポーネントを対象とする[Show Popup](/nodes/popups/show-popup)ノードの出力としても利用可能になります。

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-3.png)

</div>

## 入力

| シグナル                                            | 説明                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Close</span>         | {/*##input:close##*/}ここにシグナルを送ると、ポップアップが閉じます。閉じるアクションが指定されていない場合は、これを使用する必要があります。{/*##input##*/} |
| <span className="ndl-signal">Close Actions</span> | このノードで指定されたすべての閉じるアクションが、シグナル入力として利用可能になります。上記の詳細を参照してください。              |

<span className="hidden-props-for-editor">{/*##input:closeAction-\*##*/}このカスタム**Close Action**を使用して**Popup**が閉じられると、**Popup**を開くために使用された**Show Popup**ノードで同じシグナルがトリガーされます。{/*##input##*/}</span>

| データ                                            | 説明                                                                                           |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Result Values</span> | このノードで指定されたすべての結果値が、入力として利用可能になります。上記の詳細を参照してください。 |

<span className="hidden-props-for-editor">{/*##input:result-\*##*/}**Popup**が閉じられると、この結果パラメータは、**Popup**を開くために使用された**Show Popup**ノードの出力として転送されます。{/*##input##*/}</span>