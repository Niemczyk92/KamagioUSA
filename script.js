/* ===== KAMAGIO — site interactions ===== */

/* ---------- i18n dictionary ---------- */
const i18n = {
  en: {
    'nav.products': 'Products',
    'nav.engraving': 'Custom Engraving',
    'nav.process': 'How it works',
    'nav.wholesale': 'Wholesale',
    'nav.about': 'About',
    'nav.cta': 'Get in touch',

    'hero.eyebrow': 'Boynton Beach, Florida',
    'hero.title': 'Hydration<br>that carries<br><span class="accent">your story<span class="dot"></span></span>',
    'hero.lead': 'Premium stainless steel bottles, tumblers and pet hydration — engraved, printed and personalized with whatever matters to you. Names, logos, photos, inside jokes. We make the canvas. You make it yours.',
    'hero.cta.primary': 'Explore the lineup',
    'hero.cta.secondary': 'Personalize yours',
    'hero.stats.variants': 'Product variants',
    'hero.stats.hold': 'Hot · Cold hold',
    'hero.stats.bpa': 'BPA-free',
    'hero.badge': 'Made for you · Engraved on demand',

    'marquee': 'Stainless Steel · Vacuum Insulated · Custom Engraving · Kids · Adults · Pets · Made in Florida · Wholesale Available · ',

    'features.eyebrow': 'Why KAMAGIO',
    'features.title': "Vacuum-tight craft. Florida heart. Personalized end-to-end.",
    'features.lead': "We don't sell bottles. We sell the thing the bottle becomes when your name, your team, your pet or your brand is laser-etched onto it. Built from food-grade stainless steel and finished by hand.",
    'features.1.title': 'Vacuum insulation',
    'features.1.desc': 'Double-wall stainless steel keeps drinks hot or cold for 12–24 hours. Florida-summer tested.',
    'features.2.title': 'Engraved on demand',
    'features.2.desc': 'Names, logos, dates, photos. Laser, screen-print or heat-transfer — we match the surface to your design.',
    'features.3.title': 'Built to last',
    'features.3.desc': 'Powder-coated, BPA-free, dishwasher-friendly. Designed to outlive every plastic bottle in your house.',
    'features.4.title': 'Ships anywhere',
    'features.4.desc': 'Boynton Beach, FL is home base — but we ship throughout the U.S. and beyond on request.',

    'audiences.eyebrow': 'Made for everyone',
    'audiences.title': 'One brand. Three companions for hydration that matters.',
    'audiences.lead': "Whether it's the kid heading to school, the parent heading to work, or the dog heading to the dog park — we have a bottle made for the moment.",
    'audiences.kids.tag': 'For kids',
    'audiences.kids.title': 'Spill-savvy. Soft-grip. Built for adventure.',
    'audiences.kids.desc': 'Tumblers and bottles sized for little hands — with handles, straws and ombre finishes kids love.',
    'audiences.adults.tag': 'For adults',
    'audiences.adults.title': 'From the gym to the conference room.',
    'audiences.adults.desc': '20, 30 and 40 oz tumblers. 24, 32 and 64 oz bottles. The cup-holder fits — your style decides.',
    'audiences.pets.tag': 'For pets',
    'audiences.pets.title': 'The dog bottle that thinks like a dog parent.',
    'audiences.pets.desc': "Flip spout for sips. Two stackable cups for kibble or treats. 12 colors — engrave the dog's name.",

    'products.eyebrow': 'The full lineup',
    'products.title': 'Twelve product families.<br>Sixty colors and counting.',
    'products.lead': 'Click any color to preview it on the bottle. Tap a product to open the full spec sheet, color range and personalization options.',
    'products.tabs.all': 'All products',
    'products.tabs.kids': 'Kids',
    'products.tabs.adults': 'Adults',
    'products.tabs.pets': 'Pets',
    'products.cta': 'View details',
    'products.colors': 'colors',

    'process.eyebrow': 'How it works',
    'process.title': "From your idea to your hand.<br>Four simple steps.",
    'process.lead': "No design fees. No minimums for personal orders. We help you nail the artwork before we ever touch the laser.",
    'process.1.title': 'Pick your bottle',
    'process.1.desc': 'Browse 12 product families and 60+ color variants. Tell us which one speaks to you.',
    'process.2.title': 'Send your design',
    'process.2.desc': 'Names, photos, logos, sketches. Email it over — we will mock it up for free.',
    'process.3.title': 'We engrave it',
    'process.3.desc': 'Laser, screen-print or heat-transfer. Crisp, permanent, exactly the way you wanted.',
    'process.4.title': 'It arrives',
    'process.4.desc': 'Local pickup in Boynton Beach, FL or fast shipping anywhere in the US.',

    'engraving.eyebrow': 'Custom engraving',
    'engraving.title': 'Whatever you want.<br>Etched in steel.',
    'engraving.lead': 'Names. Initials. Wedding dates. Team logos. Pet portraits. Inside jokes only your group chat understands. If you can sketch it, we can put it on a Kamagio. One unit or one thousand — same crisp result.',
    'engraving.b1': 'Laser engraving for crisp, permanent monograms',
    'engraving.b2': 'Full-color screen print and heat transfer for logos and artwork',
    'engraving.b3': 'Free design review on every order — we make sure it looks right before we run it',
    'engraving.b4': 'Corporate, wedding, club, school and restaurant orders welcome',
    'engraving.cta.primary': 'Start your design',
    'engraving.cta.secondary': 'Bulk pricing',

    'gallery.eyebrow': 'In the wild',
    'gallery.title': 'Carried everywhere life happens.',
    'gallery.lead': 'School runs, gym days, sunsets on the trail, lazy afternoons by the pool — these go everywhere.',

    'wholesale.eyebrow': 'Wholesale & corporate gifting',
    'wholesale.title': 'Order more. Pay less.<br>Get something nobody else has.',
    'wholesale.lead': 'Companies, sports clubs, restaurants, hotels, weddings, conferences. Tiered pricing kicks in at 25 units, and we run custom artwork on every order — no extra setup fee on bulk runs.',
    'wholesale.tier1.qty': '25+',
    'wholesale.tier1.lab': 'Starter wholesale',
    'wholesale.tier2.qty': '100+',
    'wholesale.tier2.lab': 'Volume tier',
    'wholesale.tier3.qty': '500+',
    'wholesale.tier3.lab': 'Best per-unit pricing',
    'wholesale.cta': 'Request a wholesale quote',

    'contact.eyebrow': 'Get in touch',
    'contact.title': "Tell us what you're building.<br>We'll make the bottle for it.",
    'contact.lead': 'Personal order, gift project, corporate run — write to us at info@kamagio.com or use the form. Local pickup in Boynton Beach, FL by appointment.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.studio': 'Studio',
    'contact.studio.val': 'Boynton Beach, FL · USA',
    'contact.studio.sub': 'Shipping nationwide and worldwide on request.',
    'contact.form.title': 'Start a conversation',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.message': "What are you looking to make?",
    'contact.form.placeholder': 'Quantity, product, design ideas, deadline…',
    'contact.form.cta': 'Send message',

    'footer.tagline': 'Personalized vacuum-insulated drinkware for kids, adults and pets. Designed in Boynton Beach, FL — engraved on demand.',
    'footer.shop': 'Shop',
    'footer.services': 'Services',
    'footer.contact': 'Talk to us',
    'footer.tagline2': 'Built with care · Stainless · Florida',
    'footer.rights': 'All rights reserved.',

    'sticky.text': 'Custom design? Wholesale? Quick question?',
    'sticky.cta': 'Talk to us',

    'lb.cta': 'Ask about this product',
    'lb.color': 'Color',
    'lb.available': 'Available colors',
    'lb.capacity': 'Vacuum insulated stainless steel',
  },
  cz: {
    'nav.products': 'Produkty',
    'nav.engraving': 'Gravírování',
    'nav.process': 'Jak to funguje',
    'nav.wholesale': 'Velkoodběr',
    'nav.about': 'O nás',
    'nav.cta': 'Kontaktujte nás',

    'hero.eyebrow': 'Boynton Beach, Florida',
    'hero.title': 'Hydratace,<br>která nese<br><span class="accent">tvůj příběh<span class="dot"></span></span>',
    'hero.lead': 'Prémiové nerezové láhve, termohrnky a hydratace pro mazlíčky — gravírujeme, tiskneme a personalizujeme podle vás. Jména, loga, fotky, vtipy z chatu. My vytvoříme plátno. Vy z něj uděláte své.',
    'hero.cta.primary': 'Prohlédněte si nabídku',
    'hero.cta.secondary': 'Personalizujte si svou',
    'hero.stats.variants': 'Variant produktů',
    'hero.stats.hold': 'Tepla · Chladu',
    'hero.stats.bpa': 'Bez BPA',
    'hero.badge': 'Vyrobeno pro vás · Gravírováno na zakázku',

    'marquee': 'Nerezová ocel · Vakuová izolace · Gravírování na míru · Děti · Dospělí · Mazlíčci · Vyrobeno na Floridě · Velkoodběr · ',

    'features.eyebrow': 'Proč KAMAGIO',
    'features.title': 'Vakuově těsná řemeslná práce. Florida v srdci. Personalizace od A do Z.',
    'features.lead': 'Neprodáváme láhve. Prodáváme to, čím se láhev stane, když je do ní vyryté vaše jméno, váš tým, váš mazlíček nebo vaše značka. Z potravinářské nerezové oceli, dokončené ručně.',
    'features.1.title': 'Vakuová izolace',
    'features.1.desc': 'Dvojitá nerezová stěna udrží nápoje teplé i studené 12–24 hodin. Otestováno v létě na Floridě.',
    'features.2.title': 'Gravírování na zakázku',
    'features.2.desc': 'Jména, loga, data, fotky. Laser, sítotisk nebo termopřenos — povrch sladíme s vaším návrhem.',
    'features.3.title': 'Vydrží roky',
    'features.3.desc': 'Práškový lak, bez BPA, vhodné do myčky. Vyrobené tak, aby přežily všechny plastové láhve u vás doma.',
    'features.4.title': 'Posíláme všude',
    'features.4.desc': 'Domácí základna je Boynton Beach, FL — ale doručujeme po celých USA i dál na požádání.',

    'audiences.eyebrow': 'Vyrobeno pro každého',
    'audiences.title': 'Jedna značka. Tři společníci pro hydrataci, na které záleží.',
    'audiences.lead': 'Ať už jde o dítě do školy, rodiče do práce, nebo psa do parku — pro každý okamžik máme správnou láhev.',
    'audiences.kids.tag': 'Pro děti',
    'audiences.kids.title': 'Bez rozlití. Měkký úchop. Pro dobrodružství.',
    'audiences.kids.desc': 'Termohrnky a láhve pro malé ruce — s ouškem, brčkem a ombre povrchem, který děti milují.',
    'audiences.adults.tag': 'Pro dospělé',
    'audiences.adults.title': 'Od posilovny do zasedačky.',
    'audiences.adults.desc': 'Hrnky 20, 30 a 40 oz. Láhve 24, 32 a 64 oz. Do držáku pasují — styl si vyberete sami.',
    'audiences.pets.tag': 'Pro mazlíčky',
    'audiences.pets.title': 'Psí láhev, která myslí jako pejskař.',
    'audiences.pets.desc': 'Sklopné pítko pro pití. Dvě misky pro granule a pamlsky. 12 barev — vyryjeme jméno pejska.',

    'products.eyebrow': 'Kompletní nabídka',
    'products.title': 'Dvanáct produktových řad.<br>Šedesát barev a stále rosteme.',
    'products.lead': 'Klikněte na barvu a podívejte se, jak vypadá. Klepněte na produkt pro plný popis, varianty barev a možnosti personalizace.',
    'products.tabs.all': 'Vše',
    'products.tabs.kids': 'Děti',
    'products.tabs.adults': 'Dospělí',
    'products.tabs.pets': 'Mazlíčci',
    'products.cta': 'Zobrazit detail',
    'products.colors': 'barev',

    'process.eyebrow': 'Jak to funguje',
    'process.title': 'Od nápadu k vaší ruce.<br>Čtyři jednoduché kroky.',
    'process.lead': 'Žádné poplatky za grafiku. Žádné minimální množství u osobních objednávek. Pomůžeme vám doladit návrh dřív, než pustíme laser.',
    'process.1.title': 'Vyberte si láhev',
    'process.1.desc': 'Procházejte 12 řad a 60+ barevných variant. Řekněte nám, která vás osloví.',
    'process.2.title': 'Pošlete návrh',
    'process.2.desc': 'Jména, fotky, loga, skicy. Pošlete e-mailem — připravíme vám náhled zdarma.',
    'process.3.title': 'Vygravírujeme',
    'process.3.desc': 'Laser, sítotisk nebo termopřenos. Ostré, trvalé, přesně podle vás.',
    'process.4.title': 'Doručíme',
    'process.4.desc': 'Osobní vyzvednutí v Boynton Beach, FL nebo rychlé doručení po celých USA.',

    'engraving.eyebrow': 'Gravírování na míru',
    'engraving.title': 'Cokoliv chcete.<br>Vyryté do oceli.',
    'engraving.lead': 'Jména. Iniciály. Svatební data. Týmová loga. Portréty mazlíčků. Vtipy ze skupinového chatu. Pokud to umíte načrtnout, dáme to na Kamagio. Jeden kus nebo tisíc — stejně ostrý výsledek.',
    'engraving.b1': 'Laserové gravírování pro ostré a trvalé monogramy',
    'engraving.b2': 'Plnobarevný sítotisk a termopřenos pro loga a grafiku',
    'engraving.b3': 'Náhled grafiky zdarma u každé objednávky — než spustíme výrobu',
    'engraving.b4': 'Firemní, svatební, klubové, školní i restaurační objednávky vítány',
    'engraving.cta.primary': 'Začít s návrhem',
    'engraving.cta.secondary': 'Velkoodběrné ceny',

    'gallery.eyebrow': 'V terénu',
    'gallery.title': 'Nosí se všude, kde se něco děje.',
    'gallery.lead': 'Cesty do školy, dny v posilovně, západy slunce na výšlapu, líné odpoledne u bazénu — všude s sebou.',

    'wholesale.eyebrow': 'Velkoodběr & firemní dárky',
    'wholesale.title': 'Objednejte víc. Zaplaťte míň.<br>Mějte něco, co nemá nikdo jiný.',
    'wholesale.lead': 'Firmy, sportovní kluby, restaurace, hotely, svatby, konference. Velkoodběrné ceny startují od 25 kusů a u každé objednávky tiskneme váš motiv — bez extra poplatků za přípravu.',
    'wholesale.tier1.qty': '25+',
    'wholesale.tier1.lab': 'Start velkoodběru',
    'wholesale.tier2.qty': '100+',
    'wholesale.tier2.lab': 'Větší objem',
    'wholesale.tier3.qty': '500+',
    'wholesale.tier3.lab': 'Nejlepší cena za kus',
    'wholesale.cta': 'Vyžádat velkoodběrnou nabídku',

    'contact.eyebrow': 'Kontakt',
    'contact.title': 'Řekněte nám, co chystáte.<br>Vyrobíme k tomu láhev.',
    'contact.lead': 'Osobní objednávka, dárek, firemní zakázka — napište na info@kamagio.com nebo použijte formulář. Osobní vyzvednutí v Boynton Beach, FL po domluvě.',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefon',
    'contact.studio': 'Studio',
    'contact.studio.val': 'Boynton Beach, FL · USA',
    'contact.studio.sub': 'Posíláme po celých USA i do zahraničí na požádání.',
    'contact.form.title': 'Začněme rozhovor',
    'contact.form.name': 'Jméno',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefon (volitelné)',
    'contact.form.message': 'Co byste chtěli vyrobit?',
    'contact.form.placeholder': 'Množství, produkt, nápady na design, termín…',
    'contact.form.cta': 'Odeslat zprávu',

    'footer.tagline': 'Personalizované vakuově izolované nádobí pro děti, dospělé a mazlíčky. Navrženo v Boynton Beach, FL — gravírujeme na zakázku.',
    'footer.shop': 'Obchod',
    'footer.services': 'Služby',
    'footer.contact': 'Spojte se s námi',
    'footer.tagline2': 'Vyrobeno s láskou · Nerez · Florida',
    'footer.rights': 'Všechna práva vyhrazena.',

    'sticky.text': 'Vlastní design? Velkoodběr? Krátký dotaz?',
    'sticky.cta': 'Napište nám',

    'lb.cta': 'Zeptat se na tento produkt',
    'lb.color': 'Barva',
    'lb.available': 'Dostupné barvy',
    'lb.capacity': 'Vakuově izolovaná nerezová ocel',
  }
};

