---
hide_title: true
hide_table_of_contents: true
title: Columnsノード
---

{/*##head##*/}

# Columns

このノードは、ギャップを持つカラムでコンテンツをレイアウトするために使用されます。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/columns/columns_visual.png)

</div>

<span className="ndl-node">Columns</span>ノードは、独自のスタイリングを持たず、代わりに**レイアウト文字列**を使用して、すべての子を動的レイアウトに配置します。

## レイアウト文字列

レイアウト文字列は、単に数字の間にスペースがある文字列です。各数字はコンテナ全体の幅の一部を表し、列に変換されます。レイアウト文字列`1 2 1`を持つ<span className="ndl-node">Columns</span>ノードが5つの子を含む場合、次のようにレンダリングされます：

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/columns/columns_example.png)

</div>

{/*##head##*/}

## レスポンシブレイアウト

### 最小カラム幅値を使用する

カラムをレスポンシブにする最も簡単な方法は、<span class="ndl-data">最小カラム幅</span>値を設定することです。これにより、指定された<span class="ndl-data">レイアウト文字列</span>でカラムが収まるかどうかがチェックされます。コンテナが最小幅でカラムを収容できない場合、レイアウトはより少ないカラムを持つグリッドに折りたたまれます。

渡す子要素が親の`100%`の幅に設定されていることを確認してください。

### 異なるレイアウト文字列を使用する

[States](/nodes/utilities/logic/states)ノードと[Media Queries](/library/prefabs/media-query/)プリファブを使用して、異なる値を<span class="ndl-data">レイアウト文字列</span>入力に渡すことにより、高度なレスポンシブレイアウトを簡単に作成できます。

渡す子要素が親の`100%`の幅に設定されていることを確認してください。

## 入力

| データ                                               | 説明                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">レイアウト文字列</span>    | 子がレンダリングされるカラムのサイズとレイアウトを決定します。                                        |
| <span className="ndl-data">水平方向のギャップ</span>   | カラム間の水平方向のスペース（`px`単位）。                                                         |
| <span className="ndl-data">垂直方向のギャップ</span>   | カラム間の垂直方向のスペース（`px`単位）。                                                         |
| <span className="ndl-data">レイアウト方向</span>     | カラムが水平方向または垂直方向にレンダリングされるかどうか。                                           |
| <span className="ndl-data">最小カラム幅</span>       | より少ないカラムを持つレイアウトに折りたたまれる前に、カラムが許可される最小のサイズ。                          |
| <span className="ndl-data">マウントされた</span>      | Columnsノードがアプリにレンダリングされるかどうか。                                               |
| <span className="ndl-data">コンテンツの配置</span>   | 未満の行における子の位置。                                                                       |