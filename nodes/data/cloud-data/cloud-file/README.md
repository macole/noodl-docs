---
hide_title: true
hide_table_of_contents: true
title: クラウドファイルノード
---

{/*##head##*/}

# クラウドファイル

**Record**内のファイルプロパティとしてNoodlクラウドサービスにアップロードされたファイルを表します。

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-file/cloud-file.png)

</div>

**クラウドファイル**は通常、[ファイルピッカーを開く](/nodes/utilities/open-file-picker)と[ファイルをアップロード](/nodes/data/cloud-data/upload-file)と組み合わせて使用され、ファイルをアップロードし、データベース内にそれへの参照を保存します。その後、**クラウドファイル**を使用して参照を取得し、ファイルのURLや名前を取得します。

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/upload-file/upload-file.png)

</div>
{/*##head##*/}

## 入力

| データ                                           | 説明                                                                                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">クラウドファイル</span> | {/*##input:cloud file##*/}Noodlクラウドサービスに保存されたファイル。通常は**Record**と組み合わせて、ファイルの**名前**と**URL**を取得するために使用されます。{/*##input##*/} |

## 出力

| データ                                 | 説明                                  |
| -------------------------------------- | ------------------------------------- |
| <span className="ndl-data">URL</span>  | {/*##output:url##*/}ファイルのURL。{/*##output##*/}   |
| <span className="ndl-data">名前</span> | {/*##output:name##*/}ファイルの名前。{/*##output##*/} |