let currentLang = localStorage.getItem('kam-lang') || 'en';

function applyI18n(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = i18n[lang][key];
    if (val !== undefined) el.placeholder = val;
  });
  document.querySelectorAll('.lang-toggle .opt').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
  localStorage.setItem('kam-lang', lang);
  // Re-render dynamic content
  if (typeof renderProducts === 'function') {
    renderProducts(currentCat);
  }
}

/* ---------- Color palette ---------- */
const colorMeta = {
  BLU:  { hex:'#62b6cb', en:'Blue',           cz:'Modrá' },
  PNK:  { hex:'#f4a8c0', en:'Pink',           cz:'Růžová' },
  BLK:  { hex:'#202020', en:'Black',          cz:'Černá' },
  NVY:  { hex:'#1d2b4a', en:'Navy',           cz:'Námořnická' },
  GRY:  { hex:'#8a8d8e', en:'Gray',           cz:'Šedá' },
  GRN:  { hex:'#4f8b3b', en:'Green',          cz:'Zelená' },
  RED:  { hex:'#e3573f', en:'Red',            cz:'Červená' },
  WHT:  { hex:'#f3f1ea', en:'White',          cz:'Bílá' },
  YLW:  { hex:'#f3c33b', en:'Yellow',         cz:'Žlutá' },
  PRP:  { hex:'#7c5fb0', en:'Purple',         cz:'Fialová' },
  CYN:  { hex:'#7fc3d8', en:'Cyan',           cz:'Tyrkysová' },
  DPK:  { hex:'#cf7090', en:'Dark Pink',      cz:'Tmavě růžová' },
  LPK:  { hex:'#f5cfdb', en:'Light Pink',     cz:'Světle růžová' },
  BPK:  { hex:'#a26079', en:'Berry Pink',     cz:'Bobulová' },
  DGN:  { hex:'#244a2c', en:'Dark Green',     cz:'Tmavě zelená' },
  DGR:  { hex:'#3b3f3b', en:'Dark Gray',      cz:'Tmavě šedá' },
  DGRN: { hex:'#26572d', en:'Forest Green',   cz:'Lesní zelená' },
  LBG:  { hex:'#d6c9a8', en:'Light Beige',    cz:'Béžová' },
  LTB:  { hex:'#bfd9e8', en:'Light Blue',     cz:'Světle modrá' },
  LTG:  { hex:'#bbd6a3', en:'Light Green',    cz:'Světle zelená' },
  LPRP: { hex:'#cdb6dd', en:'Light Purple',   cz:'Světle fialová' },
  BRW:  { hex:'#6e4c33', en:'Brown',          cz:'Hnědá' },
  MCL:  { hex:'#c8a479', en:'Mocha',          cz:'Mocha' },
  APGR: { hex:'#a3d040', en:'Apple Green',    cz:'Jablečně zelená' },
  BWH:  { hex:'linear-gradient(135deg,#222,#cfd2d3)', en:'Black/White Ombre', cz:'Černo-bílé ombre' },
  PWH:  { hex:'linear-gradient(135deg,#fbd8c1,#f6efe6)', en:'Peach Ombre', cz:'Broskvové ombre' }
};
const colorName = (code) => (colorMeta[code]?.[currentLang] || code);
const colorHex  = (code) => (colorMeta[code]?.hex || '#999');

