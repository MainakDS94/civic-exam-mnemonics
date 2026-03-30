/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */

const DATES = [
  { date:'1789', event:'Révolution française, Prise de la Bastille (14 juillet), DDHC (26 août)', memo:'1-7-8-9 → Liberté née ! La date fondatrice de tout.', cat:'histoire', color:'#C8A96E' },
  { date:'1792', event:"Proclamation de la 1ère République / La Marseillaise composée", memo:'1792 → La République a un an, la Marseillaise chante.', cat:'histoire', color:'#C8A96E' },
  { date:'1793', event:'Louis XVI exécuté à la guillotine', memo:'1792 + 1 = 1793 → Un an après la République, le roi meurt.', cat:'histoire', color:'#C8A96E' },
  { date:'1804', event:"Napoléon devient Empereur — Code civil créé", memo:'1804 → Napoléon + Code civil = modernité juridique.', cat:'histoire', color:'#C8A96E' },
  { date:'1905', event:"Loi de séparation des Églises et de l'État (laïcité)", memo:"1905 → L'État et l'Église divorcent. Dieu va au privé.", cat:'laïcité', color:'#1A3A6B' },
  { date:'1914–1918', event:'Première Guerre mondiale', memo:"14-18 → Quatorze-Dix-huit, la Grande Guerre.", cat:'histoire', color:'#C8A96E' },
  { date:'18 juin 1940', event:"Appel à la Résistance du général de Gaulle depuis Londres", memo:'18/6/40 → De Gaulle dit NON depuis Londres.', cat:'histoire', color:'#C8A96E' },
  { date:'1939–1945', event:'Deuxième Guerre mondiale / Régime de Vichy (1940-44)', memo:'39-45 → Trente-neuf, quarante-cinq, guerre mondiale.', cat:'histoire', color:'#C8A96E' },
  { date:'1944', event:"Les femmes obtiennent le droit de vote en France", memo:"1944 → Deux libérations : D-Day ET les femmes votent.", cat:'droits', color:'#9B2335' },
  { date:'1945', event:"Création de l'ONU après la 2e Guerre mondiale", memo:"1945 → La guerre finit, l'ONU commence.", cat:'monde', color:'#5A7A4A' },
  { date:'1951', event:"Création de la CECA (1ère étape construction européenne)", memo:"1951 → L'acier unit l'Europe pour la 1ère fois.", cat:'europe', color:'#2E6B9E' },
  { date:'1958', event:"Constitution de la Ve République (4 octobre)", memo:"1958 → De Gaulle revient, 5e République naît.", cat:'institutions', color:'#7A4A8A' },
  { date:'1962', event:"Élection du président au suffrage universel direct", memo:"1962 → Les citoyens choisissent directement leur président.", cat:'institutions', color:'#7A4A8A' },
  { date:'1981', event:"Abolition de la peine de mort (Mitterrand / Badinter)", memo:"1981 → Plus de guillotine en France.", cat:'droits', color:'#9B2335' },
  { date:'1992', event:"Traité de Maastricht signé (7 février) → fondation de l'UE", memo:"1992 → L'Europe prend son nom : Union Européenne.", cat:'europe', color:'#2E6B9E' },
  { date:'2002', event:"L'euro devient la monnaie officielle en France", memo:"2002 → Euro dans ta poche, deux zéros dans la date !", cat:'europe', color:'#2E6B9E' },
  { date:'2020', event:"Le Royaume-Uni quitte l'Union européenne (Brexit)", memo:"2020 → UK dit au revoir à l'Europe.", cat:'europe', color:'#2E6B9E' },
  { date:'9 mai', event:"Journée de l'Europe (chaque année)", memo:"9 mai → Chaque année, l'Europe fête son anniversaire.", cat:'europe', color:'#2E6B9E' },
];

