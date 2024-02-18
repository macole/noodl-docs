---
title: モジュールとプレファブ
hide_title: true
---

# Noodlのモジュールとプレファブ

Noodlには多くのノードが最初から利用可能ですが、すべてに対応するノードを含めることはできません。そのため、特定の機能やUIコントロールを捉えるノードやコンポーネントを含むモジュールやプレファブを追加して、プロジェクトを拡張することができます。

**モジュール**と**プレファブ**の主な違いは、**モジュール**がエディターに新しいノードをインストールするのに対し、**プレファブ**はコアノードで構築されたコンポーネントを複製し、あなたが自分で作成したかのように保存することです。プレファブは何度でもインポートでき、各複製は好きなように変更できます。

モジュールのリストは[こちら](/library/modules/overview)で、プレファブは[こちら](/library/prefabs/overview)で確認できます。ライブラリはすぐに成長し続けるので、頻繁にチェックすることをお勧めします。

## プロジェクトにモジュールとプレファブを追加する方法

プロジェクトにモジュールを追加するには、使用したいプロジェクトを開いて**ノードピッカー**を表示します。これは、ノードキャンバスで**右クリック**するか、左上の`+`アイコンをクリックすることで行えます。

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/modules/add-new-node.png)

</div>

ノードピッカーで、**モジュール**タブを見つけてから、使用したいモジュール上で**インポート**をクリックします。モジュールがプロジェクトに追加されます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-modules.png)

</div>

モジュールをインポートした後、新しいノードとコンポーネントが**外部ライブラリ**の下で利用可能になります。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/external-libraries.png)

</div>

プレファブの追加は、同じ方法で**プレファブ**タブを介して行われ、**インポート**をクリックします。プレファブはコンポーネントライブラリにコンポーネントを追加します。以前にその名前のコンポーネント（以前にプレファブを含めた場合など）を持っている場合、上書きするかどうか尋ねられます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-prefabs.png)

</div>

プレファブをインポートすると、**デフォルトシート**に一つまたは複数の新しいコンポーネントが追加されます。

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/prefabs-imported.png)

</div>

使用するプレファブのドキュメントを読むことを忘れないでください。そこでは、それらを使用する方法だけでなく、好みに合わせてカスタマイズして構築する方法についても役立つガイドが見つかります。