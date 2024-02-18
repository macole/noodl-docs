---
title: Noodl AI
hide_title: true
---

# Noodl AI

Noodl AIは、アプリ開発のための大規模言語モデル（LLM）の力を活用するユニークな方法を提示します。シンプルなテキストプロンプトからカスタムビルディングブロックを生成することで、開発プロセスを簡素化します。現在のLLMモデルの強みを活用し、増幅させることで、Noodl AIは実験や新奇性を超え、実世界のアプリケーションで真に価値のあるものになります。

<div className="ndl-image-with-background l">

![](/docs/getting-started/noodl-ai/cover.png)

</div>

JavaScriptのロジックを簡単に作成し、API呼び出しを処理し、データベースとやり取りし、UI要素を生成します。私たちの目標は、より多くのスキルセットの範囲に対して開発プロセスをより包括的でアクセスしやすいものにすることです。あなたが経験豊富な開発者であろうと初心者であろうと、Noodl AIはあなたのアプリ開発の旅を通じてサポートします。

## Noodl AIへのアクセス

Noodl AIはOpenAIs GPTモデルの上に構築されており、OpenAIのAPIキーを入力する必要があります。現在、2つのモードをサポートしています：

- **GPT-3.5**：このモデルはGPT-4ほど進んでいないため、このモードは非常に限定的なAI機能のみをサポートしています。

- **GPT-4**：このAIモードにはすべての生成機能が含まれており、大幅に優れた結果を提供します。

:::note
同じAIコマンドの性能は、GPTバージョンの異なる能力により、2つのモード間で異なることに注意してください。最高の結果を得るためには、より良い出力を提供するGPT-4モードの使用をお勧めします。
:::

## 設定手順

プロジェクトを開くと、ノードキャンバスの左上隅にAIバーが表示されます。エディター設定（サイドパネル内）で、AIモデルを変更するオプションや、すべてのAI機能を無効にするオプションを見つけることができます。

<div className="ndl-image-with-background l">

![](/docs/getting-started/noodl-ai/settings.png)

</div>

## AIコマンド

Noodl AIを使用するときは、作業したいコマンドのタイプを選択します。これにより、AIは可能な限り最適な結果を生成するのに役立ちます。裏側では、コマンドは関連するコンテキストとプロジェクト情報でAIを設定し、効果的にタスクを実行することができます。

Noodl AIには以下のコマンドがあります：

- `/Function`
- `/Read from database`
- `/Write to database`
- `/UI`
- `/Image`

### `/Function`

<div className="ndl-image-with-background">

![](/docs/getting-started/noodl-ai/function.png)

</div>

`/Function`コマンドは、カスタムJavaScript関数を生成することに特化しています。これは最も柔軟で汎用性の高いコマンドです。Noodl AIは、ノードに入力/出力を作成し、それに送られたデータをチェックし、成功と失敗のシグナルを送信するなど、Noodlのベストプラクティスに従ったコードを生成することを保証します。また、関数に名前を付けることは必須ではありませんが、自動的な自己文書化のための素敵なタッチです。

初期プロンプトの後、現在アクティブなノードグラフにAI Functionノードが作成されます。そのプロパティパネルでは、**AI Chat**と**Properties**の2つのタブを見つけることができます。

**AI Chat**タブでは、生成されたコードの説明を得られます。また、AIに対してプロンプトを続けて結果を洗練させることもできます。チャット履歴は保存されるので、いつでも戻って詳細に機能を思い出すことができます。

<div className="ndl-image-with-background">

![](/docs/getting-started/noodl-ai/function-chat-panel.png)

</div>

**Properties**タブは、通常のFunctionノードのプロパティパネルと同じです。ここで生成されたコードを検査し、手動で変更することができます。AIは、将来のフォローアッププロンプトであなたの変更を考慮に入れます。

<div className="ndl-image-with-background l">

![](/docs/getting-started/noodl-ai/function-properties-panel.png)

</div>

`/Function`コマンドをプロンプトする例はこちらです：

- https

://youtu.be/-9bd5AVo9o8
- https://youtu.be/8eOEhphQz6k

:::note
GPTのトークンメモリが限られているため、コードが長くなりすぎるとAIが幻覚を起こすことがあります。これは生成されたコードの品質を低下させる可能性があります。大きな関数を、それぞれ一つのタスクを処理する小さな関数に分割することを検討してください。<br/><br/>
これにより、プロンプトが容易になり、AIが指示を誤解するリスクを最小限に抑えることができます。
:::