const NUMBERS = [
  { num:'577', label:'Députés à l\'Assemblée nationale', memo:"5-7-7 → La chambre basse, plus de membres = plus proche du peuple.", cat:'parlement', color:'#7A4A8A' },
  { num:'348', label:'Sénateurs au Sénat', memo:"3-4-8 → Moins que 577 = chambre haute, plus sélective.", cat:'parlement', color:'#7A4A8A' },
  { num:'6 ans', label:'Mandat des sénateurs (renouvellement par moitié tous les 3 ans)', memo:"6 = deux fois 3 → Sénat et maire partagent la même durée.", cat:'parlement', color:'#7A4A8A' },
  { num:'5 ans', label:'Mandat du Président de la République (quinquennat)', memo:"Quinque = 5 en latin. Quinquennat = 5 ans.", cat:'institutions', color:'#1A3A6B' },
  { num:'5 ans', label:"Mandat des députés (Assemblée nationale)", memo:"5 ans = même durée que le Président → synchronisé depuis 2002.", cat:'institutions', color:'#1A3A6B' },
  { num:'6 ans', label:'Mandat du maire et du conseil municipal', memo:"6 ans comme les sénateurs → les deux 'locaux'.", cat:'institutions', color:'#1A3A6B' },
  { num:'18 ans', label:'Âge de la majorité et du droit de vote', memo:"18 = adulte partout en France. Droit + devoir de voter.", cat:'droits', color:'#9B2335' },
  { num:'3', label:'Les trois pouvoirs (législatif, exécutif, judiciaire)', memo:"3 pouvoirs = séparation des pouvoirs. Toujours 3, jamais plus.", cat:'institutions', color:'#1A3A6B' },
  { num:'13', label:'Régions métropolitaines (depuis la réforme de 2016)', memo:"13 régions sur le sol métropolitain depuis 2016.", cat:'géographie', color:'#5A7A4A' },
  { num:'18', label:'Régions au total (13 métropole + 5 outre-mer)', memo:"18 = 13 + 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).", cat:'géographie', color:'#5A7A4A' },
  { num:'~35 000', label:'Communes en France (environ)', memo:"35 000 communes → La France est championne mondiale du nombre de communes !", cat:'géographie', color:'#5A7A4A' },
  { num:'~68 M', label:'Population de la France en 2025', memo:"68 millions → un peu plus que le Royaume-Uni.", cat:'géographie', color:'#5A7A4A' },
  { num:'300 M', label:'Francophones dans le monde', memo:"300 millions parlent français → 5e langue mondiale.", cat:'culture', color:'#C8762A' },
  { num:'5e', label:'Rang du français parmi les langues les plus parlées', memo:"5e → après le mandarin, l'anglais, l'hindi, l'espagnol.", cat:'culture', color:'#C8762A' },
  { num:'40', label:"Questions à l'examen civique", memo:"40 questions, 45 minutes → presque 1 minute par question.", cat:'examen', color:'#2E6B9E' },
  { num:'80%', label:'Seuil de réussite à l\'examen (= 32/40)', memo:"80% = bien solide. Il faut plus que la moyenne !", cat:'examen', color:'#2E6B9E' },
  { num:'32', label:'Nombre minimum de bonnes réponses pour réussir', memo:"32/40 = 80% → retiens 32, c'est le chiffre magique.", cat:'examen', color:'#2E6B9E' },
  { num:'45 min', label:"Durée maximale de l'examen civique", memo:"45 min = une heure de cours. Gère bien ton temps.", cat:'examen', color:'#2E6B9E' },
  { num:'5 ans', label:'Fréquence des élections européennes', memo:"Toutes les 5 ans → comme les législatives françaises.", cat:'europe', color:'#2E6B9E' },
];

