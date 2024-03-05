---
title: 外部データ
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import ImportButton from '/src/components/importbutton'

# 外部データ

## このガイドで学べること
これまで、主に**Static Array**から来るローカルデータのみを扱ってきました。これはプロトタイプを作成し、すばやく始めるのに適していますが、実際には外部データとの統合が必要になります。このガイドでは、Webアプリケーションで最も一般的なAPIタイプであるREST APIを使用して、それを行う方法を示します。

## Airtable
このガイドでは、**Airtable**のREST APIを使用して、**Airtable**のテーブルにレコードを読み書きします。このガイドでは、REST APIについて少し知っていることを前提としています。そして、**Airtable**のアカウントを作成する必要があります。**Airtable** REST APIについては[こちら](https://support.airtable.com/hc/en-us/articles/203313985-Public-REST-API)で詳しく読むことができます。ほとんどのREST APIは似たような方法で動作するので、ここで得た知識は他のほとんどのAPIにも適用できるはずです。

このガイドでは、[UIコントロールとデータ](/docs/guides/data/ui-controls-and-data)ガイドからのCRUD例を拡張し、**Airtable**のテーブルに接続してレコードを作成、更新、読み取り、削除します。これを行うために、新しいairtableベースを作成し、**Members**というテーブルを追加しました。また、ガイドのmemberオブジェクトに対応する3つのフィールドを作成しました。

* **Full Name**、メンバーの名前を含む文字列。
* **Receive Marketing Emails**、メンバーがマーケティングメールを受け取るべきかどうかを示すチェックボックス（ブーリアン）。
* **Awesomeness**、メンバーの一般的な素晴らしさを0から100の間で示す数値。

<div className="ndl-image-with-background l">

![](/docs/guides/data/external-data/airtable.png)

</div>

テーブルに対して実行できるさまざまな**Airtable** REST API操作についての素晴らしいドキュメントがありますが、ここではそれらを簡単に見てから、それらを使用します。

さあ、始めましょう。[UIコントロールとデータ](/docs/guides/data/ui-controls-and-data)ガイドの最後で終わったところから始めますが、準備ができていない場合は、ここで完成したコンポーネントをインポートできます。

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/external-data/final-crud.mp4")}/>
    <ImportButton zip="/docs/guides/data/external-data/final-crud-1.zip" name="CRUD Example" thumb="/docs/guides/data/external-data/final-crud-thumb.png" />
</div>

## RESTノード
REST APIコールを行うために、組み込みの[REST](/nodes/data/rest)ノードを使用します。まず、重要なプロパティについて説明します：

<div className="ndl-image-with-background l">

![](/docs/guides/data/external-data/rest-props.png)

</div>

* **Resources** これは、要求されるREST APIエンドポイントとリソース、すなわちURIです。
* **Method** は使用されるHTTPメソッドで、**GET**、**POST**、**PUT**、**DELETE**、**PATCH**のいずれかになります。

リソースとメソッドを指定したら、送信前にリクエストを準備するための小さなスクリプト2つを使用する必要があります。そして、レスポンスを解析するための2番目のスクリプトです。

<div className="ndl-image-with-background l">

![](/docs/guides/data/external-data/rest-props-2.png)

</div>

まず、リクエストスクリプトを見てみましょう。このスクリプトを使用してリクエストを準備します。これは、**Request**オブジェクトを変更することによって行われます。以前の**resource**（URI）と**method**を変更することができます。

```javascript
Request.resource = "https://example.org"
Request.method = "POST"
```

HTTPヘッダーも変更できます。

```javascript
Request.headers['authorization'] = "shhh it's a secret"
```

```Reuqest.parameters```オブジェクトを使用して、リクエストが行われる前にURIにクエリパラメーターを設定できます。以下のスクリプトは、リクエストが行われる前にURIに```?search=find-this```を追加します。

```javascript
Request.parameters['search'] = "find-this"
```

最後に、```Reuqest.content```オブジェクトを変更できます。これは、メソッドが**PUT**、**POST**、または**PATCH**の場合に送信されるJSON互換のオブジェクトである必要があります。Noodlの多くのスクリプトと同様に、

ノード用のカスタム入力を指定するために```Inputs```オブジェクトを使用できます。

```javascript
Request.content = {
    something:Inputs.MyInput
}
```

上記のスクリプトは、Restノード上に**MyInput**という名前のカスタム入力を作成します。その入力に接続された任意の値は、リクエストスクリプトで```Inputs.MyInput```を使用して取得でき、上記のスクリプトではリクエストコンテンツの一部として使用されます。

次に、**response**スクリプトがあります。このスクリプトは、REST APIコールからのレスポンス（成功した場合）を取得し、解析し、**REST**ノードのカスタム出力として公開します。```Response.status```にはレスポンスのHTTPステータスが含まれ、```Response.content```にはJSONとして解析されたコンテンツが含まれます。リクエストスクリプトが```Inputs```オブジェクトを使用してカスタム入力を作成したように、このスクリプトも```Ouputs```オブジェクトを使用してレスポンスを公開するためのカスタム出力を作成できます。**Airtable** APIを使用する方法を見てみましょう。

これは、RESTノードの動作方法についての簡単な紹介です。[REST](/nodes/data/rest)ノードのリファレンスドキュメントで詳細を読むことができます。さて、**Airtable**を使用してCRUD例を接続する続きに進みましょう。

## すべてのメンバーを一覧表示

まず、**REST**ノードを使用して、**Airtable**テーブルのすべてのメンバーを一覧表示し、メンバーを保存するために使用する**Array**ノードに入れます。これを行うには、次のREST APIコールを実行する必要があります（**Airtable**ベースの**id**を自分のものに置き換え、テーブルが**Members**と呼ばれていることを確認してください）。

```javascript
GET https://api.airtable.com/v0/appGx6whFNzxu54eP/Members
```

単純に**REST**ノードを作成し、上記のURI（自分のベースIDで）の**Resource**プロパティを変更します。次に、**REST**ノードの**Fetch**入力をルート**Group**ノードの**Did mount**信号出力に接続します。これにより、**Group**ノードが表示されるとすぐにリクエストが実行されるようになります。ノードの新しいラベルを"List all members"として、何をしているのか追跡できるようにしました。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/external-data/list-all-members.png)