### `/Read from database`

<div className="ndl-image-with-background">

![](/docs/getting-started/noodl-ai/read-db.png)

</div>

`/Read from database`コマンドは、接続されたNoodlデータベースへのクエリを作成するために使用されます。これはデータベーススキーマでプライムされているため、シンプルなテキストプロンプトから複雑なクエリを作成できます。また、通常のデータベースクエリを超えて、必要に応じて返されたデータの計算や処理を行うこともできます。

初期プロンプトの後、現在アクティブなノードグラフにAI Queryノードが作成されます。技術的には、`/Function`コマンドで作成されたAI Functionノードの上に構築されていますが、内部ルールは異なります。ただし、ユーザーの視点からは同じ方法で動作し、[**AI Chat**および**Properties**タブ](#function)で同じ機能を持っています。

`/Read from database`コマンドをプロンプトする例はこちらです：

- https://youtu.be/CxdyIqMq8gE
- https://youtu.be/nr4BI_pvoFA

### `/Write to database`

<div className="ndl-image-with-background">

![](/docs/getting-started/noodl-ai/write-db.png)

</div>

`/Write to database`コマンドは、接続されたNoodlデータベースにデータを作成または更新するために使用されます。これはデータベーススキーマでプライムされているため、シンプルなテキストプロンプトからデータベースへの複雑な更新を行うことができます。また、通常のデータベース変更を超えて、必要に応じて保存される前にデータを処理することもできます。

初期プロンプトの後、現在アクティブなノードグラフにAI Queryノードが作成されます。技術的には、`/Function`コマンドで作成されたAI Functionノードの上に構築されていますが、内部ルールは異なります。ただし、ユーザーの視点からは同じ方法で動作し、[**AI Chat**および**Properties**タブ](#function)で同じ機能を持っています。

`/Write to database`コマンドをプロンプトする例はこちらです：

- https://youtu.be/nr4BI_pvoFA

### `/UI`

<div className="ndl-image-with-background l">

![](/docs/getting-started/noodl-ai/ui-command.png)

</div>

:::note
これは実験的なコマンドであり、まだ限定的で未熟です。
:::

`/UI`コマンドは、テキストプロンプトから視覚的なノードを生成するために使用されます。現在、Group、Columns、Button、Text Input、Checkbox、Image、Dropdownノードをサポートしており、限定的なスタイリングが可能です。また、デザインシステムからのコンポーネントをAIアノテーションがある場合に生成することもできます。

初期プロンプトの後、視覚ツリーの下部でノードの生成が始まります。これらは`Explicit width & content height`に設定されたGroupノード内に配置されます。

#### AI使用のためのコンポーネントのアノテーション

`/UI`コマンドがより有用な結果を生成するのを助けるために、視覚的なコンポーネントにAIメタデータを追加できます。`/UI`コマンドはまだ実験段階にあり、この機能はNoodlのコメント機能を使用して手動で行われます。UXとコマンドのパフォーマンスは将来変更されますが、コミュニティからのフィードバックを得るために現在の進捗状況を共有したいと考えています。

<div className="ndl-image-with-background xl">

![](/docs/getting-started/noodl-ai/annotation.png)

</div>

`/UI`コマンドは、プロンプトされたレイアウトを生成する際に、あなたのコンポーネントを考慮するようになります。これは、コマンドプライマーにアノテーションを注入することによって機能します（GPTの多くのことと同様に）、最適な結果を得るために説明を調整する必要があるかもし

れません。

この方法は、デザインシステムを細かく制御することを可能にしながら、大規模言語モデルの能力を活用して、実際の環境で有用（かつ再利用可能）な結果を提供します。

### `/Image`

<div className="ndl-image-with-background l">

![](/docs/getting-started/noodl-ai/image-command.png)

</div>

:::note
これは実験的なコマンドであり、まだ限定的で未熟です。
:::

`/Image`コマンドは、単一のImageノードを作成し、それにDall-Eで生成された画像を配置します。画像はプロジェクトフォルダに保存されます。

> すべてのプロンプトはOpenAIに送信されます。これには、コンポーネントのAIアノテーションやデータモデルも含まれますが、データベースのデータは含まれません。ただし、これはOpenAIsモデルのトレーニングには使用されません。<br/><br/>
> OpenAIsのデータ使用ポリシーについては[こちら](https://openai.com/policies/api-data-usage-policies)をご覧ください。