const PEOPLE = [
  { name:'Louis XIV', dates:'1638–1715', role:'Roi de France — le Roi-Soleil', desc:"Règne le plus long d'Europe (72 ans). Construit Versailles. Symbole de la monarchie absolue. Motto : 'L'État, c'est moi'.", memo:'Soleil = Louis XIV. Versailles = Louis XIV. Absolutisme = Louis XIV.', cat:'rois', color:'#C8A96E' },
  { name:'Louis XVI', dates:'1754–1793', role:'Dernier roi de France avant la Révolution', desc:"Roi exécuté pendant la Révolution en 1793. La Révolution de 1789 éclate sous son règne. Symbole de la fin de la monarchie absolue.", memo:"Louis XVI = le roi guillotiné en 1793. Seize → Guillotine.", cat:'rois', color:'#C8A96E' },
  { name:'Napoléon Bonaparte', dates:'1769–1821', role:'Général, Premier Consul, puis Empereur (1804)', desc:"Devient Empereur en 1804. Crée le Code civil (toujours en vigueur). Remporte des victoires majeures. Exilé après Waterloo (1815).", memo:"Napoléon = 1804 = Code civil. N comme 'Non, il n'a pas tous les pouvoirs en démocratie !'", cat:'empire', color:'#D85A30' },
  { name:'Général de Gaulle', dates:'1890–1970', role:"Chef de la Résistance, fondateur de la Ve République", desc:"Lance l'Appel du 18 juin 1940 depuis Londres. Libère la France en 1944. Fonde la Ve République en 1958. Instaure l'élection au suffrage universel direct en 1962.", memo:"De Gaulle = 18 juin 1940 + Ve République 1958 + suffrage universel 1962.", cat:'republique', color:'#1A3A6B' },
  { name:'Jean Moulin', dates:'1899–1943', role:'Figure majeure de la Résistance française', desc:"Préfet devenu résistant. Unifie les mouvements de résistance intérieure sous De Gaulle. Arrêté par la Gestapo en 1943, il meurt sans parler.", memo:"Jean Moulin = le visage de la Résistance intérieure. Chapeau et écharpe = son symbole.", cat:'resistance', color:'#5A7A4A' },
  { name:'François Mitterrand', dates:'1916–1996', role:'Président de la République (1981–1995)', desc:"Abolit la peine de mort en 1981 (avec Robert Badinter). Premier Président socialiste de la Ve République. Deux mandats de 7 ans.", memo:"Mitterrand = 1981 = abolition de la peine de mort. 'Mitterrand met fin à la mort'.", cat:'republique', color:'#1A3A6B' },
  { name:'Jules Ferry', dates:'1832–1893', role:"Homme d'État, père de l'école laïque", desc:"Rend l'école primaire gratuite (1881), laïque et obligatoire (1882). Fondateur de l'école républicaine française.", memo:"Ferry = Gratuit + Laïque + Obligatoire. Les 3 piliers de l'école française.", cat:'republique', color:'#1A3A6B' },
  { name:'Victor Hugo', dates:'1802–1885', role:'Écrivain, poète, homme politique', desc:"Auteur des Misérables et de Notre-Dame de Paris. Milite pour les droits de l'homme et l'abolition de la peine de mort. Père du romantisme français.", memo:"Hugo = Les Misérables + Notre-Dame de Paris. Le plus grand écrivain français.", cat:'culture', color:'#7A4A8A' },
  { name:'Molière', dates:'1622–1673', role:'Dramaturge et acteur', desc:"Père de la comédie française. Écrit Le Malade imaginaire, L'Avare. Protégé de Louis XIV. Son vrai nom : Jean-Baptiste Poquelin.", memo:"Molière = comédie française classique. Mo-lière = Mo-ment théâtral.", cat:'culture', color:'#7A4A8A' },
  { name:'Albert Camus', dates:'1913–1960', role:'Écrivain et philosophe — Prix Nobel 1957', desc:"Auteur de L'Étranger et La Peste. Représente le courant de l'absurde. Né en Algérie. Journaliste résistant pendant la guerre.", memo:"Camus = L'Étranger + absurde + Prix Nobel 1957.", cat:'culture', color:'#7A4A8A' },
  { name:'Auguste Rodin', dates:'1840–1917', role:'Sculpteur français', desc:"Père de la sculpture moderne. Œuvres : Le Penseur, Le Baiser. Son musée se trouve à Paris.", memo:"Rodin = Le Penseur. Quand tu penses à la sculpture française, pense à Rodin.", cat:'culture', color:'#7A4A8A' },
  { name:'Auguste Renoir', dates:'1841–1919', role:'Peintre impressionniste', desc:"Chef de file de l'impressionnisme avec Monet. Scènes de vie quotidienne lumineuses. Tableau emblématique : Le Bal du moulin de la Galette.", memo:"Renoir = impressionnisme + joie de vivre. Renoir rend la vie jolie.", cat:'culture', color:'#7A4A8A' },
  { name:'Édith Piaf', dates:'1915–1963', role:"Chanteuse — icône de la chanson française", desc:"Née dans la misère à Paris. Chansons : La Vie en rose, Non je ne regrette rien. Symbole mondial de la chanson française.", memo:"Piaf = La Vie en rose. Le petit moineau de Paris.", cat:'culture', color:'#7A4A8A' },
  { name:'Olympe de Gouges', dates:'1748–1793', role:'Pionnière du féminisme — Révolution française', desc:"Écrit en 1791 la Déclaration des droits de la femme et de la citoyenne. Milite contre l'esclavage. Guillotinée en 1793 pour ses écrits politiques.", memo:"Gouges = 1791 = droits des femmes. La femme qui a osé réécrire la DDHC au féminin.", cat:'femmes', color:'#9B2335' },
  { name:'Jeanne d\'Arc', dates:'1412–1431', role:'Héroïne nationale — Guerre de Cent Ans', desc:"Mène les armées françaises à la victoire contre les Anglais (Orléans, 1429). Brûlée vive à Rouen. Canonisée sainte en 1920.", memo:"Jeanne = épée + bûcher + Orléans. La première résistante de France.", cat:'femmes', color:'#9B2335' },
  { name:'Marie Curie', dates:'1867–1934', role:'Physicienne et chimiste — 2 prix Nobel', desc:"Seule personne à avoir deux Nobel dans deux disciplines : physique (1903) et chimie (1911). Découvre la radioactivité. Née en Pologne, naturalisée française.", memo:"Curie = 2 Nobel (physique + chimie). La seule avec deux Nobel.", cat:'femmes', color:'#9B2335' },
  { name:'Simone de Beauvoir', dates:'1908–1986', role:'Philosophe, écrivaine féministe', desc:"Auteure du Deuxième Sexe (1949). Formule : 'On ne naît pas femme, on le devient'. Compagne de Sartre. Prix Goncourt pour Les Mandarins (1954).", memo:"Beauvoir = Le Deuxième Sexe. Beau-voir = voir les inégalités.", cat:'femmes', color:'#9B2335' },
  { name:'Simone Veil', dates:'1927–2017', role:"Ministre, rescapée de la Shoah, défenseure des droits", desc:"Survivante d'Auschwitz. Fait adopter la loi sur l'IVG (avortement légal) en 1975. Entrée au Panthéon en 2018. Première femme à l'Académie française en 2008.", memo:"Veil = loi IVG 1975 + Shoah + Panthéon 2018. Deux fois survivante.", cat:'femmes', color:'#9B2335' },
  { name:'Marguerite Yourcenar', dates:'1903–1987', role:"Écrivaine — 1ère femme à l'Académie française (1980)", desc:"Première femme élue à l'Académie française en 1980, après 345 ans. Auteure des Mémoires d'Hadrien.", memo:"Yourcenar = 1980 = 1ère femme à l'Académie française. Y comme 'Yes she can !'", cat:'femmes', color:'#9B2335' },
  { name:'Gisèle Halimi', dates:'1927–2020', role:'Avocate, militante féministe', desc:"Avocate tunisienne naturalisée française. Cofonde le mouvement Choisir (1971) avec Simone de Beauvoir pour défendre le droit à l'avortement.", memo:"Halimi = avocate qui choisit les femmes. Halimi + de Beauvoir = combat pour l'IVG.", cat:'femmes', color:'#9B2335' },
  { name:'George Sand', dates:'1804–1876', role:"Écrivaine, pionnière de l'émancipation féminine", desc:"Pseudonyme d'Aurore Dupin. S'habille en homme pour circuler librement. Militante pour l'égalité des femmes. Auteure de La Mare au diable, Indiana.", memo:"George Sand = femme qui signe d'un prénom masculin pour être prise au sérieux.", cat:'femmes', color:'#9B2335' },
];

