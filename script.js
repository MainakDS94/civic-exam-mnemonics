/* ════════════════════════════════════════
   LANGUAGE STATE
════════════════════════════════════════ */

var lang = 'fr';

var UI = {
  fr: {
    flip:    'Cliquez sur la carte pour révéler',
    flipped: 'Cliquez pour retourner',
    date:    'Date',
    number:  'Nombre',
    person:  'Personnage'
  },
  en: {
    flip:    'Click the card to reveal',
    flipped: 'Click to flip back',
    date:    'Date',
    number:  'Number',
    person:  'Person'
  }
};

/* ════════════════════════════════════════
   DATA  (fr / en per card)
════════════════════════════════════════ */

var DATES = [
  {
    front: '1412–1431',
    fr: { back: "Jeanne d'Arc mène les armées françaises à la victoire contre les Anglais (Orléans, 1429). Brûlée vive à Rouen en 1431.", memo: "Épée + bûcher + Orléans. La première résistante de France." },
    en: { back: "Joan of Arc leads French armies to victory against the English (Orléans, 1429). Burned at the stake in Rouen in 1431.", memo: "Sword + stake + Orléans. France's first resistance fighter." }
  },
  {
    front: '1789',
    fr: { back: "Révolution française, Prise de la Bastille (14 juillet), Déclaration des droits de l'homme (26 août)", memo: '1-7-8-9 → Liberté née ! La date fondatrice de tout.' },
    en: { back: 'French Revolution, Storming of the Bastille (14 July), Declaration of the Rights of Man (26 Aug)', memo: '1-7-8-9 → Liberty born! The founding date of everything.' }
  },
  {
    front: '1791',
    fr: { back: "Olympe de Gouges écrit la Déclaration des droits de la femme et de la citoyenne", memo: "1791 → Gouges réécrit la DDHC au féminin. Guillotinée deux ans plus tard en 1793." },
    en: { back: "Olympe de Gouges writes the Declaration of the Rights of Woman and the Female Citizen", memo: "1791 → Gouges rewrites the Declaration for women. Guillotined two years later in 1793." }
  },
  {
    front: '1792',
    fr: { back: 'Proclamation de la 1ère République et composition de la Marseillaise', memo: '1792 → La République naît, la Marseillaise chante.' },
    en: { back: 'Proclamation of the 1st Republic and composition of La Marseillaise', memo: '1792 → The Republic is born, La Marseillaise sings.' }
  },
  {
    front: '1793',
    fr: { back: 'Louis XVI exécuté à la guillotine', memo: '1792 + 1 = 1793 → Un an après la République, le roi meurt.' },
    en: { back: 'Louis XVI executed by guillotine', memo: '1792 + 1 = 1793 → One year after the Republic, the king dies.' }
  },
  {
    front: '1804',
    fr: { back: 'Napoléon devient Empereur — Code civil créé', memo: '1804 → Napoléon + Code civil = modernité juridique.' },
    en: { back: 'Napoleon becomes Emperor — Civil Code created', memo: '1804 → Napoleon + Civil Code = legal modernity. Still in use today.' }
  },
  {
    front: '1881',
    fr: { back: "Jules Ferry rend l'école primaire gratuite", memo: "1881 → Première loi Ferry : l'école gratuite pour tous." },
    en: { back: 'Jules Ferry makes primary school free', memo: '1881 → First Ferry law: free school for everyone.' }
  },
  {
    front: '1882',
    fr: { back: "Jules Ferry rend l'école laïque et obligatoire", memo: "1882 → Deuxième loi Ferry. Avec 1881 : Gratuit + Laïque + Obligatoire." },
    en: { back: "Jules Ferry makes school secular and compulsory", memo: "1882 → Second Ferry law. With 1881: Free + Secular + Compulsory." }
  },
  {
    front: '1905',
    fr: { back: "Loi de séparation des Églises et de l'État — fondement de la laïcité", memo: "1905 → L'État et l'Église divorcent. Dieu va au privé." },
    en: { back: 'Law separating Church and State — foundation of secularism (laïcité)', memo: '1905 → The State and the Church divorce. Religion becomes a private matter.' }
  },
  {
    front: '1913',
    fr: { back: "Naissance d'Albert Camus à Mondovi, Algérie. Auteur de L'Étranger et La Peste. Prix Nobel de littérature en 1957.", memo: "1913 → Camus naît en Algérie, écrit en France, pense l'absurde." },
    en: { back: "Albert Camus born in Mondovi, Algeria. Author of The Stranger and The Plague. Nobel Prize in Literature 1957.", memo: "1913 → Camus born in Algeria, writes in France, thinks the absurd." }
  },
  {
    front: '1914–1918',
    fr: { back: 'Première Guerre mondiale', memo: '14-18 → Quatorze-Dix-huit, la Grande Guerre.' },
    en: { back: 'World War I', memo: '14-18 → The Great War. Fought mainly on French soil.' }
  },
  {
    front: '18 juin 1940',
    fr: { back: 'Appel à la Résistance du général de Gaulle depuis Londres (BBC)', memo: '18/6/40 → De Gaulle dit NON depuis Londres.' },
    en: { back: "De Gaulle's Appeal to Resistance broadcast from London (BBC)", memo: '18/6/40 → De Gaulle says NO from London. France will fight on.' }
  },
  {
    front: '1939–1945',
    fr: { back: 'Deuxième Guerre mondiale / Régime de Vichy (1940–44)', memo: '39-45 → Guerre mondiale, Vichy, puis Libération.' },
    en: { back: 'World War II / Vichy Regime (1940–44)', memo: '39-45 → World war, Vichy collaboration, then Liberation.' }
  },
  {
    front: '1944',
    fr: { back: 'Les femmes obtiennent le droit de vote en France', memo: '1944 → D-Day ET les femmes votent : deux libérations.' },
    en: { back: 'Women gain the right to vote in France', memo: '1944 → D-Day AND women vote: two liberations in one year.' }
  },
  {
    front: '1945',
    fr: { back: "Création de l'ONU après la 2e Guerre mondiale", memo: "1945 → La guerre finit, l'ONU commence." },
    en: { back: 'Creation of the United Nations after WWII', memo: '1945 → The war ends, the UN begins.' }
  },
  {
    front: '1949',
    fr: { back: "Simone de Beauvoir publie Le Deuxième Sexe — « On ne naît pas femme, on le devient »", memo: "1949 → La bible du féminisme moderne. Beau-voir = voir les inégalités." },
    en: { back: 'Simone de Beauvoir publishes The Second Sex — "One is not born, but rather becomes, a woman"', memo: "1949 → The bible of modern feminism. See the inequality." }
  },
  {
    front: '1951',
    fr: { back: 'Création de la CECA — 1ère étape de la construction européenne', memo: "1951 → L'acier unit l'Europe pour la 1ère fois." },
    en: { back: 'Creation of the ECSC — first step in European integration', memo: '1951 → Steel unites Europe for the first time.' }
  },
  {
    front: '1958',
    fr: { back: 'Constitution de la Ve République (4 octobre)', memo: '1958 → De Gaulle revient, 5e République naît.' },
    en: { back: 'Constitution of the Fifth Republic (4 October)', memo: '1958 → De Gaulle returns, the Fifth Republic is born.' }
  },
  {
    front: '1962',
    fr: { back: 'Le président est élu au suffrage universel direct', memo: '1962 → Les citoyens choisissent directement leur président.' },
    en: { back: 'President elected by direct universal suffrage', memo: '1962 → Citizens directly choose their president.' }
  },
  {
    front: '1975',
    fr: { back: "Simone Veil fait adopter la loi sur l'IVG — avortement légalisé en France", memo: "1975 → Veil + IVG = droits des femmes inscrits dans la loi. Panthéon en 2018." },
    en: { back: "Simone Veil passes the abortion law — abortion legalised in France", memo: "1975 → Veil + abortion law = women's rights enshrined in law. Panthéon in 2018." }
  },
  {
    front: '1981',
    fr: { back: 'Abolition de la peine de mort (Mitterrand / Badinter)', memo: '1981 → Plus de guillotine en France.' },
    en: { back: 'Abolition of the death penalty (Mitterrand / Badinter)', memo: '1981 → No more guillotine in France.' }
  },
  {
    front: '1992',
    fr: { back: "Traité de Maastricht (7 février) — fondation de l'Union européenne", memo: "1992 → L'Europe prend son nom : Union Européenne." },
    en: { back: 'Maastricht Treaty (7 February) — foundation of the European Union', memo: "1992 → Europe gets its name: the European Union." }
  },
  {
    front: '1992 ★',
    fr: { back: "Depuis le traité de Maastricht, les citoyens de l'UE peuvent voter aux élections locales du pays de l'UE où ils sont installés", memo: "1992 → Citoyenneté européenne : voter là où on vit, même à l'étranger dans l'UE." },
    en: { back: "Since the Maastricht Treaty, EU citizens can vote in local elections of the EU country where they live", memo: "1992 → European citizenship: vote where you live, even abroad within the EU." }
  },
  {
    front: '2002',
    fr: { back: "L'euro devient la monnaie officielle en France", memo: '2002 → Euro dans ta poche, deux zéros dans la date !' },
    en: { back: 'The euro becomes the official currency in France', memo: '2002 → Euro in your pocket, two zeros in the year!' }
  },
  {
    front: '2004',
    fr: { back: "La loi du 15 mars 2004 interdit les signes religieux ostensibles dans les lycées publics", memo: "2004 → Pas de voile, croix ou kipa visibles à l'école publique. Extension de la laïcité de 1905." },
    en: { back: "The law of 15 March 2004 bans conspicuous religious symbols in public secondary schools", memo: "2004 → No visible veil, cross or kipa in state schools. Extension of the 1905 secularism law." }
  },
  {
    front: '2020',
    fr: { back: "Le Royaume-Uni quitte l'Union européenne (Brexit)", memo: "2020 → UK dit au revoir à l'Europe." },
    en: { back: 'The United Kingdom leaves the European Union (Brexit)', memo: '2020 → UK says goodbye to Europe.' }
  },
  {
    front: '9 mai',
    fr: { back: "Journée de l'Europe (chaque année)", memo: "9 mai → Chaque année, l'Europe fête son anniversaire." },
    en: { back: 'Europe Day (every year)', memo: "9 May → Every year, Europe celebrates its anniversary." }
  }
];

