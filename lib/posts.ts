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
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Jezioro_Bia%C5%82e%2C_Okuninka_~22jatnwr.jpg",
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
    slug: "jezioro-piaseczno",
    title: "Jezioro Piaseczno — szmaragdowa perła Pojezierza Łęczyńsko-Włodawskiego",
    date: "2025-07-05",
    excerpt:
      "Jezioro Piaseczno to jedno z najpiękniejszych jezior na Pojezierzu Łęczyńsko-Włodawskim — krystalicznie czysta woda, piaszczyste plaże i otaczający je sosnowy las tworzą wyjątkowe miejsce na letni wypoczynek.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Jezioro_piaseczno_lubelskie_leczna.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Jezioro Piaseczno leży na Pojezierzu Łęczyńsko-Włodawskim, w okolicach Łęcznej, i należy do grupy najczystszych jezior Lubelszczyzny. Jego wody mają charakterystyczny szmaragdowo-turkusowy kolor wynikający z dużej przejrzystości i specyficznego składu mineralnego. Wokół jeziora rozciągają się sosnowe lasy pełne grzybów i jagód.",
      },
      {
        type: "heading",
        text: "Plaża i kąpielisko",
      },
      {
        type: "paragraph",
        text: "Nad Piasecznem urządzone jest kąpielisko z piaszczystą plażą — idealne dla rodzin z dziećmi. Plaża jest dobrze zagospodarowana: są leżaki, infrastruktura sanitarna i miejsca do grillowania. Woda jest czysta i ciepła w sezonie letnim, a łagodne zejście do wody sprawia, że kąpiel jest bezpieczna nawet dla najmłodszych.",
      },
      {
        type: "heading",
        text: "Wędkarstwo i sporty wodne",
      },
      {
        type: "paragraph",
        text: "Jezioro Piaseczno jest też chętnie odwiedzane przez wędkarzy — żyją w nim szczupak, okoń, leszcz i węgorz. Można tu też wypożyczyć kajaki i rowery wodne, by odkrywać jezioro z perspektywy wody. Wokół jeziora poprowadzona jest ścieżka rowerowa, łącząca je z innymi jeziorami pojezierza.",
      },
      {
        type: "tip",
        text: "Wskazówka: Jezioro Piaseczno leży około 50 km od Nadbużańskiego Zakątka. Warto połączyć wizytę z przejazdem szlakiem rowerowym przez okoliczne lasy — to niezapomniana trasa przez serce Lubelszczyzny.",
      },
    ],
  },
  {
    slug: "zalew-husynne",
    title: "Zalew Husynne — spokojna tafla wody w dolinie Bugu",
    date: "2025-07-08",
    excerpt:
      "Zalew Husynne to malowniczy zbiornik wodny w gminie Dorohusk, otoczony łąkami i starorzeczami Bugu. Ciche, nieturystyczne miejsce idealne dla wędkarzy, miłośników przyrody i tych, którzy szukają spokoju.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Zalew_Husynne.jpg",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Zalew Husynne leży w gminie Dorohusk, niedaleko Chełma, wśród rozległych łąk i lasów nadburzańskich. To sztuczny zbiornik retencyjny o malowniczym, naturalnym charakterze — brzegi porastają wierzby i szuwary, a lustro wody spokojnie odbija otaczające pejzaże.",
      },
      {
        type: "heading",
        text: "Wędkarstwo",
      },
      {
        type: "paragraph",
        text: "Zalew Husynne jest doskonałym miejscem dla wędkarzy — żyją w nim karp, szczupak, lin, karaś i leszcz. Spokojne, niezbyt głębokie wody sprzyjają połowom przez cały sezon. Nad zalewem można spędzić spokojne godziny z wędką, z dala od zgiełku popularnych ośrodków turystycznych.",
      },
      {
        type: "heading",
        text: "Przyroda i okolica",
      },
      {
        type: "paragraph",
        text: "W okolicach zalewu żyją liczne gatunki ptaków wodno-błotnych: czaple, łyski, kaczki i perkozy. Wiosną i jesienią zatrzymują się tu ptaki migrujące — to atrakcja dla obserwatorów przyrody z lornetką. Okolica jest też piękna rowerowo — teren płaski, drogi spokojne, pejzaże nadburzańskie na każdym kroku.",
      },
      {
        type: "tip",
        text: "Wskazówka: Zalew Husynne jest stosunkowo mało znany turystycznie, co jest jego największą zaletą. Przyjedź tu, gdy popularne jeziora regionu są pełne ludzi — tutaj zawsze znajdziesz spokój i ciszę.",
      },
    ],
  },
  {
    slug: "jezioro-bialskie",
    title: "Jezioro Bialskie — leśne jezioro w okolicach Parczewa",
    date: "2025-07-09",
    excerpt:
      "Jezioro Bialskie koło Parczewa to jedno z najpiękniejszych jezior Polesia — otoczone lasem sosnowym, z czystą wodą i piaszczystymi plażami. Idealne miejsce na jednodniową wycieczkę z Nadbużańskiego Zakątka.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Jezioro_Bialskie.JPG/1280px-Jezioro_Bialskie.JPG",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Jezioro Bialskie (zwane też Białką Parczewską) leży we wsi Białka w gminie Dębowa Kłoda, niedaleko Parczewa. Otoczone rozległym kompleksem leśnym Lasów Parczewskich, zachowało dziki, nienaruszony charakter — to jedno z tych miejsc, w których czas zdaje się zatrzymywać.",
      },
      {
        type: "heading",
        text: "Czysta woda i piaszczyste plaże",
      },
      {
        type: "paragraph",
        text: "Jezioro słynie z wyjątkowo czystej wody i piaszczystego dna. Nad brzegiem urządzone jest kąpielisko z plażą, chętnie odwiedzane przez rodziny z dziećmi i miłośników aktywnego wypoczynku. Las sosnowy otaczający jezioro daje przyjemny cień w upalne dni i wypełnia powietrze zapachem żywicy.",
      },
      {
        type: "heading",
        text: "Lasy Parczewskie",
      },
      {
        type: "paragraph",
        text: "Jezioro Bialskie leży w centrum Lasów Parczewskich — rozległego kompleksu borów sosnowych słynącego z bogatych grzybobrań. Jesienią okolice jeziora są rajem dla grzybiarzy. Przez lasy prowadzą szlaki piesze i rowerowe, którymi można dotrzeć do kolejnych jezior i leśnych osad.",
      },
      {
        type: "tip",
        text: "Wskazówka: Z Nadbużańskiego Zakątka do Jeziora Bialskiego jedzie się około godziny przez Włodawę i Parczew. Warto połączyć wycieczkę ze zwiedzaniem Parczewa i przejażdżką rowerową po Lasach Parczewskich.",
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
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Emys_orbicularis_2016_06.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Starorzecze_Bugu.jpg/960px-Starorzecze_Bugu.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Podziemia_kredowe_II.jpg",
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
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wola_Uhruska%2C_Zajazd_Gibson_-_fotopolska.eu_%28224067%29.jpg",
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
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
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
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/4/43/Green_Velo_odcinek_Frombork_-_R%C3%B3%C5%BCaniec.jpg",
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
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/01/Wola_Uhruska_-_fotopolska.eu_%28224117%29.jpg",
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
  {
    slug: "sobiborski-park-krajobrazowy",
    title: "Sobiborski Park Krajobrazowy — dzika przyroda Polesia",
    date: "2025-07-26",
    excerpt:
      "Sobiborski Park Krajobrazowy to rozległy obszar leśny i torfowiskowy w sercu Polesia Lubelskiego. Nieskażona przyroda, rzadkie gatunki roślin i zwierząt oraz sieć szlaków pieszych i rowerowych — raj dla miłośników natury.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/PL_%C5%BB%C3%B3%C5%82wiowe_B%C5%82ota_nature_reserve_1.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Sobiborski Park Krajobrazowy obejmuje ponad 40 000 hektarów lasów, torfowisk i mokradeł na wschodzie Lubelszczyzny. To jeden z najdzikszych i najsłabiej zaludnionych obszarów w Polsce — miejsce, gdzie natura rządzi się własnymi prawami, a człowiek jest jedynie gościem.",
      },
      {
        type: "heading",
        text: "Torfowiska i mokradła",
      },
      {
        type: "paragraph",
        text: "Sercem parku są rozległe torfowiska i bagna — siedliska wyjątkowo rzadkich gatunków roślin i zwierząt. Rosiczki, żurawiny i bagno zwyczajne tworzą tu niepowtarzalne ekosystemy. W podmokłych lasach olchowych i brzozowych żyją żuraw, bocian czarny i bielik — jedne z najbardziej majestatycznych ptaków Europy.",
      },
      {
        type: "heading",
        text: "Szlaki i aktywny wypoczynek",
      },
      {
        type: "paragraph",
        text: "Przez park prowadzi sieć szlaków pieszych i rowerowych, w tym fragment Green Velo. Trasy są zróżnicowane — od krótkich spacerów po całodniowe wędrówki. Po drodze mijamy leśne jeziorka, rezerwaty przyrody i spokojne wioski, w których czas zdaje się stać w miejscu.",
      },
      {
        type: "tip",
        text: "Wskazówka: Zabierz ze sobą środek na komary — to nieodłączny element poleskiego klimatu, szczególnie w pobliżu mokradeł. W zamian dostaniesz absolutną ciszę i widoki, których nie znajdziesz nigdzie indziej.",
      },
      {
        type: "heading",
        text: "Żółwiowe Błota — rezerwat w parku",
      },
      {
        type: "paragraph",
        text: "W granicach parku leży rezerwat Żółwiowe Błota — jedno z nielicznych miejsc w Polsce, gdzie w naturze żyje żółw błotny. Spacer ścieżką rezerwatu to niezwykłe przeżycie: podmokły las, śpiew ptaków i szansa na spotkanie z tym rzadkim gadem.",
      },
    ],
  },
  {
    slug: "wieza-widokowa-wola-uhruska",
    title: "Wieża widokowa w Woli Uhruskiej — panorama Doliny Bugu",
    date: "2025-07-27",
    excerpt:
      "Z wieży widokowej w Woli Uhruskiej rozciąga się zapierający dech widok na Dolinę Bugu — meandrującą rzekę, rozległe łąki i lasy po obu stronach granicy. To obowiązkowy punkt podczas wizyty w okolicy.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bug_w_okolicach_Husynnego.jpg",
    readTime: "2 min",
    sections: [
      {
        type: "paragraph",
        text: "Wieża widokowa w Woli Uhruskiej to punkt, od którego warto zacząć poznawanie okolicy. Ze szczytu roztacza się panorama Doliny Bugu — nieuregulowanej rzeki, która stanowi granicę polsko-ukraińską. W oddali widać rozległe łąki, lasy Polesia i starorzecza Bugu.",
      },
      {
        type: "heading",
        text: "Co widać z wieży?",
      },
      {
        type: "paragraph",
        text: "W pogodne dni z wieży można zobaczyć kilkadziesiąt kilometrów w każdą stronę. Rzeka Bug wije się w dole, tworząc malownicze meandry i wyspy. Po lewej stronie ciągną się Lasy Sobiborskie, po prawej — wsie i pola Polesia. O zachodzie słońca widok jest szczególnie magiczny — niebo płonie odcieniami czerwieni i pomarańczy.",
      },
      {
        type: "tip",
        text: "Wskazówka: Wieża widokowa jest bezpłatna i ogólnodostępna. Wybierz się tam wczesnym rankiem lub wieczorem — światło jest wtedy najpiękniejsze, a mgły nad rzeką tworzą niezapomniany nastrój.",
      },
    ],
  },
  {
    slug: "stacja-uhrusk",
    title: "Stacja Uhrusk — zabytkowy dworzec z wieżą ciśnień i parkiem",
    date: "2025-07-28",
    excerpt:
      "Odrestaurowana stacja kolejowa Uhrusk to jeden z najpiękniejszych zabytkowych dworców wschodniej Polski. Historyczny budynek z wieżą ciśnień, park i sąsiednie kąpielisko Pompka tworzą wyjątkowe miejsce na odpoczynek.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Wola_Uhruska%2C_Stacja_kolejowa_Uhrusk_-_fotopolska.eu_%28224294%29.jpg",
    readTime: "3 min",
    sections: [
      {
        type: "paragraph",
        text: "Stacja kolejowa Uhrusk to zabytkowy budynek z przełomu XIX i XX wieku, który przeszedł gruntowną rewitalizację. Dziś jest jednym z ładniejszych przykładów kolejowego dziedzictwa architektonicznego na Lubelszczyźnie — ceglany budynek z charakterystyczną wieżą ciśnień przyciąga fotografów i miłośników historii.",
      },
      {
        type: "heading",
        text: "Wieża ciśnień i architektura",
      },
      {
        type: "paragraph",
        text: "Nieodłącznym elementem kompleksu stacyjnego jest zabytkowa wieża ciśnień — budowla, która niegdyś zaopatrywała w wodę parowozy. Po renowacji stała się wizytówką miejscowości. Wokół stacji urządzono park ze ławkami i alejkami, tworząc przyjemne miejsce na spacer.",
      },
      {
        type: "heading",
        text: "Ośrodek Pompka w pobliżu",
      },
      {
        type: "paragraph",
        text: "Tuż obok stacji działa ośrodek i kąpielisko Pompka — razem tworzą idealne połączenie: historia i rekreacja w jednym miejscu. Po zwiedzaniu zabytkowego dworca można schłodzić się w starorzeczu Bugu lub wypożyczyć kajak i wyruszyć na wodną przygodę.",
      },
      {
        type: "tip",
        text: "Wskazówka: Stacja Uhrusk leży dosłownie 5 minut od Nadbużańskiego Zakątka. Warto wybrać się tam na rowerowy spacer — klimatyczny budynek i park to świetne tło do zdjęć.",
      },
    ],
  },
  {
    slug: "wlodawa-miasto-trzech-kultur",
    title: "Włodawa — miasto trzech kultur i synagoga z muzeum",
    date: "2025-07-29",
    excerpt:
      "Włodawa to jedno z najciekawszych miast wschodniej Polski — dawne miasto trzech kultur (polskiej, żydowskiej i ukraińskiej) z imponującym zespołem synagog, barokowym kościołem i malowniczym rynkiem nad Bugiem.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/W%C5%82odawa%2C_zesp%C3%B3%C5%82_synagogi%2C_XVIII%2C_XIX_ccc.JPG",
    readTime: "5 min",
    sections: [
      {
        type: "paragraph",
        text: "Włodawa leży nad Bugiem, 15 km od Nadbużańskiego Zakątka, i jest jednym z najcenniejszych pod względem historycznym miast Lubelszczyzny. Przez wieki zamieszkiwali ją Polacy, Żydzi i Ukraińcy — każda z tych społeczności zostawiła po sobie trwały ślad w architekturze i kulturze miasta.",
      },
      {
        type: "heading",
        text: "Zespół synagog i muzeum",
      },
      {
        type: "paragraph",
        text: "Największą atrakcją Włodawy jest imponujący zespół synagog z XVIII i XIX wieku — jeden z najlepiej zachowanych tego typu kompleksów w Polsce. W budynkach mieści się Muzeum Pojezierza Łęczyńsko-Włodawskiego z bogatymi zbiorami dotyczącymi historii regionu i społeczności żydowskiej. Wielka Synagoga robi ogromne wrażenie zarówno z zewnątrz, jak i wewnątrz.",
      },
      {
        type: "heading",
        text: "Barokowy kościół św. Ludwika",
      },
      {
        type: "paragraph",
        text: "Naprzeciwko synagog stoi barokowy kościół św. Ludwika — piękna świątynia z XVII wieku z bogatym wystrojem wnętrza. To jeden z najcenniejszych przykładów baroku na wschodzie Polski. Obok kościoła mieści się klasztor paulinów, który wzbogaca architektoniczny krajobraz centrum.",
      },
      {
        type: "heading",
        text: "Rynek i starówka",
      },
      {
        type: "paragraph",
        text: "Centrum Włodawy tworzy malowniczy rynek z kamienicami pamiętającymi wielokulturową przeszłość. To przyjemne miejsce na kawę i spacer — miasto jest spokojne, niespieszne i autentyczne, bez turystycznego przepakowania. Warto zejść na bulwar nad Bugiem, skąd rozciąga się piękny widok na rzekę.",
      },
      {
        type: "tip",
        text: "Wskazówka: Muzeum w synagodze jest czynne od wtorku do niedzieli. Warto zaplanować wizytę na godziny poranne — po południu można połączyć ją z kąpielą na Jeziorze Białym w Okunince, które leży po drodze z powrotem.",
      },
    ],
  },
  {
    slug: "sobibor-miejsce-pamieci",
    title: "Sobibór — Muzeum i Miejsce Pamięci",
    date: "2025-07-30",
    excerpt:
      "Miejsce Pamięci w Sobiborze upamiętnia ofiary nazistowskiego obozu zagłady z okresu II wojny światowej. To ważne i poruszające miejsce, które warto odwiedzić, by oddać hołd ofiarom i lepiej zrozumieć historię.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Neue_Gedenkallee_Oktober_2023_Gedenkst%C3%A4tte_Sobibor.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Sobibór to wieś w gminie Włodawa, 20 km od Nadbużańskiego Zakątka. W czasie II wojny światowej Niemcy zbudowali tu jeden z obozów zagłady akcji Reinhardt, w którym zginęło od 170 000 do 250 000 Żydów z Polski, Holandii, Francji, Czechosłowacji i innych krajów. W październiku 1943 roku więźniowie wzniecili zbrojne powstanie i uciekli — to jeden z nielicznych takich aktów oporu w historii Holokaustu.",
      },
      {
        type: "heading",
        text: "Muzeum i nowa ekspozycja",
      },
      {
        type: "paragraph",
        text: "W 2023 roku otwarto nowe Muzeum i Miejsce Pamięci w Sobiborze po gruntownej przebudowie i rozbudowie. Nowoczesna ekspozycja przybliża historię obozu, losy ofiar i historię powstania więźniów. Na terenie upamiętnienia zachowała się rampa kolejowa, po której transporty trafiały do obozu.",
      },
      {
        type: "heading",
        text: "Aleja pamięci",
      },
      {
        type: "paragraph",
        text: "Centralnym elementem miejsca pamięci jest nowa Aleja Upamiętnienia — cicha, pełna godności przestrzeń z kamieniami i tablicami poświęconymi ofiarom. To miejsce skłaniające do refleksji i zadumy. Każdego roku odbywają się tu uroczystości upamiętniające, w których udział biorą ocalali i ich rodziny z całego świata.",
      },
      {
        type: "tip",
        text: "Wskazówka: Wizytę w Sobiborze warto zaplanować z odpowiednią ilością czasu — co najmniej 2–3 godziny. Muzeum jest czynne od wtorku do niedzieli. Wstęp bezpłatny.",
      },
    ],
  },
  {
    slug: "chelm-bazylika-starowka",
    title: "Chełm — bazylika, starówka i Park Wodny",
    date: "2025-07-31",
    excerpt:
      "Chełm to wielowymiarowe miasto — obok słynnych Podziemi Kredowych kryje piękną bazylikę na wapiennym wzgórzu, klimatyczną starówkę i nowoczesny Park Wodny. Wystarczy na cały dzień zwiedzania.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/BAZYLIKA_NNMP_widok_z_Bramy_U%C5%9Bci%C5%82ugskiej.jpg",
    readTime: "4 min",
    sections: [
      {
        type: "paragraph",
        text: "Chełm jest powszechnie znany z Podziemi Kredowych, ale miasto ma do zaoferowania znacznie więcej. Wapienna górka, na której wyrosło miasto, skrywa piękną bazylikę, resztki średniowiecznego grodu i klimatyczną starówkę, która świetnie nadaje się na popołudniowy spacer.",
      },
      {
        type: "heading",
        text: "Bazylika Narodzenia NMP",
      },
      {
        type: "paragraph",
        text: "Na szczycie kredowego wzgórza stoi Bazylika Narodzenia Najświętszej Maryi Panny — jedna z najpiękniejszych barokowych świątyń wschodniej Polski. Budowana od XVII do XVIII wieku, zachwyca bogatym wystrojem wnętrza i dominującą sylwetą widoczną z daleka. Z placu przy bazylice roztacza się panorama miasta i okolic.",
      },
      {
        type: "heading",
        text: "Wysoka Górka i grodzisko",
      },
      {
        type: "paragraph",
        text: "Obok bazyliki można zwiedzić pozostałości Wysokiej Górki — dawnego grodu Daniela Halickiego z XIII wieku. To jedno z najstarszych miejsc w historii Chełma, z którego roztaczał się strategiczny widok na okolicę. Teren jest zagospodarowany jako park historyczny z tablicami informacyjnymi.",
      },
      {
        type: "heading",
        text: "Starówka i Plac Kupiecki",
      },
      {
        type: "paragraph",
        text: "Centrum Chełma tworzy zabytkowa starówka z odrestaurowanymi kamienicami i deptakiem. Plac Kupiecki to serce miasta — przyjemne miejsce na kawę i obserwowanie codziennego życia. W okolicy jest kilka dobrych restauracji i kawiarni, gdzie można odpocząć po zwiedzaniu.",
      },
      {
        type: "heading",
        text: "Chełmski Park Wodny",
      },
      {
        type: "paragraph",
        text: "Gdy pogoda nie sprzyja, świetną opcją jest Chełmski Park Wodny — nowoczesny aquapark z basenami, zjeżdżalniami i strefą spa. To idealne miejsce na rodzinny dzień, szczególnie w chłodniejsze dni lub w deszcz. Park Wodny jest dobrze wyposażony i czynny przez cały rok.",
      },
      {
        type: "tip",
        text: "Wskazówka: Chełm warto połączyć z wizytą w Podziemiach Kredowych — to osobny wpis na naszym blogu. Na całe miasto zaplanuj minimum 4–5 godzin. Parking dostępny przy centrum.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