/* ---------- Product catalog ---------- */
const products = [
  {
    id: 'kid-bottle-12', cat: 'kids',
    name: { en: 'Kids Bottle 12 oz', cz: 'Dětská láhev 12 oz' },
    tag:  { en: 'Kids', cz: 'Děti' },
    sub:  { en: '350 ml · Straw + Handle', cz: '350 ml · Brčko + ouško' },
    capacity: '12 oz / 350 ml',
    short: {
      en: 'Lightweight stainless steel kids bottle with straw and carry handle. Built for school days, soccer practice and adventure trips.',
      cz: 'Lehká dětská nerezová láhev s brčkem a ouškem. Stvořená pro školní dny, tréninky i výlety.'
    },
    features: {
      en: [
        'Double-wall vacuum insulation — 12–24 hrs hot or cold',
        'BPA-free food-grade stainless steel',
        'Spill-friendly straw lid + secure carry handle',
        'Powder-coated finish, ready for personalization'
      ],
      cz: [
        'Dvojitá vakuová stěna — 12–24 h teplo nebo chlad',
        'Potravinářská nerezová ocel, bez BPA',
        'Brčkové víčko proti rozlití + bezpečné ouško',
        'Práškový lak, připraveno k personalizaci'
      ]
    },
    colors: [
      { code:'BLU', img:'products/Products/KAM-BT-12-BLU/KAM-BT-12-BLU-1.png' },
      { code:'PNK', img:'products/Products/KAM-BT-12-PNK/KAM-BT-12-PNK-1.png' }
    ]
  },
  {
    id: 'kid-bottle-18', cat: 'kids',
    name: { en: 'Kids Bottle 18 oz', cz: 'Dětská láhev 18 oz' },
    tag:  { en: 'Kids', cz: 'Děti' },
    sub:  { en: '500 ml · Straw + Handle', cz: '500 ml · Brčko + ouško' },
    capacity: '18 oz / 500 ml',
    short: {
      en: 'A bigger pour for thirsty kids — same lightweight, leak-resistant design as our 12 oz, with a full half-liter inside.',
      cz: 'Větší objem pro velké hltouny — stejně lehký a těsný design jako 12 oz, ale s celým půllitrem uvnitř.'
    },
    features: {
      en: [
        'Keeps drinks hot or cold for up to 24 hours',
        'Stainless steel, BPA-free, dishwasher friendly',
        'Easy-grip handle and flip straw for school and sport',
        'Powder-coated for engraving or full-color print'
      ],
      cz: [
        'Udrží teplo i chlad až 24 hodin',
        'Nerezová ocel, bez BPA, do myčky',
        'Pohodlné ouško a sklopné brčko do školy i na sport',
        'Práškový lak pro gravírování i plnobarevný tisk'
      ]
    },
    colors: [
      { code:'BLU', img:'products/Products/KAM-BT-18-BLU/KAM-BT-18-BLU-1.png' },
      { code:'PNK', img:'products/Products/KAM-BT-18-PNK/KAM-BT-18-PNK-2.png' }
    ]
  },
  {
    id: 'kid-tumbler-14', cat: 'kids',
    name: { en: 'Kids Tumbler 14 oz', cz: 'Dětský tumbler 14 oz' },
    tag:  { en: 'Toddler', cz: 'Pro batolata' },
    sub:  { en: '420 ml · Straw + Handle', cz: '420 ml · Brčko + ouško' },
    capacity: '14 oz / 420 ml',
    short: {
      en: 'Toddler-sized stainless steel tumbler with little-hands handle and bite-soft straw. Ombre finishes that look as fun as they feel.',
      cz: 'Tumbler velikosti pro batolata, s ouškem pro malé ruce a měkkým brčkem. Ombre povrchy, které vypadají stejně hravě, jak se chytají.'
    },
    features: {
      en: [
        'Vacuum insulated — drinks stay cold all day',
        '304 stainless steel, BPA-free, kid-safe',
        'Six playful color and ombre options',
        'Great for daycare, road trips and snack time'
      ],
      cz: [
        'Vakuová izolace — nápoje studené celý den',
        '304 nerezová ocel, bez BPA, bezpečné pro děti',
        'Šest hravých barev a ombre variant',
        'Skvělé do školky, na výlet i na svačinu'
      ]
    },
    colors: [
      { code:'APGR', img:'products/Products/KAM-TUM-14-APGR/KAM-TUM-14-APGR-1.png' },
      { code:'BLU',  img:'products/Products/KAM-TUM-14-BLU/KAM-TUM-14-BLU-1.png' },
      { code:'BWH',  img:'products/Products/KAM-TUM-14-BWH/KAM-TUM-14-BWH-1.png' },
      { code:'DGRN', img:'products/Products/KAM-TUM-14-DGRN/KAM-TUM-14-DGRN-1.png' },
      { code:'LPRP', img:'products/Products/KAM-TUM-14-LPRP/KAM-TUM-14-LPRP-1.png' },
      { code:'PWH',  img:'products/Products/KAM-TUM-14-PWH/KAM-TUM-14-PWH-1.png' }
    ]
  },
  {
    id: 'kid-tumbler-17', cat: 'kids',
    name: { en: 'Kids Tumbler 17 oz', cz: 'Dětský tumbler 17 oz' },
    tag:  { en: 'Kids', cz: 'Děti' },
    sub:  { en: '500 ml · Straw + Lid + Handle', cz: '500 ml · Brčko + víčko + ouško' },
    capacity: '17 oz / 500 ml',
    short: {
      en: "Lid, handle and straw — the spill-resistant tumbler kids love and parents trust. Powder-coated for custom names and logos.",
      cz: 'Víčko, ouško i brčko — tumbler proti rozlití, který děti milují a rodiče si na něj zvyknou. Lak je připravený pro jména a loga.'
    },
    features: {
      en: [
        'Double-wall vacuum, 6–12 hrs temperature hold',
        '304 stainless steel, BPA-free',
        'Spill-aware lid with replaceable straw',
        'Customizable color and engraving'
      ],
      cz: [
        'Dvojitá vakuová stěna, 6–12 h teplota',
        '304 nerezová ocel, bez BPA',
        'Víčko proti rozlití s vyměnitelným brčkem',
        'Volitelná barva i gravírování'
      ]
    },
    colors: [
      { code:'BLU', img:'products/Products/KAM-TUM-17-BLU/KAM-TUM-17-BLU-1.png' },
      { code:'PNK', img:'products/Products/KAM-TUM-17-PNK/KAM-TUM-17-PNK-1.png' },
      { code:'PRP', img:'products/Products/KAM-TUM-17-PRP/KAM-TUM-17-PRP-1.png' },
      { code:'YLW', img:'products/Products/KAM-TUM-17-YLW/KAM-TUM-17-YLW-1.png' }
    ]
  },
  {
    id: 'adult-bottle-24', cat: 'adults',
    name: { en: 'Adult Bottle 24 oz', cz: 'Láhev 24 oz' },
    tag:  { en: 'Sport', cz: 'Sport' },
    sub:  { en: '700 ml · Sport & Travel', cz: '700 ml · Sport a cesty' },
    capacity: '24 oz / 700 ml',
    short: {
      en: 'A clean, modern silhouette built for the gym, the trail and the daily commute. Multiple lid options and finishes.',
      cz: 'Čistá moderní silueta vyrobená pro posilovnu, výšlap i denní dojíždění. Více variant víček i povrchů.'
    },
    features: {
      en: [
        'Food-grade stainless steel, BPA-free',
        'Vacuum insulation — 12–24 hrs hot or cold',
        'Two lid styles per color (sport + classic)',
        'Compatible with screen print, laser & heat-transfer'
      ],
      cz: [
        'Potravinářská nerezová ocel, bez BPA',
        'Vakuová izolace — 12–24 h teplo nebo chlad',
        'Dvě varianty víčka v každé barvě (sport + klasik)',
        'Kompatibilní se sítotiskem, laserem i termopřenosem'
      ]
    },
    colors: [
      { code:'DPK', img:'products/Products/KAM-BT-24-DPK-1/KAM-BT-24-DPK-1.png' },
      { code:'GRY', img:'products/Products/KAM-BT-24-GRY-1/KAM-BT-24-GRY-1-1.png' },
      { code:'LBG', img:'products/Products/KAM-BT-24-LBG-1/KAM-BT-24-LBG-1-1.png' }
    ]
  },
  {
    id: 'adult-bottle-32', cat: 'adults',
    name: { en: 'Adult Bottle 32 oz', cz: 'Láhev 32 oz' },
    tag:  { en: 'Sport', cz: 'Sport' },
    sub:  { en: '950 ml · The All-Day', cz: '950 ml · Celý den' },
    capacity: '32 oz / 950 ml',
    short: {
      en: 'Our most popular adult size. Powder-coated finish, vacuum core, and a shape that fits the cup holder.',
      cz: 'Naše nejpopulárnější dospělá velikost. Práškový lak, vakuové jádro a tvar do držáku.'
    },
    features: {
      en: [
        'Holds a full liter of hydration',
        'Hot or cold up to 24 hours',
        'Three swappable lid styles',
        'Ideal blank for corporate gifting'
      ],
      cz: [
        'Pojme celý litr',
        'Teplo i chlad až 24 hodin',
        'Tři vyměnitelné varianty víček',
        'Ideální plátno pro firemní dárky'
      ]
    },
    colors: [
      { code:'BPK', img:'products/Products/KAM-BT-32-BPK-1/KAM-BT-32-BPK-1-1.png' },
      { code:'GRN', img:'products/Products/KAM-BT-32-GRN-1/KAM-BT-32-GRN-1-1.png' },
      { code:'NVY', img:'products/Products/KAM-BT-32-NVY-1/KAM-BT-32-NVY-1-1.png' }
    ]
  },
  {
    id: 'adult-bottle-64', cat: 'adults',
    name: { en: 'Adult Bottle 64 oz', cz: 'Láhev 64 oz' },
    tag:  { en: 'Sport', cz: 'Sport' },
    sub:  { en: '1.9 L · The Big One', cz: '1,9 l · Ta velká' },
    capacity: '64 oz / 1.9 L',
    short: {
      en: 'A near-half-gallon stainless steel beast. For long days outdoors, gym sets, and crews that drink a lot of water.',
      cz: 'Téměř dvoulitrová nerezová bestie. Pro dlouhé dny venku, série v posilovně a party, které pijí hodně vody.'
    },
    features: {
      en: [
        'Massive 1.9 L capacity',
        'Double-wall vacuum insulation',
        'Carry-handle lid options',
        'Built for engraving — premium gift size'
      ],
      cz: [
        'Obří objem 1,9 l',
        'Dvojitá vakuová izolace',
        'Varianty víčka s ouškem',
        'Stvořeno pro gravírování — prémiová dárková velikost'
      ]
    },
    colors: [
      { code:'DGN', img:'products/Products/KAM-BT-64-DGN-1/KAM-BT-64-DGN-1-1.png' },
      { code:'DPK', img:'products/Products/KAM-BT-64-DPK-1/KAM-BT-64-DPK-1-1.png' },
      { code:'MCL', img:'products/Products/KAM-BT-64-MCL-1/KAM-BT-64-MCL-1-1.png' }
    ]
  },
  {
    id: 'tumbler-20', cat: 'adults',
    name: { en: 'Tumbler 20 oz', cz: 'Tumbler 20 oz' },
    tag:  { en: 'Travel Mug', cz: 'Cestovní hrnek' },
    sub:  { en: '590 ml · Sliding Lid', cz: '590 ml · Posuvné víčko' },
    capacity: '20 oz / 590 ml',
    short: {
      en: 'Slim travel mug with a sliding sip-lid. Fits every cup holder, lives on every desk.',
      cz: 'Štíhlý cestovní hrnek s posuvným víčkem. Sedne do každého držáku, vejde se na každý stůl.'
    },
    features: {
      en: [
        'Vacuum insulated, 12–24 hrs hot or cold',
        'Sliding spill-resist lid',
        'Slim, ergonomic shape',
        'Smooth canvas for laser engraving'
      ],
      cz: [
        'Vakuová izolace, 12–24 h teplo nebo chlad',
        'Posuvné víčko proti rozlití',
        'Štíhlý ergonomický tvar',
        'Hladké plátno pro laser'
      ]
    },
    colors: [
      { code:'GRY', img:'products/Products/KAM-TUM-20-GRY/KAM-TUM-20-GRY-1.png' },
      { code:'PNK', img:'products/Products/KAM-TUM-20-PNK/KAM-TUM-20-PNK-1.png' },
      { code:'PRP', img:'products/Products/KAM-TUM-20-PRP/KAM-TUM-20-PRP-1.png' }
    ]
  },
  {
    id: 'tumbler-30', cat: 'adults',
    name: { en: 'Tumbler 30 oz', cz: 'Tumbler 30 oz' },
    tag:  { en: 'Travel Mug', cz: 'Cestovní hrnek' },
    sub:  { en: '890 ml · Sliding Lid', cz: '890 ml · Posuvné víčko' },
    capacity: '30 oz / 890 ml',
    short: {
      en: 'A bigger pour with the same sleek profile. Coffee, smoothies, iced tea — all day long.',
      cz: 'Větší objem ve stejně elegantní siluetě. Káva, smoothie, ledový čaj — celý den.'
    },
    features: {
      en: [
        'Larger capacity for office and travel',
        'Vacuum insulation up to 24 hrs',
        'Sliding lid prevents splashes',
        'Three soft, photo-ready colors'
      ],
      cz: [
        'Větší objem do kanceláře i na cesty',
        'Vakuová izolace až 24 hodin',
        'Posuvné víčko proti šplíchání',
        'Tři jemné, foto-připravené barvy'
      ]
    },
    colors: [
      { code:'CYN', img:'products/Products/KAM-TUM-30-CYN/KAM-TUM-30-CYN-1.png' },
      { code:'DGR', img:'products/Products/KAM-TUM-30-DGR/KAM-TUM-30-DGR-1.png' },
      { code:'WHT', img:'products/Products/KAM-TUM-30-WHT/KAM-TUM-30-WHT-1.png' }
    ]
  },
  {
    id: 'tumbler-40', cat: 'adults',
    name: { en: 'Tumbler 40 oz', cz: 'Tumbler 40 oz' },
    tag:  { en: 'XL', cz: 'XL' },
    sub:  { en: '1180 ml · Handle + Straw + Lid', cz: '1180 ml · Ouško + brčko + víčko' },
    capacity: '40 oz / 1180 ml',
    short: {
      en: 'The XL tumbler that started a trend — handle, straw, sliding lid. For all-day hydration and big-energy mornings.',
      cz: 'XL tumbler, který nastartoval trend — ouško, brčko, posuvné víčko. Pro celodenní hydrataci a energická rána.'
    },
    features: {
      en: [
        'Massive 40 oz capacity, fits cup holders',
        'Comfort handle + reusable straw',
        'Sliding spill-resist lid',
        'Premium powder-coat finish'
      ],
      cz: [
        'Obří 40 oz, sedí do držáků',
        'Pohodlné ouško + brčko k opakovanému použití',
        'Posuvné víčko proti rozlití',
        'Prémiový práškový lak'
      ]
    },
    colors: [
      { code:'GRN', img:'products/Products/KAM-TUM-40-GRN/KAM-TUM-40-GRN-1.png' },
      { code:'GRY', img:'products/Products/KAM-TUM-40-GRY/KAM-TUM-40-GRY-1.png' },
      { code:'PNK', img:'products/Products/KAM-TUM-40-PNK/KAM-TUM-40-PNK-1.png' },
      { code:'WHT', img:'products/Products/KAM-TUM-40-WHT/KAM-TUM-40-WHT-1.png' }
    ]
  },
  {
    id: 'can-cooler-14', cat: 'adults',
    name: { en: 'Can Cooler 14 oz', cz: 'Can Cooler 14 oz' },
    tag:  { en: 'Cooler', cz: 'Chladič' },
    sub:  { en: '414 ml · Cans & Bottles', cz: '414 ml · Plechovky a lahve' },
    capacity: '14 oz / 414 ml',
    short: {
      en: 'Drop a can in. Twist the lid on. Stay icy for hours. Beach days, boat days, backyard days.',
      cz: 'Plechovku dovnitř. Víčko nahoru. Hodiny ledové. Plážové dny, lodě, zahrada.'
    },
    features: {
      en: [
        'Fits 12 oz cans, slim cans and most bottles',
        'Vacuum insulated stainless steel',
        'Lid keeps drinks dust-free',
        'Cup-holder friendly'
      ],
      cz: [
        'Sedí na 12oz plechovky, slim plechovky i většinu lahví',
        'Vakuově izolovaná nerezová ocel',
        'Víčko chrání před nečistotami',
        'Vejde se do držáku nápojů'
      ]
    },
    colors: [
      { code:'BLK', img:'products/Products/KAM-CC-14-BLK/KAM-CC-14-BLK-2.png' },
      { code:'CYN', img:'products/Products/KAM-CC-14-CYN/KAM-CC-14-CYN-1.png' },
      { code:'NVY', img:'products/Products/KAM-CC-14-NVY/3c41d302-81ed-40f5-9105-965f414ebed1.jpg' },
      { code:'PNK', img:'products/Products/KAM-CC-14-PNK/KAM-CC-14-PNK-1.png' }
    ]
  },
  {
    id: 'dog-bottle-32', cat: 'pets',
    name: { en: 'Dog Bottle 32 oz', cz: 'Psí láhev 32 oz' },
    tag:  { en: 'Pets', cz: 'Mazlíčci' },
    sub:  { en: '950 ml · Flip Spout + Snack Cups', cz: '950 ml · Sklopné pítko + misky' },
    capacity: '32 oz / 950 ml',
    short: {
      en: "Built for the dog parent who actually goes places. Flip spout for sips, two stackable bottom cups for kibble or treats.",
      cz: 'Stvořeno pro pejskaře, který někam vyráží. Sklopné pítko pro pití, dvě dolní misky na granule nebo pamlsky.'
    },
    features: {
      en: [
        'Premium stainless steel, BPA-free',
        'Two detachable snack/kibble compartments',
        'Leak-proof flip spout for clean sips',
        "12 powder-coated colors — engrave the dog's name"
      ],
      cz: [
        'Prémiová nerezová ocel, bez BPA',
        'Dvě odnímatelné misky na granule a pamlsky',
        'Neprotékající sklopné pítko',
        '12 barev s práškovým lakem — vyryjeme jméno pejska'
      ]
    },
    colors: [
      { code:'BLK', img:'products/Products/KAM-DG-32-BLK/KAM-DG-32-BLK-1.png' },
      { code:'BRW', img:'products/Products/KAM-DG-32-BRW/KAM-DG-32-BRW-1.png' },
      { code:'DGR', img:'products/Products/KAM-DG-32-DGR/KAM-DG-32-DGR-1.png' },
      { code:'DPK', img:'products/Products/KAM-DG-32-DPK/KAM-DG-32-DPK-1.png' },
      { code:'GRY', img:'products/Products/KAM-DG-32-GRY/KAM-DG-32-GRY-1.png' },
      { code:'LPK', img:'products/Products/KAM-DG-32-LPK/KAM-DG-32-LPK-1.png' },
      { code:'LTB', img:'products/Products/KAM-DG-32-LTB/KAM-DG-32-LTB-1.png' },
      { code:'LTG', img:'products/Products/KAM-DG-32-LTG/KAM-DG-32-LTG-1.png' },
      { code:'NVY', img:'products/Products/KAM-DG-32-NVY/KAM-DG-32-NVY-1.png' },
      { code:'RED', img:'products/Products/KAM-DG-32-RED/1091fbc6-6c7a-499b-8242-69b4da908266.jpg' },
      { code:'WHT', img:'products/Products/KAM-DG-32-WHT/KAM-DG-32-WHT-1.png' },
      { code:'YLW', img:'products/Products/KAM-DG-32-YLW/KAM-DG-32-YLW-1.png' }
    ]
  }
];

