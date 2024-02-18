const NodeType = {
  Visual: 'is-visual',
  Data: 'is-data',
  Custom: 'is-custom',
  Logic: 'is-logic',
  Connection: 'is-connection',
};

const nodeData = [
  {
    label: 'UI要素',
    description: `これらのノードは、アプリのビジュアルを構成します。画面に要素をレンダリングしたい場合は、ノードツリーに追加してください。これらのノードは<a href="/2.7/docs/guides/user-interfaces/style-variants">バリアント</a>と<a href="/2.7/docs/guides/user-interfaces/visual-states">ステート</a>もサポートしています。`,
    items: [
      {
        label: '基本要素',
        items: [
          {
            label: 'グループ',
            id: 'basic-elements/group',
            nodeType: NodeType.Visual,
          },
          {
            label: '列',
            id: 'basic-elements/columns',
            nodeType: NodeType.Visual,
          },
          {
            label: 'テキスト',
            id: 'basic-elements/text',
            nodeType: NodeType.Visual,
          },
          {
            label: 'イメージ',
            id: 'basic-elements/image',
            nodeType: NodeType.Visual,
          },
          {
            label: 'ビデオ',
            id: 'basic-elements/video',
            nodeType: NodeType.Visual,
          },
          {
            label: '円',
            id: 'basic-elements/circle',
            nodeType: NodeType.Visual,
          },
          {
            label: 'アイコン',
            id: 'basic-elements/icon',
            nodeType: NodeType.Visual,
          },
        ],
      },

      {
        label: 'UIコントロール',
        items: [
          {
            label: 'ボタン',
            id: 'ui-controls/button',
            nodeType: NodeType.Visual,
          },
          {
            label: 'チェックボックス',
            id: 'ui-controls/checkbox',
            nodeType: NodeType.Visual,
          },
          {
            label: 'ドロップダウン',
            id: 'ui-controls/dropdown',
            nodeType: NodeType.Visual,
          },
          {
            label: 'ラジオボタン',
            id: 'ui-controls/radio-button',
            nodeType: NodeType.Visual,
          },
          {
            label: 'ラジオボタングループ',
            id: 'ui-controls/radio-button-group',
            nodeType: NodeType.Visual,
          },
          {
            label: 'スライダー',
            id: 'ui-controls/slider',
            nodeType: NodeType.Visual,
          },
          {
            label: 'テキスト入力',
            id: 'ui-controls/text-input',
            nodeType: NodeType.Visual,
          },
        ],
      },
    ],
  },

  {
    label: 'ナビゲーション & ポップアップ',
    description:
      'これらのノードは、URLやハッシュベースのナビゲーションからコンポーネントの置き換えまで、あらゆるナビゲーションニーズをカバーします。異なるビューへのユーザーのルーティングや、現在のビューの上にモーダルでコンテンツをレンダリングするために使用できます。',
    items: [
      {
        label: 'ナビゲーション',
        items: [
          {
            label: 'ページルーター',
            id: 'navigation/page-router',
            nodeType: NodeType.Visual,
          },
          {
            label: 'ナビゲート',
            id: 'navigation/navigate',
            nodeType: NodeType.Logic,
          },
          {
            label: 'ページ入力',
            id: 'navigation/page-inputs',
            nodeType: NodeType.Connection,
          },
          {
            label: '外部リンク',
            id: 'navigation/external-link',
            nodeType: NodeType.Logic,
          },
          {
            label: 'パスへナビゲート',
            id: 'navigation/navigate-to-path',
            nodeType: NodeType.Logic,
          },
          {
            label: 'ページ',
            id: 'navigation/page',
            nodeType: NodeType.Visual,
          },
        ],
      },

      {
        label: 'コンポーネントスタック',
        items: [
          {
            label: 'コンポーネントスタック',
            id: 'component-stack/component-stack-node',
            nodeType: NodeType.Visual,
          },
          {
            label: 'コンポーネントをスタックにプッシュ',
            id: 'component-stack/push-component',
            nodeType: NodeType.Logic,
          },
          {
            label: 'コンポーネントスタックをポップ',
            id: 'component-stack/pop-component',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'ポップアップ',
        items: [
          {
            label: 'ポップアップを表示',
            id: 'popups/show-popup',
            nodeType: NodeType.Logic,
          },
          {
            label: 'ポップアップを閉じる',
            id: 'popups/close-popup',
            nodeType: NodeType.Logic,
          },
        ],
      },
    ],
  },

  {
    label: 'ロジック & ユーティリティ',
    description:
      'アプリの大部分はロジックとデータ処理から構成されます。これは、大きなものから小さなものまで、ほとんどのロジック、データ、およびユーザーとのやり取りを処理するためのツールボックスです。',
    items: [
      {
        label: '一般的なユーティリティ',
        items: [
          {
            label: 'ステート',
            id: 'utilities/logic/states',
            nodeType: NodeType.Logic,
          },
          {
            label: '値が変更された',
            id: 'logic/value-changed',
            nodeType: NodeType.Logic,
          },
          {
            label: '遅延',
            id: 'utilities/delay',
            nodeType: NodeType.Logic,
          },
          {
            label: '色のブレンド',
            id: 'utilities/color-blend',
            nodeType: NodeType.Logic,
          },
          {
            label: '数値リマッパー',
            id: 'math/number-remapper',
            nodeType: NodeType.Logic,
          },
          {
            label: 'カウンター',
            id: 'math/counter',
            nodeType: NodeType.Logic,
          },
          {
            label: 'ドラッグ',
            id: 'utilities/drag',
            nodeType: NodeType.Visual,
          },
          {
            label: '値へアニメート',
            id: 'logic/animate-to-value',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'ロジック',
        items: [
          {
            label: 'ブール値を文字列に',
            id: 'utilities/boolean-to-string',
            nodeType: NodeType.Logic,
          },
          {
            label: 'スイッチ',
            id: 'logic/switch',
            nodeType: NodeType.Logic,
          },
          { label: 'アンド', id: 'logic/and', nodeType: NodeType.Logic },
          { label: 'オア', id: 'logic/or', nodeType: NodeType.Logic },
          {
            label: '条件',
            id: 'utilities/logic/condition',
            nodeType: NodeType.Logic,
          },
          {
            label: 'インバーター',
            id: 'logic/inverter',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'イベント',
        items: [
          {
            label: 'イベントを送信',
            id: 'events/send-event',
            nodeType: NodeType.Connection,
          },
          {
            label: 'イベントを受信',
            id: 'events/receive-event',
            nodeType: NodeType.Connection,
          },
        ],
      },

      {
        label: '文字列操作',
        items: [
          {
            label: '部分文字列',
            id: 'string-manipulation/substring',
            nodeType: NodeType.Logic,
          },
          {
            label: '文字列マッパー',
            id: 'string-manipulation/string-mapper',
            nodeType: NodeType.Logic,
          },
          {
            label: '文字列フォーマット',
            id: 'string-manipulation/string-format',
            nodeType: NodeType.Logic,
          },
          {
            label: '日付を文字列に',
            id: 'utilities/date-to-string',
            nodeType: NodeType.Logic,
          },
          {
            label: '一意のID',
            id: 'utilities/unique-id',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'システム',
        items: [
          {
            label: 'ファイルピッカーを開く',
            id: 'utilities/open-file-picker',
            nodeType: NodeType.Logic,
          },
          {
            label: '画面解像度',
            id: 'utilities/screen-resolution',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: '変数',
        items: [
          {
            label: '文字列',
            id: 'data/string',
            nodeType: NodeType.Logic,
          },
          {
            label: 'ブール値',
            id: 'data/boolean',
            nodeType: NodeType.Logic,
          },
          {
            label: '色',
            id: 'data/color',
            nodeType: NodeType.Logic,
          },
          {
            label: '数値',
            id: 'data/number',
            nodeType: NodeType.Logic,
          },
        ],
      },
    ],
  },

  {
    label: 'コンポーネントユーティリティ',
    description:
      'Noodlのコアコンセプトの1つは、再利用可能なコンポーネントを自分で作成する能力です。これらは、データがそれらを通過する方法を管理するのに役立つノードです。',
    items: [
      {
        label: 'コンポーネント入力',
        id: 'component-utilities/component-inputs',
        nodeType: NodeType.Connection,
      },
      {
        label: 'コンポーネント出力',
        id: 'component-utilities/component-outputs',
        nodeType: NodeType.Connection,
      },
      {
        label: 'コンポーネントチルドレン',
        id: 'component-utilities/component-children',
        nodeType: NodeType.Connection,
      },
      {
        label: 'コンポーネントオブジェクト',
        id: 'component-utilities/component-object',
        nodeType: NodeType.Connection,
      },
      {
        label: '親コンポーネントオブジェクト',
        id: 'component-utilities/parent-component-object',
        nodeType: NodeType.Connection,
      },
      {
        label: 'コンポーネントオブジェクトプロパティを設定',
        id: 'component-utilities/set-component-object-properties',
        nodeType: NodeType.Connection,
      },
      {
        label: '親コンポーネントオブジェクトプロパティを設定',
        id: 'component-utilities/set-parent-component-object-properties',
        nodeType: NodeType.Connection,
      },
    ],
  },

  {
    label: 'データの読み書き',
    description:
      'コンテンツなしにはアプリが完全ではありません。これらは、アプリ内で定義された動的データ、Noodlクラウドサービス、またはお好みのバックエンドからデータを扱うのに役立つノードです。',
    items: [
      {
        label: '変数 & オブジェクト',
        items: [
          {
            label: 'リピーター',
            id: 'ui-controls/repeater',
            nodeType: NodeType.Visual,
          },
          {
            label: 'リピーターアイテム',
            id: 'ui-controls/repeater-item',
            nodeType: NodeType.Data,
          },
          {
            label: 'オブジェクト',
            id: 'data/object/object-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'オブジェクトプロパティを設定',
            id: 'data/object/set-object-properties',
            nodeType: NodeType.Data,
          },
          {
            label: '新規オブジェクトを作成',
            id: 'data/object/create-new-object',
            nodeType: NodeType.Data,
          },
          {
            label: '変数を設定',
            id: 'data/variable/set-variable',
            nodeType: NodeType.Data,
          },
          {
            label: '変数',
            id: 'data/variable/variable-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'タスクを実行',
            id: 'data/run-tasks',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: '配列',
        items: [
          {
            label: '配列',
            id: 'data/array/array-node',
            nodeType: NodeType.Data,
          },
          {
            label: '新規配列を作成',
            id: 'data/array/create-new-array',
            nodeType: NodeType.Data,
          },
          {
            label: '配列からオブジェクトを削除',
            id: 'data/array/remove-from-array',
            nodeType: NodeType.Data,
          },
          {
            label: '配列をクリア',
            id: 'data/array/clear-array',
            nodeType: NodeType.Data,
          },
          {
            label: 'オブジェクトを配列に挿入',
            id: 'data/array/insert-into-array',
            nodeType: NodeType.Data,
          },
          {
            label: '配列フィルター',
            id: 'data/array/array-filter',
            nodeType: NodeType.Data,
          },
          {
            label: '配列マップ',
            id: 'data/array/array-map',
            nodeType: NodeType.Data,
          },
          {
            label: '静的配列',
            id: 'data/array/static-array',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'クラウドデータ',
        items: [
          {
            label: 'レコード',
            id: 'data/cloud-data/record',
            nodeType: NodeType.Data,
          },
          {
            label: '新規レコードを作成',
            id: 'data/cloud-data/create-new-record',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコードをフィルター',
            id: 'data/cloud-data/filter-records',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコードプロパティを設定',
            id: 'data/cloud-data/set-record-properties',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコードをクエリ',
            id: 'data/cloud-data/query-records',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコードを削除',
            id: 'data/cloud-data/delete-record',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコード関係を追加',
            id: 'data/cloud-data/add-record-relation',
            nodeType: NodeType.Data,
          },
          {
            label: 'レコード関係を削除',
            id: 'data/cloud-data/remove-record-relation',
            nodeType: NodeType.Data,
          },
          {
            label: 'クラウドファイル',
            id: 'data/cloud-data/cloud-file',
            nodeType: NodeType.Data,
          },
          {
            label: 'ファイルをアップロード',
            id: 'data/cloud-data/upload-file',
            nodeType: NodeType.Data,
          },
          {
            label: 'クラウド関数',
            id: 'data/cloud-data/cloud-function',
            nodeType: NodeType.Data,
          },
          {
            label: '設定',
            id: 'data/cloud-data/config',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'ユーザー',
        items: [
          {
            label: 'ログイン',
            id: 'data/user/log-in',
            nodeType: NodeType.Data,
          },
          {
            label: 'ログアウト',
            id: 'data/user/log-out',
            nodeType: NodeType.Data,
          },
          {
            label: 'サインアップ',
            id: 'data/user/sign-up',
            nodeType: NodeType.Data,
          },
          {
            label: 'ユーザー',
            id: 'data/user/user-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'ユーザープロパティを設定',
            id: 'data/user/set-user-properties',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: '外部データ',
        items: [{ label: 'REST', id: 'data/rest', nodeType: NodeType.Data }],
      },
    ],
  },

  {
    label: 'カスタムコード',
    description:
      "ほとんどの問題はNoodlの組み込みの基本ノードで解決できますが、コードが必要な特定の状況に対しても選択肢を持つことは良いことです。結局のところ、テキストベースのコーディングもかなり楽しいものです。",
    items: [
      {
        label: '式',
        id: 'math/expression',
        nodeType: NodeType.Custom,
      },
      {
        label: '関数',
        id: 'javascript/function',
        nodeType: NodeType.Custom,
      },
      {
        label: 'スクリプト',
        id: 'javascript/script',
        nodeType: NodeType.Custom,
      },
      {
        label: 'CSS定義',
        id: 'utilities/css-definition',
        nodeType: NodeType.Custom,
      },
    ],
  },

  {
    label: 'クラウド関数',
    items: [
      {
        label: 'リクエスト',
        id: 'cloud-functions/request',
        nodeType: NodeType.Data,
      },
      {
        label: 'レスポンス',
        id: 'cloud-functions/response',
        nodeType: NodeType.Data,
      },
      {
        label: 'クラウドデータ',
        items: [
          {
            label: 'レコードを集約',
            id: 'cloud-functions/cloud-data/aggregate-records',
            nodeType: NodeType.Data,
          },
        ]
      }
    ],
  },
];

function recursiveBuildNodeOverviewData(item) {
  if ('items' in item) {
    // カテゴリーである
    return {
      title: item.label,
      description: item.description,
      items: item.items.map(recursiveBuildNodeOverviewData),
      key: item.label,
    };
  } else {
    return {
      label: item.label,
      docUrl: '/nodes/' + item.id,
      nodeType: item.nodeType,
      key: item.label,
    };
  }
}

exports.getNodePageData = function () {
  return nodeData.map(recursiveBuildNodeOverviewData).map((category) => {
    const flatItems = category.items.reduce((r, child) => {
      if ('items' in child) {
        return [...r, ...child.items];
      } else {
        return [...r, child];
      }
    }, []);

    return { ...category, items: flatItems };
  });
};

function recursiveBuildSidebarData(item) {
  if ('items' in item) {
      // カテゴリーである
      return {
          type: 'category',


          label: item.label,
          items: item.items.map(recursiveBuildSidebarData),
      }
  } else {
      return {
          type: 'doc',
          label: item.label,
          id: item.id + "/README",
      }
  }
}

exports.getNodeSidebarData = function () {
  return nodeData.map(recursiveBuildSidebarData);
};