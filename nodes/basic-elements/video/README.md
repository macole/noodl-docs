---
hide_title: true
hide_table_of_contents: true
title: Videoノード
---

{/*##head##*/}

# Video

このノードは、ビジュアルツリーにビデオ面を配置します。幅広いデザインオプションと再生設定を特徴としています。

<span className="ndl-data">ソース</span>はURLまたはファイルから設定できます。コンピュータからビデオをドラッグしてNoodlにドロップすると、プロジェクトフォルダに追加され、<span className="ndl-node">Video</span>ノードのプロパティパネルで<span className="ndl-data">ソース</span>として選択できるようになります。

{/*##head##*/}

## 入力

<div className="ndl-table-35-65">

| シグナル                                      | 説明                                     |
| ------------------------------------------- | --------------------------------------- |
| <span className="ndl-signal">再生</span>     | ビデオの再生を開始するシグナル。          |
| <span className="ndl-signal">一時停止</span>  | ビデオを一時停止するシグナル。            |
| <span className="ndl-signal">再起動</span>  | ビデオを最初から再生するシグナル。        |
| <span className="ndl-signal">リセット</span> | ビデオを最初にリセットするシグナル。      |

| データ                                         | 説明                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| <span className="ndl-data">ソース</span>    | ビデオのソース。プロジェクトフォルダ内のローカルファイルか絶対URLのいずれか。              |
| <span className="ndl-data">ポスター</span>  | ビデオが開始されていないときに表示される画像。プロジェクトフォルダ内の画像を選択。         |
| <span className="ndl-data">自動再生</span> | オーディオ/ビデオがロードされるとすぐに再生を開始するかどうかを設定します。               |
| <span className="ndl-data">コントロール</span> | オーディオ/ビデオのブラウザネイティブコントロールが表示されるかどうかを設定します。         |
| <span className="ndl-data">音量</span>      | 再生時のビデオの音量。                                                                   |
| <span className="ndl-data">ミュート</span>   | オーディオ/ビデオがミュートされているかどうかを設定します。                               |
| <span className="ndl-data">ループ</span>    | 再生中に終了に達したときにビデオがループするかどうかを示します。                          |

Videoノードには、特別なビデオレイアウトプロパティもあります:

| データ                                                | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">ビデオ位置X</span>        | **Video**ノードのバウンディングボックス内でのビデオのX位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <span className="ndl-data">ビデオ位置Y</span>        | **Video**ノードのバウンディングボックス内でのビデオのY位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <span className="ndl-data">オブジェクトフィット</span> | ビデオがデフォルトサイズ以外のサイズにスケールされたときの挙動を指定します。<br/><br/>`Contain`: ビデオはアスペクト比を維持しつつ、バウンディングボックスに収まるようにスケールされます。これにより、**Video**ノードのバウンディングボックス内に透明な領域が導入される場合があります。<br/>`Cover`: ビデオはアスペクト比を維持しつつ、バウンディングボックス全体を埋めるようにスケールされます。ビデオの一部がクリップされる可能性があります。<br/>`Fill`: ビデオはアスペクト比を維持せずにバウンディングボックスを埋めるようにスケールされます。<br/>`None`: ビデオはスケールされません。クリップされる可能性があります。 |

</div>

### ビジュアル

このノードは、以下の[ビジュアル入力プロパティ](/nodes/shared-props/inputs/visual-input-properties)をサポートしています:

- [マージン](/nodes/shared-props/inputs/visual-input-properties#margin)
- [配置](/nodes/shared-props/inputs/visual-input-properties#alignment)
- [寸法](/nodes/shared-props/inputs/visual-input-properties#dimensions)
- [レイアウト, 位置](/nodes/shared-props/inputs/visual-input-properties#-position)
- [スタイル](/nodes/shared-props/inputs/visual-input-properties#style)
- [ボーダースタイル](/nodes/shared-props/inputs/visual-input-properties#border-style)
- [コーナーの半径](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
- [ボックスシャドウ](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
- [配置](/nodes/shared-props/inputs/visual-input-properties#placement)
- [寸法制約](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
- [その他](/nodes/shared-props/inputs/visual-input-properties#other)
- [高

度なHTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## 出力

<div className="ndl-table-35-65">

| シグナル                                             | 説明                                                                                                                                                                                                                           |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">再生可能時</span>       | ビデオがロードされ、再生準備が整ったときにトリガーされるシグナル。                                                                                                                                                             |
| <span className="ndl-signal">時間更新時</span>       | オーディオ/ビデオの再生位置が変更されたときにトリガーされるシグナル。メディアの再生だけでなく、再生位置が移動されるとき（例えば早送りが使用されるときなど）にも呼び出されます。                                                                       |

| データ                                          | 説明                                              |
| --------------------------------------------- | ------------------------------------------------ |
| <span className="ndl-data">DOMエレメント</span> | このビジュアルノードを表すDOMエレメントへの参照。 |
| <span className="ndl-data">videoWidth</span>  | ビデオソースの幅。                                 |
| <span className="ndl-data">videoHeight</span> | ビデオソースの高さ。                                |

</div>

### ビジュアル

このノードは、以下の[ビジュアル出力プロパティ](/nodes/shared-props/outputs/visual-output-properties)をサポートしています。

- [バウンディングボックス](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
- [マウント](/nodes/shared-props/outputs/visual-output-properties/#mounted)
- [ポインタイベント](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
- [ホバーイベント](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
- [その他](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"
@include "../../shared-props/outputs/_visual-output-properties.md"

</div>