/**
 * サイドバーを作成することで、以下を実現できます：
 - ドキュメントの順序付けられたグループを作成する
 - そのグループの各ドキュメントにサイドバーをレンダリングする
 - 次へ/前へのナビゲーションを提供する

 サイドバーは、ファイルシステムから生成することも、ここで明示的に定義することもできます。

 任意の数のサイドバーを作成できます。
 */

const { getGuidesSidebarData } = require('./static/data/guides');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      label: '学習',
      id: 'learn',
    },
    {
      type: 'category',
      label: 'はじめに',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'getting-started/overview' },
      items: [
        {
          type: 'doc',
          label: 'ワークフローの概要',
          id: 'getting-started/workflow',
        },
        {
          type: 'doc',
          label: '基礎',
          id: 'getting-started/fundamentals',
        },
        {
          type: 'doc',
          label: 'Noodl AI',
          id: 'getting-started/noodl-ai',
        },
        {
          type: 'category',
          label: 'ChatGPT',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'getting-started/ai-assisted-dev/overview' },
          items: [
            {
              type: 'doc',
              label: 'ChatGPTを使った開発',
              id: 'getting-started/ai-assisted-dev/chat-gpt',
            },
            {
              type: 'doc',
              label: 'REST APIコール',
              id: 'getting-started/ai-assisted-dev/rest',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ガイド',
      collapsible: true,
      collapsed: false,
      items: [...getGuidesSidebarData()],
    },
    {
      type: 'category',
      label: 'ビルドアロングビデオ',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'build-alongs/overview' },
      items: [
        {
          type: 'doc',
          label: 'タスクリストアプリ',
          id: 'build-alongs/task-list-app',
        },
        {
          type: 'doc',
          label: 'カスタムサーベイアプリ',
          id: 'build-alongs/survey-app',
        },
        {
          type: 'doc',
          label: 'スターレーティングコンポーネント',
          id: 'build-alongs/star-rating-component',
        },
        {
          type: 'doc',
          label: 'スナッピング機能付き水平リスト',
          id: 'build-alongs/horizontal-list-with-snapping',
        },
      ],
    },
  ],
};

module.exports = sidebars;
