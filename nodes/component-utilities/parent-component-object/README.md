---
hide_title: true
hide_table_of_contents: true
title: Parent Component Objectノード
---

{/*##head##*/}

# Parent Component Objectノード

**Parent Component Object**は常に[Component Object](/nodes/component-utilities/component-object)と組み合わせて使用されます。**Parent Component Object**は、コンポーネントツリーを上に検索し、**Component Object**ノードを見つけてそのノードをミラーします。一方のノードに行われた変更は、他のノードにも反映されます。同じコンポーネント内の複数の**Parent Component Object**ノードは常に同じ**Component Object**をミラーします。

<div className="ndl-image-with-background">

![](/nodes/component-utilities/parent-component-object/parent-component-object.png)

</div>

このノードは、ノード上のプロパティを出力できる[Object](/nodes/data/object/object-node)のように使用されます。このノードには**Id**がなく、代わりにデータは親コンポーネントと共有されます。このノードは、子コンポーネントが親の**Component Object**にアクセスする必要があるラジオグループなどのパターンで非常に便利です。
{/*##head##*/}

## 入力

### プロパティ

| データ                                              | 説明                                                                                                                                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">プロパティ</span>         | {/*##input:value-\*##*/}最も近い親[Component Object](/nodes/component-utilities/component-object)に設定するプロパティです。この入力が接続を介して変更されると、親**Component Object**が更新されます。{/*##input##*/} |

| シグナル                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">フェッチ</span>   | {/*##input:fetch##*/}通常、**Parent Component State**が作成されると、プロパティの出力はすぐに更新されます。データの更新方法を制御したい場合は、_フェッチ_シグナル入力に接続できます。その場合、データをフェッチするために明示的にシグナルを送信する必要があります。{/*##input##*/}<br/><br/>**フェッチ**が接続されている場合、出力データは**フェッチ**が再度明示的にトリガーされるまで変更されません。 |

## 出力

### プロパティ

| データ                                                      | 説明                                                                                                                                                              |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">親プロパティ</span>               | {/*##output:value-\*##*/}最も近い親[Component Object](/nodes/component-utilities/component-object)のプロパティの値です。{/*##output##*/}                         |

| シグナル                                                     | 説明                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">変更された</span>                  | {/*##output:changed##*/}プロパティのいずれかが変更されたときにこのイベントがトリガーされます。{/*##output##*/}                                                                                                                                                                              |
| <span className="ndl-signal">フェッチされた</span>              | {/*##output:fetched##*/}[Component Object](/nodes/component-utilities/component-object)に自身をバインドしたときのシグナルです。**フェッチ**入力が接続されていない場合はすぐにトリガーされ、そうでない場合は**フェッチ**入力がシグナルされたときにトリガーされます。{/*##output##*/} |
| <span className="ndl-signal">変更されたプロパティシグナル</span> | {/*##output:changed-\*##*/}各プロパティに対して1つの変更されたシグナル出力が作成されます。プロパティの値が変更されたときにシグナルを発信します。{/*##output##*/}                                                                                                                       |