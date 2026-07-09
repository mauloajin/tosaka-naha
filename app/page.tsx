const store = {
  name: "炭焼地鶏と旬鮮野菜 とさか",
  shortName: "とさか",
  englishName: "Tosaka Naha",
  romajiName: "Sumiyaki Jidori to Shunsen Yasai Tosaka",
  businessType: "居酒屋・和風居酒屋・地鶏料理",
  area: "沖縄県那覇市牧志・久茂地エリア",
  address: "沖縄県那覇市牧志１－１３－１９",
  officialUrl: "https://www.facebook.com/tosakaokinawa/",
  reservationUrl: "https://www.hotpepper.jp/strJ001144660/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%84%BC%E5%9C%B0%E9%B6%8F%E3%81%A8%E6%97%AC%E9%AE%AE%E9%87%8E%E8%8F%9C%20%E3%81%A8%E3%81%95%E3%81%8B%20%E6%B2%96%E7%B8%84%E7%9C%8C%E9%82%A3%E8%A6%87%E5%B8%82%E7%89%A7%E5%BF%97%EF%BC%91%EF%BC%8D%EF%BC%91%EF%BC%93%EF%BC%8D%EF%BC%91%EF%BC%99",
  hours: ["月～日、祝日、祝前日 18:00～翌0:00", "料理L.O. 22:45", "ドリンクL.O. 23:30"],
  closed: "HotPepper上では「ご確認ください」と案内されています。",
  access: "北向けに58号線を直進、松山交差点を右折し、久茂地橋を渡りきって左手付近。白の大きな「鳥」提灯が目印です。",
};

const features = [
  ["炭火焼き鳥と地鶏料理", "炭の香りをまとわせた焼き鳥や、若鳥の半身揚げなど、鶏料理を中心にした居酒屋です。"],
  ["旬鮮野菜の料理", "県産野菜を使い、素材の味を生かした料理を提供していることが紹介されています。"],
  ["日本酒と焼き鳥", "焼き鳥に合わせる酒類として、日本酒、焼酎、泡盛、サワー、カクテルなどの案内があります。"],
  ["沖縄県内の単独店", "HotPepperでは、沖縄県にのみ所在する単独店で、全国展開のチェーン店ではない旨が案内されています。"],
];

const menuItems = [
  "若鳥の半身揚げ 1,100円（税込）",
  "おまかせ串5本 1,045円（税込）",
  "プレモル付飲み放題90分 2,420円（税込）",
  "トマトスライス 440円（税込）",
  "レバーのたまり漬け 495円（税込）",
  "鶏だし玉子焼き 715円（税込）",
  "チャーハン 825円（税込）",
  "つなぎ 1本286円（税込）",
  "ささみ（梅・わさび）1本231円（税込）",
  "つくね 1本231円（税込）",
  "ねぎま 1本231円（税込）",
  "手羽 1本297円（税込）",
  "とさかコース 全8品 4,500円（税込）",
  "飲み放題メニュー 全39種類",
];

const seatItems = [
  ["カウンター", "カウンターは6席までの案内があります。ひとり利用や少人数で使いやすい席です。"],
  ["テーブル", "テーブルは全3卓で、4名席、5名席、6名席の掲載があります。"],
  ["掘りごたつ半個室", "半個室の掘りごたつテーブル席は最大10名まで対応と案内されています。"],
  ["貸切", "貸切は最大32名までの宴会人数目安として案内されています。詳細は店舗への確認が必要です。"],
];

const faqs = [
  ["営業時間は何時ですか？", "HotPepperでは、月～日、祝日、祝前日とも18:00～翌0:00、料理ラストオーダー22:45、ドリンクラストオーダー23:30と案内されています。"],
  ["定休日はありますか？", "HotPepper上の定休日欄は「ご確認ください」と案内されています。最新の営業日は予約ページなどで確認してください。"],
  ["予約はできますか？", "HotPepperでネット予約に対応しています。即予約は来店日の当日22時まで、リクエスト予約は来店日の前日17時までの案内があります。"],
  ["席数はどのくらいですか？", "総席数は30席で、カウンター6席、テーブル3卓、半個室の掘りごたつ席などが掲載されています。"],
  ["20歳未満でも入店できますか？", "HotPepperでは、20歳未満の方は同伴者を含め入店不可と案内されています。"],
];