/* ---------- Render product grid ---------- */
let currentCat = 'all';
const grid = document.querySelector('.product-grid');

function renderProducts(filter) {
  currentCat = filter || 'all';
  if (!grid) return;
  grid.innerHTML = '';
  products
    .filter(p => filter === 'all' || p.cat === filter)
    .forEach(p => {
      const el = document.createElement('article');
      el.className = 'product';
      el.dataset.id = p.id;
      const initial = p.colors[0];
      const swatchesHtml = p.colors.map((c, i) => {
        const bg = colorHex(c.code);
        const isGradient = bg.startsWith('linear-gradient');
        const style = isGradient ? `background:${bg}` : `background:${bg}`;
        return `<button class="sw ${i===0?'active':''}" data-img="${encodeURI(c.img)}" data-color="${c.code}" data-name="${colorName(c.code)}" style="${style}" title="${colorName(c.code)}" type="button" aria-label="${colorName(c.code)}"></button>`;
      }).join('');
      el.innerHTML = `
        <div class="img-wrap">
          <span class="badge">${p.tag[currentLang]}</span>
          <img src="${encodeURI(initial.img)}" alt="${p.name[currentLang]}" loading="lazy">
          <div class="color-name" aria-live="polite">${colorName(initial.code)}</div>
        </div>
        <div class="body">
          <div class="name">${p.name[currentLang]}</div>
          <div class="meta">${p.sub[currentLang]}</div>
          <div class="swatches" role="group" aria-label="${i18n[currentLang]['lb.color']}">${swatchesHtml}</div>
          <div class="card-cta">
            <span class="count">${p.colors.length} ${i18n[currentLang]['products.colors']}</span>
            <span class="link">${i18n[currentLang]['products.cta']} <span class="arrow">→</span></span>
          </div>
        </div>`;
      // Color swatch interactions
      const imgEl = el.querySelector('.img-wrap img');
      const nameEl = el.querySelector('.color-name');
      const swatches = el.querySelectorAll('.sw');
      swatches.forEach(sw => {
        const swap = (e) => {
          e.stopPropagation();
          const newSrc = sw.dataset.img;
          if (imgEl.src.endsWith(newSrc)) return;
          imgEl.classList.add('swap');
          setTimeout(() => {
            imgEl.src = newSrc;
            imgEl.classList.remove('swap');
          }, 180);
          nameEl.textContent = sw.dataset.name;
          swatches.forEach(s => s.classList.remove('active'));
          sw.classList.add('active');
        };
        sw.addEventListener('mouseenter', swap);
        sw.addEventListener('focus', swap);
        sw.addEventListener('click', swap);
      });
      el.addEventListener('click', () => {
        const activeColor = el.querySelector('.sw.active')?.dataset.color || p.colors[0].code;
        openLightbox(p, activeColor);
      });
      grid.appendChild(el);
    });
  grid.classList.remove('in');
  void grid.offsetWidth;
  grid.classList.add('in');
}

