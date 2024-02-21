---
hide_title: true
hide_table_of_contents: true
title: Iconノード
---

{/*##head##*/}

# Icon

このノードは、ビジュアルツリーにアイコンを配置します。

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/icon/icon.png)

</div>

組み込みライブラリからアイコンを使用するか、独自の画像ソースを提供できます。
{/*##head##*/}

## ダイナミックアイコン

アイコンライブラリから動的にアイコンを**Icon**ノードに渡したい場合、<span class="ndl-data">Icon Source</span>入力を通じてこれを行います。

この入力は、**class**（アイコンライブラリの名前）と**code**（アイコンピッカーでアイコンにホバーしたときに表示されるアイコンコード）を持つオブジェクトを期待しています。文字列をアイコンオブジェクトに変換する最も簡単な方法は、以下のコードを含むカスタム関数を使用することです：

```js
Outputs.iconObject = {
  "class": "material-icons",
  "code": Inputs.iconCode,
};
```

これにより、<span className="ndl-data">iconCode</span>入力と<span className="ndl-data">iconObject</span>出力が自動的に作成されます。

## 入力

| データ                                          | 説明                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-data">タイプ</span>        | 事前定義された`icon`を使用するか、プロジェクトフォルダーからカスタム`image`を使用するかを設定します。 |
| <span className="ndl-data">アイコンソース</span> | アイコンを取得する場所。                                                                              |
| <span className="ndl-data">サイズ</span>        | アイコンの幅（`px`単位）。                                                                          |
| <span className="ndl-data">色</span>           | アイコンの色を設定します。_タイプ_が`icon`に設定されている場合のみ表示されます。                   |

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています:

- [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
- [パディング](/nodes/shared-props/inputs/visual-input-properties#padding)
- [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
- [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#-position)
- [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
- [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
- [高度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

このノードは、以下の[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)をサポートしています:

- [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
- [マウント](/nodes/shared-props/outputs/visual-output-properties#mounted)
- [その他](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>