</div>

また、**Airtable API Token**を提供するために**Request**スクリプトを変更する必要があります。そうしないと、リクエストは通過しません。**REST**ノードのリクエストスクリプトを以下のように変更し、自分の**API token**を提供してください。

```
Request.headers['Authorization'] = 'Bearer your-api-token'
```

これで、Noodlエディターのビューアを更新して**Did mount**信号が送信されるようにすれば、リクエストは通過するはずです。**Airtable**からのサンプルレスポンスは以下のようになります。これをアプリで使用するためには、このレスポンスを解析する必要があります。

```
{
  "records": [
    {
      "id": "rec0Qw9FdqjcaDF2W",
      "createdTime": "2022-04-14T08:40:28.000Z",
      "fields": {
        "Full Name": "Lisa Simpson",
        "Awesomeness": 80
      }
    },
    {
      "id": "recMbwuixscqMroQn",
      "createdTime": "2022-04-14T14:26:42.000Z",
      "fields": {
        "Full Name": "Marge Simpson",
        "Awesomeness": 0
      }
    },
    {
      "id": "recScNKnPqO3xHd4c",
      "createdTime": "2022-04-14T08:40:28.000Z",
      "fields": {
        "Receive Marketing Emails": true,
        "Full Name": "Homer Simpson",
        "Awesomeness": 50
      }
    }
  ]
}
```

これを**REST**ノードのレスポンススクリプトで行います。**id**とフィールドを直接プロパティとして持つ単純な配列を作成し、それを**REST**ノードの出力として返します。次の小さなスクリプトでそれができます。これは**Response**スクリプトに入れるべきものです。

```
Outputs.Members = Response.content.records.map((r) => ({
    id:r.id,
    'Full Name':r.fields['Full Name'],
    'Receive Marketing Emails':r.fields['Receive Marketing Emails'] == true,
    'Awesomeness':r.fields['Awesomeness']
}))
```

```Outputs```オブジェクトを使用して、すべてのメンバーオブジェクトの配列を含む**REST**ノード上の新しいカスタム出力を指定します。**id**（小文字である必要があります）を保持するこ

とが重要です。これは、後で編集や削除に使用する**Object**の**id**になります。そのスクリプトがあれば、メンバーを保持する**Array**に**REST**ノードの新しい出力を接続できます。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/external-data/list-all-members-2.png)

</div>

素晴らしいですね。これでメンバーを一覧表示し、ユーザーインターフェースに表示することができます。これでできたので、次に編集と削除に進みましょう。

## 新しいメンバーを作成

次に、**Airtable**テーブルに新しいメンバーを作成するためのREST APIコールを行うために、同じプロセスを繰り返します。そのためには、**REST**ノードを使用し、以下のリソースとメソッドを提供します。

```javascript
POST https://api.airtable.com/v0/appGx6whFNzxu54eP/Members
```

ここでは、リクエストスクリプトを変更して、**Object Id**を入力として取り、そのオブジェクトのプロパティを```Request.content```オブジェクトに配置する必要があります。次のスクリプトでそれができます。

