import type { PostSection } from "./PostContentRenderer.tsx";

type Post = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string | PostSection[];
};

export const posts: Post[] = [
  {
  "id": "what-is-nodejs",
  "title": "Node.jsってなぁに？",
  "date": "2025-06-30",
  "category": "Programming",
  "excerpt": "「JavaScriptってブラウザだけ？」いえいえ、サーバーでも動かせるんです。そのカギがNode.js。",
  "content": [
    {
      "type": "intro",
      "text": "JavaScriptといえばWebブラウザの中で動くイメージですが、『Node.js』を使えばサーバーでも動かせます。今回はそのNode.jsについて紹介します。"
    },
    {
      "type": "title",
      "text": "Node.jsってなに？"
    },
    {
      "type": "paragraph",
      "text": "Node.js（ノードジェイエス）は、JavaScriptをサーバー側で実行できるようにした環境です。\nもともとWebページ用だったJavaScriptを、サーバーやCLIでも使えるようにしたものです。"
    },
    {
      "type": "title",
      "text": "Node.jsはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "例えば、フォームの送信を受け取るAPIや、Webページを動的に生成する仕組みを作るときに使われます。\nJavaScriptが書ければ、そのままサーバー開発もできるのが魅力です。"
    },
    {
      "type": "title",
      "text": "どんなことがNode.jsでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- Webサーバーを作る\n- APIのバックエンドを作る\n- データベースと連携\n- タスク自動化やツール開発\nなどができます。"
    },
    {
      "type": "title",
      "text": "Node.jsだけでアプリは作れるの？"
    },
    {
      "type": "paragraph",
      "text": "バックエンド（裏側）はNode.jsだけで動かせますが、見た目（フロントエンド）は別にHTMLやReactなどが必要です。\nただ、両方JavaScriptで書けるのが大きなメリットです。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "Node.jsは、JavaScriptでサーバーサイドの処理が書ける便利なツールです。\nWeb全体をJavaScriptで作れるようにしてくれる、モダンな開発の定番です。"
    }
  ]
},
  {
  "id": "what-is-ecs",
  "title": "ECSってなぁに？",
  "date": "2025-06-28",
  "category": "Programming",
  "excerpt": "アプリの実行も管理もおまかせ？AWSのECSが便利です。",
  "content": [
    {
      "type": "intro",
      "text": "クラウドでのアプリ運用に便利なのが『ECS』。今回は、ECSがどういうサービスで、何ができるのかを紹介します。"
    },
    {
      "type": "title",
      "text": "ECSってなに？"
    },
    {
      "type": "paragraph",
      "text": "ECS（Elastic Container Service）は、AWSのコンテナ実行・管理サービスです。\nDockerコンテナを簡単に動かしたり、自動でスケールさせたりできます。"
    },
    {
      "type": "title",
      "text": "ECSはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "アプリをDocker化しておけば、ECSに登録するだけでクラウド上で動かすことができます。\n負荷が増えれば自動で台数が増えるなど、運用もラクになります。"
    },
    {
      "type": "title",
      "text": "どんなことがECSでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- コンテナアプリの実行\n- 自動スケーリング\n- タスクの自動配置\n- サービスのヘルスチェック\nなどができます。"
    },
    {
      "type": "title",
      "text": "ECSだけで開発はできるの？"
    },
    {
      "type": "paragraph",
      "text": "ECSはアプリの「実行・管理」を担当します。\nコードを書く部分は、別のツールやエディタが必要です。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "ECSは、Dockerコンテナを簡単・安全に実行できるAWSのサービスです。\nスケーラブルで柔軟なアプリ運用が可能になりますよ。"
    }
  ]
},
  {
  "id": "what-is-ec2",
  "title": "EC2ってなぁに？",
  "date": "2025-06-27",
  "category": "Programming",
  "excerpt": "サーバーって買わなくても使える？その答えがEC2にあります。",
  "content": [
    {
      "type": "intro",
      "text": "AWSの中でも特によく使われているサービスが『EC2』です。今回はEC2の役割やできることをわかりやすく紹介します。"
    },
    {
      "type": "title",
      "text": "EC2ってなに？"
    },
    {
      "type": "paragraph",
      "text": "EC2（イーシーツー）は、AWSが提供する仮想サーバーのサービスです。\n物理的なサーバーを買わなくても、必要なときにだけ借りて使うことができます。"
    },
    {
      "type": "title",
      "text": "EC2はどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "自分だけのLinuxやWindowsのサーバーを、数クリックで起動できます。\nそこにアプリを入れて、Webサイトを公開したり、バックエンドを動かしたりします。"
    },
    {
      "type": "title",
      "text": "どんなことがEC2でできるの？"
    },
    {
      "type": "paragraph",
      "text": "- Webサーバーを立てる\n- データベースを動かす\n- アプリの実行環境に使う\n- 好きな設定で自由にカスタマイズ\nなどができます。"
    },
    {
      "type": "title",
      "text": "EC2だけで開発はできるの？"
    },
    {
      "type": "paragraph",
      "text": "EC2はあくまで「サーバー」です。\nアプリの開発は別のツール（IDEやエディタ）で行い、それをEC2上で動かすイメージです。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "EC2は、必要なときにだけ使える便利な仮想サーバーです。\n柔軟でパワフルなので、Webサービスの土台としてよく使われています。"
    }
  ]
},
  {
  "id": "what-is-vercel",
  "title": "Vercelってなぁに？",
  "date": "2025-06-26",
  "category": "Programming",
  "excerpt": "Webアプリを公開するのって難しそう？Vercelなら誰でも簡単にできます。",
  "content": [
    {
      "type": "intro",
      "text": "最近のWeb開発で人気なのが『Vercel（ヴァーセル）』。今回は、Webアプリの公開を簡単にしてくれるVercelについてやさしく解説します。"
    },
    {
      "type": "title",
      "text": "Vercelってなに？"
    },
    {
      "type": "paragraph",
      "text": "Vercelは、Webアプリを簡単にインターネット上に公開できるホスティングサービスです。\n特にNext.jsとの相性がよく、ボタンひとつでデプロイできます。"
    },
    {
      "type": "title",
      "text": "Vercelはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "GitHubなどにコードを置いておくと、自動的にビルド・公開してくれます。\n特別なサーバ設定がいらないので、初心者にも扱いやすいのが特長です。"
    },
    {
      "type": "title",
      "text": "どんなことがVercelでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- Webアプリの公開（デプロイ）\n- プレビュー環境の自動生成\n- カスタムドメイン設定\n- 世界中に高速配信\nなどができます。"
    },
    {
      "type": "title",
      "text": "Vercelだけでアプリは作れるの？"
    },
    {
      "type": "paragraph",
      "text": "Vercelはアプリを“公開”するサービスです。\nアプリそのものの作成は、ReactやNext.jsなどで別途行います。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "Vercelは、Webアプリをすばやく簡単に公開できる便利なサービスです。\n開発から公開までのハードルを下げてくれる、現代的なツールです。"
    }
  ]
},
 {
  "id": "what-is-docker",
  "title": "Dockerってなぁに？",
  "date": "2025-06-25",
  "category": "Programming",
  "excerpt": "「開発環境の違いで動かない」そんな経験ありませんか？Dockerで解決できます。",
  "content": [
    {
      "type": "intro",
      "text": "開発者の間で広く使われているツール『Docker』。今回は、Dockerが何か、なぜ便利なのかをわかりやすく紹介します。"
    },
    {
      "type": "title",
      "text": "Dockerってなに？"
    },
    {
      "type": "paragraph",
      "text": "Docker（ドッカー）は、アプリを動かすための環境をまとめて「コンテナ」として管理するツールです。\nどんなPCでも同じ環境で動かせるのが特長です。"
    },
    {
      "type": "title",
      "text": "Dockerはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "開発したアプリを他の人に渡すとき、「動かない」と言われることがあります。\nDockerを使えば、動作環境ごと渡せるので、同じように動くようになります。"
    },
    {
      "type": "title",
      "text": "どんなことがDockerでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- アプリの実行環境を統一\n- 複数のアプリを同時に動かす\n- 環境ごとの切り替え\n- テスト用の環境を一時的に作る\nなどができます。"
    },
    {
      "type": "title",
      "text": "Dockerだけで開発はできるの？"
    },
    {
      "type": "paragraph",
      "text": "Dockerは環境を整えるツールです。\nアプリそのものの開発は、通常のエディタや言語を使って行います。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "Dockerは「同じ環境でアプリを動かす」ための便利なツールです。\n開発の再現性が高まり、チームでも安心して作業できますよ。"
    }
  ]
}, 
  {
  "id": "what-is-aws",
  "title": "AWSってなぁに？",
  "date": "2025-06-22",
  "category": "Programming",
  "excerpt": "クラウドって最近よく聞くけど、どういうこと？そんな疑問に答える、AWSのやさしい解説です。",
  "content": [
    {
      "type": "intro",
      "text": "Webサービスの裏側を支える技術のひとつが『AWS』です。今回は、AWSがどんなもので、どう使われているのかを紹介します。"
    },
    {
      "type": "title",
      "text": "AWSってなに？"
    },
    {
      "type": "paragraph",
      "text": "AWS（Amazon Web Services）は、Amazonが提供しているクラウドサービスの総称です。\n簡単に言うと、インターネット上でサーバやデータベースを使えるようにするサービスです。"
    },
    {
      "type": "title",
      "text": "AWSはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "通常なら自分でサーバーを用意する必要がありますが、AWSを使えば、必要な機能を選んで使うだけ。\nWebアプリを公開したり、データを保存したりするのに使われています。"
    },
    {
      "type": "title",
      "text": "どんなことがAWSでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- サーバーを立ち上げる\n- データベースを使う\n- ファイルを保存する\n- 世界中にサービスを届ける\nなどができます。"
    },
    {
      "type": "title",
      "text": "AWSだけで開発はできるの？"
    },
    {
      "type": "paragraph",
      "text": "AWSはインフラを提供するツールなので、実際の開発にはエディタやフレームワークが必要です。\nただ、構築から運用までを一括でできるのが強みです。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "AWSはクラウド上でサービスを構築・運用できる便利なプラットフォームです。\n知っておくと、Webサービスのしくみがぐっと身近になりますよ。"
    }
  ]
},
  {
  "id": "what-is-git",
  "title": "Gitってなぁに？",
  "date": "2025-06-18",
  "category": "Programming",
  "excerpt": "「コードの履歴管理」ってどうしてるの？そんな疑問に答える、Gitのやさしい解説です。",
  "content": [
    {
      "type": "intro",
      "text": "エンジニアの作業を支える大事なツールが『Git』です。今回は、Gitの役割や仕組みについて、非エンジニアの方にもわかりやすく紹介します。"
    },
    {
      "type": "title",
      "text": "Gitってなに？"
    },
    {
      "type": "paragraph",
      "text": "Git（ギット）とは、分散型バージョン管理システムのことです。\n簡単に言えば、ファイルの変更履歴を記録して、いつでも元に戻せる仕組みです。"
    },
    {
      "type": "title",
      "text": "Gitはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "プログラムを書いていると、変更したり間違えたりすることが多いです。\nGitを使えば、どこを直したか履歴が残るので、もしもの時にすぐ戻せます。"
    },
    {
      "type": "title",
      "text": "どんなことがGitでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- ファイルの変更履歴を残す\n- 過去の状態に戻す\n- 複数人で同じファイルを編集\n- 誰がどこを直したかを把握\nなどができます。"
    },
    {
      "type": "title",
      "text": "Gitだけで開発はできるの？"
    },
    {
      "type": "paragraph",
      "text": "できません。Gitはあくまで『履歴管理』のツールなので、コードを書くのは別のエディタやIDEを使います。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "Gitはファイルの変更履歴を管理するツールです。\nこれを知っていると、開発作業を安心して進められ、ミスを恐れずにチャレンジできますよ。"
    }
  ]
},{
  "id": "what-is-cloud",
  "title": "クラウドってなぁに？",
  "date": "2025-06-17",
  "category": "Programming",
  "excerpt": "「データ保存やサービス」ってどこにあるの？そんな疑問に答える、クラウドのやさしい解説です。",
  "content": [
    {
      "type": "intro",
      "text": "写真やファイルをどこからでも開けるのは『クラウド』のおかげです。今回は、クラウドの役割や仕組みを非エンジニアの方にもわかりやすく紹介します。"
    },
    {
      "type": "title",
      "text": "クラウドってなに？"
    },
    {
      "type": "paragraph",
      "text": "クラウドとは、Cloud Computing（クラウド・コンピューティング）の略称です。\n簡単に言えば、インターネット上でデータを保存したり、サービスを使える仕組みです。"
    },
    {
      "type": "title",
      "text": "クラウドはどんな風に使うの？"
    },
    {
      "type": "paragraph",
      "text": "パソコンやスマホに保存する代わりに、ネット上のサーバーにデータを置きます。\n例えば、Google DriveやiCloud、Dropboxなどが有名です。"
    },
    {
      "type": "title",
      "text": "どんなことがクラウドでできるの？"
    },
    {
      "type": "paragraph",
      "text": "- ファイルを保存・共有\n- 写真のバックアップ\n- メールやドキュメントの管理\n- チームでの共同作業\nなどがクラウドを通じて簡単にできます。"
    },
    {
      "type": "title",
      "text": "クラウドだけでパソコンはいらないの？"
    },
    {
      "type": "paragraph",
      "text": "パソコンやスマホ自体は必要です。クラウドはあくまで『保存場所』や『サービスの提供元』なので、アクセスする端末が必要です。"
    },
    {
      "type": "title",
      "text": "まとめ"
    },
    {
      "type": "paragraph",
      "text": "クラウドはデータをネット上に保存し、どこからでもアクセスできる仕組みです。\n知っていると、データ管理が便利になり、なくしてしまう心配も減りますよ。"
    }
  ]
},
  {
    id: "what-is-api",
    title: "APIってなぁに？",
    date: "2025-06-16",
    category: "Programming",
    excerpt: "「APIって聞いたことあるけど、実際どういうもの？」という疑問にやさしく答えます。",
    content: [
      {
        type: "intro",
        text: "「API（エーピーアイ）」という言葉、ITやプログラミングの話でよく耳にしますよね。でも、具体的に何をしているのかは意外とわかりにくいものです。この記事では、非エンジニアの方向けにAPIとは何か、どんな場面で使われているのかをわかりやすく紹介します。"
      },
      {
        type: "title",
        text: "APIとは？"
      },
      {
        type: "paragraph",
        text: "APIとは「Application Programming Interface（アプリケーション・プログラミング・インターフェース）」の略で、簡単に言えば『ソフトウェア同士のやり取りのルール』のことです。人間同士が共通の言語で話すように、プログラム同士が決まった方法で情報を交換する仕組みです。"
      },
      {
        type: "title",
        text: "身近なAPIの例"
      },
      {
        type: "paragraph",
        text: "例えば、天気予報アプリが気象庁の最新データを取得するのもAPIのおかげです。アプリが『今日の東京の天気を教えて！』とAPIにお願いすると、決まった形式で答えが返ってきます。\n他にも、地図サービスの表示、SNSへのログイン機能、オンライン決済など、いろいろなところでAPIが活躍しています。"
      },
      {
        type: "title",
        text: "APIがあると何が便利？"
      },
      {
        type: "paragraph",
        text: "- 他のサービスの機能を簡単に利用できる：ゼロから作らなくても、必要な情報をAPIで取得できる。\n- 情報のやり取りが速く正確：決められたルールでやり取りするのでエラーが起きにくい。\n- 保守や拡張がしやすい：APIを通じて必要な機能だけをつなぐので、システム全体を作り直す必要がない。"
      },
      {
        type: "title",
        text: "どんなところで使われてる？"
      },
      {
        type: "paragraph",
        text: "APIはWebサービスだけでなく、スマホアプリ、業務システム、IoT機器など、あらゆるところで使われています。例えば、ECサイトでの配送追跡や、チャットアプリでのメッセージ送受信もAPIでつながっています。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "APIは『サービス同士をつなぐ窓口』のような役割を持っています。これにより、さまざまな便利な機能や最新のデータを簡単に取り込むことができます。非エンジニアの方も、APIの仕組みを知っておくと、サービスの裏側の仕組みを理解しやすくなりますよ。"
      }
    ]
  },
  {
    id: "what-is-tailwind-css",
    title: "Tailwind CSSってなぁに？",
    date: "2025-06-13",
    category: "Tailwindcss",
    excerpt: "「おしゃれなWebサイトってどうやって作ってるの？」そんな疑問に答える、CSSフレームワーク『Tailwind CSS』の紹介です。",
    content: [
      {
        type: "intro",
        text: "Webサイトってどうしてあんなにきれいにレイアウトされているのでしょうか？その裏には『CSS』という技術があります。そして、そのCSSをもっと効率的に、しかもオシャレに使えるようにするのが『Tailwind CSS』です。今回は非エンジニアの方に向けて、Tailwind CSSがどんなものかをご紹介します。"
      },
      {
        type: "title",
        text: "そもそもCSSってなに？"
      },
      {
        type: "paragraph",
        text: "CSS（シーエスエス）とは、Webページの『見た目』を整えるためのルールのことです。文字の色、サイズ、余白、配置など、見た目に関するあらゆることをCSSで設定します。"
      },
      {
        type: "title",
        text: "Tailwind CSSはCSSの何が違うの？"
      },
      {
        type: "paragraph",
        text: "Tailwind CSSは『ユーティリティファースト』という考え方で作られたCSSのフレームワークです。普通のCSSでは「見た目のルールを別ファイルに書いて適用」しますが、Tailwindでは『見た目の指定をHTMLの中で直接書いてしまう』というスタイルが特徴です。たとえば、以下のような感じで使います："
      },
      {
        type: "paragraph",
        text: "<button class=\"bg-blue-500 text-white px-4 py-2 rounded\">送信</button> これだけで、青い背景・白い文字・適度な余白・角が丸いボタンができます。"
      },
      {
        type: "title",
        text: "Tailwindの良いところ"
      },
      {
        type: "paragraph",
        text: "- デザインがすぐ決まる：すでに用意されたクラスを使うだけなので、迷いにくいです。\n- デザイナーとの連携がしやすい：一目でデザインの指定がわかるので、デザイン修正も簡単。\n- コードが読みやすい：どこにどんな見た目が設定されているかがHTMLを見ればすぐわかります。"
      },
      {
        type: "title",
        text: "どんなサービスで使われてる？"
      },
      {
        type: "paragraph",
        text: "最近では、スタートアップ企業のサイトや、ポートフォリオ、ブログ、WebアプリなどでTailwind CSSがよく使われています。特にReactなどのフロントエンド技術と組み合わせると、開発効率がとても高まります。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "Tailwind CSSは『すばやく』『きれいに』『柔軟に』Webページをデザインできる便利なツールです。エンジニアだけでなく、デザインに関心のある非エンジニアの方にも人気が高まっています。見た目のことが気になる方は、ぜひ一度触れてみてください。"
      }
    ]
  },
  {
    id: "what-is-react",
    title: "Reactってなぁに？",
    date: "2025-06-12",
    category: "React",
    excerpt: "「Reactって聞いたことあるけど、何に使うの？」そんな疑問にやさしく答えます。",
    content: [
      {
        type: "intro",
        text: "「React（リアクト）」という言葉、最近のWeb開発ではよく聞くようになりました。けれど、プログラミングをやっていない人からすると、何のために使うのか、何が便利なのか、イメージしにくいかもしれません。この記事では、非エンジニアの方向けにReactがどんなものかをわかりやすく紹介します。"
      },
      {
        type: "title",
        text: "Reactとは？"
      },
      {
        type: "paragraph",
        text: "Reactは、Facebook（現在のMeta）が開発した「Webアプリを作るためのツール（フレームワーク）」です。正確には「JavaScriptライブラリ」というカテゴリに分類されますが、今では大規模なWebサイトやアプリの多くがReactを使って作られています。"
      },
      {
        type: "title",
        text: "どんなときに使うの？"
      },
      {
        type: "paragraph",
        text: "Reactは「動きのあるWebページ」や「アプリのような操作感のある画面」を作るのに向いています。たとえば： SNSの投稿画面、ECサイトの商品一覧とカート機能、ダッシュボード画面（グラフや表が並ぶ）など。こんな動的なページを効率よく作れるのがReactです。"
      },
      {
        type: "title",
        text: "Reactのすごいところ"
      },
      {
        type: "paragraph",
        text: "- 部品を組み立てる感覚で開発できる：Reactでは「コンポーネント」と呼ばれる小さなパーツを作って、それを組み合わせてページを作ります。たとえば、ボタン、入力フォーム、記事一覧などをパーツごとに分けて再利用できます。\n- 更新が速くてスムーズ：Reactは「必要な部分だけ書き換える」仕組みがあるので、ページ全体を再読み込みせずにサクサク動くアプリが作れます。"
      },
      {
        type: "title",
        text: "実際にどんなサイトで使われてる？"
      },
      {
        type: "paragraph",
        text: "Reactは、FacebookやInstagram、Netflix、Airbnb、楽天、Yahoo!など、たくさんの有名サービスで使われています。最近では社内ツールや小規模なサービスでもReactを使う例が増えています。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "Reactは、Webアプリを「早く」「見た目よく」「効率的に」作るためのツールです。非エンジニアの方が直接使うことは少ないかもしれませんが、「こういう仕組みで作られているんだな」と知っておくと、開発チームとのやりとりもスムーズになりますよ。"
      }
    ]
  },
  {
    id: "what-is-javascript",
    title: "JavaScriptってなぁに？",
    date: "2025-06-10",
    category: "JavaScript",
    excerpt: "「JavaScriptってよく聞くけど何するもの？」そんな疑問をやさしく解説します。",
    content: [
      {
        type: "intro",
        text: "「JavaScript（ジャバスクリプト）」という言葉、Web関係の話になるとよく耳にしますよね。でも、実際何ができるのかピンとこない方も多いかもしれません。この記事では、非エンジニアの方向けにJavaScriptの役割やできることをやさしく解説します。"
      },
      {
        type: "title",
        text: "JavaScriptって何？"
      },
      {
        type: "paragraph",
        text: "JavaScriptとは、主に「Webページに動きをつけるためのプログラミング言語」です。例えば、ボタンを押したときに画像が切り替わったり、フォームに入力した内容をチェックしたり、チャットがリアルタイムに更新されたりするのは、たいていJavaScriptのおかげです。"
      },
      {
        type: "title",
        text: "身近な例"
      },
      {
        type: "paragraph",
        text: "たとえばショッピングサイトで、\n- 数量を変更したら合計金額がすぐに変わる\n- メニューがスルッと開いたり閉じたりする\n- スライドショーが自動で切り替わる\nこういった「インタラクティブ（動きのある）」機能は、ほとんどJavaScriptが担当しています。"
      },
      {
        type: "title",
        text: "HTML・CSSとの違い"
      },
      {
        type: "paragraph",
        text: "Webページは主に3つの要素でできています。\n- **HTML**：骨組み（文章や画像の配置）\n- **CSS**：見た目（色や文字のサイズ）\n- **JavaScript**：動き（ユーザーの操作に反応する）\nJavaScriptはこの3つの中で「動きの担当」として欠かせない存在です。"
      },
      {
        type: "title",
        text: "スマホアプリやゲームにも使われる"
      },
      {
        type: "paragraph",
        text: "JavaScriptはWebページだけでなく、最近ではスマホアプリやゲーム、デスクトップアプリなどでも使われるようになっています。たとえばReact Nativeという技術を使えば、JavaScriptでスマホアプリを作ることもできます。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "JavaScriptは「Webに命を吹き込む」ための言語です。普段使っているWebサービスの多くで裏側にJavaScriptが動いています。プログラミングをこれから学びたい人にも人気があり、入門にもちょうどよい言語ですよ。"
      }
    ]
  },
  {
    "id": "what-is-api",
    "title": "APIってなぁに？",
    "date": "2025-06-08",
    "category": "Programming",
    "excerpt": "「アプリ同士のつながり」ってどうなってるの？そんな疑問にF答える、APIのやさしい解説です。",
    "content": [
      {
        "type": "intro",
        "text": "天気予報アプリやログイン機能など、さまざまなサービスは『API』という仕組みでつながっています。今回は、そんなAPIの役割や仕組みを非エンジニアの方にもわかりやすく紹介します。"
      },
      {
        "type": "title",
        "text": "APIってなに？"
      },
      {
        "type": "paragraph",
        "text": "API（エーピーアイ）とは、Application Programming Interface（アプリケーション・プログラミング・インターフェース）の略です。\n簡単に言えば、サービス同士が情報をやりとりするための『窓口』です。"
      },
      {
        "type": "title",
        "text": "APIはどんな風に使うの？"
      },
      {
        "type": "paragraph",
        "text": "例えば、天気アプリは天気情報を配信しているサーバーからAPIを通じてデータを取得しています。\n自分で天気を計算しなくても、必要なデータだけをAPI経由でもらえるわけです。"
      },
      {
        "type": "title",
        "text": "どんなことがAPIでできるの？"
      },
      {
        "type": "paragraph",
        "text": "- SNSログイン\n- 地図の表示\n- 外部決済\n- データの共有\nなど、他のサービスの機能を自分のアプリに取り込むことができます。"
      },
      {
        "type": "title",
        "text": "APIだけでアプリはできるの？"
      },
      {
        "type": "paragraph",
        "text": "できません。APIはあくまで機能を借りる仕組みなので、アプリ本体の画面やロジックは自分で作る必要があります。"
      },
      {
        "type": "title",
        "text": "まとめ"
      },
      {
        "type": "paragraph",
        "text": "APIはサービス同士をつなぐ『窓口』です。これを使うと、ゼロから作らずに便利な機能を簡単に取り込めます。\n知っていると、サービスの仕組みがぐっと理解しやすくなりますよ。"
      }
    ]
  }, {
    "id": "what-is-css",
    "title": "CSSってなぁに？",
    "date": "2025-06-07",
    "category": "Programming",
    "excerpt": "「Webページの見た目」ってどう決まってるの？そんな疑問に答える、CSSのやさしい解説です。",
    "content": [
      {
        "type": "intro",
        "text": "Webサイトを開いて「きれいだな」「見やすいな」と感じるのは『CSS』のおかげです。今回は、そんなCSSの役割や仕組みについて、非エンジニアの方にもわかりやすく紹介します。"
      },
      {
        "type": "title",
        "text": "CSSってなに？"
      },
      {
        "type": "paragraph",
        "text": "CSS（シーエスエス）とは、Cascading Style Sheets（カスケーディング・スタイル・シート）の略です。\n簡単に言えば、Webページの『見た目』を整えるための言語です。"
      },
      {
        "type": "title",
        "text": "CSSはどんな風に使うの？"
      },
      {
        "type": "paragraph",
        "text": "HTMLで作った骨組みに、CSSでデザインを加えます。たとえば：\n```css\nh1 {\n  color: blue;\n  font-size: 36px;\n}\n```\nこのように書くと、タイトルの文字色が青く、大きさが36pxになります。"
      },
      {
        "type": "title",
        "text": "どんなデザインをCSSで表現できるの？"
      },
      {
        "type": "paragraph",
        "text": "- 文字の色や大きさ\n- レイアウトや配置\n- 背景色や画像\n- アニメーション\nなど、Webページの見た目に関わるほとんどのことをCSSで指定できます。"
      },
      {
        "type": "title",
        "text": "CSSだけでWebページはできるの？"
      },
      {
        "type": "paragraph",
        "text": "できません。CSSはあくまで『デザイン担当』なので、ページの骨組みはHTML、動きはJavaScriptなどと組み合わせて使います。"
      },
      {
        "type": "title",
        "text": "まとめ"
      },
      {
        "type": "paragraph",
        "text": "CSSはWebページを見た目で魅力的にするための言語です。HTMLで骨組みを作り、CSSでデザインを整えるのが基本です。\nこれを知っていると、Webページをもっと自由にカスタマイズできますよ。"
      }
    ]
  },
  {
    id: "what-is-html",
    title: "HTMLってなぁに？",
    date: "2025-06-07",
    category: "Programming",
    excerpt: "「Webページの骨組み」ってどうなってるの？そんな疑問に答える、HTMLのやさしい解説です。",
    content: [
      {
        type: "intro",
        text: "普段見ているWebサイトやブログ。実はその中身は『HTML』という言語で作られています。今回は、そんなHTMLの役割や仕組みについて、非エンジニアの方にもわかりやすく紹介します。"
      },
      {
        type: "title",
        text: "HTMLってなに？"
      },
      {
        type: "paragraph",
        text: "HTML（エイチティーエムエル）とは、HyperText Markup Language（ハイパーテキスト・マークアップ・ランゲージ）の略です。\n簡単に言えば、Webページの『骨組み』を作るための言語です。"
      },
      {
        type: "title",
        text: "HTMLはどんな風に使うの？"
      },
      {
        type: "paragraph",
        text: "HTMLは、文章の構造をタグと呼ばれる記号で囲って書いていきます。たとえば：\n```html\n<h1>こんにちは！</h1>\n<p>これは段落です。</p>\n```\nこのように書くと、『こんにちは！』という大きなタイトルと、その下に文章が表示されます。"
      },
      {
        type: "title",
        text: "どんな情報をHTMLで表現できるの？"
      },
      {
        type: "paragraph",
        text: "- タイトルや見出し\n- 文章や画像\n- リンクやボタン\n- 表やリスト\nなど、Webページに表示する基本的な情報はすべてHTMLで記述されます。"
      },
      {
        type: "title",
        text: "HTMLだけでWebページはできるの？"
      },
      {
        type: "paragraph",
        text: "できます。ただし、見た目のデザインはとてもシンプルです。\nWebページに色をつけたり、レイアウトを整えたりするにはCSS、動きをつけるにはJavaScriptなどと組み合わせる必要があります。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "HTMLはWebの世界で一番基本となる言語です。家でいえば『骨組み』のような存在で、どんなWebサイトもHTMLから始まります。\nこれを知っているだけでも、Webサイトの仕組みがぐっとわかりやすくなりますよ。"
      }
    ]
  },
  {
    id: "what-is-database",
    title: "データベースってなぁに？",
    date: "2025-06-05",
    category: "Database",
    excerpt: "「DB（データベース）」ってよく聞くけど実際なに？という方に、やさしく解説します。",
    content: [
      {
        type: "intro",
        text: "「データベース（DB）」という言葉は、ITの現場では当たり前のように使われていますが、非エンジニアの方にとってはちょっと抽象的でわかりにくい存在かもしれません。この記事では、DBとは何かをできるだけ身近なたとえでご紹介します。"
      },
      {
        type: "title",
        text: "DB（データベース）とは？"
      },
      {
        type: "paragraph",
        text: "データベースとは、一言で言えば「データを整理して保管するための箱（システム）」です。ノートやExcelのように、情報を集めて管理するものですが、もっと大規模で効率的に使える仕組みになっています。"
      },
      {
        type: "title",
        text: "身近なたとえ：図書館"
      },
      {
        type: "paragraph",
        text: "たとえば、図書館を思い浮かべてみてください。本がたくさんある中で、きちんと棚に分類され、探したい本がすぐ見つかりますよね。データベースもそれと同じで、「どこに何があるか」「どの情報がいつ追加されたか」などが整理されています。"
      },
      {
        type: "title",
        text: "どんなものがDBに入っているの？"
      },
      {
        type: "paragraph",
        text: "例えば、\n- 顧客の名前や連絡先\n- 商品の情報や価格\n- 注文履歴\nなど、ビジネスに必要なさまざまな情報がDBに保存されています。企業のシステムは、ほぼ確実にどこかでDBを使っています。"
      },
      {
        type: "title",
        text: "なぜExcelじゃダメなの？"
      },
      {
        type: "paragraph",
        text: "少人数や単純な作業ならExcelでもOKですが、\n- データ量が多い\n- 同時に複数人が使う\n- データ同士のつながり（例：顧客と注文）を扱いたい\nといった場合には、Excelでは限界があるため、DBが活躍します。"
      },
      {
        type: "title",
        text: "DBと会話するにはSQLを使う"
      },
      {
        type: "paragraph",
        text: "DBはただの箱なので、データを取り出したり追加したりするには「SQL」という専用の言葉を使います。これはちょうど、図書館で本を探すときに「◯◯の本ありますか？」と聞くのと同じ感覚です。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "DB（データベース）は、情報を効率的に管理・活用するためのシステムです。日々の生活の中でも、ネットショッピング、病院の予約、銀行の取引など、あらゆるところで使われています。非エンジニアの方にとっても、業務で関わる機会は増えていますので、基本だけでも知っておくと役に立ちますよ。"
      }
    ]
  },
  {
    id: "what-is-sql",
    title: "SQLってなぁに？",
    date: "2025-06-02",
    category: "Database",
    excerpt: "「データベースってよく聞くけど難しそう…」という方向けに、SQLの基本をかんたんに解説します。",
    content: [
      {
        type: "intro",
        text: "ITの世界でよく聞く「SQL（エスキューエル）」という言葉。データベースと関係がありそうだけど、非エンジニアの方にはちょっととっつきにくいものかもしれません。この記事では、SQLが何なのかをやさしく説明します。"
      },
      {
        type: "title",
        text: "SQLとは？"
      },
      {
        type: "paragraph",
        text: "SQLは「Structured Query Language（構造化問い合わせ言語）」の略で、データベースに対して「データを見せて」「追加して」「直して」などとお願いするための“言葉”です。簡単に言うと、データベースとの会話に使う専用の言語です。"
      },
      {
        type: "title",
        text: "どんなときに使うの？"
      },
      {
        type: "paragraph",
        text: "たとえば会社の顧客リストから「東京に住んでいる人だけを見たい」と思ったとき、SQLを使ってデータベースに「東京の人だけ見せて」と依頼できます。Excelのフィルターと似たようなイメージですが、もっと自由度が高く、正確な操作が可能です。"
      },
      {
        type: "title",
        text: "基本的なSQLの命令"
      },
      {
        type: "paragraph",
        text: "SQLにはいくつかの基本命令があります。\n\n- `SELECT`（データを見る）\n- `INSERT`（データを追加する）\n- `UPDATE`（データを変更する）\n- `DELETE`（データを消す）\n\nたとえば「顧客テーブルから全員の名前を表示したい」ときは `SELECT name FROM customers;` という命令を書きます。"
      },
      {
        type: "title",
        text: "エンジニアじゃなくても使える？"
      },
      {
        type: "paragraph",
        text: "実は最近では、エンジニアでなくてもSQLを使ってデータを扱う機会が増えています。営業やマーケティング担当者が、データ分析のためにSQLでレポートを作ることもよくあります。難しそうに見えますが、決まった書き方を覚えれば意外と使えます。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "SQLは「データベースに話しかけるための言葉」です。エンジニアでなくても、データを扱う機会がある人には強い味方になります。基本の命令だけでも覚えておくと、仕事の幅がぐっと広がりますよ！"
      }
    ]
  },
  {
    id: "what-is-java",
    title: "Javaってなぁに？",
    date: "2025-06-01",
    category: "Java ",
    excerpt: "非エンジニアでもわかるようにJavaの基本をやさしく解説します。",
    content: [
      {
        type: "intro",
        text: "こんにちは！今日は「Java（ジャバ）」について、できるだけわかりやすく説明してみます。ITやプログラミングに詳しくない人も、なんとなくイメージがつかめるように書きました。",
      },
      {
        type: "heading",
        text: "Javaは「プログラミング言語」の一つ",
      },
      {
        type: "paragraph",
        text: "まず、Javaとは何か？一言で言うと、「コンピューターに命令を書くための言葉」のことです。英語や日本語のように人が話す言葉があるように、コンピューターにも命令を伝えるための「言語」があります。Javaはその中でも、とても人気のある言語の一つです。",
      },
      {
        type: "heading",
        text: "Javaが使われている場所",
      },
      {
        type: "paragraph",
        text: "Javaは世界中で使われていて、私たちが普段使うスマホのアプリや銀行のシステム、家電製品の中にもJavaが組み込まれていることがあります。例えば、",
      },
      {
        type: "list",
        items: [
          "Androidスマホの多くのアプリ",
          "大きな企業の業務システム",
          "銀行や役所のコンピューターシステム",
        ],
      },
      {
        type: "heading",
        text: "なぜJavaが人気なの？",
      },
      {
        type: "paragraph",
        text: "Javaが選ばれる理由はいくつかありますが、主なポイントは",
      },
      {
        type: "list",
        items: [
          "Javaで一度書いたWindowsでもMacでもLinuxでも動かせる",
          "安全で安定している重要なシステムに使われるため、堅牢（かたくて安全）",
          "世界中にユーザーが多く、わからないことがあっても情報がたくさん見つかる",
        ],
      },
      {
        type: "heading",
        text: "まとめ",
      },
      {
        type: "paragraph",
        text: "Javaは、私たちの生活のいろんな場面で使われている「プログラミング言語」です。難しそうに見えますが、基本的には「コンピューターに仕事を頼むための共通の言葉」と考えてもらえばOKです。これからもっとITやプログラミングに興味を持ったら、Javaはとても役立つ知識になりますよ！",
      },
      {
        type: "paragraph",
        text: "もし「もっと知りたい！」と思ったら、また別の記事で具体的な仕組みや使い方も紹介しますね。",
      },
    ],
  },
  {
    id: "what-is-programming",
    title: "プログラミングってなぁに？",
    date: "2025-05-31",
    category: "Programming",
    excerpt: "プログラミングの基本を、専門用語を使わずにやさしく解説します。",
    content: [
      {
        type: "intro",
        text: "プログラミングという言葉はよく聞くけれど、実際には何をするものかよくわからないという方も多いはず。ここではプログラミングが何かを、できるだけわかりやすく解説します。"
      },
      {
        type: "title",
        text: "プログラミングとは「コンピューターへの指示書」"
      },
      {
        type: "paragraph",
        text: "プログラミングとは、コンピューターに「こう動いてほしい」という指示を書き残すことです。私たちが料理のレシピを見て料理を作るように、コンピューターはプログラムというレシピに従って動きます。"
      },
      {
        type: "title",
        text: "専門知識なしでも始められる？"
      },
      {
        type: "paragraph",
        text: "プログラミングは専門的な知識が必要だと思われがちですが、近年は初心者向けのツールや教材がたくさんあり、誰でも挑戦しやすくなっています。例えば、ビジュアルで命令を組み立てるScratch（スクラッチ）というツールなどが人気です。"
      },
      {
        type: "title",
        text: "プログラミングでできること"
      },
      {
        type: "paragraph",
        text: "プログラミングを使うと、スマホアプリやウェブサイト、ゲーム、さらには家電の動作まで、自分のアイデアを形にできます。身の回りの便利な機械の多くは、プログラムによって動いているのです。"
      },
      {
        type: "title",
        text: "まとめ"
      },
      {
        type: "paragraph",
        text: "プログラミングは特別な技術ではなく、「コンピューターにわかる指示を書くこと」です。初めは難しそうに見えても、一歩ずつ学べば誰でも使いこなせるスキルです。興味があれば、ぜひ挑戦してみてください！"
      }
    ],
  },

  /**
  {
    id: "react-blog-setup",
    title: "Reactでブログを作る方法",
    date: "2020-01-01",
    category: "React",
    excerpt: "ReactとTailwind CSSで簡単なブログを作成する方法を紹介します。",
    content: [
      {
        type: "intro",
        text: "ReactとTailwind CSSを使えば、自分だけのブログを短時間で構築できます。今回はその基本的な手順を解説します。"
      },
      {
        type: "heading",
        text: "1. プロジェクトの準備"
      },
      {
        type: "paragraph",
        text: "まず、ViteでReactプロジェクトを作成し、Tailwind CSSをインストールしましょう。"
      },
      {
        type: "code",
        language: "bash",
        code: "npm create vite@latest my-blog -- --template react\ncd my-blog\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"
      },
      {
        type: "heading",
        text: "2. レイアウトとページ構成"
      },
      {
        type: "list",
        items: [
          "Header（ヘッダー）",
          "PostList（記事一覧）",
          "PostDetail（記事詳細）",
          "Sidebar（カテゴリ・アーカイブ）"
        ]
      },
      {
        type: "heading",
        text: "3. Tailwindでのデザイン"
      },
      {
        type: "paragraph",
        text: "Tailwindのユーティリティクラスで、簡単にレスポンシブで美しいUIを実装できます。"
      },
      {
        type: "image",
        src: "/images/blog-example.png",
        alt: "ブログ完成イメージ"
      },
      {
        type: "quote",
        text: "コードとデザインを両立させるならTailwindは強力な選択肢です。"
      },
      {
        type: "conclusion",
        text: "ReactとTailwindでブログを構築するのは思っているより簡単です。自分だけのブログをぜひ作ってみてください。"
      }
    ]
  },
  {
    id: "react-unko-setup",
    title: "Javaでブログを作る方法",
    date: "2020-01-02",
    category: "React",
    excerpt: "honnjja",
    content: [
      { type: "intro", text: "Reactを使えば、シンプルかつ柔軟なブログが作れます。" },
      { type: "heading", text: "なぜReact？" },
      { type: "paragraph", text: "Reactはコンポーネント指向で拡張しやすく、ブログにも最適です。" },
      { type: "list", items: ["コンポーネント再利用", "状態管理のしやすさ", "UIライブラリが豊富"] },
      { type: "heading", text: "Tailwindとの組み合わせ" },
      { type: "paragraph", text: "Tailwindを使うことで、スタイルの統一と高速な開発が可能になります。" },
      { type: "conclusion", text: "ReactとTailwindを組み合わせれば、個人ブログも素早く構築できます。" }
    ]
  }
     */
];
