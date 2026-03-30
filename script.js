/* ── DATA ── */

const DATES = [
  { front: '1789',         back: 'Révolution française, Prise de la Bastille (14 juillet), DDHC (26 août)', memo: '1-7-8-9 → Liberté née ! La date fondatrice de tout.' },
  { front: '1792',         back: 'Proclamation de la 1ère République et composition de la Marseillaise',    memo: '1792 → La République naît, la Marseillaise chante.' },
  { front: '1793',         back: 'Louis XVI exécuté à la guillotine',                                       memo: '1792 + 1 = 1793 → Un an après la République, le roi meurt.' },
  { front: '1804',         back: 'Napoléon devient Empereur — Code civil créé',                             memo: '1804 → Napoléon + Code civil = modernité juridique.' },
  { front: '1905',         back: "Loi de séparation des Églises et de l'État — fondement de la laïcité",   memo: "1905 → L'État et l'Église divorcent. Dieu va au privé." },
  { front: '1914–1918',    back: 'Première Guerre mondiale',                                                memo: '14-18 → Quatorze-Dix-huit, la Grande Guerre.' },
  { front: '18 juin 1940', back: 'Appel à la Résistance du général de Gaulle depuis Londres',              memo: '18/6/40 → De Gaulle dit NON depuis Londres.' },
  { front: '1939–1945',    back: 'Deuxième Guerre mondiale / Régime de Vichy (1940–44)',                   memo: '39-45 → Guerre mondiale, Vichy, puis Libération.' },
  { front: '1944',         back: 'Les femmes obtiennent le droit de vote en France',                        memo: '1944 → D-Day ET les femmes votent : deux libérations.' },
  { front: '1945',         back: "Création de l'ONU après la 2e Guerre mondiale",                          memo: "1945 → La guerre finit, l'ONU commence." },
  { front: '1951',         back: 'Création de la CECA — 1ère étape de la construction européenne',         memo: "1951 → L'acier unit l'Europe pour la 1ère fois." },
  { front: '1958',         back: 'Constitution de la Ve République (4 octobre)',                            memo: '1958 → De Gaulle revient, 5e République naît.' },
  { front: '1962',         back: 'Le président est élu au suffrage universel direct',                       memo: '1962 → Les citoyens choisissent directement leur président.' },
  { front: '1981',         back: 'Abolition de la peine de mort (Mitterrand / Badinter)',                   memo: '1981 → Plus de guillotine en France.' },
  { front: '1992',         back: "Traité de Maastricht (7 février) — fondation de l'Union européenne",     memo: "1992 → L'Europe prend son nom : Union Européenne." },
  { front: '2002',         back: "L'euro devient la monnaie officielle en France",                          memo: '2002 → Euro dans ta poche, deux zéros dans la date !' },
  { front: '2020',         back: "Le Royaume-Uni quitte l'Union européenne (Brexit)",                       memo: "2020 → UK dit au revoir à l'Europe." },
  { front: '9 mai',        back: "Journée de l'Europe (chaque année)",                                      memo: "9 mai → Chaque année, l'Europe fête son anniversaire." },
];

const NUMBERS = [
  { front: '577',     back: "Députés à l'Assemblée nationale",                               memo: '5-7-7 → Chambre basse, plus de membres = plus proche du peuple.' },
  { front: '348',     back: 'Sénateurs au Sénat',                                            memo: '3-4-8 → Moins que 577 = chambre haute, plus sélective.' },
  { front: '5 ans',   back: 'Mandat du Président de la République (quinquennat)',            memo: 'Quinque = 5 en latin. Quinquennat = 5 ans.' },
  { front: '5 ans',   back: 'Mandat des députés (Assemblée nationale)',                      memo: '5 ans = même durée que le Président, synchronisé depuis 2002.' },
  { front: '6 ans',   back: 'Mandat des sénateurs (renouvelé par moitié tous les 3 ans)',   memo: '6 = deux fois 3 → Sénateurs et maires : même durée de 6 ans.' },
  { front: '6 ans',   back: 'Mandat du maire et du conseil municipal',                       memo: "6 ans comme les sénateurs → les deux 'locaux'." },
  { front: '18 ans',  back: 'Âge de la majorité et du droit de vote',                       memo: '18 = adulte partout en France. Droit + devoir de voter.' },
  { front: '3',       back: 'Les trois pouvoirs : législatif, exécutif, judiciaire',        memo: '3 pouvoirs = séparation des pouvoirs. Toujours 3, jamais plus.' },
  { front: '13',      back: 'Régions métropolitaines en France (depuis 2016)',               memo: '13 régions sur le sol métropolitain depuis la réforme de 2016.' },
  { front: '18',      back: 'Régions au total (13 métropole + 5 outre-mer)',                 memo: '18 = 13 + 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).' },
  { front: '~35 000', back: 'Communes en France (environ)',                                  memo: '35 000 → La France est championne mondiale du nombre de communes !' },
  { front: '~68 M',   back: 'Population de la France en 2025',                              memo: '68 millions → un peu plus que le Royaume-Uni.' },
  { front: '300 M',   back: 'Francophones dans le monde',                                    memo: '300 millions parlent français → 5e langue mondiale.' },
  { front: '5e',      back: 'Rang du français parmi les langues les plus parlées',          memo: "5e → après le mandarin, l'anglais, l'hindi, l'espagnol." },
  { front: '40',      back: "Nombre de questions à l'examen civique",                        memo: '40 questions, 45 minutes → presque 1 minute par question.' },
  { front: '32 / 40', back: "Minimum requis pour réussir l'examen (= 80%)",                 memo: "32/40 = 80% → retiens 32, c'est le chiffre magique." },
  { front: '45 min',  back: "Durée maximale de l'examen civique",                           memo: '45 min = une heure de cours. Gère bien ton temps.' },
  { front: '5 ans',   back: 'Fréquence des élections européennes',                          memo: 'Toutes les 5 ans → comme les législatives françaises.' },
];

