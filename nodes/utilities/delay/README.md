---
hide_title: true
hide_table_of_contents: true
title: Delayノード
---

{/*##head##*/}

# Delayノード

このノードは、指定されたミリ秒数だけ<span className="ndl-signal">シグナル</span>を遅延させることができます。

<div className="ndl-image-with-background l">

![](/nodes/utilities/delay/delay_node.png)

</div>

{/*##head##*/}

## 入力

| シグナル                                      | 説明                                                           |
| ------------------------------------------- | --------------------------------------------------------------------- |
| <span className="ndl-signal">Start</span>   | タイマーを開始します。タイマーが既に動作している場合は何もしません。       |
| <span className="ndl-signal">Restart</span> | タイマーを開始します。タイマーが既に動作している場合はタイマーを再起動します。 |
| <span className="ndl-signal">Stop</span>    | タイマーが動作している場合はタイマーを停止します。それ以外の場合は何もしません。              |

| データ                                          | 説明                                                                                        |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">期間</span>    | タイマーの期間（ミリ秒）。                                                         |
| <span className="ndl-data">開始遅延</span> | _Start_入力がトリガーされた後にタイマーが開始するまでの遅延。ミリ秒で指定します。 |

## 出力

| シグナル                                       | 説明                                |
| -------------------------------------------- | ------------------------------------------ |
| <span className="ndl-signal">開始時</span>  | タイマーが開始したときに発せられるシグナル。      |
| <span className="ndl-signal">終了時</span> | タイマーが終了したときに発せられるシグナル。 |