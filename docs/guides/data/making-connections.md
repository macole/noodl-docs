---
title: 接続の作成
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl'

# 接続の作成

## このガイドで学べること

データ駆動型のユーザーインターフェースを作成するために、ノード間でデータ接続を行う方法。

## データ接続

すべてのノードには入力と出力があります。ノードのほとんどのプロパティ（プロパティパネルで編集できるもの）は入力としても利用可能です。多くのノードには、何らかのデータ値を提供する出力もあります。最も一般的な例は、**Text Input**ノードで、入力されたテキストを出力値として提供します。接続を使用することで、あるノードの出力が更新されたときに、別のノードの入力に書き込まれるようにすることができます。以下の非常にシンプルなインターフェースを見てみましょう：

<div className="ndl-image-with-background xl">

![](/docs/guides/data/making-connections/making-connections-ui.png)

</div>

ここでは、**Text Input**と**Text** UIエレメントがあります。**Text**エレメントに**Text Input**に入力されたものを表示させたい場合、2つのノードを接続できます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/making-connection.mp4")}/>
</div>

これで、**Text Input**に何かを入力すると、**Text**出力にそれが表示されます。これは適切に名付けられた**Text**ノードの**Text**入力に接続されています。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/testing-connection.mp4")}/>
</div>

上記のように、**Text Input**に入力を始めると、**Text**も更新されます。また、ノードグラフエディターでは、データが出力で更新され、入力に書き込まれるときに接続が短時間点灯するのがわかります。

ノードグラフエディターで接続にマウスを合わせると、接続を介して送信された最新の値を表示することもできます。また、小さな検査ポップアップをクリックすると固定できます。再度クリックすると固定を解除できます。

直接接続を行うことは楽しいですが、多くのユーティリティノードを使用して、出力から最終的な入力までの途中でデータを変換および拡張することができます。まず、作成したばかりの接続を削除します。接続を削除するには、一度クリックして**削除アイコン**を表示し、もう一度クリックして削除します。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/delete-connection.mp4")}/>
</div>

ここでは、**String Format**ノードを使用して素敵な挨拶を作成する方法を示します。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/making-connections/string-format.png)

</div>

これで、**Text Input**ボックスに入力すると、データがまず**String Format**ノードに渡され、そこでデータが拡張され、**Formatted**出力に沿って渡されることがわかります。[String Format](/nodes/string-manipulation/string-format)ノードの動作については、ノードリファレンスドキュメントで詳細を学ぶことができます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/testing-connection-2.mp4")}/>
</div>

データ駆動型リアクティブユーザーインターフェースを作成するための非常に重要な概念を紹介しました。しかし、異なるUIコントロールを接続するだけでは十分ではありません。ほとんどの場合、データベースや外部APIからのデータを提示する必要があります。そのために、データノード（緑色のもの）を導入し、次のガイドで**Variable**から始めます。