``` 
Request.headers['Authorization'] = 'Bearer your-api-key'

const obj = Noodl.Object.get(Inputs.ObjectId)
Request.content = {
    records: [
        {
          fields: {
            "Full Name": obj["Full Name"],
            "Receive Marketing Emails": obj["Receive Marketing Emails"],
            "Awesomeness": obj["Awesomeness"]
          }
        }
    ]
}
``` 

まず、**Authorization**ヘッダーを**API token**と共に設定します。次に、REST APIコールの一部として送信するNoodlオブジェクトの**Id**を含むカスタム入力```Inputs.ObjectId```を使用します。```Noodl.Object.get```関数を使用して、その**Id**からオブジェクトを取得します。オブジェクトを手に入れたら、**Airtable** APIが期待する形式でコンテンツをフォーマットします。上記のスクリプトがあれば、**REST**ノードを以下のように接続できます。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/external-data/create-new-member.png)

</div>

つまり、新しく作成されたメンバーオブジェクトが**Array**に追加されると、**Insert Object Into Array**ノードの**Done**出力信号を**REST**ノードの**Fetch**入力に接続することで、**REST**リクエストをトリガーします。また、**REST**ノードのリクエストスクリプトで使用しているカスタム**ObjectId**入力に新しく作成されたオブジェクトの**Id**を接続することを忘れないでください。

:::note
小さな注意点があります。Noodlで**Create New Object**ノードを使用して新しいオブジェクトを作成すると、新しいランダムな**Id**が割り当てられます（接続を検査することで確認できます）。しかし、上記のリクエストを使用して**Airtable**でメンバーを作成すると、新しい**Airtable**内部のidが割り当てられます。編集や削除を行うためにはこれが必要です。これを解決する最も簡単な方法は、新しい「すべてのメンバーを一覧表示」リクエストを発行することです。単に「新しいメンバーを作成」RESTノードの**Success**信号を「すべてのメンバーを一覧表示」RESTノードの**Fetch**入力に接続してください。
:::

素晴らしいです、これでメンバーを一覧表示できるようになりましたし、メンバーの詳細を見ることができますし、新しいメンバーを作成することもできます。試してみてください。新しいメンバーが**Airtable**のテーブルに表示されるはずです。さて、次はメンバーの編集に進みましょう。

## メンバーを編集

メンバーの編集は、新しいメンバーを作成することと非常に似ています。異なるメソッドを使用する必要がありますが、同じリソースを使用します。また、URIの一部として**Object Id**を提供する必要があります。これは、REST APIに非常に一般的なパターンなので、便利なトリックがあります。```{MyInput}```表記を使用して、URIに直接カスタム入力を指定できます。したがって、この**REST**ノードには次のリソースとメソッドを使用します。これにより、**ObjectId**を入力として提供すると、自動的に正しいURIが作成されます。

```javascript
PATCH https://api.airtable.com/v0/appGx6whFNzxu54eP/Members/{ObjectId}
```

まだ**Airtable** APIが消費できる形式で```Request.content```オブジェクトをフォーマットする必要があります。これは、新しいメンバーを作成するときに使用したスクリプトと非常に似ています。

```
Request.headers['Authorization'] = 'Bearer your-api-token'

const obj = Noodl.Object.get(Inputs.ObjectId)
Request.content = {
      fields: {
        "Full Name": obj["Full Name"],
        "Receive Marketing Emails": obj["Receive Marketing Emails"],
        "Awesomeness": obj["Awesomeness"]
      }
}
```

これで、編集フォームコンポーネントから送信される出力信号**Save**に接続できます。前と同じように、**Object Id**も必要です。これは、**Edit**イベント、すなわち**Receive Event**ノードから取得できます。これは、編集フォームコンポーネントに表示されるときに渡されるのと同じ**Object Id**です。以下のようになるはずです。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/external-data/edit-member.png)

</div>

## メンバーを削除

最後に、メンバーを削除するサポートを追加する必要があります。これは、前と同じように行いますが、今回は**Member Item**コンポーネントで行います。そのためには、次のリソースとメソッドを使用します。

```javascript
DELETE https://api.airtable.com/v0/appGx6whFNzxu54eP/Members/{ObjectId}
```

リクエストスクリプトは、APIアクセストークンが必要です。

```
Request.headers['Authorization'] = 'Bearer your-api-token'
```

それから、以下に示すように**Member Item**コンポーネントで接続できます。

<div className="ndl-image-with-background xl">

![](/docs/guides/data/external-data/delete-member.png)

</div>

それでおしまいです。このガイドでは、以前の[ガイド](/docs/guides/data/ui-controls-and-data)でのCRUD例を外部のREST APIに接続する方法を**REST**ノードを使用して示しました。**REST**ノードを使用すると、JSONを使用してデータを送受信するほとんどのタイプのAPIに接続できます。