/* ---------- Lightbox ---------- */
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('.left img');
const lbBody = lb.querySelector('.right');
let currentLBProduct = null;

function openLightbox(p, activeCode) {
  currentLBProduct = p;
  const startColor = p.colors.find(c => c.code === activeCode) || p.colors[0];
  lbImg.src = encodeURI(startColor.img);
  lbImg.alt = p.name[currentLang];

  const colorsHtml = p.colors.map(c => {
    const bg = colorHex(c.code);
    const active = c.code === startColor.code ? 'active' : '';
    return `<button class="lb-sw ${active}" data-color="${c.code}" data-img="${encodeURI(c.img)}" data-name="${colorName(c.code)}" style="background:${bg}" title="${colorName(c.code)}" type="button" aria-label="${colorName(c.code)}"></button>`;
  }).join('');

  const featuresHtml = p.features[currentLang].map(f => `<li>${f}</li>`).join('');

  lbBody.innerHTML = `
    <span class="eyebrow">${p.tag[currentLang]}</span>
    <h3>${p.name[currentLang]}</h3>
    <div class="lb-meta">${p.capacity} · ${i18n[currentLang]['lb.capacity']}</div>
    <p>${p.short[currentLang]}</p>

    <div class="lb-color-row">
      <div class="lb-color-label">
        <span class="lab">${i18n[currentLang]['lb.color']}:</span>
        <span class="val" id="lbColorName">${colorName(startColor.code)}</span>
      </div>
      <div class="lb-swatches">${colorsHtml}</div>
    </div>

    <ul class="lb-features">${featuresHtml}</ul>

    <a href="#contact" class="btn btn-primary lb-cta">${i18n[currentLang]['lb.cta']} <span class="arrow">→</span></a>`;

  // Color picker in lightbox
  const lbColorName = lbBody.querySelector('#lbColorName');
  lbBody.querySelectorAll('.lb-sw').forEach(sw => {
    sw.addEventListener('click', () => {
      const newImg = sw.dataset.img;
      lbImg.classList.add('swap');
      setTimeout(() => {
        lbImg.src = newImg;
        lbImg.classList.remove('swap');
      }, 180);
      lbColorName.textContent = sw.dataset.name;
      lbBody.querySelectorAll('.lb-sw').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
    });
  });
  lbBody.querySelectorAll('a[href="#contact"]').forEach(a =>
    a.addEventListener('click', () => closeLightbox())
  );

  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  currentLBProduct = null;
}
lb.querySelector('.close').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ---------- Sticky nav ---------- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  }));
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