const CAT_META = {
  histoire:     { label:'Histoire',         color:'#C8A96E' },
  laïcité:      { label:'Laïcité',          color:'#1A3A6B' },
  droits:       { label:'Droits',           color:'#9B2335' },
  monde:        { label:'Monde',            color:'#5A7A4A' },
  europe:       { label:'Europe',           color:'#2E6B9E' },
  institutions: { label:'Institutions',     color:'#7A4A8A' },
  parlement:    { label:'Parlement',        color:'#7A4A8A' },
  géographie:   { label:'Géographie',       color:'#5A7A4A' },
  culture:      { label:'Culture',          color:'#C8762A' },
  examen:       { label:'Examen',           color:'#2E6B9E' },
  rois:         { label:'Rois',             color:'#C8A96E' },
  empire:       { label:'Empire',           color:'#D85A30' },
  republique:   { label:'République',       color:'#1A3A6B' },
  resistance:   { label:'Résistance',       color:'#5A7A4A' },
  femmes:       { label:'Femmes',           color:'#9B2335' },
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */

const state = {
  activeSection: 'dates',
  scores: {},
  cards: {
    dates:   { data: DATES,   idx: 0, flipped: false, filters: new Set(Object.keys(CAT_META)), subMode: 'flashcard' },
    numbers: { data: NUMBERS, idx: 0, flipped: false, filters: new Set(Object.keys(CAT_META)), subMode: 'flashcard' },
    people:  { data: PEOPLE,  idx: 0, flipped: false, filters: new Set(Object.keys(CAT_META)), subMode: 'flashcard' },
  },
  quiz: { section: null, idx: 0, order: [], answered: false },
};

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getFiltered(section) {
  const { data, filters } = state.cards[section];
  return data.filter(d => filters.has(d.cat));
}

function catLabel(cat) { return CAT_META[cat]?.label || cat; }
function catColor(cat) { return CAT_META[cat]?.color || '#888'; }

function scoreKey(section, idx) { return `${section}_${idx}`; }

function updateScoreBar(section) {
  const data = state.cards[section].data;
  let known = 0, review = 0, unseen = 0;
  data.forEach((_, i) => {
    const k = scoreKey(section, i);
    if (state.scores[k] === 'known') known++;
    else if (state.scores[k] === 'review') review++;
    else unseen++;
  });
  const total = data.length;
  const sb = document.getElementById(`score-bar-${section}`);
  if (!sb) return;
  sb.innerHTML = `
    <span class="score-item"><span class="score-dot" style="background:#16a34a"></span> Connu : <strong>${known}</strong></span>
    <span class="score-item"><span class="score-dot" style="background:#dc2626"></span> À revoir : <strong>${review}</strong></span>
    <span class="score-item"><span class="score-dot" style="background:#d1d5db"></span> Pas vu : <strong>${unseen}</strong></span>
    <span class="score-item" style="margin-left:auto;color:var(--text3)">${total} fiches au total</span>
  `;
  const fill = document.getElementById(`progress-fill-${section}`);
  if (fill) fill.style.width = `${Math.round((known / total) * 100)}%`;
}

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */

function showSection(id) {
  state.activeSection = id;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`sec-${id}`)?.classList.add('active');
  document.querySelector(`[data-section="${id}"]`)?.classList.add('active');
}

