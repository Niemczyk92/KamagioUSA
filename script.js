/* ===== KAMAGIO — site interactions ===== */

// ----- Sticky nav -----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ----- Mobile menu -----
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ----- Reveal on scroll -----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

// ----- Color swatch palette -----
const colorMap = {
  BLU:  '#62b6cb', PNK:  '#f4a8c0', BLK:  '#202020', NVY:  '#1d2b4a',
  GRY:  '#8a8d8e', GRN:  '#4f8b3b', RED:  '#e3573f', WHT:  '#f3f1ea',
  YLW:  '#f3c33b', PRP:  '#7c5fb0', CYN:  '#7fc3d8',
  DPK:  '#cf7090', LPK:  '#f5cfdb', BPK:  '#a26079',
  DGN:  '#244a2c', DGR:  '#3b3f3b', DGRN: '#26572d',
  LBG:  '#d6c9a8', LTB:  '#bfd9e8', LTG:  '#bbd6a3', LPRP: '#cdb6dd',
  BRW:  '#6e4c33', MCL:  '#c8a479',
  APGR: '#a3d040', BWH:  '#cfd2d3', PWH:  '#fbd8c1'
};
const colorName = {
  BLU:'Blue', PNK:'Pink', BLK:'Black', NVY:'Navy', GRY:'Gray', GRN:'Green',
  RED:'Red', WHT:'White', YLW:'Yellow', PRP:'Purple', CYN:'Cyan',
  DPK:'Dark Pink', LPK:'Light Pink', BPK:'Berry Pink',
  DGN:'Dark Green', DGR:'Dark Gray', DGRN:'Dark Green',
  LBG:'Light Beige', LTB:'Light Blue', LTG:'Light Green', LPRP:'Light Purple',
  BRW:'Brown', MCL:'Mocha',
  APGR:'Apple Green', BWH:'Black/White Ombre', PWH:'Peach/White Ombre'
};

