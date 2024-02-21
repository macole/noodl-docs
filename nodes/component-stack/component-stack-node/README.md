---
hide_title: true
hide_table_of_contents: true
title: コンポーネントスタックノード
---

{/*##head##*/}

# コンポーネントスタック

**コンポーネントスタック**ノードは、画面上のエリアでコンポーネント間をナビゲートするために使用されます。通常、ナビゲーションノード[Push Component To Stack](/nodes/component-stack/push-component)および[Pop Component Stack](/nodes/component-stack/pop-component)と一緒に使用されます。
<div className="ndl-image-with-background">

![](/nodes/component-stack/component-stack/component-stack1.png)

</div>

URLやルーティングをナビゲーションの一部として使用しない点で、やや似ている[Page Router](/nodes/navigation/page-router)とは異なり、**コンポーネントスタック**はアプリタイプのナビゲーション（ウェブタイプとは対照的に）に最適化されています。

**コンポーネントスタック**は通常のスタックとして機能し、_Push_（コンポーネントをスタックの上に置く）と_Pop_（スタックの最上位のコンポーネントを削除する）ができます。新しいコンポーネントで全てのコンポーネントを_置き換える_こともできます（[Push Component To Stack](/nodes/component-stack/push-component)を参照）。

**コンポーネントスタック**をプッシュすると、コンポーネントの新しいインスタンスが作成されます。表示されるのは最上位のコンポーネントのみです。これは、スタック上に同じコンポーネントの複数のインスタンスを同時に持つことができることを意味します。**リセット**アクションを使用してスタックをクリアできます。

## プッシュとポップにコンポーネントエントリを追加

コンポーネントスタックには、プッシュまたはポップできる複数の_コンポーネントエントリ_が必要です。_Add Component_ボタンをクリックしてエントリに名前を付け、コンポーネントを選択することでコンポーネントエントリを追加します。これらのエントリは、[Push Component To Stack](/nodes/component-stack/push-component)および[Pop Component Stack](/nodes/component-stack/pop-component)ノードで利用可能になります。

## ビジュアルレイアウト

**clip**プロパティが<span className="ndl-data">false</span>に設定されている場合、**コンポーネントスタック**は利用可能なスペースを自動的に取り、表示中のコンポーネントがそれより大きい場合はそれを超えて拡張します。**clip**プロパティが<span className="ndl-data">true</span>に設定されている場合、親コンテナーの利用可能なスペースを埋め、それより大きい場合はそのコンポーネントをクリップします。

**コンポーネントスタック**のサイズをそれ以上に制御したい場合は、[Group](/nodes/basic-elements/group/README.md)ノードの子として配置する必要があります。

{/*##head##*/}

## 入力

| データ                                               | 説明                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">名前</span>             | {/*##input:name##*/}これは**コンポーネントスタック**の名前です。プロジェクトに複数の**コンポーネントスタック**がある場合は、[Push Component To Stack](/nodes/component-stack/push-component)および[Pop Component Stack](/nodes/component-stack/pop-component)ノードでそれを識別するために名前を使用します。{/*##input##*/} |
| <span className="ndl-data">スタートページ</span>       | **コンポーネントスタック**が開始時に表示するコンポーネント。                                                                                                                                                                                                                                            |
| <span className="ndl-data">コンテンツをクリップする</span>     | {/*##input:clip##*/}このプロパティが`true`に設定されている場合、**コンポーネントスタック**はサイズを超えて拡張するコンポーネントをクリップします。`false`に設定されている場合、**コンポーネントスタック**のサイズは必要に応じてコンポーネントに合わせて拡大します。{/*##input##*/}                                                                   |
| <span className="ndl-data">背景色</span> | {/*##input:backgroundColor##*/}コンポーネントが**コンポーネントスタック**を覆っていない場合、またはコンポーネントが透明の場合に表示される色。{/*##input##*/}                                                                                                                                              || <span className="ndl-data">マウントされている</span>          | {/*##input:mounted##*/}このプロパティは、ノードをDOMから完全に削除するために使用されます。このプロパティがfalseに設定されている場合、ノードはDOMから削除されます。_Visible_プロパティとは異なり、ノードはDOMの一部ですが見えなくなります。{/*##input##*/}                                                  || シグナル                                    | 説明                                                                                                                                                                             || ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">リセット</span> | {/*##input:reset##*/}このアクションをトリガーすると、**コンポーネントスタック**がリセットされ、スタック上のすべてのコンポーネントが削除され、**スタートページ**のみがスタック上に残ります。{/*##input##*/} |

| 非推奨                                         | 説明                                                                             |
| -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <span className="ndl-deprecated">ルートを使用する</span> | {/*##input:useRoutes##*/}**このプロパティは非推奨であり、使用すべきではありません。**{/*##input##*/} |

### ビジュアル

このノードは、次の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています：

-   [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

| データ                                                 | 説明                                                                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">最上位コンポーネント名</span> | {/*##output:topPageName##*/}このプロパティは、スタックの最上位にある現在のコンポーネントの名前を保持します。{/*##output##*/}         |
| <span className="ndl-data">スタックの深さ</span>        | {/*##output:stackDepth##*/}このプロパティは、現在**コンポーネントスタック**上にあるコンポーネントの数に等しいです。{/*##output##*/} |

### ビジュアル

このノードは、次の[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)をサポートしています：

-   [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [マウントされている](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [その他](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>