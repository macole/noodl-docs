const { recursiveBuildSidebarData } = require('./dataHelpers');

const guides = [
  {
    type: 'category',
    label: 'ユーザーインターフェースの構築',
    link: {
      type: 'doc',
      id: 'guides/user-interfaces/overview',
    },
    items: [
      {
        type: 'doc',
        label: 'ビジュアルノード',
        id: 'guides/user-interfaces/basics',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'Noodlのノードモデルを使用してビジュアルエレメントを配置し編集する方法を学びます',
      },
      {
        type: 'doc',
        label: 'コンポーネント',
        id: 'guides/user-interfaces/components',
        imageUrl: '/img/featured-content-images/basic.png',
        description: '再利用可能なビジュアルコンポーネントの作成方法を学びます',
      },
      {
        type: 'doc',
        label: 'レイアウト',
        id: 'guides/user-interfaces/layout',
        imageUrl: '/img/featured-content-images/layout.png',
        description:
          'ビジュアルノードを使用してレイアウトを作成し、コンテンツをグループ化する方法を学びます',
      },
      {
        type: 'doc',
        label: 'レスポンシブデザイン',
        id: 'guides/user-interfaces/responsive-design',
        imageUrl: '/img/featured-content-images/basic.png',
        description: 'レスポンシブなレイアウトとコンポーネントの構築方法を学びます',
      },
      {
        type: 'doc',
        label: 'スタイルバリアント',
        id: 'guides/user-interfaces/style-variants',
        imageUrl: '/img/featured-content-images/layout.png',
        description: 'ビジュアルエレメントのスタイルバリアントを定義する方法を学びます',
      },
      {
        type: 'doc',
        label: 'ビジュアルステート',
        id: 'guides/user-interfaces/visual-states',
        imageUrl: '/img/featured-content-images/layout.png',
        description:
          'UIエレメントのホバー、フォーカスなどのビジュアルステートをスタイリングする方法を学びます',
      },
      {
        type: 'doc',
        label: 'ステートノード',
        id: 'guides/user-interfaces/states',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'UIステート、アニメーションなどを作成するためのステートノードの使用方法を学びます',
      },
      {
        type: 'doc',
        label: 'スクロールコンテンツ',
        id: 'guides/user-interfaces/scrolling-content',
        imageUrl: '/img/featured-content-images/layout.png',
        description: 'スクロールコンテナとページの設定方法を学びます',
      },
      {
        type: 'doc',
        label: 'モジュールとプリファブ',
        id: 'guides/user-interfaces/modules',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'プリメイドコンポーネント、サードパーティサービス、新しい機能をモジュールで取得します',
      },
      {
        type: 'doc',
        label: 'Figmaプラグイン',
        id: 'guides/user-interfaces/figma-plugin',
        imageUrl: '/img/featured-content-images/basic.png',
        description: 'FigmaのデザインをNoodlノードに変換します',
      },
    ],
  },

  {
    type: 'category',
    label: 'データの操作',
    link: { type: 'doc', id: 'guides/data/overview' },
    items: [
      {
        type: 'doc',
        label: 'コネクションの作成',
        id: 'guides/data/making-connections',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'ノード間でデータコネクションを作成する方法を学びます。',
      },
      {
        type: 'doc',
        label: '変数',
        id: 'guides/data/variables',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'アプリ内でデータをローカルに保存するための変数の使用方法を学びます',
      },
      {
        type: 'doc',
        label: 'オブジェクト',
        id: 'guides/data/objects',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'アプリ内でデータのオブジェクトをローカルに保存する方法を学びます',
      },
      {
        type: 'doc',
        label: '配列',
        id: 'guides/data/arrays',
        imageUrl: '/img/featured-content-images/list.png',
        description: '複数のデータオブジェクトを配列で保存する方法を学びます',
      },
      {
        type: 'doc',
        label: 'リストの基本',
        id: 'guides/data/list-basics',
        imageUrl: '/img/featured-content-images/list.png',
        description: 'データからUIエレメントのリストを生成する方法を学びます',
      },
      {
        type: 'doc',
        label: 'UIコントロールとデータ',
        id: 'guides/data/ui-controls-and-data',
        imageUrl: '/img/featured-content-images/list.png',
        description:
          'UIコントロールをデータノードに接続してフォームなどを作成する方法を学びます',
      },

      {
        type: 'doc',
        label: '外部データ',
        id: 'guides/data/external-data',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'REST APIを使用して外部データを操作する方法を学びます',
      },
    ],
  },

  {
    type: 'category',
    label: 'ナビゲーション',
    link: { type: 'doc', id: 'guides/navigation/overview' },
    items: [
      {
        type: 'doc',
        label: '基本的なナビゲーション',
        id: 'guides/navigation/basic-navigation',
        imageUrl: '/img/featured-content-images/navigation.png',
        description:
          'ページの作成とページ間のナビゲーション方法を学びます',
      },
      {
        type: 'doc',
        label: 'マルチレベルナビゲーション',
        id: 'guides/navigation/multi-level-navigation',
        imageUrl: '/img/featured-content-images/navigation.png',
        description: 'マルチレベルナビゲーションシステムの設定方法を学びます',
      },
      {
        type: 'doc',
        label: 'URL内のパラメータのエンコーディング',
        id: 'guides/navigation/encoding-parameters-in-urls',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'ページ間のナビゲーション時にURL内にパラメータを渡す方法を学びます',
      },
      {
        type: 'doc',
        label: 'ポップアップ',
        id: 'guides/navigation/popups',
        imageUrl: '/img/featured-content-images/navigation.png',
        description: 'ユーザーの操作に応じてポップアップを表示する方法を学びます',
      },
      {
        type: 'doc',
        label: 'コンポーネントスタック',
        id: 'guides/navigation/component-stack',
        imageUrl: '/img/featured-content-images/navigation.png',
        description:
          'コンポーネントスタックを使用してウィザードフローを作成する方法を学びます',
      },
    ],
  },

  {
    type: 'category',
    label: 'クラウドデータの操作',
    link: { type: 'doc', id: 'guides/cloud-data/overview' },
    items: [
      {
        type: 'doc',
        label: 'クラウドサービスの作成',
        id: 'guides/cloud-data/creating-a-backend',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'アプリ用のクラウドサービスを設定し、永続的なデータを保存および読み取る方法を学びます',
      },
      {
        type: 'doc',
        label: 'クラスの作成',
        id: 'guides/cloud-data/creating-a-class',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'クラウドサービス内でデータレコードを保存するためのクラスを作成する方法を学びます。',
      },
      {
        type: 'doc',
        label: '新しいデータベースレコードの作成',
        id: 'guides/cloud-data/creating-new-database-records',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'クラウドサービスにデータレコードを保存する方法を学びます。',
      },
      {
        type: 'doc',
        label: 'データベースからレコードをクエリ',
        id: 'guides/cloud-data/quering-records-from-database',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'データベースからレコードをアプリにクエリする方法を学びます',
      },
      {
        type: 'doc',
        label: 'レコードの更新',
        id: 'guides/cloud-data/updating-records',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'データベース内の既存のレコードを更新する方法を学びます',
      },
      {
        type: 'doc',
        label: 'データベースクエリのフィルタリング',
        id: 'guides/cloud-data/filtering-database-queries',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'データベースクエリをフィルタリングする方法を学びます',
      },
      {
        type: 'doc',
        label: 'レコード関係',
        id: 'guides/cloud-data/record-relations',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'データベース内のレコード間の関係を作成する方法を学びます',
      },
      {
        type: 'doc',
        label: 'アクセス制御',
        id: 'guides/cloud-data/access-control',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          '特定のユーザーにレコードへのアクセス制御を制限する方法を学びます。',
      },
      {
        type: 'doc',
        label: 'データのインポートとエクスポート',
        id: 'guides/cloud-data/import-export-csv',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'クラウドサービスのデータベースからデータをインポートおよびエクスポートする方法を学びます。',
      },
    ],
  },

  {
    type: 'category',
    label: 'データの可視化',
    link: { type: 'doc', id: 'guides/visualizing-data/overview' },
    items: [
      {
        type: 'doc',
        label: 'データを可視化するためのテーブルコンポーネントの使用',
        id: 'guides/visualizing-data/table-to-visualize-data',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'テーブルノードとクエリレコードを使用してデータをテーブルに表示する方法を学びます。',
      },
      {
        type: 'doc',
        label: 'テーブルコンポーネントへのページネーションの追加',
        id: 'guides/visualizing-data/table-pagination',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Pages And Rowsコンポーネントを使用してテーブルのデータをページネーションする方法を学びます。',
      },
      {
        type: 'doc',
        label: 'テーブルデータのフィルタリング',
        id: 'guides/visualizing-data/filter-table-data',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'フィルタープリファブを使用してクエリノードからのデータをフィルタリングし、テーブルに表示する方法を学びます。',
      },
      {
        type: 'doc',
        label: 'テーブルのスタイリング',
        id: 'guides/visualizing-data/styling-table',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'テーブルプリファブにスタイル変更を加える方法を学びます。',
      },
    ],
  },

  {
    type: 'category',
    label: 'ビジネスロジックの構築',
    link: { type: 'doc', id: 'guides/business-logic/overview' },
    items: [
      {
        type: 'doc',
        label: 'ノードを使用したクライアントサイドビジネスロジック',
        id: 'guides/business-logic/client-side-biz-logic-nodes',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'フロントエンド用のロジックノードの使用方法を学びます',
      },
      {
        type: 'doc',
        label: 'NoodlでのJavascript',
        id: 'guides/business-logic/javascript',
        imageUrl: '/img/featured-content-images/code.png',
        description:
          'NoodlでJavascriptを使用し、ノードとコードを組み合わせる方法を学びます',
      },
      {
        type: 'doc',
        label: 'クライアントサイドビジネスロジックでのJavascriptの使用',
        id: 'guides/business-logic/client-side-biz-logic-js',
        imageUrl: '/img/featured-content-images/code.png',
        description: 'カスタムロジックのためのJavascriptの使用方法を学びます',
      },
      {
        type: 'doc',
        label: 'カスタムUIコンポーネント',
        id: 'guides/business-logic/custom-ui-components',
        imageUrl: '/img/featured-content-images/list.png',
        description: '独自の再利用可能なコンポーネントを作成する方法を学びます',
      },
      {
        type: 'doc',
        label: 'イベント',
        id: 'guides/business-logic/events',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'Noodlでイベントを扱う方法を学びます',
      },
    ],
  },

  {
    type: 'category',
    label: 'ユーザー管理',
    link: { type: 'doc', id: 'guides/user-management/overview' },
    items: [
      {
        type: 'doc',
        label: 'Noodlでのユーザー作成',
        id: 'guides/user-management/creating-users-in-noodl',
        imageUrl: '/',
        description: 'アプリ内でユーザーアカウントを作成する方法を学びます',
      },
    ],
  },

  {
    type: 'category',
    label: 'クラウド関数',
    link: { type: 'doc', id: 'guides/cloud-logic/overview' },
    items: [
      {
        type: 'doc',
        label: '導入',
        id: 'guides/cloud-logic/introduction',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'クラウドで実行されるロジックの構築を始める方法を学びます。',
      },
      {
        type: 'doc',
        label: 'メール確認',
        id: 'guides/cloud-logic/email-verification',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'サインアップフローなどを作成する方法を学びます。',
      },
      {
        type: 'doc',
        label: 'スケジュールされたジョブ',
        id: 'guides/cloud-logic/scheduled-jobs',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'クラウド関数を使用したスケジュールされたジョブの方法を学びます。',
      },
      {
        type: 'doc',
        label: 'ログとデバッグ',
        id: 'guides/cloud-logic/logging',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'クラウド関数のログとデバッグ方法を学びます。',
      },
      {
        type: 'doc',
        label: 'Javascript',
        id: 'guides/cloud-logic/javascript',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'クラウド関数でJavascriptを書く方法を学びます。',
      },
    ],
  },
  {
    type: 'category',
    label: 'コラボレーション',
    link: { type: 'doc', id: 'guides/collaboration/overview' },
    items: [
      {
        type: 'doc',
        label: 'バージョン管理',
        id: 'guides/collaboration/version-control',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'Gitに基づいたNoodlの強力なバージョン管理機能の使用方法を学びます',
      },
      {
        type: 'doc',
        label: 'Noodlホスト型Gitからの移行',
        id: 'guides/collaboration/migrating-from-noodl-hosted-git',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'クローズドソースのNoodlで作成されたプロジェクトは、コラボレーションを機能させるために移行する必要があります',
      },
    ],
  },
  {
    type: 'category',
    label: 'アプリのデプロイとホスティング',
    link: { type: 'doc', id: 'guides/deploy/overview' },
    items: [
      {
        type: 'doc',
        label: 'セルフホスト型クラウドサービスの使用',
        id: 'guides/deploy/using-an-external-backend',
       

 imageUrl: '/img/featured-content-images/data.png',
        description:
          'Dockerコンテナを通じてセルフホスト型クラウドサービスを作成する方法を学びます',
      },
      {
        type: 'doc',
        label: 'iOSとAndroidへのデプロイ',
        id: 'guides/deploy/deploying-to-ios-and-android',
        imageUrl: '/img/featured-content-images/hosting.png',
        description: 'プロジェクトをネイティブアプリとしてデプロイする方法を学びます',
      },
      {
        type: 'doc',
        label: 'Noodlフロントエンドのセルフホスティング',
        id: 'guides/deploy/hosting-frontend',
        imageUrl: '/img/featured-content-images/hosting.png',
        description:
          'プロジェクトをローカルフォルダにデプロイしてセルフホスティングする方法を学びます',
      },
    ],
  },
];

exports.getGuidesSidebarData = function () {
  return guides.map(recursiveBuildSidebarData);
};

function recursiveBuildGuideListingData(item) {
  if ('items' in item) {
    // カテゴリーである
    return {
      key: item.label,
      title: item.label,
      items: item.items.map(recursiveBuildGuideListingData),
    };
  } else {
    return {
      key: item.label,
      title: item.label,
      description: item.description,
      href: '/docs/' + item.id,
      imageUrl: item.imageUrl,
    };
  }
}

exports.getGuideListing = function () {
  return guides.map(recursiveBuildGuideListingData);
};