const keywords = [
  "炭焼地鶏と旬鮮野菜 とさか", "炭焼地鶏と旬鮮野菜とさか", "とさか 那覇", "とさか 沖縄", "とさか 久茂地", "とさか 牧志", "Tosaka Naha", "Sumiyaki Jidori Tosaka",
  "那覇 居酒屋", "那覇 和風居酒屋", "那覇 地鶏", "那覇 焼き鳥", "那覇 炭火焼き鳥", "那覇 鶏料理", "那覇 日本酒", "那覇 焼酎", "那覇 泡盛", "那覇 飲み放題", "那覇 予約 居酒屋", "那覇 ディナー", "那覇 夜ご飯", "那覇 グルメ",
  "那覇市牧志 居酒屋", "牧志 居酒屋", "牧志 焼き鳥", "牧志 地鶏", "牧志 日本酒", "牧志 ディナー", "牧志 グルメ", "牧志 予約", "久茂地 居酒屋", "久茂地 焼き鳥", "久茂地 地鶏", "久茂地 日本酒", "久茂地 ディナー", "久茂地 グルメ", "久茂地 予約",
  "県庁前駅 居酒屋", "県庁前駅 焼き鳥", "県庁前駅 地鶏", "県庁前駅 日本酒", "美栄橋駅 居酒屋", "美栄橋駅 焼き鳥", "美栄橋駅 地鶏", "美栄橋駅 日本酒", "沖縄 居酒屋", "沖縄 焼き鳥", "沖縄 地鶏", "沖縄 県産野菜", "沖縄 日本酒", "沖縄 泡盛", "沖縄 鶏料理", "沖縄 飲み放題",
  "炭火焼き鳥 那覇", "炭火焼き鳥 久茂地", "地鶏料理 那覇", "地鶏料理 久茂地", "旬鮮野菜 那覇", "県産野菜 居酒屋", "若鳥の半身揚げ", "おまかせ串5本", "鶏だし玉子焼き", "レバーのたまり漬け", "つなぎ 焼き鳥", "ささみ 梅 わさび", "つくね 焼き鳥", "ねぎま 焼き鳥", "手羽 焼き鳥", "チャーハン 居酒屋",
  "プレモル 飲み放題 那覇", "90分 飲み放題 那覇", "半個室 掘りごたつ 那覇", "掘りごたつ 那覇 居酒屋", "カウンター 那覇 居酒屋", "テーブル席 那覇 居酒屋", "貸切 那覇 居酒屋", "全席喫煙可 那覇", "20歳未満 入店不可 居酒屋", "那覇 クレジットカード 居酒屋", "那覇 コインパーキング 近く",
  "牧志1-13-19", "沖縄県那覇市牧志1-13-19", "久茂地橋 居酒屋", "松山交差点 居酒屋", "白い鳥提灯", "HotPepper とさか", "ホットペッパー とさか 那覇", "とさか ネット予約", "とさか 営業時間", "とさか 定休日", "とさか メニュー", "とさか 席", "とさか 住所", "とさか アクセス", "とさか Facebook",
  "Naha izakaya", "Naha yakitori", "Naha jidori", "Naha Japanese restaurant", "Naha local dining", "Naha dinner", "Naha restaurant reservation", "Yakitori near Kenchomae station", "Izakaya near Miebashi station", "Japanese restaurant near Makishi", "Local dining near Kumoji", "Tosaka Okinawa", "Tosaka izakaya", "Tosaka yakitori", "Tosaka reservation", "Tosaka menu",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: [store.shortName, store.englishName, store.romajiName],
  servesCuisine: ["居酒屋", "焼き鳥", "地鶏料理", "和食"],
  address: { "@type": "PostalAddress", addressRegion: "沖縄県", addressLocality: "那覇市", streetAddress: "牧志１－１３－１９", addressCountry: "JP" },
  url: "https://tosaka-naha.vercel.app/",
  sameAs: [store.officialUrl, store.reservationUrl],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "00:00" }],
  menu: store.reservationUrl,
  acceptsReservations: true,
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="hero">
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#features">特徴</a><a href="#seats">席</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English Guide</a>
        </nav>
        <div className="heroInner">
          <p className="eyebrow">那覇・牧志の地鶏居酒屋</p>
          <h1>{store.name}</h1>
          <p className="lead">炭火焼き鳥、地鶏料理、旬鮮野菜、日本酒を楽しめる那覇市牧志の居酒屋です。久茂地橋近く、白の大きな「鳥」提灯が目印として案内されています。</p>
          <div className="actions"><a className="button primary" href={store.reservationUrl}>予約ページを見る</a><a className="button" href={store.mapUrl}>Googleマップで見る</a><a className="button" href={store.officialUrl}>公式ページを見る</a></div>
        </div>
      </header>
      <section className="section intro" aria-label="店舗概要"><div><p className="label">Store Name</p><h2>{store.englishName}</h2><p>{store.romajiName}</p></div><div><p className="label">Area</p><h2>{store.area}</h2><p>{store.businessType}</p></div></section>
      <section id="features" className="section"><div className="sectionHead"><p className="label">Features</p><h2>特徴</h2></div><div className="grid">{features.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="seats" className="section"><div className="sectionHead"><p className="label">Seats</p><h2>席と店内情報</h2></div><div className="grid two">{seatItems.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section menu"><div className="sectionHead"><p className="label">Menu</p><h2>メニュー情報</h2><p>HotPepperに掲載されている料理、串、飲み放題、コース情報から抜粋しています。価格は掲載時点の税込表記です。</p></div><ul className="menuList">{menuItems.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section id="info" className="section info"><div className="sectionHead"><p className="label">Information</p><h2>店舗基本情報</h2></div><dl>
        <div><dt>店舗名</dt><dd>{store.name}</dd></div><div><dt>業態</dt><dd>{store.businessType}</dd></div><div><dt>エリア</dt><dd>{store.area}</dd></div><div><dt>住所</dt><dd>{store.address}</dd></div><div><dt>営業時間</dt><dd>{store.hours.join(" / ")}</dd></div><div><dt>定休日</dt><dd>{store.closed}</dd></div><div><dt>予算目安</dt><dd>3,000円～3,500円</dd></div><div><dt>席数</dt><dd>30席（カウンター6席、テーブル3卓）</dd></div><div><dt>半個室</dt><dd>最大10名まで対応の掘りごたつ半個室が掲載されています。</dd></div><div><dt>貸切</dt><dd>貸切可。最大宴会人数32名の案内があります。</dd></div><div><dt>喫煙</dt><dd>全席喫煙可。20歳未満の方は同伴者を含め入店不可と案内されています。</dd></div><div><dt>支払い方法</dt><dd>クレジットカード利用可（VISA、マスター、アメックス）。電子マネー、QRコード決済は利用不可の案内です。</dd></div><div><dt>駐車場</dt><dd>店舗駐車場はなし。近くにコインパーキングありと案内されています。</dd></div><div><dt>予約URL</dt><dd><a href={store.reservationUrl}>{store.reservationUrl}</a></dd></div><div><dt>公式サイト</dt><dd><a href={store.officialUrl}>{store.officialUrl}</a></dd></div>
      </dl></section>
      <section id="access" className="section access"><div className="sectionHead"><p className="label">Access</p><h2>アクセス</h2></div><p>{store.access}</p><a className="textLink" href={store.mapUrl}>Googleマップで店舗名検索を開く</a></section>
      <section id="faq" className="section faq"><div className="sectionHead"><p className="label">FAQ</p><h2>よくある質問</h2></div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
      <section id="english" className="section english"><div className="sectionHead"><p className="label">English Guide</p><h2>English Guide</h2></div><p>{store.englishName} is an izakaya in Makishi, Naha, Okinawa. The restaurant serves charcoal-grilled yakitori, jidori chicken dishes, seasonal vegetables and Japanese drinks.</p><p>Address: {store.address}. Opening hours listed on HotPepper are 18:00-24:00 every day, including holidays and days before holidays. Food last order is 22:45 and drink last order is 23:30.</p></section>
      <section className="section keywords"><div className="sectionHead"><p className="label">Related Keywords</p><h2>関連キーワード</h2></div><div className="chips">{keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></section>
      <footer className="footer"><strong>{store.name}</strong><span>{store.address}</span><span>{store.businessType}</span></footer>
    </main>
  );
}