function showSubMode(section, mode) {
  state.cards[section].subMode = mode;
  document.querySelectorAll(`#sec-${section} .sub-tab`).forEach(t => {
    t.classList.toggle('active', t.dataset.mode === mode);
  });
  document.querySelectorAll(`#sec-${section} .sub-panel`).forEach(p => {
    p.classList.toggle('active', p.dataset.panel === mode);
  });
  if (mode === 'gallery') renderGallery(section);
  if (mode === 'quiz') startQuiz(section);
}

/* ═══════════════════════════════════════════
   FILTERS
═══════════════════════════════════════════ */

function buildFilters(section) {
  const data = state.cards[section].data;
  const cats = [...new Set(data.map(d => d.cat))];
  const container = document.getElementById(`filters-${section}`);
  if (!container) return;
  container.innerHTML = cats.map(cat => `
    <button class="filter-chip active" data-cat="${cat}" onclick="toggleFilter('${section}','${cat}',this)">
      ${catLabel(cat)}
    </button>
  `).join('');
  cats.forEach(c => state.cards[section].filters.add(c));
}

function toggleFilter(section, cat, btn) {
  const f = state.cards[section].filters;
  if (f.has(cat)) { f.delete(cat); btn.classList.remove('active'); }
  else            { f.add(cat);    btn.classList.add('active'); }
  state.cards[section].idx = 0;
  state.cards[section].flipped = false;
  renderCard(section);
}

