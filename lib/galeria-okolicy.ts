export type GaleriaPhoto = {
  src: string;
  alt: string;
  label: string;
  location?: string;
};

// Aby dodać nowe zdjęcia:
// 1. Wrzuć plik do /public/galeria-okolicy/
// 2. Dopisz wpis do tej tablicy

export const galeriaOkolicy: GaleriaPhoto[] = [
  {
    src: "/galeria-okolicy/wola-uhruska-panorama.jpg",
    alt: "Panorama Woli Uhruskiej z lotu ptaka",
    label: "Wola Uhruska z drona",
    location: "Wola Uhruska",
  },
  {
    src: "/galeria-okolicy/bug-meandry-z-drona.jpg",
    alt: "Meandry rzeki Bug z lotu ptaka",
    label: "Meandry Bugu",
    location: "Dolina Bugu",
  },
  {
    src: "/galeria-okolicy/kapielisko-pompka-plaza.jpg",
    alt: "Kąpielisko Pompka — plaża i wypożyczalnia kajaków",
    label: "Kąpielisko Pompka",
    location: "Wola Uhruska",
  },
  {
    src: "/galeria-okolicy/wieza-widokowa.jpg",
    alt: "Wieża widokowa w Woli Uhruskiej",
    label: "Wieża widokowa",
    location: "Wola Uhruska",
  },
  {
    src: "/galeria-okolicy/dab-bolko-hniszow.jpg",
    alt: "Dąb Bolko w Hniszowie z lotu ptaka",
    label: "Dąb Bolko",
    location: "Hniszów",
  },
  {
    src: "/galeria-okolicy/grzybobranie-borowik.jpg",
    alt: "Borowik zebrany w okolicznych lasach",
    label: "Grzybobranie — borowik",
    location: "Lasy Poleskie",
  },
  {
    src: "/galeria-okolicy/zachod-slonca-jezioro.jpg",
    alt: "Zachod slonca nad jeziorem",
    label: "Zachod slonca",
    location: "Okolice Woli Uhruskiej",
  },
  {
    src: "/galeria-okolicy/staw-pomost-lodka.jpg",
    alt: "Staw z pomostem i lodka",
    label: "Staw z pomostem",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/karpie-koi-staw.jpg",
    alt: "Karpie koi plywajace w stawie wsrod lilii wodnych",
    label: "Karpie koi",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/staw-zima-snieg.jpg",
    alt: "Staw zimą otoczony ośnieżonymi drzewami",
    label: "Staw zimą",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/jacuzzi-noc.jpg",
    alt: "Jacuzzi z fioletowym podswietleniem noca",
    label: "Jacuzzi nocą",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/ogrod-noc-lampki.jpg",
    alt: "Drzewo ozdobione lampkami nocą",
    label: "Ogrod nocą",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/hustawka-noc.jpg",
    alt: "Drewniana huśtawka nocą z kolorowymi lampkami",
    label: "Huśtawka nocą",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/agrest-krzew.jpg",
    alt: "Krzew agrestu z dojrzalymi owocami",
    label: "Agrest",
    location: "Sad owocowy",
  },
  {
    src: "/galeria-okolicy/maliny-krzew.jpg",
    alt: "Dojrzale maliny na krzewie",
    label: "Maliny",
    location: "Sad owocowy",
  },
  {
    src: "/galeria-okolicy/morwa-drzewo.jpg",
    alt: "Drzewo morwy z dojrzalymi czarnymi owocami",
    label: "Morwa",
    location: "Sad owocowy",
  },
  {
    src: "/galeria-okolicy/czeresnie-drzewo.jpg",
    alt: "Czereśnie na drzewie",
    label: "Czereśnie",
    location: "Sad owocowy",
  },
  {
    src: "/galeria-okolicy/borowki-krzew.jpg",
    alt: "Borówki amerykańskie na krzewie",
    label: "Borowki",
    location: "Sad owocowy",
  },
  {
    src: "/galeria-okolicy/poziomki-lesne.jpg",
    alt: "Dzikie poziomki rosnace w trawie",
    label: "Poziomki leśne",
    location: "Okolice",
  },
  {
    src: "/galeria-okolicy/szczupak-zimowy.jpg",
    alt: "Zlowiony szczupak na śniegu z wedka",
    label: "Szczupak — zimowy polow",
    location: "Wedkarstwo",
  },
  {
    src: "/galeria-okolicy/szczupak-duzy.jpg",
    alt: "Duzy szczupak zlowiony wedką",
    label: "Szczupak",
    location: "Wedkarstwo",
  },
  {
    src: "/galeria-okolicy/karp-podbierak.jpg",
    alt: "Karp w podbieraku na trawie",
    label: "Karp",
    location: "Wedkarstwo",
  },
  {
    src: "/galeria-okolicy/karp-zlowiony.jpg",
    alt: "Zlowiony karp na trawie",
    label: "Karp",
    location: "Wedkarstwo",
  },
  {
    src: "/galeria-okolicy/sandacz-zlowiony.jpg",
    alt: "Sandacz zlowiony w reku nad stawem",
    label: "Sandacz",
    location: "Wedkarstwo",
  },
  {
    src: "/galeria-okolicy/czubajka-grzyb.jpg",
    alt: "Czubajka kania rosnaca w trawie",
    label: "Czubajka kania",
    location: "Grzybobranie",
  },
  {
    src: "/galeria-okolicy/grzyby-podgrzybki.jpg",
    alt: "Podgrzybki w trawie",
    label: "Podgrzybki",
    location: "Grzybobranie",
  },
  {
    src: "/galeria-okolicy/czubajki-las.jpg",
    alt: "Czubajki kanie zebrane w lesie",
    label: "Czubajki kanie",
    location: "Grzybobranie",
  },
  {
    src: "/galeria-okolicy/domek-noc-staw.jpg",
    alt: "Domek nocą widoczny ze stawu z girlandami swiatelnymi",
    label: "Domek nocą",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/domek-staw-mostek.jpg",
    alt: "Domek widziany ze stawu przez drewniany mostek",
    label: "Domek od strony stawu",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/staw-swit-mgla.jpg",
    alt: "Staw o swicie we mgle z wedka",
    label: "Staw o swicie",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/staw-mgla-rano.jpg",
    alt: "Staw we mgle wczesnym rankiem",
    label: "Staw o poranku",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/glicynia-kwiaty.jpg",
    alt: "Glicynia z fioletowymi kwiatami",
    label: "Glicynia",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/sosna-ogrod.jpg",
    alt: "Mloda sosna w ogrodzie z domkiem w tle",
    label: "Ogrod",
    location: "Nadbuzanski Zakatek",
  },
  {
    src: "/galeria-okolicy/tecza-nad-polem.jpg",
    alt: "Tecza nad polami w okolicach Woli Uhruskiej",
    label: "Tecza",
    location: "Okolice Woli Uhruskiej",
  },
  {
    src: "/galeria-okolicy/rowery-ogrod.jpg",
    alt: "Dwa rowery w ogrodzie dostepne dla gosci",
    label: "Rowery",
    location: "Nadbuzanski Zakatek",
  },
];
