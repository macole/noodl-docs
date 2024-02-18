/**
 * サイドバーを作成することで、以下を行うことができます：
 - 文書の順序付けられたグループを作成する
 - そのグループの各文書に対してサイドバーをレンダリングする
 - 次/前のナビゲーションを提供する

 サイドバーはファイルシステムから生成することも、ここで明示的に定義することもできます。

 望むだけ多くのサイドバーを作成してください。
 */

const { getNodeSidebarData } = require('./static/data/nodeData.js')

const sidebar = ['overview', ...getNodeSidebarData()]

module.exports = { nodeSidebar: sidebar };