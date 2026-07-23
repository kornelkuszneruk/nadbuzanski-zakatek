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
];
