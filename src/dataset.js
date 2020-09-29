const defaultDataset = {
  init: {
    answers: [
      { content: '仕事を依頼したい', nextId: 'job_offer' },
      {
        content: 'これからのエンジニアのキャリアについて相談したい',
        nextId: 'consultant'
      },
      { content: '学習コミュニティについて知りたい', nextId: 'community' },
      { content: 'とにかくお話がしたい', nextId: 'dating' }
    ],
    question: 'こんにちは！ご用件はなんですか？'
  },
  job_offer: {
    answers: [
      { content: 'Webサイトを制作してほしい', nextId: 'website' },
      { content: 'Webアプリを開発してほしい', nextId: 'webapp' },
      { content: '自動化ツールを作ってほしい', nextId: 'automation_tool' },
      { content: 'その他', nextId: 'other_jobs' }
    ],
    question: 'どのようなお仕事でしょうか？'
  },
  website: {
    answers: [
      { content: '問い合わせる', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: 'Webサイト細作についてですね。コチラからお問い合わせできます。'
  },
  webapp: {
    answers: [
      { content: '問い合わせる', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: 'Webアプリ開発についてですね。コチラからお問い合わせできます。'
  },
  automation_tool: {
    answers: [
      { content: '問い合わせる', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: '自動化ツール開発についてですね。コチラからお問い合わせできます。'
  },
  other_jobs: {
    answers: [
      { content: '問い合わせる', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: 'その他についてですね。コチラからお問い合わせできます。'
  },
  consultant: {
    answers: [
      {
        content: 'YouTubeで動画を見る',
        nextId: 'https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w'
      },
      { content: '学習コミュニティについて知りたい', nextId: 'community' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: 'こちらの動画で詳しく説明されていますので参考にしてください。'
  },
  community: {
    answers: [
      {
        content: '動画の人はどんな活動をしているの？',
        nextId: 'community_activity'
      },
      {
        content: 'コミュニティに参加したい',
        nextId: 'https://torahack.web.app/community/'
      },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question:
      'Webエンジニアへの転職を目指す方などにコミュニティでノウハウも教えてくれますよ。'
  },
  community_activity: {
    answers: [
      {
        content: 'さらに詳細を知りたい',
        nextId: 'https://youtu.be/tIzE7hUDbBM'
      },
      {
        content: 'コミュニティに参加したい',
        nextId: 'https://torahack.web.app/community/'
      },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question:
      'フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催されています。'
  },
  dating: {
    answers: [
      { content: 'DMしてみる', nextId: 'https://twitter.com/torahack_' },
      { content: '最初の質問に戻る', nextId: 'init' }
    ],
    question: 'まずは気軽にご連絡してみてください！'
  }
};

export default defaultDataset;
