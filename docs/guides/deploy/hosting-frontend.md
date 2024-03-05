---
title: Noodlフロントエンドのセルフホスティング
hide_title: true
---

# Noodlフロントエンドのセルフホスティング

## このガイドで学べること

このガイドでは、Noodlアプリのフロントエンドをローカルフォルダにデプロイし、それをGoogle Cloud PlatformまたはAWSでホストすることによって**セルフホスティング**する方法を学びます。

## ローカルフォルダへのデプロイ

Noodlのデプロイメントポップアップを開いて、フロントエンドのバージョンをローカルマシンのフォルダに保存します。このフォルダには必要なすべてが含まれており、その内容をホスティングサービスにアップロードするだけです。

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/hosting-frontend/noodl-deploy-to-folder.png)

</div>

デプロイ用に使用したいバックエンドを選択してください。

## GCPまたはAWSでフロントエンドをホストする

- **Google Cloud Platform** GCPを使用してフロントエンドをホストする場合、[このガイド](https://cloud.google.com/storage/docs/hosting-static-website)に従うことができます。ここでは、バケット、ロードバランサー、およびCDNを作成します。

- **Amazon Web Services** AWSを使用することを好む場合は、[このビデオ](https://www.youtube.com/watch?v=BpFKnPae1oY&ab_channel=AmazonWebServices)を視聴することができます。ここでは、S3バケットの作成方法とAWS DNSサービスRoute 53を使用したトラフィックのルーティング方法について説明します。