/* ═══════════════════════════════════════════
   FLASHCARD RENDERING
═══════════════════════════════════════════ */

function renderCard(section) {
  const filtered = getFiltered(section);
  if (!filtered.length) {
    document.getElementById(`card-scene-${section}`).innerHTML = '<div class="empty-state">Aucune carte avec ces filtres.</div>';
    return;
  }
  const cs = state.cards[section];
  const item = filtered[cs.idx % filtered.length];
  const pos = (cs.idx % filtered.length) + 1;

  document.getElementById(`card-counter-${section}`).textContent = `${pos} / ${filtered.length}`;

  const pct = Math.round((pos / filtered.length) * 100);
  const pf = document.getElementById(`card-progress-fill-${section}`);
  if (pf) pf.style.width = pct + '%';

  const front = buildCardFront(section, item);
  const back  = buildCardBack(section, item);
  const el    = document.getElementById(`card-el-${section}`);
  el.querySelector('.card-front').innerHTML = front;
  el.querySelector('.card-back').innerHTML  = back;
  el.classList.toggle('flipped', cs.flipped);

  document.getElementById(`card-hint-${section}`).textContent =
    cs.flipped ? 'Cliquez sur la carte pour retourner' : 'Cliquez sur la carte pour révéler';

  const markRow = document.getElementById(`mark-row-${section}`);
  if (markRow) markRow.style.display = cs.flipped ? 'flex' : 'none';

  updateScoreBar(section);
}

function buildCardFront(section, item) {
  if (section === 'dates') {
    return `
      <div class="card-main-label">Date</div>
      <div class="card-main-value">${item.date}</div>
      <div class="card-main-sub" style="margin-top:0.5rem">Quel événement historique ?</div>
    `;
  }
  if (section === 'numbers') {
    return `
      <div class="card-main-label">Nombre</div>
      <div class="card-main-value">${item.num}</div>
      <div class="card-main-sub" style="margin-top:0.5rem">Que représente ce nombre ?</div>
    `;
  }
  if (section === 'people') {
    return `
      <div class="card-main-label">Personnage</div>
      <div class="card-main-value" style="font-size:1.5rem">${item.name}</div>
      <div class="card-main-sub">${item.dates}</div>
      <div class="card-main-sub" style="margin-top:0.5rem">Qui est cette personne ?</div>
    `;
  }
  return '';
}

