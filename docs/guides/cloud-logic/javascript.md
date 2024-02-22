---
title: クラウド関数でのJavascript
hide_title: true
---

# クラウド関数でのJavascript

すべてのノードがクラウド関数で利用可能なわけではありませんが、Javascriptを記述する上では**Function**ノードと**Expression**ノードが利用可能です。ただし、いくつか注意点があります。特にデプロイされたクラウド関数はブラウザではなくクラウドで実行され、はるかに限定されたランタイム環境を持っています。これは、ほとんどのブラウザAPIにアクセスできないことを意味し、クラウドランタイムは以下に限定されます：

- **コアJavascriptオブジェクトと関数** Javascript言語には、すべてクラウドランタイムで利用可能なコアオブジェクトと関数のセットが含まれています。詳細は[こちら](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)。

- **Noodl API** Noodl APIのサブセットがクラウド関数で利用可能です。Noodl APIについての詳細は[こちら](/javascript/overview)で読むことができます。いくつかの関数とオブジェクトには**フロントエンドでのみ利用可能**とラベルが付けられており、いくつかには**クラウド関数でのみ利用可能**とラベルが付けられています。残りはフロントエンドとクラウド関数の間で共有されます。

## Fetch

ブラウザで利用可能な**Fetch API**のサブセットもクラウド関数で動作し、外部サービスへのHTTPリクエストを行うのに非常に便利です。

**`fetch(url,options)`**  
**Fetch API**は最初にHTTPリクエストのエンドポイントを取り、次にオプションのオブジェクトを取ります。ここでは、エンドポイントに対してシンプルなPOSTリクエストを行う例をいくつか紹介します：

```javascript
const res = await fetch("https://some-endpoint",{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
        someParameters:"hello"
    })
})

if(res.ok) {
    Outputs.Success()
}
else Outputs.Failure()
```

## リクエストオブジェクト

クラウド関数のJavascriptで、現在処理されているリクエストに関するデータを含むリクエストオブジェクトにアクセスできます。

```javascript
const request = Noodl.Objects.Request;

request.UserId // 認証された場合、クラウド関数を呼び出したユーザーのユーザーIDを含みます
request.Authenticated // この呼び出しが認証されている場合はtrueになります
request.Parameters // 現在のクラウド関数リクエストのパラメーターを含むオブジェクト
request.Headers // 現在のクラウド関数リクエストのHTTPヘッダーを含むオブジェクト
```