/**
 * サイドバーを作成することで、以下を実現できます：
 - ドキュメントの順序付けられたグループを作成する
 - そのグループの各ドキュメントにサイドバーをレンダリングする
 - 次へ/前へのナビゲーションを提供する

 サイドバーは、ファイルシステムから生成することも、ここで明示的に定義することもできます。

 任意の数のサイドバーを作成できます。
 */

const modules = require('./static/library/modules/index.json');
const prefabs = require('./static/library/prefabs/index.json');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// モジュールインデックスからモジュールサイドバーを生成する

function getAllResourceOverviewLinks(resource) {
  return resource.map((module) => ({
    type: 'link',
    label: module.label,
    href: module.docs,
  }));
}

const sidebars = {
  librarySidebar: [
    'overview',
    {
      type: 'category',
      label: 'プリファブ',
      link: {
        type: 'doc',
        id: 'prefabs/overview',
      },
      items: getAllResourceOverviewLinks(prefabs),
    },
    {
      type: 'category',
      label: 'モジュール',
      link: {
        type: 'doc',
        id: 'modules/overview',
      },
      items: getAllResourceOverviewLinks(modules),
    },
    {
      type: 'category',
      label: '例',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'examples/overview',
      },
      items: [
        {
          type: 'doc',
          label: 'タスクリストアプリ',
          id: 'examples/task-list-app',
        },
        {
          type: 'doc',
          label: 'カスタムサーベイアプリ',
          id: 'examples/survey-app',
        },
        {
          type: 'doc',
          label: 'スターレーティングコンポーネント',
          id: 'examples/star-rating-component',
        },
        {
          type: 'doc',
          label: 'URLエンコードパラメーターを使用したナビゲーション',
          id: 'examples/navigation-url-encoding',
        },
        {
          type: 'doc',
          label: 'Suatch Google Sheetsの例',
          id: 'examples/suatch',
        },
        {
          type: 'doc',
          label: 'トラベルアプリ',
          id: 'examples/travel-app',
        },
        {
          type: 'doc',
          label: 'Mapboxの例',
          id: 'examples/mapbox',
        },
        {
          type: 'doc',
          label: 'レシピアプリ',
          id: 'examples/recipe-app',
        },
        {
          type: 'doc',
          label: 'ポップアップ内のモーダルウィザード',
          id: 'examples/modal-wizard',
        },
        {
          type: 'doc',
          label: 'CRUDフォーム',
          id: 'examples/crud-form',
        },
        {
          type: 'doc',
          label: '条件付きフォーム',
          id: 'examples/conditional-form',
        },
        {
          type: 'doc',
          label: 'Javascriptの例',
          id: 'examples/javascript-example',
        },
        {
          type: 'doc',
          label: 'サインアップ/サインインフォーム',
          id: 'examples/sign-up',
        },
        {
          type: 'doc',
          label: 'ローカリゼーションの例 (i18next)',
          id: 'examples/localization',
        },
        {
          type: 'doc',
          label: 'Weavyの統合',
          id: 'examples/weavy-integration',
        },
      ],
    },
    'prefab-contributions',
  ],

  // 他のモジュールやプリファブに対するサイドバー設定も同様に行います
  // ここでは省略していますが、必要に応じて追加できます

};

module.exports = sidebars;