// ----- Product catalog -----
const products = [
  {
    id: 'kid-bottle-12',
    cat: 'kids',
    name: 'Kids Bottle 12 oz',
    tag: 'Kids',
    sub: '350 ml · Straw + Handle',
    img: 'products/Products/KAM-BT-12-BLU/KAM-BT-12-BLU-1.png',
    colors: ['BLU','PNK'],
    short: 'Lightweight stainless steel kids bottle with straw and carry handle. Built for school days, soccer practice and adventure trips.',
    features: [
      'Double-wall vacuum insulation — 12–24 hrs hot or cold',
      'BPA-free food-grade stainless steel',
      'Spill-friendly straw lid + secure carry handle',
      'Powder-coated finish, ready for personalization'
    ],
    capacity: '12 oz / 350 ml'
  },
  {
    id: 'kid-bottle-18',
    cat: 'kids',
    name: 'Kids Bottle 18 oz',
    tag: 'Kids',
    sub: '500 ml · Straw + Handle',
    img: 'products/Products/KAM-BT-18-BLU/KAM-BT-18-BLU-1.png',
    colors: ['BLU','PNK'],
    short: 'A bigger pour for thirsty kids — same lightweight, leak-resistant design as our 12 oz, with a full half-liter inside.',
    features: [
      'Keeps drinks hot or cold for up to 24 hours',
      'Stainless steel, BPA-free, dishwasher friendly',
      'Easy-grip handle and flip straw for school and sport',
      'Powder-coated for engraving or full-color print'
    ],
    capacity: '18 oz / 500 ml'
  },
  {
    id: 'kid-tumbler-14',
    cat: 'kids',
    name: 'Kids Tumbler 14 oz',
    tag: 'Toddler',
    sub: '420 ml · Straw + Handle',
    img: 'products/Products/KAM-TUM-14-APGR/KAM-TUM-14-APGR-1.png',
    colors: ['APGR','BLU','BWH','DGRN','LPRP','PWH'],
    short: 'Toddler-sized stainless steel tumbler with little-hands handle and bite-soft straw. Ombre finishes that look as fun as they feel.',
    features: [
      'Vacuum insulated — drinks stay cold all day',
      '304 stainless steel, BPA-free, kid-safe',
      'Six playful color and ombre options',
      'Great for daycare, road trips and snack time'
    ],
    capacity: '14 oz / 420 ml'
  },
  {
    id: 'kid-tumbler-17',
    cat: 'kids',
    name: 'Kids Tumbler 17 oz',
    tag: 'Kids',
    sub: '500 ml · Straw + Lid + Handle',
    img: 'products/Products/KAM-TUM-17-BLU/KAM-TUM-17-BLU-1.png',
    colors: ['BLU','PNK','PRP','YLW'],
    short: 'Lid, handle and straw — the spill-resistant tumbler kids love and parents trust. Powder-coated for custom names and logos.',
    features: [
      'Double-wall vacuum, 6–12 hrs temperature hold',
      '304 stainless steel, BPA-free',
      'Spill-aware lid with replaceable straw',
      'Customizable color and engraving'
    ],
    capacity: '17 oz / 500 ml'
  },
  {
    id: 'adult-bottle-24',
    cat: 'adults',
    name: 'Adult Bottle 24 oz',
    tag: 'Sport',
    sub: '700 ml · Sport & Travel',
    img: 'products/Products/KAM-BT-24-LBG-1/KAM-BT-24-LBG-1-1.png',
    colors: ['DPK','GRY','LBG'],
    short: 'A clean, modern silhouette built for the gym, the trail and the daily commute. Multiple lid options and finishes.',
    features: [
      'Food-grade stainless steel, BPA-free',
      'Vacuum insulation — 12–24 hrs hot or cold',
      'Two lid styles per color (sport + classic)',
      'Compatible with screen print, laser & heat-transfer'
    ],
    capacity: '24 oz / 700 ml'
  },
  {
    id: 'adult-bottle-32',
    cat: 'adults',
    name: 'Adult Bottle 32 oz',
    tag: 'Sport',
    sub: '950 ml · The All-Day',
    img: 'products/Products/KAM-BT-32-GRN-1/KAM-BT-32-GRN-1-1.png',
    colors: ['BPK','GRN','NVY'],
    short: 'Our most popular adult size. Powder-coated finish, vacuum core, and a shape that fits the cup holder.',
    features: [
      'Holds a full liter of hydration',
      'Hot or cold up to 24 hours',
      'Three swappable lid styles',
      'Ideal blank for corporate gifting'
    ],
    capacity: '32 oz / 950 ml'
  },
  {
    id: 'adult-bottle-64',
    cat: 'adults',
    name: 'Adult Bottle 64 oz',
    tag: 'Sport',
    sub: '1.9 L · The Big One',
    img: 'products/Products/KAM-BT-64-DGN-1/KAM-BT-64-DGN-1-1.png',
    colors: ['DGN','DPK','MCL'],
    short: 'A near-half-gallon stainless steel beast. For long days outdoors, gym sets, and crews that drink a lot of water.',
    features: [
      'Massive 1.9 L capacity',
      'Double-wall vacuum insulation',
      'Carry-handle lid options',
      'Built for engraving — premium gift size'
    ],
    capacity: '64 oz / 1.9 L'
  },
  {
    id: 'tumbler-20',
    cat: 'adults',
    name: 'Tumbler 20 oz',
    tag: 'Travel Mug',
    sub: '590 ml · Sliding Lid',
    img: 'products/Products/KAM-TUM-20-PRP/KAM-TUM-20-PRP-1.png',
    colors: ['GRY','PNK','PRP'],
    short: 'Slim travel mug with a sliding sip-lid. Fits every cup holder, lives on every desk.',
    features: [
      'Vacuum insulated, 12–24 hrs hot or cold',
      'Sliding spill-resist lid',
      'Slim, ergonomic shape',
      'Smooth canvas for laser engraving'
    ],
    capacity: '20 oz / 590 ml'
  },
  {
    id: 'tumbler-30',
    cat: 'adults',
    name: 'Tumbler 30 oz',
    tag: 'Travel Mug',
    sub: '890 ml · Sliding Lid',
    img: 'products/Products/KAM-TUM-30-CYN/KAM-TUM-30-CYN-1.png',
    colors: ['CYN','DGR','WHT'],
    short: 'A bigger pour with the same sleek profile. Coffee, smoothies, iced tea — all day long.',
    features: [
      'Larger capacity for office and travel',
      'Vacuum insulation up to 24 hrs',
      'Sliding lid prevents splashes',
      'Three soft, photo-ready colors'
    ],
    capacity: '30 oz / 890 ml'
  },
  {
    id: 'tumbler-40',
    cat: 'adults',
    name: 'Tumbler 40 oz',
    tag: 'XL',
    sub: '1180 ml · Handle + Straw + Lid',
    img: 'products/Products/KAM-TUM-40-PNK/KAM-TUM-40-PNK-1.png',
    colors: ['GRN','GRY','PNK','WHT'],
    short: 'The XL tumbler that started a trend — handle, straw, sliding lid. For all-day hydration and big-energy mornings.',
    features: [
      'Massive 40 oz capacity, fits cup holders',
      'Comfort handle + reusable straw',
      'Sliding spill-resist lid',
      'Premium powder-coat finish'
    ],
    capacity: '40 oz / 1180 ml'
  },
  {
    id: 'can-cooler-14',
    cat: 'adults',
    name: 'Can Cooler 14 oz',
    tag: 'Cooler',
    sub: '414 ml · Cans & Bottles',
    img: 'products/Products/KAM-CC-14-CYN/KAM-CC-14-CYN-1.png',
    colors: ['BLK','CYN','NVY','PNK'],
    short: 'Drop a can in. Twist the lid on. Stay icy for hours. Beach days, boat days, backyard days.',
    features: [
      'Fits 12 oz cans, slim cans and most bottles',
      'Vacuum insulated stainless steel',
      'Lid keeps drinks dust-free',
      'Cup-holder friendly'
    ],
    capacity: '14 oz / 414 ml'
  },
  {
    id: 'dog-bottle-32',
    cat: 'pets',
    name: 'Dog Bottle 32 oz',
    tag: 'Pets',
    sub: '950 ml · Flip Spout + Snack Cups',
    img: 'products/Products/KAM-DG-32-LTG/KAM-DG-32-LTG-1.png',
    colors: ['BLK','BRW','DGR','DPK','GRY','LPK','LTB','LTG','NVY','RED','WHT','YLW'],
    short: 'Built for the dog parent who actually goes places. Flip spout for sips, two stackable bottom cups for kibble or treats.',
    features: [
      'Premium stainless steel, BPA-free',
      'Two detachable snack/kibble compartments',
      'Leak-proof flip spout for clean sips',
      '12 powder-coated colors — engrave the dog\'s name'
    ],
    capacity: '32 oz / 950 ml'
  }
];