var NUMBERS = [
  {
    front: '577',
    fr: { back: "Députés à l'Assemblée nationale", memo: '5-7-7 → Chambre basse, plus de membres = plus proche du peuple.' },
    en: { back: 'Members of the National Assembly (deputies)', memo: '5-7-7 → Lower house, more members = closer to the people.' }
  },
  {
    front: '348',
    fr: { back: 'Sénateurs au Sénat', memo: '3-4-8 → Moins que 577 = chambre haute, plus sélective.' },
    en: { back: 'Senators in the Senate', memo: '3-4-8 → Fewer than 577 = upper house, more selective.' }
  },
  {
    front: '5 ans',
    fr: { back: 'Mandat du Président de la République (quinquennat)', memo: 'Quinque = 5 en latin. Quinquennat = 5 ans.' },
    en: { back: "President's term of office (quinquennat)", memo: 'Quinque = 5 in Latin. Five-year term.' }
  },
  {
    front: '5 ans',
    fr: { back: 'Mandat des députés (Assemblée nationale)', memo: '5 ans = même durée que le Président, synchronisé depuis 2002.' },
    en: { back: "Deputies' term (National Assembly)", memo: '5 years = same as the President, synchronised since 2002.' }
  },
  {
    front: '6 ans',
    fr: { back: 'Mandat des sénateurs (renouvelé par moitié tous les 3 ans)', memo: '6 = deux fois 3 → Sénateurs et maires : même durée de 6 ans.' },
    en: { back: "Senators' term (half renewed every 3 years)", memo: '6 = twice 3 → Senators and mayors share the same 6-year term.' }
  },
  {
    front: '6 ans',
    fr: { back: 'Mandat du maire et du conseil municipal', memo: "6 ans comme les sénateurs → les deux élus locaux." },
    en: { back: "Mayor's and municipal council's term", memo: '6 years like senators → both are local elected officials.' }
  },
  {
    front: '18 ans',
    fr: { back: 'Âge de la majorité et du droit de vote', memo: '18 = adulte partout en France. Droit + devoir de voter.' },
    en: { back: 'Age of majority and voting age', memo: '18 = adult everywhere in France. Right + civic duty to vote.' }
  },
  {
    front: '3',
    fr: { back: 'Les trois pouvoirs : législatif, exécutif, judiciaire', memo: '3 pouvoirs = séparation des pouvoirs. Toujours 3, jamais plus.' },
    en: { back: 'The three powers: legislative, executive, judicial', memo: '3 powers = separation of powers. Always 3, never more.' }
  },
  {
    front: '13',
    fr: { back: 'Régions métropolitaines en France (depuis 2016)', memo: '13 régions sur le sol métropolitain depuis la réforme de 2016.' },
    en: { back: 'Metropolitan regions in France (since 2016)', memo: '13 regions on mainland France since the 2016 reform.' }
  },
  {
    front: '18',
    fr: { back: 'Régions au total (13 métropole + 5 outre-mer)', memo: '18 = 13 + 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).' },
    en: { back: 'Total regions (13 mainland + 5 overseas)', memo: '18 = 13 + 5 overseas (Guadeloupe, Martinique, Guiana, Réunion, Mayotte).' }
  },
  {
    front: '~35 000',
    fr: { back: 'Communes en France (environ)', memo: '35 000 → La France est championne mondiale du nombre de communes !' },
    en: { back: 'Communes (municipalities) in France (approx.)', memo: '35,000 → France has the most communes of any country in the world!' }
  },
  {
    front: '~68 M',
    fr: { back: 'Population de la France en 2025', memo: '68 millions → un peu plus que le Royaume-Uni.' },
    en: { back: "France's population in 2025", memo: '68 million → slightly more than the United Kingdom.' }
  },
  {
    front: '300 M',
    fr: { back: 'Francophones dans le monde', memo: '300 millions parlent français → 5e langue mondiale.' },
    en: { back: 'French speakers worldwide', memo: '300 million speak French → 5th most spoken language in the world.' }
  },
  {
    front: '5e',
    fr: { back: 'Rang du français parmi les langues les plus parlées', memo: "5e → après le mandarin, l'anglais, l'hindi, l'espagnol." },
    en: { back: "French's rank among the world's most spoken languages", memo: "5th → after Mandarin, English, Hindi, and Spanish." }
  },
  {
    front: '40',
    fr: { back: "Nombre de questions à l'examen civique", memo: '40 questions, 45 minutes → presque 1 minute par question.' },
    en: { back: 'Number of questions in the civic exam', memo: '40 questions, 45 minutes → nearly 1 minute per question.' }
  },
  {
    front: '32 / 40',
    fr: { back: "Minimum requis pour réussir l'examen (= 80%)", memo: "32/40 = 80% → retiens 32, c'est le chiffre magique." },
    en: { back: 'Minimum correct answers to pass the exam (= 80%)', memo: '32/40 = 80% → remember 32, that is the magic number.' }
  },
  {
    front: '45 min',
    fr: { back: "Durée maximale de l'examen civique", memo: '45 min = une heure de cours. Gère bien ton temps.' },
    en: { back: 'Maximum duration of the civic exam', memo: '45 min = one school period. Manage your time well.' }
  },
  {
    front: '5 ans',
    fr: { back: 'Fréquence des élections européennes', memo: 'Toutes les 5 ans → comme les législatives françaises.' },
    en: { back: 'Frequency of European Parliament elections', memo: 'Every 5 years → same as French legislative elections.' }
  }
];

