export interface Champion {
  name: string;
  record: string;
  date: string;
  wikiUrl: string;
  type?: "super" | "regular" | "interim";
}

export interface WeightClass {
  name: string;
  weight: string;
  wba?: Champion[];
  wbc?: Champion[];
  ibf?: Champion[];
  wbo?: Champion[];
}

export const weightClasses: WeightClass[] = [
  {
    name: "Heavyweight",
    weight: "+200 lb / +90.7 kg",
    wba: [
      {
        name: "Oleksandr Usyk",
        record: "24–0 (15 KO)",
        date: "September 25, 2021",
        wikiUrl: "https://en.wikipedia.org/wiki/Oleksandr_Usyk",
        type: "super",
      },
      {
        name: "Kubrat Pulev",
        record: "32–3 (14 KO)",
        date: "December 7, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Kubrat_Pulev",
        type: "regular",
      },
      {
        name: "Fabio Wardley",
        record: "19–0–1 (18 KO)",
        date: "June 7, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Fabio_Wardley",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Oleksandr Usyk",
        record: "24–0 (15 KO)",
        date: "May 18, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Oleksandr_Usyk",
      },
      {
        name: "Agit Kabayel",
        record: "26–0 (18 KO)",
        date: "February 22, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Agit_Kabayel",
        type: "interim",
      },
    ],
    ibf: [
      {
        name: "Oleksandr Usyk",
        record: "24–0 (15 KO)",
        date: "July 19, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Oleksandr_Usyk",
      },
    ],
    wbo: [
      {
        name: "Oleksandr Usyk",
        record: "24–0 (15 KO)",
        date: "September 25, 2021",
        wikiUrl: "https://en.wikipedia.org/wiki/Oleksandr_Usyk",
      },
      {
        name: "Joseph Parker",
        record: "35–3 (23 KO)",
        date: "March 8, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Joseph_Parker",
        type: "interim",
      },
    ],
  },
  {
    name: "Cruiserweight",
    weight: "200 lb / 90.7 kg",
    wba: [
      {
        name: "Gilberto Ramírez",
        record: "48–1 (30 KO)",
        date: "March 30, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Gilberto_Ram%C3%ADrez",
        type: "super",
      },
      {
        name: "Michał Cieślak",
        record: "28–2–0–1 (22 KO)",
        date: "June 28, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Micha%C5%82_Cie%C5%9Blak_(boxer)",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Badou Jack",
        record: "29–3–3 (17 KO)",
        date: "December 11, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Badou_Jack",
      },
    ],
    ibf: [
      {
        name: "Jai Opetaia",
        record: "28–0 (22 KO)",
        date: "May 18, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Jai_Opetaia",
      },
    ],
    wbo: [
      {
        name: "Gilberto Ramírez",
        record: "48–1 (30 KO)",
        date: "November 16, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Gilberto_Ram%C3%ADrez",
      },
    ],
  },
  {
    name: "Light Heavyweight",
    weight: "175 lb / 79.4 kg",
    wba: [
      {
        name: "Dmitry Bivol",
        record: "24–1 (12 KO)",
        date: "February 22, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Dmitry_Bivol",
        type: "super",
      },
      {
        name: "David Benavidez",
        record: "30–0 (24 KO)",
        date: "February 1, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/David_Benavidez",
        type: "regular",
      },
      {
        name: "Albert Ramírez",
        record: "22–0 (19 KO)",
        date: "August 8, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Albert_Ram%C3%ADrez",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "David Benavidez",
        record: "30–0 (24 KO)",
        date: "April 7, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/David_Benavidez",
      },
      {
        name: "Callum Smith",
        record: "31–2 (22 KO)",
        date: "February 22, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Callum_Smith",
        type: "interim",
      },
    ],
    ibf: [
      {
        name: "Dmitry Bivol",
        record: "24–1 (12 KO)",
        date: "February 22, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Dmitry_Bivol",
      },
    ],
    wbo: [
      {
        name: "Dmitry Bivol",
        record: "24–1 (12 KO)",
        date: "February 22, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Dmitry_Bivol",
      },
    ],
  },
  {
    name: "Super Middleweight",
    weight: "168 lb / 76.2 kg",
    wba: [
      {
        name: "Terence Crawford",
        record: "42–0 (31 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Terence_Crawford",
        type: "super",
      },
      {
        name: "Armando Reséndiz",
        record: "16–2 (11 KO)",
        date: "May 31, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Armando_Res%C3%A9ndiz",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Terence Crawford",
        record: "42–0 (31 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Terence_Crawford",
      },
      {
        name: "Christian M'billi",
        record: "29–0–1 (24 KO)",
        date: "June 27, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Christian_M%27billi",
        type: "interim",
      },
    ],
    ibf: [
      {
        name: "Terence Crawford",
        record: "42–0 (31 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Terence_Crawford",
      },
    ],
    wbo: [
      {
        name: "Terence Crawford",
        record: "42–0 (31 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Terence_Crawford",
      },
    ],
  },
  {
    name: "Middleweight",
    weight: "160 lb / 72.6 kg",
    wba: [
      {
        name: "Erislandy Lara",
        record: "31–3–3 (19 KO)",
        date: "May 1, 2021",
        wikiUrl: "https://en.wikipedia.org/wiki/Erislandy_Lara",
      },
    ],
    wbc: [
      {
        name: "Carlos Adames",
        record: "24–1–1 (18 KO)",
        date: "May 7, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Carlos_Adames",
      },
    ],
    ibf: [
      {
        name: "Janibek Alimkhanuly",
        record: "17–0 (12 KO)",
        date: "October 14, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Janibek_Alimkhanuly",
      },
    ],
    wbo: [
      {
        name: "Janibek Alimkhanuly",
        record: "17–0 (12 KO)",
        date: "August 26, 2022",
        wikiUrl: "https://en.wikipedia.org/wiki/Janibek_Alimkhanuly",
      },
    ],
  },
  {
    name: "Super Welterweight",
    weight: "154 lb / 69.9 kg",
    wba: [
      {
        name: "Abass Baraou",
        record: "17–1 (9 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Abass_Baraou",
      },
      {
        name: "Vergil Ortiz Jr.",
        record: "23–0 (21 KO)",
        date: "August 10, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Vergil_Ortiz_Jr.",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Sebastian Fundora",
        record: "23–1–1 (15 KO)",
        date: "March 30, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Sebastian_Fundora",
      },
    ],
    ibf: [
      {
        name: "Bakhram Murtazaliev",
        record: "23–0 (17 KO)",
        date: "April 6, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Bakhram_Murtazaliev",
      },
    ],
    wbo: [
      {
        name: "Xander Zayas",
        record: "22–0 (13 KO)",
        date: "July 26, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Xander_Zayas",
      },
    ],
  },
  {
    name: "Welterweight",
    weight: "147 lb / 66.7 kg",
    wba: [
      {
        name: "Rolando Romero",
        record: "17–2 (13 KO)",
        date: "August 1, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Rolando_Romero",
      },
    ],
    wbc: [
      {
        name: "Mario Barrios",
        record: "29–2–2 (18 KO)",
        date: "June 18, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Mario_Barrios",
      },
    ],
    ibf: [
      {
        name: "Lewis Crocker",
        record: "22–0 (11 KO)",
        date: "September 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Lewis_Crocker",
      },
    ],
    wbo: [
      {
        name: "Brian Norman Jr.",
        record: "28–0–0–2 (22 KO)",
        date: "August 12, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Brian_Norman_Jr.",
      },
    ],
  },
  {
    name: "Super Lightweight",
    weight: "140 lb / 63.5 kg",
    wba: [
      {
        name: "Gary Antuanne Russell",
        record: "18–1 (17 KO)",
        date: "March 1, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Gary_Antuanne_Russell",
      },
      {
        name: "Alessandro Riguccini",
        record: "31–0 (27 KO)",
        date: "July 11, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Alessandro_Riguccini",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Subriel Matías",
        record: "23–2 (22 KO)",
        date: "July 12, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Subriel_Mat%C3%ADas",
      },
    ],
    ibf: [
      {
        name: "Richardson Hitchins",
        record: "20–0 (8 KO)",
        date: "December 8, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Richardson_Hitchins",
      },
    ],
    wbo: [
      {
        name: "Teofimo Lopez",
        record: "22–1 (13 KO)",
        date: "June 10, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Teofimo_Lopez",
      },
    ],
  },
  {
    name: "Lightweight",
    weight: "135 lb / 61.2 kg",
    wba: [
      {
        name: "Gervonta Davis",
        record: "30–0–1 (28 KO)",
        date: "November 29, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Gervonta_Davis",
      },
    ],
    wbc: [
      {
        name: "Shakur Stevenson",
        record: "24–0 (11 KO)",
        date: "November 16, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Shakur_Stevenson",
      },
    ],
    ibf: [
      {
        name: "Raymond Muratalla",
        record: "23–0 (17 KO)",
        date: "June 9, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Raymond_Muratalla",
      },
    ],
  },
  {
    name: "Super Featherweight",
    weight: "130 lb / 59 kg",
    wba: [
      {
        name: "Lamont Roach Jr.",
        record: "25–1–2 (10 KO)",
        date: "November 25, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Lamont_Roach_Jr.",
      },
      {
        name: "Jazza Dickens",
        record: "36–5 (15 KO)",
        date: "July 2, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Jazza_Dickens",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "O'Shaquie Foster",
        record: "23–3 (12 KO)",
        date: "November 2, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/O%27Shaquie_Foster",
      },
    ],
    ibf: [
      {
        name: "Eduardo Núñez",
        record: "29–1 (27 KO)",
        date: "May 28, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Eduardo_N%C3%BA%C3%B1ez_(boxer)",
      },
    ],
    wbo: [
      {
        name: "Emanuel Navarrete",
        record: "39–2–1–1 (32 KO)",
        date: "August 12, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Emanuel_Navarrete",
      },
    ],
  },
  {
    name: "Featherweight",
    weight: "126 lb / 57.2 kg",
    wba: [
      {
        name: "Nick Ball",
        record: "23–0–1 (13 KO)",
        date: "June 1, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Nick_Ball_(boxer)",
      },
      {
        name: "Mirco Cuello",
        record: "16–0 (13 KO)",
        date: "August 8, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Mirco_Cuello",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Stephen Fulton",
        record: "23–1 (8 KO)",
        date: "February 1, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Stephen_Fulton_(boxer)",
      },
      {
        name: "Bruce Carrington",
        record: "16–0 (9 KO)",
        date: "July 26, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Bruce_Carrington",
        type: "interim",
      },
    ],
    ibf: [
      {
        name: "Angelo Leo",
        record: "26–1 (12 KO)",
        date: "August 10, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Angelo_Leo",
      },
    ],
    wbo: [
      {
        name: "Rafael Espinoza",
        record: "27–0 (23 KO)",
        date: "December 9, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Rafael_Espinoza",
      },
    ],
  },
  {
    name: "Super Bantamweight",
    weight: "122 lb / 55.3 kg",
    wba: [
      {
        name: "Naoya Inoue",
        record: "31–0 (27 KO)",
        date: "December 26, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Naoya_Inoue",
        type: "super",
      },
    ],
    wbc: [
      {
        name: "Naoya Inoue",
        record: "31–0 (27 KO)",
        date: "July 25, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Naoya_Inoue",
      },
    ],
    ibf: [
      {
        name: "Naoya Inoue",
        record: "31–0 (27 KO)",
        date: "December 26, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Naoya_Inoue",
      },
    ],
    wbo: [
      {
        name: "Naoya Inoue",
        record: "31–0 (27 KO)",
        date: "July 25, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Naoya_Inoue",
      },
    ],
  },
  {
    name: "Bantamweight",
    weight: "118 lb / 53.5 kg",
    wba: [
      {
        name: "Antonio Vargas",
        record: "19–1–1–1 (11 KO)",
        date: "May 17, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Antonio_Vargas_(boxer)",
      },
      {
        name: "Nonito Donaire",
        record: "43–8 (28 KO)",
        date: "June 14, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Nonito_Donaire",
        type: "interim",
      },
    ],
    wbo: [
      {
        name: "Christian Medina",
        record: "26–4 (19 KO)",
        date: "September 14, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Christian_Medina",
      },
    ],
  },
  {
    name: "Super Flyweight",
    weight: "115 lb / 52.2 kg",
    wba: [
      {
        name: "Fernando Martínez",
        record: "18–0 (9 KO)",
        date: "July 7, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Fernando_Mart%C3%ADnez_(boxer)",
      },
      {
        name: "David Jiménez",
        record: "18–1 (12 KO)",
        date: "April 20, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/David_Jim%C3%A9nez_(boxer)",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Jesse Rodriguez",
        record: "22–0 (15 KO)",
        date: "June 29, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Jesse_Rodriguez_(boxer)",
      },
    ],
    ibf: [
      {
        name: "Willibaldo García",
        record: "23–5–2–1 (13 KO)",
        date: "May 23, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Willibaldo_Garc%C3%ADa",
      },
    ],
    wbo: [
      {
        name: "Jesse Rodriguez",
        record: "22–0 (15 KO)",
        date: "July 19, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Jesse_Rodriguez_(boxer)",
      },
    ],
  },
  {
    name: "Flyweight",
    weight: "112 lb / 50.8 kg",
    wba: [
      {
        name: "Ricardo Sandoval",
        record: "27–2 (18 KO)",
        date: "July 30, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Ricardo_Sandoval",
      },
      {
        name: "Galal Yafai",
        record: "9–0–0–1 (7 KO)",
        date: "July 26, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Galal_Yafai",
        type: "interim",
      },
    ],
    wbc: [
      {
        name: "Ricardo Sandoval",
        record: "27–2 (18 KO)",
        date: "July 30, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Ricardo_Sandoval",
      },
    ],
    ibf: [
      {
        name: "Masamichi Yabuki",
        record: "18–4 (17 KO)",
        date: "March 29, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Masamichi_Yabuki",
      },
    ],
    wbo: [
      {
        name: "Anthony Olascuaga",
        record: "10–1 (7 KO)",
        date: "July 20, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Anthony_Olascuaga",
      },
    ],
  },
  {
    name: "Light Flyweight",
    weight: "108 lb / 49 kg",
    wba: [
      {
        name: "Kyosuke Takami",
        record: "10–0 (8 KO)",
        date: "July 30, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Kyosuke_Takami",
      },
    ],
    wbc: [
      {
        name: "Carlos Cañizales",
        record: "28–3–1 (20 KO)",
        date: "August 1, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Carlos_Ca%C3%B1izales",
      },
    ],
    ibf: [
      {
        name: "Thanongsak Simsri",
        record: "39–1 (34 KO)",
        date: "June 19, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Thanongsak_Simsri",
      },
    ],
    wbo: [
      {
        name: "René Santiago",
        record: "13–4 (9 KO)",
        date: "March 13, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Ren%C3%A9_Santiago",
      },
    ],
  },
  {
    name: "Minimumweight",
    weight: "105 lb / 47.6 kg",
    wba: [
      {
        name: "Oscar Collazo",
        record: "13–0 (10 KO)",
        date: "November 16, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Oscar_Collazo_(boxer)",
        type: "super",
      },
      {
        name: "Ryūsei Matsumoto",
        record: "7–0 (5 KO)",
        date: "September 14, 2025",
        wikiUrl: "https://en.wikipedia.org/wiki/Ry%C5%ABsei_Matsumoto",
        type: "regular",
      },
    ],
    wbc: [
      {
        name: "Melvin Jerusalem",
        record: "23–3 (12 KO)",
        date: "March 31, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Melvin_Jerusalem",
      },
    ],
    ibf: [
      {
        name: "Pedro Taduran",
        record: "18–4–1 (13 KO)",
        date: "July 28, 2024",
        wikiUrl: "https://en.wikipedia.org/wiki/Pedro_Taduran",
      },
    ],
    wbo: [
      {
        name: "Oscar Collazo",
        record: "13–0 (10 KO)",
        date: "May 27, 2023",
        wikiUrl: "https://en.wikipedia.org/wiki/Oscar_Collazo_(boxer)",
      },
    ],
  },
];
