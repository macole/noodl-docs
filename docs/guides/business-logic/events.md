# イベント

## 概要
このガイドでは、Noodlでの重要な概念であるイベントについて説明します。イベントは、伴うデータを持つシグナルを送受信するために使用されます。シグナルは、ノードグラフの一部から他の場所へ送信されます。これは、ボタンのクリックなどのアプリのある場所でユーザーの操作が発生し、異なる場所でアクションをトリガーする必要がある場合などに便利です（例: ポップアップが表示される）。

## このガイドで学べること
このガイドでは、[Send Event](/nodes/events/send-event)ノードと[Receive Event](/nodes/events/receive-event)ノードを使用して、ノードグラフ内のある場所から別の場所へシグナルとデータを渡す方法を学びます。

この概念には2つのノード、**Send Event**ノードと**Receive Event**ノードが含まれます。名前が示すように、**Send Event**ノードはイベントを送信したいときに使用されます。以下は、**Text**ノードがクリックされたときにイベントが送信される例です。

![](/docs/guides/business-logic/events/send-event.png ':class=img-size-l')

## イベントの送受信

上の例では、**Text**ノードの**Click**シグナルが**Send Event**ノードの**Send**入力に接続されています。これにより、テキストがクリックされたときにイベントが送信されるトリガーとなります。

イベントは特定の**チャンネル**へ送信され、このチャンネルは**Send Event**ノードのプロパティで指定されます。この場合、チャンネルの名前は**Show Popup**です。

![](/docs/guides/business-logic/events/channel-prop.png ':class=img-size-m')

イベントシグナルは、同じ**チャンネル**を共有するすべての**Receive Event**ノードに渡されます。以下の例では、上で送信されたイベントが受信されています。

![](/docs/guides/business-logic/events/receive-event.png ':class=img-size-l')

以下に示すように、クリックシグナルが**Send Event**ノードを介して送信されると、**Event Receiver**ノードの**Received**出力に渡されます。

![](/docs/guides/business-logic/events/events-demo.gif ':class=img-size-l')

## ペイロードデータの渡し方

これまでNoodlのイベントメカニズムの基本概念を見てきました。次に、ペイロード接続を介してイベントノードにデータを渡す方法を見ていきましょう。まず、**Send Event**ノードにポートを追加することから始めます。イベントで渡したいデータの数だけポートを追加できます。

![](/docs/guides/business-logic/events/add-port.gif ':class=img-size-l')

次に、**Send Event**ノードに作成した入力ポートにデータを接続できます。**Send**シグナルが受信されると、**Send Event**ノードのすべての入力の値がキャプチャされ、**Receive Event**に渡されます。

![](/docs/guides/business-logic/events/connect-to-port.png ':class=img-size-l')

**Receive Event**ノードが**Received**シグナルを出力すると、他のすべての出力も更新されます。**Send Event**ノードに追加されたペイロードポートは、**Send Event**ノードと同じチャンネルを共有するすべての**Receive Event**ノードで利用可能になります。

![](/docs/guides/business-logic/events/receiver-outputs.png ':class=img-size-l')

## 伝播



イベントの伝播とは、イベントがグラフ内でどのように送信されるか、つまりどの**Receive Event**ノードがイベントを受信するかを意味します。デフォルトの伝播モードは**グローバル**で、これは_すべて_のレシーバーがトリガーされることを意味します。しかし、**Send Event**ノードの**Send To**プロパティを変更することで、伝播を変更できます。

![](/docs/guides/business-logic/events/send-to.png ':class=img-size-m')

**Children**モードは、**Send Event**ノードが存在するコンポーネントのすべての子にイベントを送信します。したがって、以下の例では、まず**My Child Comp**にイベントが送信され、そのノードが持つ可能性のあるすべての子に送信されます。**My Child Comp**ノードのすべての子孫にイベントが送信された後、**Repeater**ノードによって動的に作成された子インスタンスにイベントが渡されます。

![](/docs/guides/business-logic/events/send-to-children.png ':class=img-size-l')

**Siblings**モードは、イベントを同じレベルにある他のすべてのノードに送信します。したがって、以下のグラフ内の**My Child Comp**に**Send Event**ノードが含まれている場合、イベントを送信する**My Child Comp**を除く、すべての**My Child Comp**ノードが受信し、その後**Repeater**ノードによって動的に作成された子インスタンスが受信します。

![](/docs/guides/business-logic/events/send-to-siblings.png ':class=img-size-l')

最後の伝播モードは**Parent**です。このモードは、イベントをノードグラフ階層を上に送信します。以下の例のグラフ内の**My Other Child**に**Send Event**ノードが含まれており、**Parent**伝播モードを使用しています。**My Other Child**からイベントが送信されると、親の**My Child Comp**ノードが受信し、次にこのノードが受信し、その後このノードの親にイベントが渡されます。伝播は視覚階層チェーンに沿って行われます。

![](/docs/guides/business-logic/events/send-to-parent.png ':class=img-size-l')

伝播に関して知っておくべき最後のことは、**Receive Event**ノードの**Consume**プロパティです。このプロパティがチェックされている場合、特定のノードがイベントを受信すると、そのイベントの伝播が停止します。つまり、そのノードの後にある他の**Receive Event**ノードは、この特定のイベントを受信しません。