---
title: カスタムUIコンポーネント
hide_title: true
---
import CopyToClipboardButton from '/src/components/copytoclipboardbutton'
import ImportButton from '../../../src/components/importbutton'

# カスタムUIコンポーネント

## このガイドで学ぶこと
Noodlの非常に強力な機能の1つは、簡単に再利用可能なコンポーネントを作成できることです。このガイドでは、再利用可能なUIコンポーネントを作成するためのいくつかの有用なパターンをカバーします。このガイドでは少しコーディングが含まれるため、Javascriptでの基本的なコーディングスキルと、Javascriptでのビジネスロジックに関する以前のガイドを読んでいることが望ましいです。

## コンポーネントの入力と出力
良い再利用可能なコンポーネントを作成する鍵は、それを使用可能にする入力と出力を提供することです。ここではいくつかの良いパターンがあり、ここでそれらを概説します。スライダーと2つのラベルを持つコンポーネントを作成するシンプルな例から始めます。これがその外観です：

<div className="ndl-image-with-background l">

![](/docs/guides/business-logic/custom-ui-components/slider-with-label.png)

</div>

そしてこれがコンポーネントの内容です。これはスライダーと2つのテキストラベルを持つシンプルなUIコンポーネントです。1つのラベルはスライダーのヘッダーで、もう1つは**String Format**ノードと現在の**Value**および**Max**値を使用してフォーマットされます。

<div className="ndl-image-with-background xl">

