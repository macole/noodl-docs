---
hide_title: true
hide_table_of_contents: true
title: Noodl.Users
---

# Noodl.Users

**Noodl.Users** オブジェクトを使うと、現在のセッションユーザーにアクセスできます。

#### **`Noodl.Users.logIn(options)`**

この関数はユーザーセッションを作成するためのログインを試みます。ログインに成功すると、`Noodl.Users.Current` でユーザーオブジェクトにアクセスできます。

```javascript
// フロントエンドでログインして Noodl.Users.Current でユーザーにアクセス
await Noodl.Users.logIn({
  username: "my-username",
  password: "my-password",
});

console.log(Noodl.Users.Current.UserId);

// クラウドファンクションで実行すると、ユーザーオブジェクトも返されます
const user = await Noodl.Users.logIn({
  username: "my-username",
  password: "my-password",
});

console.log(user.sessionToken);
```

#### **`Noodl.Users.signUp(options)`**

**フロントエンドでのみ利用可能**  
この関数は新しいユーザーのサインアップを試み、成功するとそのユーザーが現在のユーザーセッションになります。ユーザーネーム、メール、パスワードは必須オプションで、プロパティはオプションです。

```javascript
await Noodl.Users.signUp({
  username: "my-username",
  email: "my-email",
  password: "my-password",
  properties: {
    SomeProperty: true,
  },
});
```

#### **`Noodl.Users.become(sessionToken)`**

**フロントエンドでのみ利用可能**  
この関数は、既存のセッショントークンでユーザーをログインさせようとします。セッショントークンは、たとえば `impersonate` 関数を使用してクラウドファンクションで作成できます。ログインに成功すると、`Noodl.Users.Current` でユーザーオブジェクトにアクセスできます。

```javascript
// Inputs.SessionToken を持つ関数ノードから呼び出します
try {
  await Noodl.Users.become(Inputs.SessionToken);
} catch (e) {
  Outputs.Failure();
  throw e;
}

// これでユーザーにアクセスできます
const userId = Noodl.Users.Current.UserId;

Outputs.Success();
```

#### **`Noodl.Users.impersonate(username, options)`**

**クラウドファンクションでのみ利用可能**  
この関数を使用すると、後でクライアントに送信してそのユーザーをログインさせるためのセッショントークンを取得できます。これにはパスワードは必要なく、データベースへのフルアクセスを持つクラウドファンクションで実行する必要があります。成功すると、クライアントに返すために `become` 関数で使用できるセッショントークンを含むユーザーオブジェクトが返されます。

**installationId** は、異なるクライアント間でセッションを共有しない場合に使用するオプションの一意のIDです。一般的には、クライアントでランダムなIDを生成し、ログイン時にクラウドファンクションに渡します。

```javascript
try {
  const user = await Noodl.Users.impersonate("test@email.com", {
    duration: 1 * 60 * 60 * 1000, // セッションを1時間持続させる
    installationID: "xyz",
  });

  Outputs.SessionToken = user.sessionToken;
  Outputs.Success();
} catch (e) {
  Outputs.Failure();
  throw e;
}
```

#### **`Noodl.Users.Current`**

この関数は、存在する場合、現在のユーザーオブジェクトとプロパティを返します。

```javascript
const user = Noodl.Users.Current;
if (user) {
  // ユーザーがログインしている
  console.log(user.UserId); // 現在のユーザーのユーザーID

  console.log(user.Properties.SomeProperty);
} else {
  // ユーザーセッションがありません
}
```

#### **`Noodl.Users.Current.fetch()`**

この関数は、クラウドデータベースからユーザーオブジェクトの最新のプロパティを取得します。ユーザーセッションが期限切れの場合、例外をスローします。

```javascript
await Noodl.Users.Current.fetch();
```

#### **`Noodl.Users.Current.save()`**

この関数は、現在のユーザーのプロパティを保存しようとします。**current()** ユーザーオブジェクトに変更を加えた場合、バックエンドに変更を書き込むためにこの関数を呼び出す必要があります。
`password` が更新された場合、すべてのセッションが終了し、ユーザーは再度ログインする必要があります。

```javascript
await Noodl.Users.Current.save();
```

#### **`Noodl.Users.Current.logOut()`**

**フロントエンドでのみ利用可能**  
この関数は、現在のユーザーをログアウトし、セッションを終了します。

```javascript
await Noodl.Users.Current.logOut();
```

#### **`Noodl.Users.on(eventName, callback)`**

**フロントエンド

でのみ利用可能**  
この関数を使用して、ユーザーサービスに関連するイベントをリッスンできます。

```javascript
Noodl.Users.on("sessionLost", () => {
  // セッションが期限切れの場合に呼び出されます
});

Noodl.Users.on("loggedIn", () => {
  // ユーザーが正常にログインした場合に呼び出されます
});

Noodl.Users.on("loggedOut", () => {
  // ユーザーが正常にログアウトした場合に呼び出されます
});
```

#### **`Noodl.Users.off(eventName, callback)`**

**フロントエンドでのみ利用可能**  
この関数を使用して、特定のイベントからイベントリスナーを削除します。