const PEOPLE = [
  { front: 'Louis XIV',            dates: '1638–1715', back: 'Roi de France — le Roi-Soleil. Règne 72 ans, construit Versailles, incarne la monarchie absolue.',               memo: 'Soleil = Louis XIV. Versailles = Louis XIV. Absolutisme = Louis XIV.' },
  { front: 'Louis XVI',            dates: '1754–1793', back: 'Dernier roi de France. La Révolution de 1789 éclate sous son règne. Guillotiné en 1793.',                        memo: 'Louis XVI = le roi guillotiné. Seize → Guillotine.' },
  { front: 'Napoléon Bonaparte',   dates: '1769–1821', back: 'Général, Premier Consul, Empereur (1804). Crée le Code civil, toujours en vigueur. Exilé après Waterloo (1815).', memo: 'Napoléon = 1804 = Code civil. Toujours en vigueur.' },
  { front: 'Général de Gaulle',    dates: '1890–1970', back: 'Appel du 18 juin 1940 depuis Londres. Libère la France (1944). Fonde la Ve République (1958). Instaure le suffrage universel direct (1962).', memo: 'De Gaulle = 18 juin 1940 + Ve République 1958 + suffrage universel 1962.' },
  { front: 'Jean Moulin',          dates: '1899–1943', back: 'Préfet devenu résistant. Unifie les mouvements de résistance intérieure sous De Gaulle. Arrêté et torturé par la Gestapo en 1943, meurt sans parler.', memo: 'Jean Moulin = le visage de la Résistance intérieure. Chapeau et écharpe = son symbole.' },
  { front: 'François Mitterrand',  dates: '1916–1996', back: 'Président (1981–1995). Abolit la peine de mort en 1981 avec Badinter. Premier Président socialiste de la Ve République.', memo: "Mitterrand = 1981 = fin de la peine de mort." },
  { front: 'Jules Ferry',          dates: '1832–1893', back: "Père de l'école républicaine. Rend l'école primaire gratuite (1881), laïque et obligatoire (1882).",             memo: 'Ferry = Gratuit + Laïque + Obligatoire. Les 3 piliers de l\'école française.' },
  { front: 'Victor Hugo',          dates: '1802–1885', back: 'Écrivain romantique. Auteur des Misérables et Notre-Dame de Paris. Milite pour les droits de l\'homme.',          memo: 'Hugo = Les Misérables + Notre-Dame de Paris. Le plus grand écrivain français.' },
  { front: 'Molière',              dates: '1622–1673', back: "Père de la comédie française. Le Malade imaginaire, L'Avare. Protégé de Louis XIV. Vrai nom : Jean-Baptiste Poquelin.", memo: 'Molière = comédie classique. Mo-lière = Mo-ment théâtral.' },
  { front: 'Albert Camus',         dates: '1913–1960', back: "Écrivain et philosophe. L'Étranger, La Peste. Courant de l'absurde. Né en Algérie. Prix Nobel de littérature 1957.", memo: "Camus = L'Étranger + l'absurde + Prix Nobel 1957." },
  { front: 'Auguste Rodin',        dates: '1840–1917', back: 'Sculpteur. Père de la sculpture moderne. Œuvres : Le Penseur, Le Baiser. Musée Rodin à Paris.',                  memo: 'Rodin = Le Penseur. Père de la sculpture moderne.' },
  { front: 'Auguste Renoir',       dates: '1841–1919', back: 'Peintre impressionniste. Chef de file du mouvement avec Monet. Le Bal du moulin de la Galette.',                  memo: 'Renoir = impressionnisme + joie de vivre. Renoir rend la vie jolie.' },
  { front: 'Édith Piaf',           dates: '1915–1963', back: 'Chanteuse, icône de la chanson française. La Vie en rose, Non je ne regrette rien. La Môme Piaf.',               memo: 'Piaf = La Vie en rose. Le petit moineau de Paris.' },
  { front: "Jeanne d'Arc",         dates: '1412–1431', back: "Héroïne nationale. Mène les armées à la victoire contre les Anglais (Orléans, 1429). Brûlée vive à Rouen. Canonisée en 1920.", memo: 'Jeanne = épée + bûcher + Orléans. La première résistante de France.' },
  { front: 'Olympe de Gouges',     dates: '1748–1793', back: "Pionnière du féminisme. Écrit en 1791 la Déclaration des droits de la femme et de la citoyenne. Milite contre l'esclavage. Guillotinée en 1793.", memo: 'Gouges = 1791 = droits des femmes. A osé réécrire la DDHC au féminin.' },
  { front: 'Marie Curie',          dates: '1867–1934', back: 'Physicienne et chimiste. Seule personne à avoir deux prix Nobel dans deux disciplines : physique (1903) et chimie (1911). Née en Pologne, naturalisée française.', memo: 'Curie = 2 Nobel (physique + chimie). La seule au monde avec deux Nobel.' },
  { front: 'Simone de Beauvoir',   dates: '1908–1986', back: "Philosophe et écrivaine féministe. Le Deuxième Sexe (1949). « On ne naît pas femme, on le devient. » Prix Goncourt pour Les Mandarins (1954).", memo: "Beauvoir = Le Deuxième Sexe. Beau-voir = voir les inégalités." },
  { front: 'Simone Veil',          dates: '1927–2017', back: "Ministre de la Santé. Rescapée de la Shoah (Auschwitz). Fait adopter la loi sur l'IVG en 1975. Entrée au Panthéon en 2018.", memo: 'Veil = loi IVG 1975 + Shoah + Panthéon 2018. Deux fois survivante.' },
  { front: 'Marguerite Yourcenar', dates: '1903–1987', back: "Écrivaine. Première femme élue à l'Académie française en 1980, après 345 ans d'exclusion. Auteure des Mémoires d'Hadrien.", memo: "Yourcenar = 1980 = 1ère femme à l'Académie française. Y comme Yes she can !" },
  { front: 'Gisèle Halimi',        dates: '1927–2020', back: "Avocate et militante féministe. Cofonde le mouvement Choisir (1971) avec Simone de Beauvoir pour défendre le droit à l'avortement.", memo: "Halimi = avocate qui choisit les femmes. Combat pour l'IVG avec de Beauvoir." },
  { front: 'George Sand',          dates: '1804–1876', back: "Écrivaine, pionnière de l'émancipation féminine. Pseudonyme d'Aurore Dupin. S'habille en homme pour circuler librement. La Mare au diable, Indiana.", memo: "George Sand = femme qui signe sous un prénom masculin pour être prise au sérieux." },
];