<CopyToClipboardButton json={{"nodes":[{"id":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","type":"Group","x":0,"y":0,"parameters":{},"ports":[],"children":[{"id":"5fb30353-669f-cee0-0339-e96608ad1478","type":"Text","x":20,"y":202,"parameters":{},"ports":[],"children":[]},{"id":"62063b48-b2c8-cf28-1de2-d20c7866ef42","type":"net.noodl.controls.range","x":20,"y":284,"parameters":{"marginBottom":{"value":15,"unit":"px"},"marginTop":{"value":15,"unit":"px"}},"ports":[],"children":[]},{"id":"fcee5809-211f-d59d-d566-7737e5383ceb","type":"Text","x":20,"y":406,"parameters":{"alignX":"right","sizeMode":"contentSize","color":"Light Gray"},"ports":[],"children":[]}]},{"id":"aaa82451-4b5d-874e-17c4-622b70e46249","type":"Component Inputs","x":-622.5,"y":167,"parameters":{},"ports":[{"name":"Label","plug":"output","type":{"name":"*"},"group":"Settings","index":0},{"name":"Value","plug":"output","type":{"name":"*"},"group":"Settings","index":1},{"name":"Max","plug":"output","type":{"name":"*"},"group":"Settings","index":2}],"children":[]},{"id":"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56","type":"String Format","x":-184.5,"y":377,"parameters":{"format":"{Value} / {Max}"},"ports":[],"children":[]},{"id":"13725968-85f6-ee25-5e66-b7f208aac194","type":"Number","x":-387.5,"y":364,"parameters":{},"ports":[],"children":[]},{"id":"f4d370e6-ec69-5459-49e9-9d258172c77a","type":"Component Inputs","x":-227.5,"y":-20,"parameters":{},"ports":[{"name":"Margin Left","plug":"output","type":{"name":"*"},"index":0},{"name":"Margin Right","plug":"output","type":{"name":"*"},"index":1},{"name":"Margin Bottom","plug":"output","type":{"name":"*"},"index":3},{"name":"Margin Top","plug":"output","type":{"name":"*"},"index":2},{"name":"Align X","plug":"output","type":{"name":"*"},"index":4},{"name":"Align Y","plug":"output","type":{"name":"*"},"index":5},{"name":"Position","plug":"output","type":{"name":"*"},"index":6}],"children":[]},{"id":"51777154-9afa-4aa7-515a-6164a47ba35e","type":"Component Outputs","x":321.5,"y":287,"parameters":{},"ports":[{"name":"Value","plug":"input","type":{"name":"*"},"index":1},{"name":"Changed","plug":"input","type":{"name":"*"},"index":2}],"children":[]}],"connections":[{"fromId":"aaa82451-4b5d-874e-17c4-622b70e46249","fromProperty":"Label","toId":"5fb30353-669f-cee0-0339-e96608ad1478","toProperty":"text"},{"fromId":"aaa82451-4b5d-874e-17c4-622b70e46249","fromProperty":"Max","toId":"62063b48-b2c8-cf28-1de2-d20c7866ef42","toProperty":"max"},{"fromId":"62063b48-b2c8-cf28-1de2-d20c7866ef42","fromProperty":"value","toId":"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56","toProperty":"Value"},{"fromId":"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56","fromProperty":"formatted","toId":"fcee5809-211f-d59d-d566-7737e5383ceb","toProperty":"text"},{"fromId":"aaa82451-4b5d-874e-17c4-622b70e46249","from

Property":"Max","toId":"13725968-85f6-ee25-5e66-b7f208aac194","toProperty":"value"},{"fromId":"13725968-85f6-ee25-5e66-b7f208aac194","fromProperty":"savedValue","toId":"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56","toProperty":"Max"},{"fromId":"aaa82451-4b5d-874e-17c4-622b70e46249","fromProperty":"Value","toId":"62063b48-b2c8-cf28-1de2-d20c7866ef42","toProperty":"value"},{"fromId":"62063b48-b2c8-cf28-1de2-d20c7866ef42","fromProperty":"onChange","toId":"51777154-9afa-4aa7-515a-6164a47ba35e","toProperty":"Changed"},{"fromId":"62063b48-b2c8-cf28-1de2-d20c7866ef42","fromProperty":"value","toId":"51777154-9afa-4aa7-515a-6164a47ba35e","toProperty":"Value"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Align Y","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"alignY"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Align X","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"alignX"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Margin Top","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"marginTop"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Margin Bottom","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"marginBottom"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Margin Right","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"marginRight"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Margin Left","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"marginLeft"},{"fromId":"f4d370e6-ec69-5459-49e9-9d258172c77a","fromProperty":"Position","toId":"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d","toProperty":"position"}],"comments":[]}} />

![](/docs/guides/business-logic/custom-ui-components/slider-with-label-nodes.png)

</div>

このコンポーネントの**コンポーネント入力**について詳しく見てみましょう。まず、コンポーネントの基本設定である**Label**、**Max**、**Value**入力があります。このコンポーネント入力に関して注目すべきいくつかの点があります。**Max**入力を見ると、最初に**Number**ノードに接続され、その後**String Format**ノードに接続されていることがわかります。これは、**Max**入力がコンポーネントを使用したときにプロパティパネルで数値として表されることを保証する一般的なパターンです。コンポーネント入力は、接続されたノードと同じタイプのプロパティパネルになりますが、この場合は**Slider**の**Max**（数値）と**String Format**ノードの**Max**入力（文字列）の両方に接続されています。**Number**ノードを経由することで、プロパティパネルがその入力に対してどの入力フィールドを表示するかを正しく認識することができます。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/component-inputs-1.png)

</div>

もう1つ注目すべき点は、**Value**コンポーネント入力が**Slider**の**Value**入力に接続されていることです。ほとんどのUIコンポーネントは、この場合は範囲値のように、ユーザーから何らかのデータを収集しています。そのデータも入力として公開されることが非常に重要です。これにより、データソースに適切に接続することができます。

コンポーネント出力に進むと、もちろん**Value**も出力として必要です。これにより、UIコンポーネントを使用してユーザーからデータを収集することができます。**Changed**シグナルも重要です。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/component-outputs.png)

</div>

:::warning
**Changed**シグナルは、ユーザーの入力があった場合に**常に**オンにするべきです。**Value**入力が変更されただけではないことを確認するためです。これにより、入力値が変更された場合に

UIコンポーネントが変更を報告しないようにします。これにより、不要なデータフィードバックループが発生することがあります。
:::

最後に、ルートノードにいくつかの最小限のレイアウトプロパティを公開することは良いアイデアです。これにより、UIコンポーネントの使用が容易になります。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/component-inputs-2.png)

</div>

何を入力として公開するかは自由に選択できますが、ここではいくつかの推奨事項があります：

- **マージン** 少なくともマージンを公開することで、コンポーネントを使用する際に余分な**Group**ノードが不要になります。
- **アライン** コンポーネントを使用する際に再アラインメントが必要になることがよくありますので、これを入力として提供することが役立ちます。
- **ポジション** 一般的ではありませんが、公開しておくと良いでしょう。

## コンポーネントオブジェクト
[データを扱うガイド](/docs/guides/data/objects)で[Object](/nodes/data/object/object-node)ノードの使用方法を学び、[UIコントロールをデータに接続するガイド](/docs/guides/data/ui-controls-and-data)でUIコントロールに接続する方法を学びました。再利用可能なUIコンポーネントを作成する際に非常に便利な別のノードがあります。それが[Component Object](/nodes/component-utilities/component-object)ノードです。このノードは**Object**ノードと同じように機能しますが、コンポーネントインスタンス固有であり、通常のオブジェクトのようにコンポーネントインスタンス間で共有されません。これは、UIコントロールの状態を保持する際に非常に便利です。

**Segment Control** UIコンポーネントの非常にシンプルな例を見てみましょう。

<div className="ndl-image-with-background l">
<ImportButton zip="/docs/guides/business-logic/custom-ui-components/segment-control-1.zip" name="セグメントコントロール" thumb="/docs/guides/business-logic/custom-ui-components/segment-control.png"/>

![](/docs/guides/business-logic/custom-ui-components/segment-control.png)

</div>

この例には、**セグメントコントロール**コンポーネントと**セグメントコントロールボタン**コンポーネントの2つのコンポーネントが実際に含まれています。これは、可能なオプションの配列を入力として受け入れ、配列内の各オブジェクトには**Label**と**Value**が必要です。また、コントロールの現在の選択された**Value**も入力として受け入れます。これは配列内の値の1つに対応する必要があり、そのボタンが選択されているように表示されます（ラジオボタンのように）。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/segment-control-nodes.png)

