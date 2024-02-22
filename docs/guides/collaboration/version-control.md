---
title: バージョン管理
hide_title: true
---

# バージョン管理

バージョン管理には三つの主な用途があります：

- チームメンバーとの共同作業
- プロジェクトの異なるバージョンを並行して作業すること（「ブランチ」として知られています）
- バックアップ。すべてのバージョンはクラウドにバックアップされます

<div className="ndl-image-with-background s">

![](/docs/guides/collaboration/version-control/intro.png)

</div>

Noodlは、基盤となるバージョン管理システムとして[Git](https://git-scm.com)を使用しています。プロジェクトフォルダはGitリポジトリです。
NoodlでGitを操作する最も一般的な方法は、バージョン管理パネルを通じてです。Gitに慣れているユーザーは、外部のgitクライアントを使用してNoodlプロジェクトを表示することもできます。

## バージョン管理の有効化

バージョン管理機能を使用するためには、プロジェクトでGitを初期化する必要があります。これは、バージョン管理パネルを開いて「バージョン管理の初期化」ボタンをクリックすることで行うことができます。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/init-git.png)

</div>

これにより、プロジェクトでGitを実行するために必要なすべてのファイルが設定されます。ここから、ローカルでバージョン管理を行うことも、外部のGitリポジトリにプッシュすることもできます。これは、他の人と共同作業をしたい場合や、プロジェクトをリモートサーバーにバックアップしたい場合に便利です。

外部リポジトリへのプッシュは、「リモートを設定して変更をプッシュする」ボタンをクリックするか、ターミナルや[Github Desktop](https://desktop.github.com/)のようなGitクライアントを使用して行うことができます。

:::tip
Gitを初めて使用する場合は、作業を失わないように定期的に変更をプッシュすることを忘れないでください。良い目安としては、機能を完成させたり変更したりするたびに行うことです。
:::

プロジェクトの共同作業者は、リポからプロジェクトをクローンしてから、ダウンロードしたプロジェクトフォルダをNoodlで開く必要があります。

Gitを始める最も簡単な方法はGithubを通じてです。Githubリポの作成については[こちら](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories)、Githubリポのクローニングについては[こちら](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)で詳しく読むことができます。

:::note
Noodlは最初のプッシュ時に新しく作成されたリポをクリアします。しかし、安全を確保するために、`README.md`や`.gitignore`ファイルなしでリポを作成することを確認してください。
:::

## バージョン管理パネル

バージョン管理パネルは、バージョン管理に関連するすべてのアクションを実行する場所です。これには、新しい変更を共同作業者にプッシュする、最新バージョンをプルする、バージョン間の違いを確認する、ブランチをマージするなどのアクションが含まれます。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/initial-state.png)

</div>

## 変更をコミットする

プロジェクトに変更がある場合、それらをバージョン管理システムにコミットできます。これにより、現在のプロジェクト全体の状態のスナップショットであるコミットが作成されます。これは、共同作業者と変更を共有するため（または複数のコンピューターで作業している場合は自分自身と）、プッシュすることができます。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/status-commit.png)

</div>

Noodlは、変更されたすべてのコンポーネントとファイルを表示し、それらをクリックすると前のバージョンとの違いを確認できます。

<div className="ndl-image-with-background l">

![](/docs/guides/collaboration/version-control/first-commit.png)

</div>

変更がコミットされた後、コミットは履歴タブに表示されます。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/first-push.png)

</div>

「1つのローカルコミットをプッシュ」のボタンをクリックして変更をプッシュします。

## 変更をプルダウンする

バージョン管理パネルが開かれると、Noodlはプルダウンする

変更があるかどうかを確認します。

更新アイコンをクリックすることで手動で更新を確認することもできます。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/update.png)

</div>

新しいバージョンは「リモートコミット」として履歴タブに表示されます。これらはまだプルダウンしていないバージョンです。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/first-pull.png)

</div>

上部のボタンが点灯し、利用可能なリモートコミットの数を示します。それをクリックして変更をプルダウンします。履歴タブのコミットをクリックすると、プルダウンしようとしている変更を確認できます。

プッシュしていないローカルの変更がある場合、新しいバージョンをプルダウンした後もそこに残ります。それらは新しいバージョンに適用されます。これにより、次の話題であるコンフリクトにつながります。

## コンフリクト

時には、あなたと共同作業者が同じノード上の同じパラメータを変更することがあります。そのような場合、Noodlはどちらの変更を適用すべきかわからず、コンフリクトを解決するように求められます。

<div className="ndl-image-with-background l">

![](/docs/guides/collaboration/version-control/conflicts.png)

</div>

自分の変更を維持するか、共同作業者からの変更で上書きするかを選択して、コンフリクトを解決できます。

## ブランチ

ブランチは、後でマージできる、アプリケーションの異なる部分を並行して開発するために使用できます。

いくつかの一般的な使用例は以下の通りです：

- アプリの安定バージョン用のブランチと、開発バージョン用の別のブランチ
- 新しい機能が開発中のブランチで開発され、準備ができたらメインブランチにマージされる
- アプリの異なるデザインバリエーションを探求し、独立してデプロイし、最も成功したバリエーションを後でマージする
- ...そして他にも多くあります

### ブランチの作成

バージョン管理パネルのブランチドロップダウンの'+'アイコンをクリックしてブランチを作成します。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/branch-create.png)

</div>

ブランチが作成されるとNoodlは新しいブランチに切り替わります。プッシュされていないプロジェクトの変更は、この新しいブランチに移動します。

プッシュした変更は現在の新しいブランチに属し、他のブランチには影響しません。

### ブランチの切り替え

ブランチをクリックしてブランチ間を切り替えます。切り替えるには、ローカルの変更がない状態である必要があります。これを解決するには三つの方法があります：

- 現在のブランチに変更をコミットする
- 変更を削除する
- (上級者向け) 変更をスタッシュする

<div className="ndl-image-with-background l">

![](/docs/guides/collaboration/version-control/switch-branch.png)

</div>

### ブランチのマージ

一つのブランチの変更を別のブランチにマージできます。この例では、「my-new-feature」ブランチが「main」ブランチにマージされています。

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/merge-1.png)

</div>

「メインにマージ」をクリックすると、マージされる変更のプレビューが表示されます。Noodlは、マージが行われた後の変更を視覚化して表示します。

<div className="ndl-image-with-background l">

![](/docs/guides/collaboration/version-control/merge-2.png)

</div>

「ブランチをマージ」をクリックしてマージを実行します。

マージが完了すると、それはローカルで行われ、まだ共同作業者と共有されていません。変更をプッシュするか、ローカルで作業を続けるかを選べます。

## ブランチの削除

ブランチが別のブランチにマージされた後、それ以上使用されない場合は削除すると良いでしょう。

ブランチの削除は、ローカルとリモートの両方でブランチを削除します。他の共同作業者が削除したばかりのブランチで作業を行っていた場合、彼らのローカルコピーのブランチはそのまま intact され、彼らの変更をプッシュしてブランチを復元することを選択できます。

メインブランチは削除できません。

<div className="ndl-image-with-background">

![]

(/docs/guides/collaboration/version-control/branch-delete.png)

</div>