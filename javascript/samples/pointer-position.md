---
hide_title: true
hide_table_of_contents: true
title: ポインター位置の例
---

import CopyToClipboardButton from '/src/components/copytoclipboardbutton'

# ポインター位置の例

<div class="ndl-image-with-background xl">
    
     <CopyToClipboardButton json={{"nodes":[{"id":"0f09b7cb-50ab-74b8-52c1-7058a0769284","type":"Javascript2","label":"Pointer Position","x":-497.981910869314,"y":389.26538248207396,"parameters":{"code":"function setPosition(e) {\n    Script.Outputs.PointerX = e.clientX;\n    Script.Outputs.PointerY = e.clientY;\n}\n\nScript.OnInit = function() {\n     document.body.addEventListener(\"mousemove\", setPosition);\n\t document.body.addEventListener(\"mousedown\", setPosition);\n}\n\nScript.OnDestroy = function() {\n\t document.body.removeEventListener(\"mousedown\", setPosition);\n\t document.body.removeEventListener(\"mousemove\", setPosition);    \n}"},"ports":[],"children":[]},{"id":"bdc3ce12-5c23-27ee-7918-ad154b20e668","type":"Number","label":"X","x":-249.18868850167155,"y":333.4616732156818,"parameters":{},"ports":[],"children":[]},{"id":"efbbb196-1b60-27f2-26c6-e7fc0d69d23d","type":"Number","label":"Y","x":-256.3223936828915,"y":481.4925282575018,"parameters":{},"ports":[],"children":[]}],"connections":[{"fromId":"0f09b7cb-50ab-74b8-52c1-7058a0769284","fromProperty":"PointerX","toId":"bdc3ce12-5c23-27ee-7918-ad154b20e668","toProperty":"value"},{"fromId":"0f09b7cb-50ab-74b8-52c1-7058a0769284","fromProperty":"PointerY","toId":"efbbb196-1b60-27f2-26c6-e7fc0d69d23d","toProperty":"value"}]}} />

![](/javascript/samples/pointer-position/pointer-position.png)
</div>

この例では、イベントリスナーをウェブページのbody要素にアタッチし、`mousemove`をリッスンします。

```js
Script.OnInit = function () {
    document.body.addEventListener('mousemove', (e) => {
        Script.Outputs.PointerX = e.clientX
        Script.Outputs.PointerY = e.clientY
    })
}
```

これを `mousedown` イベントを含むように拡張しましょう。これにより、ポインターイベントが開始されるとすぐに更新され、移動したときだけでなく更新されます。同じコードが2回必要なので、関数に追加しましょう。

```js
function setPosition(e) {
    Script.Outputs.PointerX = e.clientX
    Script.Outputs.PointerY = e.clientY
}

Script.OnInit = function () {
    document.body.addEventListener('mousemove', setPosition)
    document.body.addEventListener('mousedown', setPosition)
}
```

JavaScriptノードが破棄されたときにイベントリスナーを削除することで、これをさらに拡張することができます。これは、このコードを実行するページからユーザーがナビゲートしたとき、または **Repeater** ノードによって生成されたコンポーネントにこのコードがあるときに発生する可能性があります。

```js
function setPosition(e) {
    Script.Outputs.PointerX = e.clientX
    Script.Outputs.PointerY = e.clientY
}

Script.OnInit = function () {
    document.body.addEventListener('mousemove', setPosition)
    document.body.addEventListener('mousedown', setPosition)
}

Script.OnDestroy = function () {
    document.body.removeEventListener('mousedown', setPosition)
    document.body.removeEventListener('mousemove', setPosition)
}
```