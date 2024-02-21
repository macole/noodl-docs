---
hide_title: true
hide_table_of_contents: true
title: Date To Stringノード
---

{/*##head##*/}

# Date To Stringノード

このノードは、<span className="ndl-data">date</span>タイプの入力を指定された形式に基づいて<span className="ndl-data">string</span>に変換して出力します。

<div className="ndl-image-with-background l">

![](/nodes/utilities/date-to-string/date-to-string.png)

</div>

形式は、次の特別な構文を含むことができる<span className="ndl-data">string</span>として指定されます：`{date}`, `{month}`, `{monthShort}`, `{year}`, `{hours}`, `{minutes}`, `{seconds}`。

{/*##head##*/}

- `{date}` 日付の数値部分。
- `{month}` 数値月 1 = 1月、12 = 12月。
- `{monthShort}` 短縮形の数値月 1 = 1月、12 = 12月。
- `{year}` 年の数値。
- `{hours}` 時間の数値、0..23の間。
- `{minutes}` 分の数値、0..60の間。
- `{seconds}` 秒の数値、0..60の間。

デフォルトの形式は次のとおりです：

```
{year}-{month}-{date}
```

## 入力

<div className="ndl-table-35-65">

| データ                                     | 説明                                                          |
| ---------------------------------------- | -------------------------------------------------------------------- |
| <span className="ndl-data">形式</span> | 形式の文字列を指定する場所です。詳細については上記を参照してください。 |
| <span className="ndl-data">日付</span>   | 形式を指定する日付入力。                                            |

</div>

## 出力

<div className="ndl-table-35-65">

| データ                                            | 説明                |
| ----------------------------------------------- | -------------------------- |
| <span className="ndl-data">\*日付文字列</span> | 形式指定された日付文字列。 |

| シグナル                                           | 説明                                            |
| ------------------------------------------------ | ------------------------------------------------------ |
| <span className="ndl-signal">日付変更時</span> | 形式指定された日付文字列が変更されたときにシグナルを送信します。 |

</div>