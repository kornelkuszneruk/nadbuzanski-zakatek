export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  sections: Section[];
};

type Section =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "tip"; text: string };

export const posts: Post[] = [
  {
    slug: "jezioro-biale-okuninka",
    title: "Jezioro Białe w Okunince — najczystsze jezioro Lubelszczyzny",
    date: "2025-07-01",
    excerpt:
      "Krystalicznie czysta woda, piaszczyste plaże i sosnowy las tuż obok — Jezioro Białe to jedno z najpiękniejszych miejsc na wypoczynek w Polsce Wschodniej, zaledwie 20 minut od Nadbużańskiego Zakątka.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Jezioro_Bia%C5%82e_Okuninka_k.Okuninka2006.jpg/1280px-Jezioro_Bia%C5%82e_Okuninka_k.Okuninka2006.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Jezioro Białe w Okunince to prawdziwa perła Pojezierza Łęczyńsko-Włodawskiego. Woda o wyjątkowej przejrzystości — widoczność sięga nawet kilku metrów w głąb — przyciąga tu co roku tysiące turystów z całej Polski. Jezioro leży w otulinie Poleskiego Parku Narodowego i otoczone jest gęstymi lasami sosnowymi, co tworzy niepowtarzalny mikroklimat sprzyjający relaksowi.",
      },
      {
        type: "heading",
        text: "Plaża i kąpielisko",
      },
      {
        type: "paragraph",
        text: "Główna plaża w Okunince to szerokie, piaszczyste nabrzeże z łagodnym zejściem do wody — idealne zarówno dla rodzin z dziećmi, jak i dla miłośników aktywnego wypoczynku. W sezonie letnim działa strzeżone kąpielisko z ratownikami, wypożyczalnia sprzętu wodnego (kajaki, rowery wodne, deski SUP) oraz punkty gastronomiczne.",
      },
      {
        type: "heading",
        text: "Dla kogo jest to miejsce?",
      },
      {
        type: "paragraph",
        text: "Jezioro Białe sprawdzi się świetnie jako jednodniowa wycieczka podczas pobytu w Nadbużańskim Zakątku. Dzieci mogą bezpiecznie kąpać się przy plaży, dorośli — wypłynąć kajakiem lub rowerem wodnym na otwarte wody jeziora. Wieczorem warto zostać dłużej — zachody słońca nad jeziorem należą do tych widoków, które trudno zapomnieć.",
      },
      {
        type: "tip",
        text: "Wskazówka: Jezioro Białe jest szczególnie piękne wczesnym rankiem — woda jest spokojna jak lustro i prawie nie ma turystów. Warto wybrać się tam na poranny spacer lub poranną kąpiel przed śniadaniem.",
      },
      {
        type: "heading",
        text: "Jak dojechać z Nadbużańskiego Zakątka?",
      },
      {
        type: "paragraph",
        text: "Dystans z Woli Uhruskiej do Okuninki wynosi około 20 km — to zaledwie 20 minut jazdy samochodem przez malownicze drogi Polesia. Po drodze warto zatrzymać się we Włodawie — mieście trzech kultur z pięknym barokowym kościołem i synagogą.",
      },
    ],
  },
  {
    slug: "jezioro-piesieckie",
    title: "Jezioro Piesieckie — leśna perła w cieniu olsów",
    date: "2025-07-05",
    excerpt:
      "Jezioro Piesieckie to jedno z najcichszych i najdzikszych jezior w okolicach Woli Uhruskiej. Otoczone lasem i niemal nieznane szerszej publiczności — idealne dla tych, którzy cenią spokój i bliskość natury.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Pojezierze_%C5%81%C4%99czy%C5%84sko-W%C5%82odawskie_-_jezioro.jpg/1280px-Pojezierze_%C5%81%C4%99czy%C5%84sko-W%C5%82odawskie_-_jezioro.jpg",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Jezioro Piesieckie leży w sercu Pojezierza Łęczyńsko-Włodawskiego, zaledwie kilka kilometrów od Woli Uhruskiej. W przeciwieństwie do bardziej popularnych jezior regionu, Piesieckie zachowało swój dziki, nienaruszony charakter — brzegi porastają olsy i szuwary, a tafla wody odbija korony starych drzew.",
      },
      {
        type: "heading",
        text: "Natura i ptaki",
      },
      {
        type: "paragraph",
        text: "Jezioro jest ostoją dla wielu gatunków ptaków wodno-błotnych. Wczesnym rankiem można tu usłyszeć bąka, zausznika i perkoza dwuczubego. Spokojne wody jeziora sprzyjają obserwacji przyrody — wystarczy usiąść cicho na brzegu i poczekać. Zbiornik jest też siedliskiem bobra europejskiego, którego żeremia widać miejscami przy brzegach.",
      },
      {
        type: "heading",
        text: "Spacer wokół jeziora",
      },
      {
        type: "paragraph",
        text: "Wokół jeziora prowadzi leśna ścieżka, którą można pokonać pieszo lub rowerem. Trasa jest płaska i niewymagająca — nadaje się dla całej rodziny, nawet z wózkiem. Po drodze mijamy podmokłe łąki, zarośla wierzbowe i fragmenty starego lasu olchowego.",
      },
      {
        type: "tip",
        text: "Wskazówka: Jezioro Piesieckie jest doskonałe na poranną wycieczkę rowerową z Nadbużańskiego Zakątka. Rowery dostępne są bezpłatnie dla gości obiektu — trasa zajmuje około 30–40 minut w jedną stronę.",
      },
    ],
  },
  {
    slug: "jezioro-husinne",
    title: "Jezioro Husinne — cisze, trzciny i niezapomniane wschody słońca",
    date: "2025-07-08",
    excerpt:
      "Jezioro Husinne to jedno z najpiękniejszych jezior Polesia — malownicze, spokojne i pełne życia. Szczególnie wyjątkowe o świcie, gdy mgła unosi się nad taflą wody, a słońce barwi niebo na odcienie różu i złota.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jezioro_Husinne.JPG/1280px-Jezioro_Husinne.JPG",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Jezioro Husinne leży niedaleko Woli Uhruskiej, wśród rozległych łąk i lasów Polesia Lubelskiego. To jezioro rynnowe o wydłużonym kształcie, otoczone szuwarami i grążelami — raj dla wędkarzy, fotografów przyrodniczych i wszystkich, którzy szukają ciszy z dala od zgiełku.",
      },
      {
        type: "heading",
        text: "Wędkarstwo i przyroda",
      },
      {
        type: "paragraph",
        text: "Jezioro Husinne słynie wśród miejscowych wędkarzy — żyją w nim szczupak, karaś, lin i leszcz. Wokół zbiornika bujnie rozrastają się trzciny i pałka wodna, które stanowią schronienie dla kaczek krzyżówek, łysek i chruścieli. Wczesnym rankiem nad jeziorem unosi się mgła, która w połączeniu ze wschodem słońca tworzy niezapomniany widok.",
      },
      {
        type: "heading",
        text: "Najlepszy czas na wizytę",
      },
      {
        type: "paragraph",
        text: "Jezioro Husinne zachwyca o każdej porze roku. Latem przyciąga kąpiących się i wędkarzy, jesienią — fotografów szukających mglistych poranków, a zimą, gdy zamarza, staje się naturalnym lodowiskiem i miejscem spacerów. Przełom lata i jesieni to szczególny czas — nad jeziorem zbierają się stada migrujących ptaków.",
      },
      {
        type: "tip",
        text: "Wskazówka: Wybierz się nad Husinne o wschodzie słońca — to najpiękniejsza pora dnia nad tym jeziorem. Warto zabrać aparat fotograficzny i lornetkę.",
      },
    ],
  },
  {
    slug: "rezerwat-zolwiowych-blot",
    title: "Rezerwat Żółwiowych Błot — tam, gdzie żyje żółw błotny",
    date: "2025-07-12",
    excerpt:
      "Rezerwat Żółwiowych Błot to jedno z nielicznych miejsc w Polsce, gdzie można spotkać dzikiego żółwia błotnego. Torfowiska, szuwary i podmokłe lasy kryją unikalny, pierwotny ekosystem Polesia Lubelskiego.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Emys_orbicularis_-_pond_turtle.jpg/1280px-Emys_orbicularis_-_pond_turtle.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Rezerwat Żółwiowych Błot jest jednym z najcenniejszych przyrodniczo obszarów Polesia Lubelskiego. Chroni torfowiska, bagna i podmokłe lasy zamieszkałe przez żółwia błotnego (Emys orbicularis) — gatunek zagrożony wyginięciem w Polsce, a będący symbolem naturalności tego regionu.",
      },
      {
        type: "heading",
        text: "Żółw błotny — skarb Polesia",
      },
      {
        type: "paragraph",
        text: "Żółw błotny to jedyny rodzimy europejski żółw lądowo-wodny — może żyć nawet 100 lat. W Polsce przetrwał tylko w kilku izolowanych ostojach, a Polesie Lubelskie jest jedną z najważniejszych. Spotkanie żółwia na ścieżce lub wygrzewającego się na kłodzie to jedno z tych doświadczeń, o których mówi się przez lata.",
      },
      {
        type: "heading",
        text: "Jak poruszać się po rezerwacie?",
      },
      {
        type: "paragraph",
        text: "Rezerwat jest dostępny dla turystów, jednak obowiązują tu zasady ochrony przyrody — należy trzymać się wyznaczonych ścieżek i nie płoszyć zwierząt. Najlepszy czas na wizytę to ciepłe, słoneczne dni od maja do września, gdy żółwie wygrzewają się na brzegach zbiorników i kłodach.",
      },
      {
        type: "tip",
        text: "Wskazówka: Jeśli spotkasz żółwia na drodze — nie podnoś go ani nie przenoś. Jeśli jest na jezdni i grozi mu niebezpieczeństwo, możesz go delikatnie przenieść w tym samym kierunku, w którym zmierzał.",
      },
      {
        type: "heading",
        text: "Inne atrakcje rezerwatu",
      },
      {
        type: "paragraph",
        text: "Poza żółwiami rezerwat jest ostoją wielu innych rzadkich gatunków: traszki grzebieniastej, kumaka nizinnego, bogatej entomofauny torfowiskowej oraz roślin chronionych takich jak rosiczka okrągłolistna. To raj dla przyrodników i fotografów natury.",
      },
    ],
  },
  {
    slug: "kapielisko-pompka",
    title: "Kąpielisko Pompka w Woli Uhruskiej — plaża tuż za rogiem",
    date: "2025-07-15",
    excerpt:
      "Kąpielisko Pompka to ulubione miejsce mieszkańców i gości Woli Uhruskiej — piaszczysta plaża nad starorzeczem Bugu, wypożyczalnia kajaków i sielski klimat wschodniej Polski w jednym miejscu.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wola_Uhruska_-_starorzecze_Bugu.jpg/1280px-Wola_Uhruska_-_starorzecze_Bugu.jpg",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Kąpielisko Pompka leży w Woli Uhruskiej, zaledwie 5 minut jazdy samochodem od Nadbużańskiego Zakątka. Zlokalizowane jest przy malowniczym starorzeczu rzeki Bug — spokojnym zbiorniku odciętym od głównego nurtu rzeki, otoczonym wierzbami i łąkami.",
      },
      {
        type: "heading",
        text: "Co znajdziesz na Pompce?",
      },
      {
        type: "paragraph",
        text: "Na kąpielisko składa się piaszczysta plaża z miejscem do leżakowania, strzeżone kąpielisko w sezonie letnim oraz wypożyczalnia kajaków i rowerów wodnych. To idealne miejsce dla rodzin z dziećmi — woda w starorzeczu jest spokojna i płytka, bez niebezpiecznych prądów typowych dla samego Bugu.",
      },
      {
        type: "heading",
        text: "Spływ kajakowy Bugiem",
      },
      {
        type: "paragraph",
        text: "Z Pompki można wypłynąć na spływ kajakowy Bugiem — lokalne firmy oferują organizację wycieczek z transportem powrotnym. To jedna z najpiękniejszych rzeczy, jakie można przeżyć w tej okolicy: kilka godzin na wodzie, dzikie brzegi, cisza i widoki, które zapierają dech.",
      },
      {
        type: "tip",
        text: "Wskazówka: W szczycie sezonu letniego plaża bywa zatłoczona w weekendy. Przyjeżdżaj w tygodniu lub wcześnie rano, by cieszyć się spokojem i uniknąć tłoku.",
      },
    ],
  },
  {
    slug: "chelm-podziemia-kredowe",
    title: "Chełm i Podziemia Kredowe — cuda pod ziemią",
    date: "2025-07-18",
    excerpt:
      "Pod Chełmem kryje się labirynt kredowych korytarzy drążonych przez wieki przez górników. Podziemia Kredowe to jedna z największych atrakcji turystycznych Lubelszczyzny — niezwykła wycieczka dla całej rodziny.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Che%C5%82m_-_podziemia_kredowe.JPG/1280px-Che%C5%82m_-_podziemia_kredowe.JPG",
    readTime: "5 min",
    sections: [
      {
        type: "paragraph",
        text: "Chełm to jedno z najstarszych miast wschodniej Polski, a pod jego ulicami kryje się prawdziwy skarb — labirynt podziemnych korytarzy wydrążonych w kredzie piszącej. Podziemia powstawały przez wieki, od średniowiecza aż po XX wiek, jako wyrobiska górnicze. Dziś udostępniony turyście fragment liczy ponad 2 km tras i jest jedną z największych atrakcji Lubelszczyzny.",
      },
      {
        type: "heading",
        text: "Jak wygląda zwiedzanie?",
      },
      {
        type: "paragraph",
        text: "Wycieczki odbywają się z przewodnikiem w grupach. Trasa wiedzie przez oświetlone korytarze na głębokości kilku metrów pod ziemią — temperatura w podziemiach wynosi stale około 9–10°C, więc warto zabrać sweter nawet latem. Po drodze oglądamy komory, szczeliny i ślady dawnej pracy górników, a przewodnik opowiada o historii i legendach miejsca.",
      },
      {
        type: "heading",
        text: "Naziemne atrakcje Chełma",
      },
      {
        type: "paragraph",
        text: "Chełm warto zwiedzać nie tylko pod ziemią. Na górce wapiennej górującej nad miastem stoi barokowa Bazylika Wniebowzięcia NMP — jedna z najpiękniejszych świątyń wschodniej Polski. W centrum zachowała się synagoga i ciekawa starówka z kamienicami pamiętającymi wielokulturową przeszłość miasta.",
      },
      {
        type: "tip",
        text: "Wskazówka: Podziemia Kredowe są bardzo popularne w weekendy. Rezerwuj bilety z wyprzedzeniem przez internet, szczególnie w sezonie letnim. Wejście dla dzieci w obniżonej cenie.",
      },
      {
        type: "heading",
        text: "Jak dojechać z Nadbużańskiego Zakątka?",
      },
      {
        type: "paragraph",
        text: "Chełm leży około 50 km od Woli Uhruskiej — to godzina jazdy spokojnymi, malowniczymi drogami przez Polesie. Warto połączyć wizytę w Podziemiach z obiadem w centrum miasta i zwiedzaniem bazyliki. Na całą wycieczkę warto zaplanować pół dnia.",
      },
    ],
  },
  {
    slug: "zajazd-gibson",
    title: "Zajazd Gibson — smaki wschodniej Polski w klimatycznym miejscu",
    date: "2025-07-22",
    excerpt:
      "Zajazd Gibson w okolicach Włodawy to kultowe miejsce w regionie — domowa kuchnia, serdeczna obsługa i klimat, który sprawia, że chce się wracać. Idealne miejsce na obiad podczas zwiedzania okolicy.",
    coverImage: "/atrakcje/IMG_9909.jpg",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Zajazd Gibson cieszy się wśród gości Nadbużańskiego Zakątka i turystów z całego regionu doskonałą renomą. To miejsce, w którym liczy się przede wszystkim to, co najważniejsze: smaczne jedzenie, duże porcje i ciepła, domowa atmosfera. Idealne na obiad po dniu aktywnego zwiedzania okolicy.",
      },
      {
        type: "heading",
        text: "Co warto zamówić?",
      },
      {
        type: "paragraph",
        text: "W menu znajdziesz klasyki polskiej kuchni: zupy (żurek, barszcz czerwony, rosół), dania mięsne (schabowy, pieczeń wieprzowa, żeberka), a także ryby i sezonowe propozycje. Wszystko przygotowane z lokalnych składników, w tradycyjny sposób. Porcje są duże — po obiedzie trudno myśleć o deserze.",
      },
      {
        type: "heading",
        text: "Klimat i otoczenie",
      },
      {
        type: "paragraph",
        text: "Zajazd ma typowy klimat wschodniopolski — drewniane elementy wystroju, ciepłe oświetlenie i spokój, który sprzyja rozmowom. Latem można zjeść na zewnątrz w ogródku. To dobre miejsce na rodzinny obiad lub wieczorne wyjście z przyjaciółmi.",
      },
      {
        type: "tip",
        text: "Wskazówka: W weekendy i w sezonie letnim zajazd bywa zatłoczony. Warto zadzwonić z wyprzedzeniem i zarezerwować stolik, szczególnie na większą grupę.",
      },
    ],
  },
  {
    slug: "pizzeria-oaza",
    title: "Pizzeria Oaza — pizza i dobra kawa w sercu Polesia",
    date: "2025-07-25",
    excerpt:
      "Pizzeria Oaza to ulubione miejsce spotkań mieszkańców i turystów w okolicach Woli Uhruskiej. Dobra pizza, przyjazna atmosfera i wygodne położenie sprawiają, że chętnie wracamy tu wieczorami.",
    coverImage: "/atrakcje/IMG_0373.jpg",
    readTime: "2 min",
    sections: [
      {
        type: "paragraph",
        text: "Pizzeria Oaza to jeden z tych lokali, które działają na zasadzie poczty pantoflowej — rzadko reklamowane, a zawsze pełne zadowolonych gości. Klimatyczne wnętrze, dobra muzyka i starannie przygotowana pizza sprawiają, że Oaza stała się ulubioną restauracją turystów odwiedzających okolice Woli Uhruskiej.",
      },
      {
        type: "heading",
        text: "Pizza i inne dania",
      },
      {
        type: "paragraph",
        text: "Menu opiera się na pizzach pieczonych w tradycyjnym piecu, z chrupiącym, cienkim ciastem i świeżymi składnikami. Obok pizzy znajdziesz też makarony, sałatki i proste przekąski. Kawa jest dobra — co w mniejszych miejscowościach nie jest wcale oczywiste.",
      },
      {
        type: "tip",
        text: "Wskazówka: Pizzeria Oaza to świetna opcja na wieczorne wyjście z Nadbużańskiego Zakątka — bez konieczności gotowania po całym dniu na świeżym powietrzu. Lokal jest niewielki, więc w weekend warto zarezerwować stolik.",
      },
    ],
  },
  {
    slug: "green-velo-polesie",
    title: "Green Velo — rowerem przez dzikie Polesie Lubelskie",
    date: "2025-07-10",
    excerpt:
      "Green Velo to jeden z najdłuższych i najpiękniejszych szlaków rowerowych w Polsce. Odcinek przez Polesie Lubelskie, przebiegający tuż obok Nadbużańskiego Zakątka, zachwyca dzikością przyrody i ciszą.",
    coverImage: "/atrakcje/IMG_4899.jpg",
    readTime: "5 min",
    sections: [
      {
        type: "paragraph",
        text: "Wschodni Szlak Rowerowy Green Velo to blisko 2000 km trasy biegnącej wzdłuż wschodniej granicy Polski — od Augustowa na północy aż po Bieszczady na południu. Odcinek lubelski, przebiegający przez Polesie i Dolinę Bugu, to jeden z najdzikszych i najbardziej malowniczych fragmentów całego szlaku.",
      },
      {
        type: "heading",
        text: "Trasa w okolicach Woli Uhruskiej",
      },
      {
        type: "paragraph",
        text: "Szlak przebiega zaledwie kilka minut od Nadbużańskiego Zakątka, co czyni obiekt idealną bazą wypadową dla rowerzystów. W okolicy można podjechać na północ — przez Włodawę w stronę Pojezierza Łęczyńsko-Włodawskiego — albo na południe, w kierunku Hrubieszowa przez malownicze łąki nadbużańskie.",
      },
      {
        type: "heading",
        text: "Co zobaczysz po drodze?",
      },
      {
        type: "paragraph",
        text: "Trasa prowadzi przez tereny o wyjątkowych walorach przyrodniczych: rozległe łąki z setkami gatunków roślin, lasy z leśnymi jeziorkami, widoki na nieuregulowany Bug z licznymi starorzeczami i wyspami. Co jakiś czas szlak zahacza o niewielkie wsie z drewnianymi cerkwiami i kościołami — żywe świadectwo wielokulturowej historii Polesia.",
      },
      {
        type: "tip",
        text: "Wskazówka: Rowery znajdziesz bezpośrednio w Nadbużańskim Zakątku — są dostępne bezpłatnie dla gości obiektu. To świetna okazja, by spróbować Green Velo bez konieczności przywożenia własnego sprzętu.",
      },
      {
        type: "heading",
        text: "Poziom trudności",
      },
      {
        type: "paragraph",
        text: "Odcinek przez Polesie Lubelskie jest stosunkowo płaski i nie wymaga zaawansowanego przygotowania fizycznego. Nawierzchnia jest zróżnicowana — asfalt, szutrowe drogi leśne i polne ścieżki — dlatego najlepiej sprawdzi się rower trekkingowy lub crossowy. Szlak jest dobrze oznakowany zielonymi tabliczkami z logo Green Velo.",
      },
    ],
  },
  {
    slug: "dolina-bugu",
    title: "Dolina Bugu — dzikie serce Polski Wschodniej",
    date: "2025-07-20",
    excerpt:
      "Bug to jedna z ostatnich dzikich rzek w Europie — nieuregulowana, kapryśna, pełna wysp i starorzeczy. Dolina Bugu oferuje niezapomniane przeżycia: spływy kajakowe, obserwację ptaków i absolutną ciszę.",
    coverImage: "/atrakcje/IMG_0003.jpg",
    readTime: "5 min",
    sections: [
      {
        type: "paragraph",
        text: "Rzeka Bug jest jedną z niewielu rzek w Europie, które płyną w swoim naturalnym, nieuregulowanym korycie. Nie ma tu betonowych nabrzeży ani kamiennych umocnień — rzeka meandruje swobodnie przez łąki i lasy, tworząc niezliczone wyspy, odsypiska i starorzecza. To raj dla przyrodników, fotografów i wszystkich szukających prawdziwej, nieskażonej natury.",
      },
      {
        type: "heading",
        text: "Spływy kajakowe",
      },
      {
        type: "paragraph",
        text: "Spływ kajakowy Bugiem to jedno z najpiękniejszych doświadczeń, jakie można przeżyć w tej okolicy. Spokojny nurt niesie kajak przez tereny praktycznie pozbawione śladów cywilizacji — po obu brzegach ciągną się dzikie łąki, gęste zarośla wierzbowe i lasy. Co jakiś czas można dobić do piaszczystej wyspy i odpocząć w zupełnej ciszy.",
      },
      {
        type: "tip",
        text: "Wskazówka: Lokalne firmy oferują organizację spływów z wypożyczeniem sprzętu i transportem powrotnym. Popularny odcinek to trasa z Horodła lub Dubienki do Włodawy — kilka godzin na wodzie, które zostają w pamięci na długo.",
      },
      {
        type: "heading",
        text: "Przyroda i ptaki",
      },
      {
        type: "paragraph",
        text: "Dolina Bugu jest jednym z ważniejszych korytarzy ekologicznych w Polsce. Gniazdują tu rzadkie gatunki ptaków: czajki, kuliki wielkie, rybitwy rzeczne, a wzdłuż rzeki można spotkać bobry i wydry. Wczesnym rankiem lub o zmierzchu warto zasiąść cicho na brzegu z lornetką — widowisko gwarantowane.",
      },
      {
        type: "heading",
        text: "Bug przy Nadbużańskim Zakątku",
      },
      {
        type: "paragraph",
        text: "Rzeka Bug płynie zaledwie 3 minuty spacerem od Nadbużańskiego Zakątka. Warto wybrać się tam o świcie, gdy łąki spowite są delikatną mgłą — to jeden z tych widoków, których nie zapomina się do końca życia. Wieczorem brzeg rzeki jest doskonałym miejscem na obserwację zachodzącego słońca i pierwszych gwiazd.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