var PEOPLE = [
  {
    front: 'Louis XIV', dates: '1638–1715',
    fr: { back: 'Roi de France — le Roi-Soleil. Règne 72 ans, construit Versailles, incarne la monarchie absolue.', memo: 'Soleil = Louis XIV. Versailles = Louis XIV. Absolutisme = Louis XIV.' },
    en: { back: 'King of France — the Sun King. Reigned 72 years, built Versailles, embodied absolute monarchy.', memo: 'Sun = Louis XIV. Versailles = Louis XIV. Absolutism = Louis XIV.' }
  },
  {
    front: 'Louis XVI', dates: '1754–1793',
    fr: { back: 'Dernier roi de France. La Révolution de 1789 éclate sous son règne. Guillotiné en 1793.', memo: 'Louis XVI = le roi guillotiné. Seize → Guillotine.' },
    en: { back: 'Last king of France. The 1789 Revolution broke out during his reign. Executed by guillotine in 1793.', memo: 'Louis XVI = the guillotined king. Sixteen → Guillotine.' }
  },
  {
    front: 'Napoléon Bonaparte', dates: '1769–1821',
    fr: { back: 'Général, Premier Consul, Empereur (1804). Crée le Code civil, toujours en vigueur. Exilé après Waterloo (1815).', memo: 'Napoléon = 1804 = Code civil. Toujours en vigueur.' },
    en: { back: 'General, First Consul, Emperor (1804). Created the Civil Code, still in force. Exiled after Waterloo (1815).', memo: 'Napoleon = 1804 = Civil Code. Still in force today.' }
  },
  {
    front: 'Général de Gaulle', dates: '1890–1970',
    fr: { back: 'Appel du 18 juin 1940. Libère la France (1944). Fonde la Ve République (1958). Instaure le suffrage universel direct (1962).', memo: 'De Gaulle = 18 juin 1940 + Ve République 1958 + suffrage universel 1962.' },
    en: { back: 'Appeal of 18 June 1940. Liberated France (1944). Founded the Fifth Republic (1958). Introduced direct presidential elections (1962).', memo: 'De Gaulle = 18 June 1940 + Fifth Republic 1958 + direct elections 1962.' }
  },
  {
    front: 'Jean Moulin', dates: '1899–1943',
    fr: { back: 'Préfet devenu résistant. Unifie les mouvements de résistance intérieure. Arrêté par la Gestapo en 1943, meurt sans parler.', memo: 'Jean Moulin = le visage de la Résistance intérieure.' },
    en: { back: 'Prefect turned resistance fighter. United the internal resistance movements. Arrested by the Gestapo in 1943, died without talking.', memo: 'Jean Moulin = the face of the internal French Resistance.' }
  },
  {
    front: 'François Mitterrand', dates: '1916–1996',
    fr: { back: 'Président (1981–1995). Abolit la peine de mort en 1981 avec Badinter. Premier Président socialiste de la Ve République.', memo: "Mitterrand = 1981 = fin de la peine de mort." },
    en: { back: 'President (1981–1995). Abolished the death penalty in 1981 with Badinter. First Socialist President of the Fifth Republic.', memo: 'Mitterrand = 1981 = end of the death penalty.' }
  },
  {
    front: 'Jules Ferry', dates: '1832–1893',
    fr: { back: "Père de l'école républicaine. Rend l'école gratuite (1881), laïque et obligatoire (1882).", memo: "Ferry = Gratuit + Laïque + Obligatoire." },
    en: { back: 'Father of the republican school. Made education free (1881), secular and compulsory (1882).', memo: 'Ferry = Free + Secular + Compulsory. The 3 pillars of French education.' }
  },
  {
    front: 'Victor Hugo', dates: '1802–1885',
    fr: { back: "Écrivain romantique. Les Misérables, Notre-Dame de Paris. Milite pour les droits de l'homme.", memo: 'Hugo = Les Misérables + Notre-Dame de Paris. Le plus grand écrivain français.' },
    en: { back: 'Romantic writer. Les Misérables, The Hunchback of Notre-Dame. Campaigned for human rights.', memo: "Hugo = Les Misérables + Notre-Dame de Paris. France's greatest writer." }
  },
  {
    front: 'Molière', dates: '1622–1673',
    fr: { back: "Père de la comédie française. Le Malade imaginaire, L'Avare. Vrai nom : Jean-Baptiste Poquelin.", memo: 'Molière = comédie classique. Vrai nom : Jean-Baptiste Poquelin.' },
    en: { back: "Father of French comedy. The Imaginary Invalid, The Miser. Real name: Jean-Baptiste Poquelin.", memo: 'Molière = French classical comedy. Real name: Jean-Baptiste Poquelin.' }
  },
  {
    front: 'Albert Camus', dates: '1913–1960',
    fr: { back: "Écrivain et philosophe. L'Étranger, La Peste. Courant de l'absurde. Prix Nobel de littérature 1957.", memo: "Camus = L'Étranger + l'absurde + Prix Nobel 1957." },
    en: { back: 'Writer and philosopher. The Stranger, The Plague. Philosophy of the absurd. Nobel Prize in Literature 1957.', memo: 'Camus = The Stranger + the absurd + Nobel Prize 1957.' }
  },
  {
    front: 'Auguste Rodin', dates: '1840–1917',
    fr: { back: 'Sculpteur. Père de la sculpture moderne. Le Penseur, Le Baiser. Musée Rodin à Paris.', memo: 'Rodin = Le Penseur. Père de la sculpture moderne.' },
    en: { back: 'Sculptor. Father of modern sculpture. The Thinker, The Kiss. Rodin Museum in Paris.', memo: 'Rodin = The Thinker. Father of modern sculpture.' }
  },
  {
    front: 'Auguste Renoir', dates: '1841–1919',
    fr: { back: 'Peintre impressionniste. Le Bal du moulin de la Galette. Chef de file du mouvement avec Monet.', memo: 'Renoir = impressionnisme + joie de vivre.' },
    en: { back: 'Impressionist painter. Dance at Le Moulin de la Galette. Leader of the movement alongside Monet.', memo: 'Renoir = Impressionism + joy of life.' }
  },
  {
    front: 'Édith Piaf', dates: '1915–1963',
    fr: { back: 'Chanteuse, icône de la chanson française. La Vie en rose, Non je ne regrette rien.', memo: 'Piaf = La Vie en rose. Le petit moineau de Paris.' },
    en: { back: 'Singer, icon of French song. La Vie en rose, Non je ne regrette rien.', memo: 'Piaf = La Vie en rose. The little sparrow of Paris.' }
  },
  {
    front: "Jeanne d'Arc", dates: '1412–1431',
    fr: { back: "Héroïne nationale. Victoire contre les Anglais à Orléans (1429). Brûlée vive à Rouen. Canonisée en 1920.", memo: 'Jeanne = épée + bûcher + Orléans. La première résistante de France.' },
    en: { back: 'National heroine. Victory against the English at Orléans (1429). Burned at the stake in Rouen. Canonised in 1920.', memo: "Joan of Arc = sword + stake + Orléans. France's first resistance fighter." }
  },
  {
    front: 'Olympe de Gouges', dates: '1748–1793',
    fr: { back: "Pionnière du féminisme. Déclaration des droits de la femme et de la citoyenne (1791). Guillotinée en 1793.", memo: 'Gouges = 1791 = droits des femmes. A réécrit la DDHC au féminin.' },
    en: { back: 'Pioneer of feminism. Declaration of the Rights of Woman and the Female Citizen (1791). Guillotined in 1793.', memo: "Gouges = 1791 = women's rights. Rewrote the Declaration of Rights for women." }
  },
  {
    front: 'Marie Curie', dates: '1867–1934',
    fr: { back: 'Physicienne et chimiste. Seule personne à avoir deux prix Nobel : physique (1903) et chimie (1911). Née en Pologne, naturalisée française.', memo: 'Curie = 2 Nobel dans 2 disciplines. La seule au monde.' },
    en: { back: 'Physicist and chemist. Only person to win two Nobel Prizes in two different sciences: physics (1903) and chemistry (1911). Born in Poland, naturalised French.', memo: 'Curie = 2 Nobel Prizes in 2 fields. The only person ever.' }
  },
  {
    front: 'Simone de Beauvoir', dates: '1908–1986',
    fr: { back: "Philosophe et écrivaine féministe. Le Deuxième Sexe (1949). « On ne naît pas femme, on le devient. » Prix Goncourt (1954).", memo: "Beauvoir = Le Deuxième Sexe. Beau-voir = voir les inégalités." },
    en: { back: 'Feminist philosopher and writer. The Second Sex (1949). "One is not born, but rather becomes, a woman." Prix Goncourt (1954).', memo: 'Beauvoir = The Second Sex. The bible of modern feminism.' }
  },
  {
    front: 'Simone Veil', dates: '1927–2017',
    fr: { back: "Ministre de la Santé. Rescapée de la Shoah. Loi sur l'IVG (avortement légal) en 1975. Panthéon en 2018.", memo: 'Veil = loi IVG 1975 + Shoah + Panthéon 2018.' },
    en: { back: 'Minister of Health. Holocaust survivor. Legalised abortion in France (1975). Entered the Panthéon in 2018.', memo: 'Veil = abortion law 1975 + Holocaust survivor + Panthéon 2018.' }
  },
  {
    front: 'Marguerite Yourcenar', dates: '1903–1987',
    fr: { back: "Écrivaine. Première femme élue à l'Académie française (1980). Mémoires d'Hadrien.", memo: "Yourcenar = 1980 = 1ère femme à l'Académie française." },
    en: { back: "Writer. First woman elected to the Académie française (1980). Memoirs of Hadrian.", memo: 'Yourcenar = 1980 = first woman in the Académie française.' }
  },
  {
    front: 'Gisèle Halimi', dates: '1927–2020',
    fr: { back: "Avocate et militante féministe. Cofonde Choisir (1971) avec Simone de Beauvoir pour défendre le droit à l'avortement.", memo: "Halimi = avocate qui choisit les femmes. Combat pour l'IVG." },
    en: { back: 'Lawyer and feminist activist. Co-founded Choisir (1971) with Simone de Beauvoir to defend abortion rights.', memo: "Halimi = lawyer who chose women's rights. Fought for abortion rights." }
  },
  {
    front: 'George Sand', dates: '1804–1876',
    fr: { back: "Écrivaine pionnière (Aurore Dupin). Signe sous un prénom masculin pour être prise au sérieux. La Mare au diable, Indiana.", memo: 'George Sand = femme qui écrit sous un nom masculin pour être libre.' },
    en: { back: "Pioneer writer (Aurore Dupin). Wrote under a male pen name to be taken seriously. The Devil's Pool, Indiana.", memo: 'George Sand = woman who wrote under a male name to write freely.' }
  }
];

