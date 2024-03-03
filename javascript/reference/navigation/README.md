---
hide_title: true
hide_table_of_contents: true
title: Noodl.Navigation
---

# Noodl.Navigation

**フロントエンドでのみ利用可能**  
**Noodl.Navigation** サービスを使用すると、関数やスクリプトからナビゲーションを実行できます。

#### **`Noodl.Navigation.showPopup(componentPath, parameters)`**  
この関数は、提供されたビジュアルコンポーネントをポップアップとして表示します。

```javascript
const result = await Noodl.Navigation.showPopup("#mysheet/mypopupcomponent", {
  Message: "こんにちは",
});

console.log(result.action); // ポップアップを閉じるために使用されたアクション
console.log(result.parameters); // 閉じるパラメーター
```

**parameters** はコンポーネントの入力として提供され、コンポーネントの入力名と一致する必要があります。

#### **`Noodl.Navigation.navigate(routerName, targetPageName, parameters)`**  
この関数は、**routerName** で識別された特定のページルーターでナビゲートし、**targetPageName**（ページコンポーネントへのパス）で識別されたページに移動し、**parameters** で提供されたパラメーターを与えます。

```javascript
Noodl.Navigation.navigate("Main", "#mysheet/DetailsPage", {
  ObjectId: theClickedObjectId,
});
```

#### **`Noodl.Navigation.navigateToPath(path, query)`**  
この関数は特定のURLパスにナビゲートします。オブジェクトとしてクエリパラメーターを提供できます。この関数は、プロジェクトで選択された現在のパスモード、ハッシュまたはパスを使用します。

```javascript
Noodl.Navigation.navigateToPath("/main/details/" + theClickedObjectId, {
  query: {
    filter: true,
  },
});
```