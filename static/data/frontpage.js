export const FrontpageBlocks = {
    SearchBar: 'searchbar',
    Hero: 'hero', // 必ず1つのHEROブロックを維持してください。SEOを良くするためです！
    FeaturedModules: 'featuredmodules',
    FeaturedGuides: 'featuredguides',
    FeaturedProjects: 'featuredprojects',
    FeaturedVideos: 'featuredvideos',
    FeaturedPrefabs: 'featuredprefabs',
}

export const frontpageData = [
    { type: FrontpageBlocks.SearchBar },
    {
        type: FrontpageBlocks.Hero,
        title: 'Noodlを始めよう',
        text: "Noodlはアプリケーションをより速く、より賢く作成できるローコードのウェブアプリビルダーです。これはコーディングスキルがなくても学び始めることができる視覚的な開発環境です。適切な場合にJavaScriptを簡単に混ぜることができるため、すでにコードを知っている開発者にとっても素晴らしいですし、Noodlはデザイナーにとっても、アプリのルックアンドフィールを完全に制御できるため素晴らしいです。Noodlではすべてがライブであり、アプリをライブで編集します。このサイトにはNoodlを始めるために必要なすべてが含まれています！",
        gridItems: [
            {
                type: 'youtube',
                videoId: 'kD-Oz_M-IS4',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-orange-20',
                backgroundImage:
                    '/img/featured-content-images/noodl-basics.png',
                label: 'Noodlの基本',
                href: '/docs/getting-started/workflow',
                playIcon:false,
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-blue-20',
                backgroundImage:
                    '/img/featured-content-images/build-first-app.png',
                label: 'クラウドサービス入門',
                href: 'https://www.youtube.com/watch?v=ecas2QPbr0g',
            },
        ],
    },
    { type: FrontpageBlocks.FeaturedGuides },
    { type: FrontpageBlocks.FeaturedPrefabs,},
    { type: FrontpageBlocks.FeaturedModules,},
    { type: FrontpageBlocks.FeaturedVideos },
]