</div>

ここでは、**Component Object**ノードを使用して現在の**Selected Value**を保存し、それを**Value**出力としても渡している方法を見ることができます。後でこれがどのように使用されるかを見てみましょう。オプション入力配列は、**Repeater**ノードのアイテムとして直接使用されます。リピーター内のテンプレートとして使用される**セグメントコントロールボタン**コンポーネントを詳しく見てみると、魔法が起こる場所がわかります。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/segment-control-button-nodes.png)

</div>

簡単に説明しましょう：

- **Object**ノードは、ボタンに**Label**を接続するために使用されます。したがって、リピーターによって作成された各ボタンに正しいラベルが付けられます。
- ここで、[Set Parent Component Object Properties](/nodes/component-utilities/set-parent-component-object-properties)ノードという新しいアクションノードを紹介します。これは、コンポーネントオブジェクトのプロパティを設定するために使用されます。しかし、このコンポーネントインスタンスのコンポーネントオブジェクトではなく、代わりに最も近い視覚的親のコンポーネントオブジェクトです。この場合（このコンポーネントがリピーターのテンプレートとして使用されているため）、**セグメントコントロール**コンポーネントになります。つまり、リピーター内の各**セグメントコントロールボタン**コンポーネントは、クリックされると、その**Value**を**Component Object**の**Selected Value**として設定します。
- 現在の**Selected Value**とこのセグメントコントロールボタンの**Value**を比較するために、[Parent Component Object](/nodes/component-utilities/parent-component-object)を

使用して、**Function**ノードでそれを行います。そのコードは以下の通りです：

```javascript
if(Inputs.SelectedValue == Inputs.MyValue)
  Outputs.Variant = "セグメントコントロールボタン選択"
else
  Outputs.Variant = "セグメントコントロールボタン"
```

- 次に、**Function**によって選択された**Variant**が**ボタン**の**Variant**になります。**ボタン**の2つの異なる**Variant**をそれぞれその名前で作成しているので、選択された場合とそうでない場合にボタンがどのように見えるかを設計できます。スタイルバリアントについては、[このガイド](/docs/guides/user-interfaces/style-variants)で詳しく学ぶことができます。
- 最後に、ボタンからの**Click**シグナルをこのコンポーネントからの**Component Output**として送信します。これにより、親コンポーネント内の**Repeater**ノードからそのシグナルを使用することができます。

[Component Object](/nodes/component-utilities/component-object)および[Parent Component Object](/nodes/component-utilities/parent-component-object)ノードと、プロパティを設定するためのアクションノード、[Set Component Object Properties](/nodes/component-utilities/set-component-object-properties)および[Set Parent Component Object Properties](/nodes/component-utilities/set-parent-component-object-properties)は、再利用可能なUIコンポーネントを構築する際に非常に便利です。UIコンポーネントの状態はこれらに保存することをお勧めします。