// ----- Render product grid -----
const grid = document.querySelector('.product-grid');
function renderProducts(filter) {
  grid.innerHTML = '';
  products
    .filter(p => !filter || filter === 'all' || p.cat === filter)
    .forEach(p => {
      const el = document.createElement('div');
      el.className = 'product';
      el.dataset.id = p.id;
      const swatchesHtml = p.colors.slice(0, 5).map(c =>
        `<div class="sw" style="background:${colorMap[c] || '#999'}" title="${colorName[c] || c}"></div>`
      ).join('');
      const more = p.colors.length > 5 ? `<span class="more">+${p.colors.length - 5}</span>` : '';
      el.innerHTML = `
        <div class="img-wrap">
          <span class="badge">${p.tag}</span>
          <img src="${encodeURI(p.img)}" alt="${p.name}" loading="lazy">
        </div>
        <div class="body">
          <div class="name">${p.name}</div>
          <div class="meta">${p.sub}</div>
          <div class="swatches">${swatchesHtml}${more}</div>
        </div>`;
      el.addEventListener('click', () => openLightbox(p));
      grid.appendChild(el);
    });
  // re-trigger reveal stagger
  grid.classList.remove('in');
  void grid.offsetWidth;
  grid.classList.add('in');
}
renderProducts('all');

// ----- Tabs -----
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts(tab.dataset.cat);
  });
});

// ----- Lightbox -----
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('.left img');
const lbBody = lb.querySelector('.right');
function openLightbox(p) {
  lbImg.src = encodeURI(p.img);
  lbImg.alt = p.name;
  const colorsHtml = p.colors.map(c =>
    `<div class="c"><span class="dot" style="background:${colorMap[c] || '#999'}"></span>${colorName[c] || c}</div>`
  ).join('');
  const featuresHtml = p.features.map(f => `<li>${f}</li>`).join('');
  lbBody.innerHTML = `
    <span class="eyebrow">${p.tag}</span>
    <h3>${p.name}</h3>
    <div class="meta">${p.capacity} · Vacuum insulated stainless steel</div>
    <p>${p.short}</p>
    <ul>${featuresHtml}</ul>
    <div class="lab" style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">Available colors (${p.colors.length})</div>
    <div class="colors">${colorsHtml}</div>
    <a href="#contact" class="btn btn-primary" style="background:var(--ink);color:var(--sand);">Ask about this product <span class="arrow">→</span></a>`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Re-bind close inside content
  lb.querySelectorAll('a[href="#contact"]').forEach(a => a.addEventListener('click', () => closeLightbox()));
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}
lb.querySelector('.close').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ----- Hero parallax-ish -----
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroVisual.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ----- Stats counter -----
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

// ----- Year -----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- Contact form: mailto -----
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