function buildCardBack(section, item) {
  const cat   = item.cat;
  const color = catColor(cat);
  const badge = `<div class="card-badge" style="background:${color}22;color:${color}">${catLabel(cat)}</div>`;

  if (section === 'dates') {
    return `${badge}
      <div class="card-back-role">${item.event}</div>
      <div class="card-memo">${item.memo}</div>`;
  }
  if (section === 'numbers') {
    return `${badge}
      <div class="card-back-role">${item.label}</div>
      <div class="card-memo">${item.memo}</div>`;
  }
  if (section === 'people') {
    return `${badge}
      <div class="card-back-role">${item.role}</div>
      <div class="card-back-desc">${item.desc}</div>
      <div class="card-memo">${item.memo}</div>`;
  }
  return '';
}

function flipCard(section) {
  const cs = state.cards[section];
  cs.flipped = !cs.flipped;
  renderCard(section);
}

function nextCard(section) {
  const cs = state.cards[section];
  const filtered = getFiltered(section);
  cs.flipped = false;
  cs.idx = (cs.idx + 1) % filtered.length;
  renderCard(section);
}

function prevCard(section) {
  const cs = state.cards[section];
  const filtered = getFiltered(section);
  cs.flipped = false;
  cs.idx = (cs.idx - 1 + filtered.length) % filtered.length;
  renderCard(section);
}

function markCard(section, known) {
  const filtered = getFiltered(section);
  const cs = state.cards[section];
  const item = filtered[cs.idx % filtered.length];
  const origIdx = state.cards[section].data.indexOf(item);
  state.scores[scoreKey(section, origIdx)] = known ? 'known' : 'review';
  nextCard(section);
}

/* ═══════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════ */

function renderGallery(section) {
  const container = document.getElementById(`gallery-${section}`);
  if (!container) return;
  const data = state.cards[section].data;
  const grouped = {};
  data.forEach(d => { if (!grouped[d.cat]) grouped[d.cat] = []; grouped[d.cat].push(d); });

  container.innerHTML = Object.keys(grouped).map(cat => {
    const color = catColor(cat);
    const cards = grouped[cat].map(item => galleryCard(section, item)).join('');
    return `
      <div class="gallery-section">
        <div class="gallery-section-title">
          <span class="gallery-dot" style="background:${color}"></span>
          ${catLabel(cat)}
        </div>
        <div class="gallery-grid">${cards}</div>
      </div>`;
  }).join('');
}

function galleryCard(section, item) {
  const color = catColor(item.cat);
  if (section === 'dates') return `
    <div class="gallery-card" style="border-left-color:${color}">
      <div class="gallery-name" style="color:${color}">${item.date}</div>
      <div class="gallery-role">${item.event}</div>
      <div class="gallery-memo">${item.memo}</div>
    </div>`;
  if (section === 'numbers') return `
    <div class="number-card" style="border-top-color:${color}">
      <div class="number-big" style="color:${color}">${item.num}</div>
      <div class="number-label">${item.label}</div>
      <div class="number-memo">${item.memo}</div>
    </div>`;
  if (section === 'people') return `
    <div class="gallery-card" style="border-left-color:${color}">
      <div class="gallery-name" style="color:${color}">${item.name}</div>
      <div class="gallery-dates">${item.dates}</div>
      <div class="gallery-role">${item.role}</div>
      <div class="gallery-memo">${item.memo}</div>
    </div>`;
  return '';
}

/* ═══════════════════════════════════════════
   QUIZ
═══════════════════════════════════════════ */

function startQuiz(section) {
  state.quiz.section = section;
  state.quiz.order = shuffle(state.cards[section].data.map((_, i) => i));
  state.quiz.idx = 0;
  state.quiz.answered = false;
  renderQuiz(section);
}