/* ---------- Tabs ---------- */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts(tab.dataset.cat);
  });
});

/* ---------- Hero parallax ---------- */
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroVisual.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ---------- Hero spotlight cursor ---------- */
const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  });
}

/* ---------- Stats counter ---------- */
const counters = document.querySelectorAll('.num[data-target]');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target < 10 ? (target * eased).toFixed(1) : Math.round(target * eased);
      el.textContent = v + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(c => counterIO.observe(c));

/* ---------- Year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Contact form ---------- */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Inquiry from ${data.get('name') || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Phone: ${data.get('phone') || ''}\n\n` +
      `${data.get('message') || ''}`
    );
    window.location.href = `mailto:info@kamagio.com?subject=${subject}&body=${body}`;
  });
}

/* ---------- Sticky bottom CTA ---------- */
const sticky = document.querySelector('.sticky-cta');
if (sticky) {
  const heroH = window.innerHeight * 0.7;
  window.addEventListener('scroll', () => {
    sticky.classList.toggle('visible', window.scrollY > heroH);
  }, { passive: true });
  const dismiss = sticky.querySelector('.dismiss');
  if (dismiss) dismiss.addEventListener('click', () => sticky.classList.add('hidden'));
}

/* ---------- Language toggle ---------- */
document.querySelectorAll('.lang-toggle .opt').forEach(opt => {
  opt.addEventListener('click', () => applyI18n(opt.dataset.lang));
});

/* ---------- Init ---------- */
applyI18n(currentLang);
renderProducts('all');
