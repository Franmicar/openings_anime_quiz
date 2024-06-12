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
  { names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_15" },
  { names: ["Oshi no Ko"], audio: "au_16" },
  { names: ["Noragami"], audio: "au_17" },
  { names: ["Overlord"], audio: "au_18" },
  { names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_19" },
  { names: ["Mushoku Tensei: Isekai Ittara Honki Dasu", "Mushoku Tensei: Jobless Reincarnation"], audio: "au_20" },
  { names: ["No Game No Life"], audio: "au_21" },
  { names: ["Doraemon"], audio: "au_22" },
  { names: ["Digimon"], audio: "au_23" },
  { names: ["Pokemon"], audio: "au_24" },
  { names: ["Slayers"], audio: "au_25" },
  { names: ["Naruto"], audio: "au_26" },
  { names: ["Naruto Shippuden", "Naruto: Shippuden"], audio: "au_27" },
  { names: ["Jigokuraku", "Hell's Paradise"], audio: "au_28" },
  { names: ["Undead Unluck"], audio: "au_29" },
  { names: ["Tengoku Daimakyou"], audio: "au_30" },
  { names: ["Dragon Ball"], audio: "au_31" },
  { names: ["Dragon Ball Z"], audio: "au_32" },
  { names: ["Dragon Ball GT"], audio: "au_33" },
  { names: ["Death Parade"], audio: "au_34" },
  { names: ["Death Note"], audio: "au_35" },
  { names: ["Parasyte", "Kiseijuu: Sei no Kakuritsu"], audio: "au_36" }
];
