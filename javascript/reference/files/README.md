---
hide_title: true
hide_table_of_contents: true
title: Noodl.Files
---

# Noodl.Files

**Noodl.Files** サービスを使用すると、クラウドサービスのファイルにアクセスできます。

#### **`Noodl.Files.upload(file, options)`**  
**フロントエンドでのみ利用可能**  
この関数はファイルをバックエンドにアップロードします。オプションを使用して進行状況のコールバックを指定できます。

<div className="ndl-image-with-background xl">

![](/javascript/reference/files/upload.png)

</div>

```javascript
const cloudFile = await Noodl.Files.upload(Inputs.File, {
  onProgress: (p) => {
    console.log(p.total, p.loaded);
  },
});

console.log(cloudFile.name);
console.log(cloudFile.url);
```

#### **`Noodl.Files.delete(fileName)`**  
**クラウドファンクションでのみ利用可能**  
この関数は、バックエンドにアップロードされたファイルを削除します。ファイルがアップロードされたときに返されたファイル名を提供する必要があります。したがって、完全な`url`ではなく、アップロード関数によって返された`hash+filename`です。

```javascript
// クラウドファンクションでのみ実行可能
await Noodl.Files.delete(filename);
```