function renderQuiz(section) {
  const container = document.getElementById(`quiz-${section}`);
  if (!container) return;
  const { order, idx } = state.quiz;

  if (idx >= order.length) {
    container.innerHTML = `
      <div class="quiz-done">
        <div class="quiz-done-title">Bravo !</div>
        <div class="quiz-done-sub">Vous avez revu les ${order.length} fiches de cette section.</div>
        <button class="btn-primary" onclick="startQuiz('${section}')">Recommencer →</button>
      </div>`;
    return;
  }

  const item = state.cards[section].data[order[idx]];
  const color = catColor(item.cat);
  const label = catLabel(item.cat);

  const wrongItems = shuffle(state.cards[section].data.filter((_, i) => i !== order[idx])).slice(0, 3);
  let wrongAnswers, correctAnswer;

  if (section === 'dates')   { correctAnswer = item.event; wrongAnswers = wrongItems.map(w => w.event); }
  if (section === 'numbers') { correctAnswer = item.label; wrongAnswers = wrongItems.map(w => w.label); }
  if (section === 'people')  { correctAnswer = item.role;  wrongAnswers = wrongItems.map(w => w.role); }

  const opts = shuffle([correctAnswer, ...wrongAnswers]);
  state.quiz.answered = false;

  let questionMain, questionSub;
  if (section === 'dates')   { questionMain = item.date;          questionSub = 'Quel événement correspond à cette date ?'; }
  if (section === 'numbers') { questionMain = item.num;           questionSub = 'Que représente ce nombre ?'; }
  if (section === 'people')  { questionMain = item.name;          questionSub = `${item.dates} — Quel est son rôle ?`; }

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;font-size:0.78rem;color:var(--text3);">
      <span>${idx + 1} / ${order.length}</span>
      <span class="tag" style="background:${color}22;color:${color}">${label}</span>
    </div>
    <div class="quiz-question-box">
      <div class="quiz-label">${section === 'dates' ? 'Date' : section === 'numbers' ? 'Nombre' : 'Personnage'}</div>
      <div class="quiz-main">${questionMain}</div>
      <div class="quiz-sub">${questionSub}</div>
    </div>
    <div class="quiz-options" id="quiz-opts-${section}">
      ${opts.map(opt => `
        <button class="quiz-opt" onclick="answerQuiz('${section}', this, \`${opt.replace(/`/g,'\\`')}\`, \`${correctAnswer.replace(/`/g,'\\`')}\`)">
          ${opt}
        </button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-fb-${section}"></div>
    <div class="quiz-next" id="quiz-next-${section}">
      <button class="btn-primary" onclick="state.quiz.idx++;renderQuiz('${section}')">
        Suivant →
      </button>
    </div>`;
}

function answerQuiz(section, btn, chosen, correct) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  document.querySelectorAll(`#quiz-opts-${section} .quiz-opt`).forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === correct) b.classList.add('correct');
    if (b.textContent.trim() === chosen && chosen !== correct) b.classList.add('wrong');
  });

  const item = state.cards[section].data[state.quiz.order[state.quiz.idx]];
  const fb = document.getElementById(`quiz-fb-${section}`);
  fb.style.display = 'block';
  fb.innerHTML = `<strong>${item.event || item.label || item.role}</strong><br><em>${item.memo}</em>`;
  document.getElementById(`quiz-next-${section}`).style.display = 'block';
}

/* ═══════════════════════════════════════════
   TIMELINE
═══════════════════════════════════════════ */

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  const sorted = [...DATES].sort((a, b) => {
    const ya = parseInt(a.date), yb = parseInt(b.date);
    if (isNaN(ya)) return 1;
    if (isNaN(yb)) return -1;
    return ya - yb;
  });

  container.innerHTML = sorted.map((item, i) => {
    const color = catColor(item.cat);
    const isLast = i === sorted.length - 1;
    return `
      <div class="tl-item">
        <div class="tl-year">${item.date}</div>
        <div class="tl-spine">
          <div class="tl-dot" style="color:${color};background:${color}"></div>
          ${!isLast ? '<div class="tl-line"></div>' : ''}
        </div>
        <div class="tl-content">
          <div class="tl-event">${item.event}</div>
          <div class="tl-memo">${item.memo}</div>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  ['dates', 'numbers', 'people'].forEach(section => {
    buildFilters(section);
    renderCard(section);
    updateScoreBar(section);
  });
  renderTimeline();
  showSection('dates');
});