/* ════════════════════════════════════════
   DECK STATE
════════════════════════════════════════ */

var decks = {
  dates:   { data: DATES,   idx: 0, flipped: false },
  numbers: { data: NUMBERS, idx: 0, flipped: false },
  people:  { data: PEOPLE,  idx: 0, flipped: false }
};

/* ════════════════════════════════════════
   RENDER
════════════════════════════════════════ */

function renderCard(id) {
  var deck = decks[id];
  var item = deck.data[deck.idx];
  var total = deck.data.length;
  var pos = deck.idx + 1;
  var t = item[lang];

  document.getElementById('counter-' + id).textContent = pos + ' / ' + total;
  document.getElementById('prog-' + id).style.width = Math.round((pos / total) * 100) + '%';

  var frontEl = document.getElementById('front-' + id);
  var eyebrow = id === 'dates' ? UI[lang].date : id === 'numbers' ? UI[lang].number : UI[lang].person;

  if (id === 'people') {
    frontEl.innerHTML =
      '<div class="c-eyebrow">' + eyebrow + '</div>' +
      '<div class="c-value">' + item.front + '</div>' +
      '<div class="c-dates">' + item.dates + '</div>';
  } else {
    frontEl.innerHTML =
      '<div class="c-eyebrow">' + eyebrow + '</div>' +
      '<div class="c-value">' + item.front + '</div>';
  }

  document.getElementById('back-' + id).innerHTML =
    '<div class="c-answer">' + t.back + '</div>' +
    '<div class="c-memo">' + t.memo + '</div>';

  document.getElementById('card-' + id).classList.toggle('flipped', deck.flipped);

  document.getElementById('hint-' + id).textContent =
    deck.flipped ? UI[lang].flipped : UI[lang].flip;
}

