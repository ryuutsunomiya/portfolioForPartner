export const works: {
  title: string;
  thumbnail: { src: string; type: "iframe" | "mp4"; width: number; height: number };
  url?: string;
  period: string;
  scope: ("Front-end" | "Back-end" | "Design")[];
  stack: string[];
  points: null | string;
  media?: { title: string; href: string }[];
}[] = [
  {
    title: "塑tructure",
    thumbnail: { src: "3x05YSbMNmeT9C8ndALipD", type: "mp4", width: 400, height: 500 },
    url: "https://www.sotructure.com",
    period: "1.5ヶ月",
    scope: ["Front-end", "Design"],
    stack: ["Astro.js", "Cloudflare pages"],
    points: `
    「①グラフィックとして見た場合でも強度のある」「②分業的でない、デザインと実装が相互に影響し合う」サイトを作りたいという考えから生まれました。サイトを囲むフレームにの生成ロジックについては如何なる画面比率でも破綻なく、美しく見えるよう、相当数の感覚的な調整を加えています。Webコーディングで陥りがちなシステマチックな印象でない、手作業による味わいのような魅力のあるインタラクションを目指しました。
    `,
  },
  {
    title: "MIDW",
    thumbnail: { src: "7tUSY8cIkfdhILo39nHNRj", type: "mp4", width: 1600, height: 1000 },
    url: "https://midw.jp",
    period: "1.5ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["Astro.js", "Newt", "Cloudflare pages"],
    points: `
    事務所名の基となる4つの表現形態（Model, Image, Drawing, Writing）それぞれに対して独立した構造のページを実装しています。加えてそのコンセプトが際立つよう、アニメーションなどの演出は最低限に抑えています。
    `,
  },
  {
    title: "paradise",
    thumbnail: { src: "5pCXswezkcvay7F1QzYYEc", type: "mp4", width: 1600, height: 1000 },
    url: "https://paradisecreative.co.jp/",
    period: "1.5ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["WebGL", "Astro.js", "contentful", "Cloudflare pages"],
    points: `
    メニュー画面などで表示しているグラデーションはユーザーがサイトを訪れた時間により変わります（空の色を表現しています）。
    `,
  },
  {
    title: "オリエンタルモーター 採用サイト",
    thumbnail: { src: "3LCUKvswrJTlF3TTDnldUP", type: "mp4", width: 1600, height: 1000 },
    url: "https://www.orientalmotor.co.jp/ja/recruit",
    period: "1.5ヶ月",
    scope: ["Front-end"],
    stack: ["Astro.js"],
    // points: `
    // 堅実な印象のある企業様の採用サイトであるため、各種演出については印象的ではありつつも仰々しさを感じさせないバランスを意識して設計しました。ローディングを除き、ユーザーが演出を「待つ」時間が発生しないようにしています。
    // `,
    points: `
    求職者が繰り返しサイトを訪れる状況を想定し、各種演出についてはシンプルなフェードインなどを用いて印象的でありつつも飽きのこないすっきりとしたバランスでまとめることを意識して設計しました。ローディングを除き、ユーザーが演出を「待つ」時間が発生しないようにしています。
    `,
  },
  {
    title: "SXD Lab",
    thumbnail: { src: "6seUkTGQBC2ErdRM7YwQap", type: "mp4", width: 1600, height: 1000 },
    url: "https://sxdl.jp",
    period: "1ヶ月",
    scope: ["Front-end"],
    stack: ["Astro.js", "Cloudflare pages"],
    points: `
    持続可能な社会の実現を目標とする団体のサイトのため、可能な限り閲覧中の電力消費量やCO2排出量を抑えることを目指しました。画像を多用するデザインでありながら、websitecarbon.comでAランク、EcograderでBランクを達成しました（2025年1月当時）。PJ期間中は、見た目を損なわないよう各画像ごとに異なる圧縮率での軽量化や、似たアセット同士を共通化し、それらが破綻なく繋がるよう実装上で工夫を加えるなど、いかにページ単位でのデータサイズを削減できるかという部分に工数を割きました。また、100%再生利用可能なエネルギーで稼働しているという理由で、ホスティングサーバーはCloudflare pagesをご提案しました。
    `,
  },
  {
    title: "Instant Anima",
    thumbnail: { src: "7n6cK5SdvNu9Q6hEZmWxpe", type: "mp4", width: 1600, height: 1000 },
    url: "https://www.instantanima.com/",
    period: "2ヶ月",
    scope: ["Front-end", "Back-end", "Design"],
    stack: ["Astro.js", "Stripe", "Cloudflare pages"],
    points: `
    トップページの演出はコレクションのテーマである「即席」から発想しました。ランダムなパターンのロゴと画像が次々に生成されるシステムを考案しました。
    `,
  },
  {
    title: "inbetween",
    thumbnail: { src: "39GvrhQZDA1yF3BkuuWCAp", type: "mp4", width: 1600, height: 1000 },
    url: "https://www.inbetween.jp",
    period: "1.5ヶ月",
    scope: ["Front-end"],
    stack: ["Astro.js"],
    points: null,
  },
  {
    title: "RYU UTSUNOMIYA WORKS 2015-2019",
    thumbnail: { src: "40xHbl27OUXwcsegQ0GfuX", type: "mp4", width: 1600, height: 1000 },
    url: "https://www.ryuutsunomiya.com",
    period: "1ヶ月",
    scope: ["Front-end", "Design"],
    stack: ["WebGL", "Astro.js", "Cloudflare pages"],
    points: `
    木のパネルの演出は、作家らしさの視覚化と同時に、WebGLを用いる中でいかにアクセシビリティを保つか、という問いから誕生しました。vertices（3D空間上に表示する面の頂点）とmeterial（その面の色）という、Three.jsのレンダリング時間に関わる構成要素それぞれの描画において、可能な限り軽微な処理で収まりかつデザインのテーマと合致するインタラクションとなる組み合わせを模索しました。採用案については、直方体を生成するための僅か8つのverticesと、テクスチャーの読み込みのみを行うmaterialの連続で構成されています。
    `,
    media: [
      { title: "BRIK GALLERY", href: "https://brik.co.jp/gallery/detail/10600" },
      { title: "me ki ki ki", href: "https://mekikiki.com/2121/" },
    ],
  },
  {
    title: "SNDO",
    thumbnail: { src: "2kGLjx5Oceco2iqhVqT7AH", type: "mp4", width: 1600, height: 1000 },
    url: "https://sndo.jp",
    period: "1ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["Astro.js", "WebGL", "Newt", "Cloudflare pages"],
    points: `
    SNDOのクリエイティブソースである「日本的美意識」の視覚化に挑戦しました。ディレクターとデザイナーと協議を重ね、何度も修正を重ねて採用案に至りました。
    `,
  },
  {
    title: "ヨッキューくん ギャラリー",
    thumbnail: { src: "3orrPQvyG5cdRe7G7XUVMQ", type: "mp4", width: 1600, height: 1000 },
    url: "https://yokkyukungallery.com",
    period: "2ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["Next.js", "WebGL", "microCMS", "Shopify Storefront API Client", "Cloudflare pages"],
    points: `
    漫画に登場するキャラクターのアートパネルが購入できるバーチャルストアです。3DCGを活用することで、実際のギャラリーで作品を購入するような体験ができるECサイトを作れないかという考えから生まれました。パネルの隣にある本をクリックすると該当のキャラクターが登場する話が読めるようになっています。
    `,
    media: [
      { title: "WebGL 総本山 | アートパネルの展示に加え実物を購入することも可能！ ヨッキューくん ギャラリー がおもしろい", href: "https://webgl.souhonzan.org/entry/?v=2392" },
      { title: "BRIK GALLERY", href: "https://brik.co.jp/gallery/detail/7627" },
      { title: "me ki ki ki", href: "https://mekikiki.com/6374/" },
      { title: "microCMS", href: "https://microcms.io/projects/detail/PT1Gspou" },
    ],
  },
  {
    title: "小笠原海洋センターさんと考えるウミガメの未来 │ フェリシモ",
    thumbnail: { src: "4KwlYqIkRMyyhOTrkguiyb", type: "mp4", width: 1586, height: 1000 },
    url: "https://www.felissimo.co.jp/gopeace/ogasawara/",
    period: "2週間",
    scope: ["Front-end"],
    stack: ["Astro.js"],
    points: `
    背景のウミガメはランダムなスピードや出現位置になるようにコードで出力しています。
    `,
    media: [
      { title: "SANKOU!", href: "https://sankoudesign.com/web/felissimo-ogasawara/" },
      { title: "LP ARCHIVE", href: "https://rdlp.jp/archives/otherdesign/lp/216763?sp=1" },
      { title: "MOBILE FIRST DESIGN GALLERY", href: "https://mf-design-gallery.studio.site/shopping" },
      { title: "cocotano!", href: "https://cocotano.com/search/category-3koaog/page-2" },
      { title: "MIX", href: "https://mixltd.jp/blog/mobilefirstwebdesign/" },
    ],
  },
  {
    title: "VOOKMARK",
    thumbnail: { src: "4fioOMjRr5wvFYLrQeLS9F", type: "mp4", width: 1586, height: 1000 },
    url: "https://vookmark.io/",
    period: "2週間",
    scope: ["Front-end"],
    stack: ["Astro.js"],
    points: null,
  },
  {
    title: "amifa purpose",
    thumbnail: { src: "7BWXtfpY0zMs7vPMT55f8r", type: "mp4", width: 1600, height: 1000 },
    url: "https://www.amifa.co.jp/purpose",
    period: "1ヶ月",
    scope: ["Front-end"],
    stack: ["Astro.js"],
    points: null,
  },
  {
    title: "MATTER",
    thumbnail: { src: "2Hyd7DJM1SAPJhnvBpeicU", type: "mp4", width: 1600, height: 1000 },
    url: "https://mattertokyo.jp/",
    period: "2週間（私の担当パートのみ）",
    scope: ["Front-end"],
    stack: ["WebGL", "Astro.js"],
    points: `
    WebGL部分の実装を担当しました。CMSにより入稿された画像に対し、出現前のグラデーションと網点のエフェクトを生成しています。紙媒体の作品を多く扱う本スペースの特徴に倣い、網点はCMYK風にしました。
    `,
    media: [
      { title: "瞬間に垣間見える面白さをあなたは感じ取れるか！？ アートスペース MATTER のウェブサイト | WebGL 総本山", href: "https://webgl.souhonzan.org/entry/?v=2638" },
      { title: "BRIK GALLERY", href: "https://brik.co.jp/gallery/detail/14295" },
    ],
  },
  {
    title: "SMARG Wealth",
    thumbnail: { src: "N9vywa88U0VcIWUJdZkop", type: "mp4", width: 1600, height: 1000 },
    url: "https://wealth.smarg.jp/",
    period: "2ヶ月",
    scope: ["Front-end"],
    stack: ["Nuxt.js"],
    points: null,
  },
  {
    title: "ヨッキューくん 公式サイト",
    thumbnail: { src: "HkmKgW2E8osvOJeVLIgId", type: "mp4", width: 1600, height: 1000 },
    url: "https://yokkyukun.com",
    period: "1.5ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["Next.js", "WebGL", "microCMS", "Cloudflare pages"],
    points: `
    漫画の雰囲気と融和する演出、インタラクションの設計を目標にしました。
    `,
    media: [
      { title: "S5-Style", href: "https://www.s5-style.com/set/momotaro/935/" },
      { title: "Good Web Design", href: "https://designbookmark.me/" },
      { title: "BRIK GALLERY", href: "https://brik.co.jp/gallery/detail/2509" },
      { title: "1GUU", href: "https://1guu.jp/category/industry/tv/" },
      { title: "Design bookmark", href: "https://designbookmark.me/" },
    ],
  },
  {
    title: "npu",
    thumbnail: { src: "4LvnJkheRQmknwYHqH0pzN", type: "mp4", width: 1600, height: 998 },
    url: "https://neplusultra.jp",
    period: "1.5ヶ月",
    scope: ["Front-end", "Back-end"],
    stack: ["Next.js", "WebGL", "microCMS", "Cloudflare pages"],
    points: `
    npu様の長年の活動を「膨大な知の集積」と見立て、書籍の世界に誘うような演出を実装しました。演出のトンマナについては会社名の基となった"ne plus ultra"（極致）に倣い、ミニマルにまとめました。
    `,
    media: [
      { title: "WebGL 総本山 | 紙の本の質感をウェブ上に再現しつつコンテンツにもその文脈を落とし込んだ npu のウェブサイト", href: "https://webgl.souhonzan.org/entry/?v=2843" },
      { title: "me ki ki ki", href: "https://mekikiki.com/5666/" },
      { title: "RWD JP", href: "https://responsive-jp.com/15594.html" },
      { title: "Good Web Design", href: "https://good-web-design.com/webdesign/neplusultra" },
      { title: "Brilliant Design Collect", href: "https://brilliantdesign.work/archives/9430" },
    ],
  },
  {
    title: "PSG JAPAN TOUR 2023",
    thumbnail: { src: "https://player.vimeo.com/video/832571640?autoplay=1&loop=1&background=1&app_id=122963", type: "iframe", width: 1941, height: 1105 },
    period: "1.5ヶ月",
    scope: ["Front-end"],
    stack: ["Next.js"],
    points: `
    「世界の傑物、東京で激突。」のコピーに倣い、超常的な存在同士のぶつかり合い、またそれに伴う会場の熱気を予見させる意図で演出を設計しました。
    `,
  },
  {
    title: "Dr.TRAINING",
    thumbnail: { src: "https://player.vimeo.com/video/852302384?autoplay=1&loop=1&background=1&app_id=122963", type: "iframe", width: 1917, height: 1297 },
    period: "1.5ヶ月",
    scope: ["Front-end"],
    stack: ["HTML(pug)", "SASS", "JavaScript"],
    points: null,
  },
];
