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
      "Krystalicznie czysta woda, piaszczyste plaże i sosnowy las tuż obok — Jezioro Białe to jedno z najpięniejszych miejsc na wypoczynek w Polsce Wschodniej, zaledwie 20 minut od Nadbużańskiego Zakątka.",
    coverImage: "/atrakcje/IMG_0069.jpg",
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
        text: "Szlak przebiega zaledwie kilka minut od Nadbużańskiego Zakątka, co czyni obiekt idealną bazą wypadową dla rowerzystów. W okolicy można podjechać na północ — przez Włodawę w stronę Pojezierza Łęczyńsko-Włodawskiego — albo na południe, w kierunku Hrubieszowa przez malownicze łąki nadburzańskie.",
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