function renderAll() {
  renderCard('dates');
  renderCard('numbers');
  renderCard('people');
}

/* ════════════════════════════════════════
   LANGUAGE TOGGLE
════════════════════════════════════════ */

function applyLang() {
  document.querySelectorAll('[data-fr]').forEach(function(el) {
    var val = el.getAttribute('data-' + lang);
    if (val !== null) {
      if (el.tagName === 'H1' || el.tagName === 'P') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  document.querySelectorAll('[data-placeholder-fr]').forEach(function(el) {
    el.placeholder = el.getAttribute('data-placeholder-' + lang) || '';
  });

  var thumb  = document.getElementById('lang-thumb');
  var flagFr = document.getElementById('flag-fr');
  var flagEn = document.getElementById('flag-en');
  if (thumb && flagFr && flagEn) {
    if (lang === 'en') {
      thumb.classList.add('en');
      flagFr.classList.remove('active');
      flagEn.classList.add('active');
    } else {
      thumb.classList.remove('en');
      flagFr.classList.add('active');
      flagEn.classList.remove('active');
    }
  }

  renderAll();
}

/* ════════════════════════════════════════
   ACTIONS
════════════════════════════════════════ */

function flipCard(id) {
  decks[id].flipped = !decks[id].flipped;
  renderCard(id);
}

function nextCard(id) {
  var deck = decks[id];
  deck.flipped = false;
  deck.idx = (deck.idx + 1) % deck.data.length;
  renderCard(id);
}

function prevCard(id) {
  var deck = decks[id];
  deck.flipped = false;
  deck.idx = (deck.idx - 1 + deck.data.length) % deck.data.length;
  renderCard(id);
}

/* ════════════════════════════════════════
   TIMELINE
════════════════════════════════════════ */

var TL_COLORS = {
  histoire:     '#C8A96E',
  laicite:      '#1A3A6B',
  droits:       '#9B2335',
  monde:        '#5A7A4A',
  europe:       '#2E6B9E',
  institutions: '#7A4A8A',
  culture:      '#D85A30'
};

var DATE_CATS = [
  'histoire',      /* 1412–1431  Jeanne d'Arc                    */
  'histoire',      /* 1789       Révolution                      */
  'droits',        /* 1791       Olympe de Gouges                */
  'histoire',      /* 1792       République                      */
  'histoire',      /* 1793       Louis XVI                       */
  'histoire',      /* 1804       Napoléon                        */
  'institutions',  /* 1881       Ferry gratuite                  */
  'institutions',  /* 1882       Ferry laïque                    */
  'laicite',       /* 1905       Laïcité                         */
  'culture',       /* 1913       Camus naissance                 */
  'histoire',      /* 1914–1918  WWI                             */
  'histoire',      /* 18 juin 1940 De Gaulle                     */
  'histoire',      /* 1939–1945  WWII                            */
  'droits',        /* 1944       Femmes votent                   */
  'monde',         /* 1945       ONU                             */
  'culture',       /* 1949       Beauvoir                        */
  'europe',        /* 1951       CECA                            */
  'institutions',  /* 1958       Ve République                   */
  'institutions',  /* 1962       Suffrage universel              */
  'droits',        /* 1975       Veil IVG                        */
  'droits',        /* 1981       Peine de mort                   */
  'europe',        /* 1992       Maastricht                      */
  'europe',        /* 1992 ★    Citoyenneté UE / vote local      */
  'europe',        /* 2002       Euro                            */
  'laicite',       /* 2004       Signes religieux à l'école      */
  'europe',        /* 2020       Brexit                          */
  'europe'         /* 9 mai      Journée de l'Europe             */
];

function renderTimeline() {
  var container = document.getElementById('timeline-list');
  if (!container) return;

  var html = '';
  DATES.forEach(function(item, i) {
    var cat    = DATE_CATS[i] || 'histoire';
    var color  = TL_COLORS[cat] || '#C8A96E';
    var t      = item[lang];
    var isLast = i === DATES.length - 1;

    html +=
      '<div class="tl-item">' +
        '<div class="tl-year">' + item.front + '</div>' +
        '<div class="tl-spine">' +
          '<div class="tl-dot" style="background:' + color + ';box-shadow:0 0 0 3px ' + color + '33"></div>' +
          (!isLast ? '<div class="tl-line"></div>' : '') +
        '</div>' +
        '<div class="tl-content">' +
          '<div class="tl-event">' + t.back + '</div>' +
          '<div class="tl-memo">' + t.memo + '</div>' +
        '</div>' +
      '</div>';
  });

  container.innerHTML = html;
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(function(s) { s.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelector('[data-sec="' + id + '"]').classList.add('active');
}

/* ════════════════════════════════════════
   MODAL
════════════════════════════════════════ */

function openModal() {
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.getElementById('report-subject').focus();
}

function closeModal() {
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.getElementById('report-subject').value = '';
  document.getElementById('report-body').value = '';
}

function sendReport() {
  var subject = document.getElementById('report-subject').value.trim();
  var body    = document.getElementById('report-body').value.trim();
  if (!subject && !body) { closeModal(); return; }
  var mailto = 'mailto:mainak.iist2012@gmail.com' +
    '?subject=' + encodeURIComponent('[Examen Civique] ' + (subject || 'Error report')) +
    '&body='    + encodeURIComponent(body);
  window.location.href = mailto;
  closeModal();
}

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {

  renderAll();
  applyLang();

  document.querySelector('[data-sec="dates"]').addEventListener('click',    function() { showSection('dates'); });
  document.querySelector('[data-sec="numbers"]').addEventListener('click',  function() { showSection('numbers'); });
  document.querySelector('[data-sec="people"]').addEventListener('click',   function() { showSection('people'); });
  document.querySelector('[data-sec="timeline"]').addEventListener('click', function() { showSection('timeline'); renderTimeline(); });

  document.getElementById('lang-toggle').addEventListener('click', function() {
    lang = (lang === 'fr') ? 'en' : 'fr';
    applyLang();
    if (document.getElementById('sec-timeline').classList.contains('active')) {
      renderTimeline();
    }
  });

  ['dates', 'numbers', 'people'].forEach(function(id) {
    document.getElementById('card-' + id).addEventListener('click', function() {
      flipCard(id);
    });
    document.getElementById('btn-prev-' + id).addEventListener('click', function(e) {
      e.stopPropagation();
      prevCard(id);
    });
    document.getElementById('btn-next-' + id).addEventListener('click', function(e) {
      e.stopPropagation();
      nextCard(id);
    });
  });

  document.getElementById('report-btn').addEventListener('click', openModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-send').addEventListener('click', sendReport);
  document.getElementById('modal-backdrop').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('lang-toggle').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      lang = (lang === 'fr') ? 'en' : 'fr';
      applyLang();
      if (document.getElementById('sec-timeline').classList.contains('active')) {
        renderTimeline();
      }
    }
  });

  showSection('dates');
});
