## URL内のパラメータのエンコード

[Page Inputs](/nodes/navigation/page-inputs)ノードは、URLにエンコードされたパラメータをページ間で送信するために使用されます。これは例えば、アプリの状態に関係なく、特定の入力パラメータをページで利用可能にしたい場合に便利です。たとえば、ユーザーがブラウザで__Refresh__を押すかもしれません。パラメータがURLにエンコードされているため、**Page Inputs**ノードを通じて**Page**で引き続き利用可能です。
URLにパラメータをエンコードするもう1つのケースは、特定のパラメータが設定されたアプリの特定の場所への完全なルートを持つリンクをユーザーが共有できるようにするためです。

パラメータには**Path Parameters**と**Query Parameters**の2種類があります。**Path Parameter**は1つだけ設定可能ですが、**Query Parameters**はいくつでも持つことができます。

### Path Parameter

**Path Parameter**はページのルートの最後に追加されます。たとえば、**URL Path**が`mypage`でpath parameterが定義されている**Page**は、ルートの次の部分がそのパラメータの値であることを期待します。ルート`mypage/monkey`は、**Page**の**Path Parameter**に`monkey`という値を設定します。**Path Parameter**は、**Page**で特定のデータエントリーを事前に入力するための便利な方法です。例えば、**Path Parameter**は**Record**の**Id**である可能性があります。

### Query Parameter

**Query Parameter**はURL内で`?parameter=value;`の記法を使用してエンコードされます。**Query Parameters**はいくつでも持つことができます。