/* ── DECK STATE ── */

const decks = {
  dates:   { data: DATES,   idx: 0, flipped: false },
  numbers: { data: NUMBERS, idx: 0, flipped: false },
  people:  { data: PEOPLE,  idx: 0, flipped: false },
};

/* ── RENDER ── */

function renderCard(id) {
  const deck = decks[id];
  const item = deck.data[deck.idx];
  const total = deck.data.length;
  const pos = deck.idx + 1;

  document.getElementById('counter-' + id).textContent = pos + ' / ' + total;
  document.getElementById('prog-' + id).style.width = Math.round((pos / total) * 100) + '%';

  var frontEl = document.getElementById('front-' + id);
  if (id === 'people') {
    frontEl.innerHTML =
      '<div class="c-eyebrow">Personnage</div>' +
      '<div class="c-value">' + item.front + '</div>' +
      '<div class="c-dates">' + item.dates + '</div>';
  } else {
    frontEl.innerHTML =
      '<div class="c-eyebrow">' + (id === 'dates' ? 'Date' : 'Nombre') + '</div>' +
      '<div class="c-value">' + item.front + '</div>';
  }

  document.getElementById('back-' + id).innerHTML =
    '<div class="c-answer">' + item.back + '</div>' +
    '<div class="c-memo">' + item.memo + '</div>';

  document.getElementById('card-' + id).classList.toggle('flipped', deck.flipped);

  document.getElementById('hint-' + id).textContent =
    deck.flipped ? 'Cliquez pour retourner' : 'Cliquez pour révéler';
}

function flip(id) {
  decks[id].flipped = !decks[id].flipped;
  renderCard(id);
}

function next(id) {
  var deck = decks[id];
  deck.flipped = false;
  deck.idx = (deck.idx + 1) % deck.data.length;
  renderCard(id);
}

function prev(id) {
  var deck = decks[id];
  deck.flipped = false;
  deck.idx = (deck.idx - 1 + deck.data.length) % deck.data.length;
  renderCard(id);
}

/* ── SECTION NAV ── */

function showSection(id) {
  document.querySelectorAll('.section').forEach(function(s) { s.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelector('[data-sec="' + id + '"]').classList.add('active');
}

/* ── INIT ── */

document.addEventListener('DOMContentLoaded', function() {
  renderCard('dates');
  renderCard('numbers');
  renderCard('people');
  showSection('dates');
});
