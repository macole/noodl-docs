---
hide_title: true
hide_table_of_contents: true
title: Boolean To Stringノード
---

{/*##head##*/}

# Boolean To Stringノード

このノードは、<span className="ndl-data">boolean</span>入力を取り、文字列<span className="ndl-data">true</span>または<span className="ndl-data">false</span>に変換します。

<div className="ndl-image-with-background l">

![](/nodes/utilities/boolean-to-string/boolean-to-string.png)

</div>

{/*##head##*/}

## 入力

| データ                                               | 説明                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">セレクター</span>         | {/*##input:selector##*/}どちらの文字列を出力するかを選択するboolean値です。{/*##input##*/} |
| <span className="ndl-data">trueの場合の文字列</span>  | {/*##input:trueString##*/}セレクターがtrueの場合に出力する文字列です。{/*##input##*/}                    |
| <span className="ndl-data">falseの場合の文字列</span> | {/*##input:falseString##*/}セレクターがfalseの場合に出力する文字列です。{/*##input##*/}                   |

## 出力

| データ                                            | 説明                                                                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">現在の値</span> | {/*##output:currentValue##*/}選択された文字列、つまり**セレクター**に応じて**trueの場合の文字列**または**falseの場合の文字列**です。{/*##output##*/} |

| シグナル                                               | 説明                                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">セレクター変更時</span> | {/*##output:inputChanged##*/}**セレクター**の値が変更されたときに送信されるシグナルです。{/*##output##*/} |