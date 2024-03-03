---
hide_title: true
hide_table_of_contents: true
title: Noodl.Events
---

# Noodl.Events

**フロントエンドでのみ利用可能**  
これはNoodlのイベントエミッターで、スクリプトからイベントを受信および送信するために使用できます。イベントについての詳細は、[ガイド](/docs/guides/business-logic/events)で学ぶことができます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/events/events.gif)

</div>

#### **`Noodl.Events.emit(eventName, data)`**

イベントを送信します。_イベントレシーバー_ とよく連携します。

```javascript
Noodl.Events.emit("イベント名", {
  value: "こんにちは",
  someOtherValue: 100,
});
```

#### **`Noodl.Events.on(eventName, callback(data))`**

#### **`Noodl.Events.once(eventName, callback(data))`**

イベントを受信します。_イベントセンダー_ と連携します。

```javascript
Noodl.Events.on("イベント名", function (eventData) {
  console.log(eventData.value);
});
```

#### **`Noodl.Events.off(eventName, callback(data))`**

イベントハンドラーを削除します。

```javascript
function onEventName(eventData) {
  console.log(eventData.value);
}

Noodl.Events.on("イベント名", onEventName);
Noodl.Events.off("イベント名", onEventName);
```

## 機能

### ページルーターナビゲーションのリスニング

以下は、ページルーターナビゲーションイベントをリスニングする方法の例です。

```js
Script.Outputs = {
  Navigated: "signal",
};

function onNavigated({
  // ルーターの名前。例えば「Main」。
  routerName,
  // このページルーター上の相対パス。
  // 完全なパスを取得するには、`window.location.pathname`を使用します。
  path,
  title,
  // コンポーネント名。例えば'/Pages/MyPage'。
  // （これは「Pages」フォルダ内のページです）
  component
}) {
  Script.Outputs.Navigated();
}

Script.Signals.DidMount = function () {
  Noodl.Events.on("NoodlApp_Navigated", onNavigated);
};

// OnDestroyは、Scriptノードがアンマウントされたときに呼び出されます。
// ここで、イベントリスナーを削除するためのクリーンアップを行います。
Script.OnDestroy = function () {
  Noodl.Events.off("NoodlApp_Navigated", onNavigated);
};
```