import { FormControl } from "@angular/forms";

// Definición de la interfaz Anime
export interface Anime {
  names: string[];
  audio: string;
  form?: FormControl
}

export const animes: Anime[] = [
  { names: ["Yamada-kun to Lv999 no Koi wo Suru"], audio: "au_0" },
  { names: ["Hunter x Hunter"], audio: "au_1" },
  { names: ["Jujutsu Kaisen"], audio: "au_2" },
  { names: ["Shinseiki Evangelion", "Neon Genesis Evangelion"], audio: "au_3" },
  { names: ["Bishoujo Senshi Sailor Moon", "Sailor Moon"], audio: "au_4" },
  { names: ["Spy x Family"], audio: "au_5" },
  { names: ["Tokyo Revengers"], audio: "au_6" },
  { names: ["Cardcaptor Sakura"], audio: "au_7" },
  { names: ["Kimetsu no Yaiba"], audio: "au_8" },
  { names: ["Kusuriya no Hitorigoto"], audio: "au_9" },
  { names: ["Sousou no Frieren"], audio: "au_10" },
  { names: ["Toradora!"], audio: "au_11" },
  { names: ["One Piece"], audio: "au_12" },
  { names: ["Bakemonogatari"], audio: "au_13" },
  { names: ["Sword Art Online"], audio: "au_14" },
  { names: ["Shingeki no Kyojin", "Attack on titan"], audio: "au_15" },
  { names: ["Oshi no Ko"], audio: "au_16" },
  { names: ["Noragami"], audio: "au_17" }
];