## 状態管理
UIコンポーネントが作成されたときに初期化する必要がある場合があります。その場合、ルートUI要素（通常は**Group**ノード）からの**Did mount**シグナルを使用できます。

<div className="ndl-image-with-background l">

![](/docs/guides/business-logic/custom-ui-components/did-mount.png)

</div>

**Component Object**および**Parent Component Object**には、**Function**および**Script**ノードから次のようにアクセスできます：

```javascript
Component.Object.MyValue = "こんにちは" 
Component.Object["選択された値"] = "スペースを含むプロパティにはこれを使用します"

Component.ParentObject.MyValue = "これも機能します"
```

これは、UIコンポーネントが作成されたときに**Component Object**を初期化するのに最適な場所です。

ここで、もう1つ興味深い例を見てみましょう。これは**マルチチェックボックスグループ**の例です。2つの配列を入力として受け取り、1つはすべての可能なオプションを持ち、各オブジェクトには**Value**と**Label**が必要です。もう1つの配列は値で、この配列には**Value**のみを含むオブジェクトが含まれます。したがって、複数のオプションを選択でき、セグメントコントロールのように1つだけではありません。これは少し複雑なので、詳細には触れませんが、以下の例をチェックして、いくつかの詳細を見てみましょう。

<div className="ndl-image-with-background l">
<ImportButton zip="multi-checkbox.zip"/>

![](/docs/guides/business-logic/custom-ui-components/multi-checkbox.png)

</div>

**マルチチェックボックスグループ**コンポーネントのノードを詳しく見ると、次のようになります：

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/multi-checkbox-nodes.png)

</div>

ここでは、**オプション**または**選択**の入力が変更された場合に**Function**ノードが実行されることがわかります。そのノードのコードは次のとおりです：

```javascript
if(!Inputs.Options) return // オプションがなければ何もできません

Component.Object.Checkboxes = Inputs.Options.map(o => Noodl.Object.create({
    id:Component.Object.id+'-'+o.Value,
    Value:o.Value,
    Label:o.Label || o.Value,
    Checked:Inputs.Selection!==undefined && !!Inputs.Selection.find(s => s.Value === o.Value)
}))
```

これにより、**Component Object**に**Checkboxes**という名前の新しいオブジェクトの配列が作成され、それらは値とラベルを取得し、**Checked**プロ

パティはその値が選択内に表現されている場合にtrueになります。この配列は、すべてのコンポーネントを表示するために**Repeater**ノードで使用されます。この関数が**オプション**または**選択**が変更された場合に再実行されることが重要です。これにより、UIコントロールが常に入力に対応する正しい状態を表示するようになります。

:::note
オブジェクトの**id**を設定します。これにより、配列が変更されるたびに**Repeater**が新しいアイテムを作成しないようになります。これによりパフォーマンスが向上します。
:::

もう1つ注目すべき点は、**Selection**入力が**Component Object**に渡され、そのまま対応する出力に渡されることです。これも非常に一般的です。

最後に、選択がユーザー入力によって変更された場合に実行される**Function**ノードがあります。上記のセグメントコントロールコンポーネントと同様に、このコンポーネントは**Repeater**ノードから送信されます。このコンポーネントでは、現在チェックされているオブジェクトをフィルタリングして、それらのオブジェクトの**Value**プロパティをフィルタリングすることによって、現在の**Selection**を**Component Object**で更新します。

```javascript
Component.Object.Selection = Component.Object.Checkboxes.filter(o => o.Checked).map(o => ({Value:o.Value}))
```

**マルチチェックボックスグループアイテム**コンポーネントを見ると、非常に基本的であることがわかります。これは単に、**Checkboxes**配列に作成したオブジェクトの**Checked**と**Label**に対応するチェックボックスです。チェックボックスが更新されると、オブジェクトの**Checked**値を更新し、変更を報告します。

<div className="ndl-image-with-background xl">

![](/docs/guides/business-logic/custom-ui-components/multi-checkbox-item.png)

</div>

以上です。これで、マルチチェックボックスコンポーネントを作成するために必要なすべてのことを説明しました。このパターンは、マルチ選択を持つあらゆる種類のUIコンポーネントを作成するために使用できます。