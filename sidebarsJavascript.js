/**
 * サイドバーを作成することで、以下を実現できます：
 - ドキュメントの順序付けられたグループを作成する
 - そのグループの各ドキュメントにサイドバーをレンダリングする
 - 次へ/前へのナビゲーションを提供する

 サイドバーは、ファイルシステムから生成することも、ここで明示的に定義することもできます。

 任意の数のサイドバーを作成できます。
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    apiSidebar: [
        'overview',
        {
            type: 'category',
            label: 'リファレンス',
            collapsible: true,
            link: { type: 'doc', id: 'reference/overview/README' },
            items: [
                { type: 'doc', label: '変数', id: 'reference/variables/README' },
                { type: 'doc', label: 'オブジェクト', id: 'reference/objects/README' },
                { type: 'doc', label: 'オブジェクト', id: 'reference/object/README' },
                { type: 'doc', label: '配列', id: 'reference/arrays/README' },
                { type: 'doc', label: 'イベント', id: 'reference/events/README' },
                { type: 'doc', label: 'コンポーネント', id: 'reference/component/README' },
                { type: 'doc', label: 'レコード', id: 'reference/records/README' },
                { type: 'doc', label: 'ユーザー', id: 'reference/users/README' },
                { type: 'doc', label: 'ファイル', id: 'reference/files/README' },
                { type: 'doc', label: 'ナビゲーション', id: 'reference/navigation/README' },
                { type: 'doc', label: 'CloudFunctions', id: 'reference/cloudfunctions/README' },
                { type: 'doc', label: 'SEO', id: 'reference/seo/README' },
            ],
        },
        {
            type: 'category',
            label: 'サンプル',
            collapsible: true,
            items: [
                {
                    type: 'doc',
                    label: 'DOMエレメントの取得',
                    id: 'samples/get-dom-element',
                },
                {
                    type: 'doc',
                    label: 'ポインター位置',
                    id: 'samples/pointer-position',
                },
            ],
        },
        {
            type: 'category',
            label: '拡張',
            collapsible: true,
            link: { type: 'doc', id: 'extending/overview' },
            items: [
                {
                    type: 'doc',
                    label: 'シンプルロジックノード',
                    id: 'extending/create-lib',
                },
                {
                    type: 'doc',
                    label: 'Reactを使ったビジュアルノード',
                    id: 'extending/create-react-lib',
                },
            ],
        },
    ],
}

module.exports = sidebars;