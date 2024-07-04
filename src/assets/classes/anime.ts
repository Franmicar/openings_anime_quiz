import { FormControl } from "@angular/forms";

// Definición de la interfaz Anime
export interface Anime {
  names: string[];
  audio: string;
  form?: FormControl;
  img?: string;
  video?: Object;
  pista?: string;
  n?: number;
}

export const animes: Anime[] = [
  {
    names: ["Yamada-kun to Lv999 no Koi wo Suru", "Yamada-kun to Lv999", "My Love Story with Yamada-kun at Lv999"],
    audio: "au_0", n: 1, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/mkxZXJN3zjI?si=noe7Lp225e128XW5', o: 'https://youtu.be/L5rL0pBzmAE?si=v0fEOuIOSRb8UxA_' }
  },
  {
    names: ["Hunter x Hunter"], audio: "au_1", n: 1,
    video: { ja: 'https://youtu.be/faqmNf_fZlE?si=YmEdONdkbGCGmmvV', f: 'https://youtu.be/6q3gd47tTVw?si=tzilzK-LYmCo7wpD' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_2", n: 1,
    video: { ja: 'https://youtu.be/GwaRztMaoY0?si=lZB4osTdQyICzkZB', f: 'https://youtu.be/_LWXAPywCV4?si=mJCMIheI6j-BX19n' }
  },
  {
    names: ["Shinseiki Evangelion", "Neon Genesis Evangelion"], audio: "au_3", n: 1,
    video: { ja: 'https://youtu.be/fShlVhCfHig?si=2pYs9AxiyZ8aXPOb', f: 'https://youtu.be/o6wtDPVkKqI?si=t4BL-QCkraDjkqsE' }
  },
  {
    names: ["Bishoujo Senshi Sailor Moon", "Sailor Moon"], audio: "au_4", n: 1,
    video: {
      ja: 'https://youtu.be/LGQCPOMcYJQ?si=glup5LzJ0bzZwRVh',
      es: 'https://youtu.be/wbbaisQFKKw?si=YBNzS9GYInsbmB-0',
      f: 'https://youtu.be/7LywczXfwZE?si=pJBbVFhN41aiYrzg'
    }
  },
  {
    names: ["Spy x Family"], audio: "au_5", n: 3,
    video: { ja: 'https://youtu.be/JqUsUe6B43g?si=G-xAJy0As1dXCIPD', o: 'https://youtu.be/W_fHWaoQwkw?si=U3KssGhwM0PFkzwE' }
  },
  {
    names: ["Tokyo Revengers"], audio: "au_6", n: 2,
    video: { ja: 'https://youtu.be/keFRueltLIU?si=uQ5V340AOy81kEDo', o: 'https://youtu.be/_ciQX22n9NE?si=z-GzToUpxzLU79iD' }
  },
  {
    names: ["Cardcaptor Sakura", "Sakura, cazadora de cartas"], audio: "au_7", n: 1,
    video: { ja: 'https://youtu.be/nTQD3ulK4yM?si=KelnURepHUZBaePQ', f: 'https://youtu.be/6gpcPYDkPdg?si=qjh8QwhXoddfB7DK' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_8", n: 4,
    video: { ja: 'https://youtu.be/OWBCIRhly4U?si=Y7KWfbuyX9ZMolGx', o: 'https://youtu.be/Jb6Zlg30rgk?si=NRzEpd0SqxXJYyEx' }
  },
  {
    names: ["Kusuriya no Hitorigoto", "The Apothecary Diaries"], audio: "au_9", n: 1,
    video: { ja: 'https://youtu.be/E3QN_uoHysA?si=gi6dB1EESr8PA34p', o: 'https://youtu.be/v-WcMQbXbKY?si=FLjiEUQ8eP5VWujF' }
  },
  {
    names: ["Sousou no Frieren", "Frieren: Beyond Journey's End"], audio: "au_10", n: 1,
    video: { ja: 'https://youtu.be/QoGM9hCxr4k?si=bwCYPzioZg2n2shA', f: 'https://youtu.be/OIBODIPC_8Y?si=K4fpOTp06NB_8Wol' }
  },
  {
    names: ["Toradora!"], audio: "au_11", n: 1,
    video: { ja: 'https://youtu.be/BDoNRDqgmT0?si=8KUSGOgG4pRU_usM', f: 'https://youtu.be/lwvS3hggTEg?si=yhn8LK-eS21Cd2tK' }
  },
  {
    names: ["One Piece"], audio: "au_12", n: 18,
    video: { ja: 'https://youtu.be/sqUL59PiRbg?si=Gbx9jfVKCT6XM0ku', o: 'https://youtu.be/6eHuPYOJ2ZE?si=27uEawQWUX1X8WNG' }
  },
  {
    names: ["Bakemonogatari"], audio: "au_13", n: 4,
    video: { ja: 'https://youtu.be/PiauQ7P7mtQ?si=mPaq9uTHWTwdqVez', f: 'https://youtu.be/uKxyLmbOc0Q?si=8Yk4gKVtRkHEsENt' }
  },
  {
    names: ["Sword Art Online", "SAO"], audio: "au_14", n: 1,
    video: { ja: 'https://youtu.be/Y4kfe8R1Iqs?si=fV5IecLM3gx2ki-z', o: 'https://youtu.be/KId6eunoiWk?si=_7pZ7sX2w70zYcMh' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_15", n: 1,
    video: { ja: 'https://youtu.be/ygeg6IiRmKA?si=XWvQVHCueAeYGEhQ', f: 'https://youtu.be/2B6nj38AdD0?si=bGYjV4do0P5eKsVL' }
  },
  {
    names: ["Oshi no Ko"], audio: "au_16", n: 1,
    video: { ja: 'https://youtu.be/ZYlaUrj2Zkk?si=Gwv1AH4nzL-dO_hC', f: 'https://youtu.be/ZRtdQ81jPUQ?si=xQQAJ3oAzoXeZy7L' }
  },
  {
    names: ["Noragami"], audio: "au_17", n: 2,
    video: { ja: 'https://youtu.be/3oFTHxkOzjE?si=tLpim5PIlzUrHLA9', o: 'https://youtu.be/C-o8pTi6vd8?si=jk6y7G3ExRu3nZHJ' }
  },
  {
    names: ["Overlord"], audio: "au_18", pista: "Summer 2015", n: 1,
    video: { ja: 'https://youtu.be/KOWcj7XKnfQ?si=afU90ZWpo2nJC7Ww', o: 'https://youtu.be/saah9UTwaUI?si=KJvFi4ZhbTgO4GWX' }
  },
  {
    names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_19", n: 3, pista: 'Summer 2020',
    video: {
      ja: "https://youtu.be/FmGGSI3zIRA?si=Qp233z3kGrXu1rkn",
      o: "https://youtu.be/uaRnwnmqrws?si=CglUImkaTsb_hKqe"
    }
  },
  {
    names: ["Mushoku Tensei: Isekai Ittara Honki Dasu", "Mushoku Tensei: Jobless Reincarnation",
      "Mushoku Tensei"], audio: "au_20", n: 2,
    video: { ja: 'https://youtu.be/hkcdLR_tdtA?si=Zx7Uw9ksnsxMqs3-', o: 'https://youtu.be/fE9trKOuT3Q?si=egbkYPywbHbFbUY3' }
  },
  {
    names: ["No Game No Life"], audio: "au_21", n: 1,
    video: { ja: 'https://youtu.be/6CBp4qylX6I?si=0i-VUSLubuUAFfI-', f: 'https://youtu.be/4a8XOwRzJC4?si=4bgqy1ok27bfF2Ks' }
  },
  {
    names: ["Doraemon"], audio: "au_22",
    video: {
      es: 'https://youtu.be/Al9VoanVRss?si=WEGVLjJF3fyRpYLs', cat: 'https://youtu.be/iEeL-X6xYzU?si=SEm8c5zbdHa9Zn5j',
      ja: 'https://youtu.be/mTmzuU-N62Y?si=egEtbubdcwr4FYld', f: 'https://youtu.be/s4pgnGqkNEU?si=P-zpYsi183sD7pPs'
    }
  },
  {
    names: ["Digimon 02"], audio: "au_23", n: 1,
    video: {
      es: 'https://youtu.be/d5Bc16yQLcI?si=bpBb5nfwDbtn4UCO', ja: 'https://youtu.be/WkHntdc3gKQ?si=A1k5dHV_0lpziClZ',
      f: 'https://youtu.be/LLhoDuVCKBE?si=3WMaoObL4EHD6zjY', fe: 'https://youtu.be/MSHCJif1XV0?si=G5-ouKgebGzvVam5'
    }
  },
  {
    names: ["Pokemon"], audio: "au_24", n: 1,
    video: {
      es: 'https://youtu.be/wvy-pO65GhQ?si=JMU7iC4oHQuMWDH-', ja: 'https://youtu.be/TZMoQjvoICE?si=pSvp0U9gL88I0Iwy',
      f: 'https://youtu.be/jbHG7fsZVkM?si=XQ6jFmYHHErs5hC8'
    }
  },
  {
    names: ["Slayers", 'Slayers NEXT'], audio: "au_25", n: 2,
    video: { ja: 'https://youtu.be/JnusURr9ArM?si=cX1qsnM6Fg_57XgT', o: 'https://youtu.be/kIS-ZvhZVmk?si=i-KRwB4p861MyzgV' }
  },
  {
    names: ["Naruto"], audio: "au_26", n: 4,
    video: {
      ja: 'https://youtu.be/xjBTNbEXbAA?si=cd0xUCUjnn4vnYX_', o: 'https://youtu.be/AE4b9jO1uB4?si=-H_4hWQwcaFxW3Wf',
      f: 'https://youtu.be/kV5UZvsvjcM?si=aKOAUQuMuecQtTQY'
    }
  },
  {
    names: ["Naruto Shippuden", "Naruto: Shippuden"], audio: "au_27", n: 16,
    video: { ja: 'https://youtu.be/zVgKnfN9i34?si=0h1Xvu3X9tVPNSLB', o: 'https://youtu.be/dlFA0Zq1k2A?si=JJVfWyS02nokoKlf' }
  },
  {
    names: ["Jigokuraku", "Hell's Paradise"], audio: "au_28", n: 1,
    video: {
      ja: 'https://youtu.be/04WuoQMhhxw?si=8WRkr-ET97omyFdl', o: 'https://youtu.be/dYzgZVhiqmU?si=qZ5xjYZz7p4yBn27',
      f: 'https://youtu.be/9oq4_PO2lIw?si=J1TrgT6KZ_p__cvC'
    }
  },
  {
    names: ["Undead Unluck"], audio: "au_29", n: 1,
    video: { ja: 'https://youtu.be/stzAsF51T_w?si=OnOSqtixCqRpBXhb', o: 'https://youtu.be/boq4EJv5YvM?si=HbQSIYgG0UzbWyXM' }
  },
  {
    names: ["Tengoku Daimakyou", 'Heavenly Delusion'], audio: "au_30", pista: "Spring 2023", n: 1,
    video: { ja: 'https://youtu.be/GuAcdIqcanA?si=csv89y__nwj_6Zf-', f: 'https://youtu.be/xTb2Dothdgk?si=PZAQ2yKfOXBLnJHV' }
  },
  {
    names: ["Dragon Ball", "As bolas maxicas", "As bolas máxicas"], audio: "au_31", n: 1,
    video: {
      es: 'https://youtu.be/dtD_xGvkWLk?si=zGGPM3wVv53utdMh', gl: 'https://youtu.be/aaqlIHdYhiM?si=G6VNliB-RLWmeGiP',
      ja: 'https://youtu.be/FJqGirLjQn4?si=5ZWKZVn5PLJGWgTD', f: 'https://youtu.be/Mmbc8E6rAmM?si=7giUql_gsyUoQYfQ'
    }
  },
  {
    names: ["Dragon Ball Z"], audio: "au_32", n: 2,
    video: {
      es: 'https://youtu.be/3HT60PKvrfM?si=4uMbDtx-cM3F5vmA', ja: 'https://youtu.be/ElqB359i_Os?si=tCBpDiMKUfjPt9RS',
      f: 'https://youtu.be/pYnLO7MVKno?si=cHHgARj-TeKT6My8'
    }
  },
  {
    names: ["Dragon Ball GT"], audio: "au_33", n: 1,
    video: {
      es: 'https://youtu.be/eEh8yzkFd8I?si=XXiIxUczpx6q1DRz', ja: 'https://youtu.be/DJcuDgVYjgI?si=1A8JRh1RV2_6jpvC',
      fe: 'https://youtu.be/lMTJt90mrwY?si=9LLORm8qPvoHgZCO', f: 'https://youtu.be/mTncQEr03u8?si=vCU4t4AA7QddhFPA'
    }
  },
  {
    names: ["Death Parade"], audio: "au_34", n: 1,
    video: { ja: 'https://youtu.be/Ca5Tf5BDSYI?si=ZVNQkWZihvoOvwu7', o: 'https://youtu.be/9wh8FgsEtNQ?si=EjXWonAJdfSyxpuJ' }
  },
  {
    names: ["Death Note"], audio: "au_35", n: 1,
    video: {
      ja: 'https://youtu.be/kNyR46eHDxE?si=vAG_Lyk4SVAPDOax', o: 'https://youtu.be/D7MMMNTQ7H0?si=xIeJ26YQaNhL5TlR',
      f: 'https://youtu.be/RvIx-SJvlNY?si=TzwzL9yWou3Yvjt9'
    }
  },
  {
    names: ["Parasyte", "Kiseijuu: Sei no Kakuritsu"], audio: "au_36", n: 1,
    video: { en: 'https://youtu.be/ziatgnrtG0Y?si=W1Gj5ioHAtsrTOu4', o: 'https://youtu.be/D-SQqppuGvc?si=ySSRR4yFM6S7LkWJ' }
  },
  {
    names: ["fullmetal Alchemist"], audio: "au_37", n: 1,
    video: {
      ja: 'https://youtu.be/-YoK0rosR2I?si=FXIex6SFKLG4HrXP', o: 'https://youtu.be/DXo_xX_Hqro?si=pymSKNZavz11kQjk',
      f: 'https://youtu.be/YzJcBq0xufI?si=QUekFiwq_HJeSTR1'
    }
  },
  {
    names: ["fullmetal Alchemist: Brotherhood"], audio: "au_38", n: 1,
    video: {
      ja: 'https://youtu.be/HRwK2u0Freo?si=BR1RrfKvlkKbsIZS', o: 'https://youtu.be/ZGoujlyWJv8?si=z7pQugxOgT0f6CdC',
      f: 'https://youtu.be/4cwQBiOmQPs?si=Cz721oqGnY2rZWaj'
    }
  },
  {
    names: ["Tokyo Ghoul"], audio: "au_39", n: 1,
    video: { ja: 'https://youtu.be/7aMOurgDB-o?si=LD4DR5jmJ4aHz63A', o: 'https://youtu.be/Fve_lHIPa-I?si=g6gIECjU0UDRouuK' }
  },
  {
    names: ["Dr Stone", "Dr. Stone"], audio: "au_40", pista: "Summer 2023", n: 5,
    video: { ja: 'https://youtu.be/TzZB-BOcpZY?si=U9vduD_7-kTAdBA6', o: 'https://youtu.be/eftwOafxhe0?si=SOUB9Cb02ycXeJiJ' }
  },
  {
    names: ["Black Clover"], audio: "au_41", n: 10,
    video: { ja: 'https://youtu.be/xj9aaqzKBwM?si=67ZgQQjZBykRp972', o: 'https://youtu.be/hP6VM6YAMIE?si=qNJLI_96fky8hRTy' }
  },
  {
    names: ["Bleach"], audio: "au_42", n: 5,
    video: { ja: 'https://youtu.be/PSDIaaRC3jc?si=aqySEa2zGyGecr4S', o: 'https://youtu.be/L1RG1YqWwuo?si=YNfMagSZWue7yKmN' }
  },
  {
    names: ["Erased", "Boku dake ga Inai Machi"], audio: "au_43", pista: "Winter 2016", n: 1,
    video: {
      ja: 'https://youtu.be/fodAJ-1dN3I?si=pf5Eo0h6SiY12YYV', o: 'https://youtu.be/Jj5vpv65Sc0?si=r5iAzg5hqlBf0TEo',
      f: 'https://youtu.be/_v_Voe5KD1M?si=zV_fhRVvxnEGKGFV'
    }
  },
  {
    names: ["Enen no Shouboutai", "Fire Force"], audio: "au_44", n: 1,
    video: { ja: 'https://youtu.be/JBqxVX_LXvk?si=KPZL8LuE6QAGFeWp', o: 'https://youtu.be/wfCcs0vLysk?si=zWsQTyJCUDw4xH34' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_45", n: 7,
    video: { ja: 'https://youtu.be/mU3vgXUKeFM?si=UdLVb136klFdKBAS', f: 'https://youtu.be/UztXN2rKQNc?si=Bugq8usaOCSzGD9i' }
  },
  {
    names: ["Cowboy Bebop"], audio: "au_46", n: 1,
    video: { en: 'https://youtu.be/EL-D9LrFJd4?si=qQ6Kut7DA3-VmRqk', o: 'https://youtu.be/UFFa0QoHWvE?si=HoH75owtxAKkSCBD' }
  },
  {
    names: ["Beastars"], audio: "au_47", n: 2,
    video: { ja: 'https://youtu.be/-5M4lbEpn6c?si=Jq4V9d3VgIYYXeNV', o: 'https://youtu.be/dy90tA3TT1c?si=coTsPeFs1TvUOIxK' }
  },
  {
    names: ["Chainsaw Man"], audio: "au_48", n: 1,
    video: { ja: 'https://youtu.be/dFlDRhvM4L0?si=mRIFbqnOPhcXXgJv', o: 'https://youtu.be/M2cckDmNLMI?si=vGrEdBG33vEtxI25' }
  },
  {
    names: ["Boruto"], audio: "au_49", pista: "Spring 2017", n: 1,
    video: {
      ja: 'https://youtu.be/unR1h10HPsk?si=l0Ci3jISTmPd_jr-', o: 'https://youtu.be/OFquPzLWJ5Q?si=Xaw0cdQFapQPQI8k',
      f: 'https://youtu.be/E1VIqej73Dg?si=ZRFIPFGEJF2_4BTn'
    }
  },
  {
    names: ["Code Geass", "Code Geass: Hangyaku no Lelouch"], audio: "au_50", n: 1,
    video: { ja: 'https://youtu.be/G8CFuZ9MseQ?si=uExLOl6Swo_p8aLm', o: 'https://youtu.be/FUH9S44D1BM?si=DqCGwsbkouooy51_' }
  },
  {
    names: ["Domestic na Kanojo", "Domestic Girlfriend"], audio: "au_51", n: 1,
    video: { ja: 'https://youtu.be/SaKdpMnwZf0?si=aAEPb_BTDt-re9Vs', f: 'https://youtu.be/0YF8vecQWYs?si=vlvtYzoVmHDCDF0E' }
  },
  {
    names: ["InuYasha"], audio: "au_52", n: 1,
    video: { ja: 'https://youtu.be/y1QfqRTPUJI?si=IrZUVfAIEq9iUox2', o: 'https://youtu.be/Hok551J0Cbc?si=ceTA0kHpeP5ivgG3' }
  },
  {
    names: ["Gokudou-kun Manyuuki", "Jester: El Aventurero", "Jester el aventurero"], audio: "au_53", n: 1,
    video: { ja: 'https://youtu.be/yLvonhdeKuI?si=D1qJHtu-hNNFsq7g', o: 'https://youtu.be/S4Kwp0qtCnQ?si=z2-c1bD2DPHQ2Rvg' }
  },
  {
    names: ["Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen", "Kaguya-sama: Love is War",
      "Kaguya-sama"], audio: "au_54", n: 1,
    video: { ja: 'https://youtu.be/lTlzDfhPtFA?si=UMLjVhMqTj1d01zP', o: 'https://youtu.be/2Od7QCsyqkE?si=ikg9lJStfOMNr2MG' }
  },
  {
    names: ["Komi-san wa, Comyushou desu.", "Komi Can't Communicate", "Komi-san"], audio: "au_55", n: 1,
    video: { ja: 'https://youtu.be/xHlx3rx5Bew?si=9zp52YbGXRSuR0Hg', o: 'https://youtu.be/utqcdq6AqZg?si=n3l4dTtB33YOu_ba' }
  },
  {
    names: ["Mashle", "Mashle: Magic and Muscles"], audio: "au_56", n: 2,
    video: { ja: 'https://youtu.be/9rVKos-oGnQ?si=8j4AwmAkFrnQ7U_q', f: 'https://youtu.be/_yGkn9tI_0M?si=5nX3ve4RGwgnwS8e' }
  },
  {
    names: ["Mirai Nikki", "The Future Diary"], audio: "au_57", n: 1,
    video: { ja: 'https://youtu.be/DU4IelmT1ow?si=ELYKcXW82Weuj83v', o: 'https://youtu.be/ZZvJY7_gyfw?si=zteh5PHs05EHq3kl' }
  },
  {
    names: ["Mob Psycho 100"], audio: "au_58", pista: "Summer 2016", n: 1,
    video: { ja: 'https://youtu.be/Bw-5Lka7gPE?si=7zZHaYyfWicFi6Ri', o: 'https://youtu.be/aFPGhSkx7eA?si=6BTD2H55nhN8tXO5' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_59", n: 4,
    video: { ja: 'https://youtu.be/v1YojYU5nPQ?si=-xuzcCF3iDGqXXLF', o: 'https://youtu.be/0zLxFAlS29A?si=fbdW_bNq4GVgEfy6' }
  },
  {
    names: ["One Punch Man"], audio: "au_60", n: 1,
    video: { ja: 'https://youtu.be/atxYe-nOa9w?si=d1S95iAMsqSzl01K', o: 'https://youtu.be/QImBolnTVH8?si=wArCm6LExlSsHNsq' }
  },
  {
    names: ["Paripi Koumei", "Ya Boy Kongming!"], audio: "au_61", n: 1,
    video: { ja: 'https://youtu.be/gNn9NxZH2Vo?si=JWRgHI2FoSIgh0ns', o: 'https://youtu.be/TpwcPI09I4g?si=Ra-1LWVZDJ-Bsupn' }
  },
  {
    names: ["Ousama Ranking", "Ranking of Kings"], audio: "au_62", n: 2,
    video: { ja: 'https://youtu.be/dWZAH5w8jkQ?si=SWHJwtjALGJGS58f', o: 'https://youtu.be/FT0GKCuSaW0?si=AU6vFjgXFefsm-9x' }
  },
  {
    names: ["Yakusoku no Neverland", "The Promised Neverland"], audio: "au_63", n: 1,
    video: { ja: 'https://youtu.be/iIH38n1o6Kg?si=g2XKQeRDZZRAAV7z', o: 'https://youtu.be/GA9Yw5t-Mto?si=yPLu_Y9uqME5pNs8' }
  },
  {
    names: ["Tate no Yuusha no Nariagari", "The Rising of the Shield Hero", "Tate no Yuusha"], audio: "au_64", n: 1,
    video: { ja: 'https://youtu.be/jZvFEtR8RH0?si=ZrGpLGfU764cQJ72', o: 'https://youtu.be/Cs85gCoCaBA?si=HQzsddalzjTPGQfT' }
  },
  {
    names: ["Fumetsu no Anata e", "To Your Eternity"], audio: "au_65", n: 1,
    video: { ja: 'https://youtu.be/HrO7ql2ZF6M?si=9aq6otL2lsc0giPG', o: 'https://youtu.be/U_Ry2dM0B34?si=cXMWQmkLSjwIFj8V' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_66", n: 2,
    video: { ja: 'https://youtu.be/aLgfFwAHb3I?si=wNUNzGEpy34_hPX7', o: 'https://youtu.be/AROi9sNCVKs?si=dnR5Ca6Hf0C9dFXE' }
  },
  {
    names: ["Shigatsu wa Kimi no Uso", "Your Lie in April"], audio: "au_67", n: 1,
    video: { ja: 'https://youtu.be/GqKbba2nOf0?si=E6L3lfsvRjhzK0-9', o: 'https://youtu.be/UpmSK1GPlBc?si=sgF9OvJu8NtyXUcN' }
  },
  {
    names: ["Yu Yu Hakusho"], audio: "au_68", n: 1,
    video: { ja: 'https://youtu.be/urZWmEgm72Q?si=N0nYyUIyVHVJclyD', o: 'https://youtu.be/9ZbVCs3EJUA?si=9fHOOXYO72vsY4VG' }
  },
  {
    names: ["Yuri!!! on Ice"], audio: "au_69", n: 1,
    video: { en: 'https://youtu.be/5u3RGhznctE?si=TPREmPUjlg837Xzb', o: 'https://youtu.be/nnEOS5kupuc?si=dJuuq4bnC0BF5Sme' }
  },
  {
    names: ["Zom 100: Zombie ni Naru made ni Shitai 100 no Koto", "Zom 100: Bucket List of the Dead",
      "Zom 100"], audio: "au_70", n: 1,
    video: { ja: 'https://youtu.be/Tt4_enX63K0?si=cBoAWeaoO55gnmw0', o: 'https://youtu.be/zJRZ9ybACB4?si=ekJHGH-TxNesJyNM' }
  },
  {
    names: ["Gintama"], audio: "au_71", pista: "Spring 2013", n: 13,
    video: { ja: 'https://youtu.be/GQRMESLHVc0?si=SqSxICNQXut7AhnW', o: 'https://youtu.be/CpGPYFU4n0Y?si=Xj5h9LZ46xciVHxm' }
  },
  {
    names: ["Nanatsu no Taizai", "The Seven Deadly Sins"], audio: "au_72", pista: "Fall 2014", n: 1,
    video: { ja: 'https://youtu.be/dRsKZt9vAyM?si=IUVDA3uLnBADWspu', o: 'https://youtu.be/FLs2faYqoNU?si=awajOintt8N8MJuZ' }
  },
  {
    names: ["Fairy Tail"], audio: "au_73", n: 1,
    video: { ja: 'https://youtu.be/9jvVBVcZ0-Y?si=3iHi_kjMTCA-DW-s', o: 'https://youtu.be/68Eq_2VCRYA?si=pLcL145v9Tbdz_i0' }
  },
  {
    names: ["Dororo"], audio: "au_74", pista: "Winter 2019", n: 1,
    video: { ja: 'https://youtu.be/FgQR2O8PGf4?si=9FaZDRyCcAWpr619', o: 'https://youtu.be/nS32IXrNgfw?si=CHBj6vk9_3AMjwzR' }
  },
  {
    names: ["Dragon Ball Super"], audio: "au_75", n: 2,
    video: { ja: 'https://youtu.be/j61ts42E2Ms?si=YPNZAdOfCHE8Zunq', f: 'https://youtu.be/CSEkbmAhcZw?si=977AdoAhTfbk5_7H' }
  },
  {
    names: ["Fate/stay night", "Fate/stay night: Unlimited Blade Works",
      "Fate stay night"], audio: "au_76", pista: "Spring 2015", n: 2,
    video: { ja: 'https://youtu.be/WofLTwSi0uo?si=uwKvX6Ccp0eZBXAP', o: 'https://youtu.be/XeI8E20ZUE4?si=reR8PxZVQg8m0w1O' }
  },
  {
    names: ["Horimiya"], audio: "au_77", pista: "Winter 2021", n: 1,
    video: { ja: 'https://youtu.be/md_jaWVuaCM?si=0AKiV6RlPdJqggj7', o: 'https://youtu.be/kQYLHjgUh_g?si=aemk54o05gcp4IVF' }
  },
  {
    names: ["Kakegurui"], audio: "au_78", pista: "Spring 2019", n: 2,
    video: { ja: 'https://youtu.be/KU3QM1pJffs?si=AZYnMRdf1_DwpcOk', o: 'https://youtu.be/xgH4Ez4ZhLw?si=QS-PR_dTi4-TTY4q' }
  },
  {
    names: ["KonoSuba", "Kono Subarashii Sekai ni Shukufuku wo!"], audio: "au_79", pista: "Winter 2017", n: 1,
    video: {
      ja: 'https://youtu.be/vdcddjV0l5o?si=q3gAT8JSgcIXILZD', o: 'https://youtu.be/Du3tQ2SXezA?si=Zyy7-bRgzh48apKs',
      f: 'https://youtu.be/a5E4_uFYFJ0?si=18n4J0EwMW8a-AcB'
    }
  },
  {
    names: ["Made in Abyss"], audio: "au_80", pista: "Summer 2017", n: 1,
    video: { ja: 'https://youtu.be/JkmMTiUJvvc?si=X4Mkf_buGD33rmoH', f: 'https://youtu.be/EJYKsY0Vcts?si=3YGexCZBAf8GjSyw' }
  },
  {
    names: ["Kanojo, Okarishimasu", "Rent a Girlfriend", "Kanojo Okarishimasu"], audio: "au_81", pista: "Summer 2020", n: 1,
    video: { ja: 'https://youtu.be/cM1WSovcn4I?si=WdphS4hEW7E3RO8A', o: 'https://youtu.be/I1hLZ2OchZ8?si=ggPPG4CZYyVfc6Sp' }
  },
  {
    names: ["Steins;Gate"], audio: "au_82", pista: 'Spring 2011', n: 1,
    video: {
      ja: 'https://youtu.be/1Ch-_Q3fmQc?si=lAWAJZmqma4729fa', o: 'https://youtu.be/tdjthJXntrk?si=yCnVWictDBuc3nfA',
      f: 'https://youtu.be/ZGM90Bo3zH0?si=c0p4_ohA0YLjfAVD'
    }
  },
  {
    names: ["Vinland Saga"], audio: "au_83", pista: "Summer 2019", n: 1,
    video: { ja: 'https://youtu.be/xEVcTStgA4A?si=rUJKLXXuRY0vyg6f', o: 'https://youtu.be/5DjFpPSuGR0?si=K2kFTm24J7a1qBap' }
  },
  {
    names: ["Akame ga Kill!"], audio: "au_84", pista: "Fall 2014", n: 2,
    video: { ja: 'https://youtu.be/mAzFWd5WqOg?si=cXFtTt6OAYx6b3Yd', o: 'https://youtu.be/hEvLtFnbF7c?si=G9ev3vbtyJip-NJy' }
  },
  {
    names: ["Tengen Toppa Gurren Lagann", "Gurren Lagann"], audio: "au_85", pista: "Spring 2007", n: 1,
    video: { ja: 'https://youtu.be/h6wPbJlFBUw?si=JEOpXWuKRESFcR7u', o: 'https://youtu.be/PKRUKalbx3s?si=RcTvkEFRz0mNcd8u' }
  },
  {
    names: ["Sakurasou no Pet na Kanojo", 'Sakura-sou no Pet na Kanojo', 'The Pet Girl of Sakurasou'],
    audio: "au_86", pista: 'Fall 2012', n: 1,
    video: { ja: 'https://youtu.be/TE1ifZ3v6H4?si=Hm8ZdDu-J6LDImov', f: 'https://youtu.be/nLBBESnreCs?si=gkIp_VNGG-TEcuaz' }
  },
  {
    names: ["Ansatsu Kyoushitsu", "Assassination Classroom"], audio: "au_87", n: 1,
    video: { ja: 'https://youtu.be/anWBta2mBkE?si=PDmWCcRI7xIOOEvp', f: 'https://youtu.be/QkmYpUvwjFU?si=e1r4qmgKo-xfGFf6' }
  },
  {
    names: ["Elfen Lied"], audio: "au_88", n: 1,
    video: { la: 'https://youtu.be/aTMHUnoIY10?si=3uOFGd96ocYs46eD', o: 'https://youtu.be/fduFIEBeeiQ?si=_qLb83xE7r4iWYX4' }
  },
  {
    names: ["Shokugeki no Souma", "Food Wars!"], audio: "au_89", pista: "Summer 2015", n: 2,
    video: { ja: 'https://youtu.be/WGASdBxpVPw?si=Yq_N7jGYxH7go3Al', o: 'https://youtu.be/8q-3_7fmaJ0?si=oLp9hPf6hqNCrlNB' }
  },
  {
    names: ["Gangsta", "Gangsta."], audio: "au_90", pista: "Summer 2015", n: 1,
    video: { ja: 'https://youtu.be/COBpRXm_CUQ?si=-Jp0RcutUr3G_vjR', o: 'https://youtu.be/96yO-kxufVY?si=qWg1T5sMfqodV-oo' }
  },
  {
    names: ["Rurouni Kenshin: Meiji Kenkaku Romantan", "Rurouni Kenshin", "Rurouni Kenshin 2023"],
    audio: "au_91", pista: "Summer 2023", n: 1,
    video: { ja: 'https://youtu.be/vAKBZeQklQw?si=qwzJZsH5QoaQmd1s', o: 'https://youtu.be/G9pt5O0Qu-0?si=qrxPJ4sHQKE0mZJg' }
  },
  {
    names: ["Saint Seiya", "Los Caballeros del Zodiaco"], audio: "au_92", n: 1,
    video: {
      ja: 'https://youtu.be/1gftUBdwcmc?si=e043X8fq-SvsVo_B', es: 'https://youtu.be/LKdW6p2OPkY?si=J3koqErMRRaSFdds',
      o: 'https://youtu.be/qVM4NNkPfAU?si=mJKz81_U7Gk8sNqI'
    }
  },
  {
    names: ["Solo Leveling", "Ore dake Level Up na Ken"], audio: "au_93", n: 1,
    video: {
      ko: 'https://youtu.be/XqD0oCHLIF8?si=9kvGuNVi3J9WAK5R', o: 'https://youtu.be/Jsc6bPHe4tM?si=cfj9rO6NUpCyFWBE',
      f: 'https://youtu.be/hc1XZYLwIhw?si=E0kVVuaDBvgYJd5a'
    }
  },
  {
    names: ["Sono Bisque Doll wa Koi wo Suru", "Sono bisque doll", "My Dress-Up Darling"], audio: "au_94", n: 1,
    video: { ja: 'https://youtu.be/oG4eu4HMtbo?si=i7ptzqTCCMwErYCX', o: 'https://youtu.be/8pGN2YEMXHo?si=EtCG6JR7xlOhNrzz' }
  },
  {
    names: ["Soul Eater"], audio: "au_95", n: 2,
    video: { ja: 'https://youtu.be/-eYK3YP524A?si=1gX5duSVTq4yzlY5', o: 'https://youtu.be/p2MRCdUDGWQ?si=y1uriF3mFTPmsZ7z' }
  },
  {
    names: ["Violet Evergarden"], audio: "au_96", pista: "Winter 2018", n: 1,
    video: {
      ja: 'https://youtu.be/eEyeM3lZNqQ?si=qeB0nV-OTmYxIl13', o: 'https://youtu.be/uwph0dv9E6U?si=COgjx2ql2XLeVZLp',
      f: 'https://youtu.be/hxRAh5oBE5s?si=xgFWvzfpwy4KR75C'
    }
  },
  {
    names: ["Dorohedoro"], audio: "au_97", pista: "Winter 2020", n: 1,
    video: { ja: 'https://youtu.be/iH_YJde1yps?si=mfdq1vsELz3op1yR', o: 'https://youtu.be/BK0tDxrzUOc?si=ZvNtL4a8p1hkk-xt' }
  },
  {
    names: ["Puella Magi Madoka Magica", "Mahou Shoujo Madoka Magica", 'Madoka Magica'], audio: "au_98", n: 1,
    video: { ja: 'https://youtu.be/OrgpX-_bFqM?si=ht3SUEeaghVAdLso', o: 'https://youtu.be/7EuTPTVpuNI?si=PonzQFW9eTbx5GGG' }
  },
  {
    names: ["Kill la Kill"], audio: "au_99", pista: "Fall 2013", n: 1,
    video: { ja: 'https://youtu.be/9_5LhZ7pQpM?si=dn80d96IPtJTamcS', o: 'https://youtu.be/XY3RhMPMWAk?si=vg-KpZMSh8ISQk5e' }
  },
  {
    names: ["Blue Lock"], audio: "au_100", pista: "Winter 2023", n: 2,
    video: { ja: 'https://youtu.be/hPmuITfvbYM?si=Tqa2O4HJfb6iMRdi', o: 'https://youtu.be/ww6l18z-c5k?si=ryA7NzVCpwommCUa' }
  },
  {
    names: ["Goblin Slayer"], audio: "au_101", pista: "Fall 2023", n: 2,
    video: { ja: 'https://youtu.be/LK6_f5I33R8?si=Zw2dNBILnO3Ge94J', o: 'https://youtu.be/21bCrsGt050?si=l9XPBdzPPqaE44bP' }
  },
  {
    names: ["Bocchi the Rock!"], audio: "au_102", pista: "Fall 2022", n: 1,
    video: { ja: 'https://youtu.be/dlSbEP4V-gI?si=KpX2-AEU5dWVirwR', o: 'https://youtu.be/7FDRQifEMUQ?si=F9xZFPgxuoj5O27n' }
  },
  {
    names: ["Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e", "Classroom of the Elite"],
    audio: "au_103", pista: "Summer 2022", n: 2,
    video: { ja: 'https://youtu.be/9deedzO71hk?si=mrD8fZNHtjSBpnwe', o: 'https://youtu.be/Zm24Y_f6qQk?si=EWUlwdvr5Gp05Ezc' }
  },
  {
    names: ["Bishounen Tanteidan", "Pretty Boy Detective Club"], audio: "au_104", pista: "Spring 2021", n: 1,
    video: { ja: 'https://youtu.be/jMAqzd9CgQM?si=luczHWHu_UvBBAuJ', o: 'https://youtu.be/q-jJnCtuWiQ?si=pusorexohH7D5Uy6' }
  },
  {
    names: ["Mairimashita! Iruma-kun", "Welcome to Demon School! Iruma-kun"], audio: "au_105", n: 1,
    video: { ja: 'https://youtu.be/3uHGkJbNkX0?si=yk2038QxpeScLHw1', o: 'https://youtu.be/RHMaIluGaX4?si=egkn3MUzocCYwklO' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_106", pista: "Winter 2016", n: 4,
    video: { ja: 'https://youtu.be/zZJErzyzL6M?si=Qxmq637tTu-cGbDj', o: 'https://youtu.be/txgg-fbVjf4?si=6lH-un9l1aZaRXIp' }
  },
  {
    names: ["Sentai Daishikkaku", "Go! Go! Loser Ranger!"], audio: "au_107", pista: "spring 2024", n: 1,
    video: {
      ja: 'https://youtu.be/bG0cGW35-TI?si=f_ZwiySCUuE9QnJ8', o: 'https://youtu.be/O3ZYjfMqAsc?si=ZwAu0e4GXO3Jve1n',
      f: 'https://youtu.be/0Nj9bxkUhzQ?si=rWmO3fgno0FU92IU'
    }
  },
  {
    names: ["Kaijuu 8-gou", "Kaiju No. 8"], audio: "au_108", pista: "spring 2024", n: 1,
    video: { en: 'https://youtu.be/aso1mQLUAbc?si=ay0OTTznRhEWG9ci', o: 'https://youtu.be/LYabT4zZnJQ?si=vODQqxAC1xd_o70Q' }
  },
  {
    names: ["Blend S", "Blend-S"], audio: "au_109", n: 1,
    video: { ja: 'https://youtu.be/ugZ2EsnnGxk?si=-tokXaWNPrpcbv3S', o: 'https://youtu.be/6nVXFuKkHoU?si=I-r-NHsucrWamgkm' }
  },
  {
    names: ["Oliver y Benji", "Captain Tsubasa"], audio: "au_110", n: 1,
    video: {
      es: 'https://youtu.be/PbUTLndrWqE?si=EG-eqfuG3q0t1zkE', fe: 'https://youtu.be/3zrGjc0UEgU?si=TOaChpG3MMB-hHVG',
      ja: 'https://youtu.be/ah0-ypR3iQc?si=n-wJE6LZJMCRwYMg', f: 'https://youtu.be/7twVWGr31go?si=RCR322qZhRsRFtXm'
    }
  },
  {
    names: ["Houseki no Kuni", "Land of the Lustrous"], audio: "au_111", pista: 'Fall 2017', n: 1,
    video: { ja: 'https://youtu.be/C9MuI4gfyiA?si=PbM52GNS4TZ7lhlb', o: 'https://youtu.be/swi8YKz0fsE?si=7ln3ejXKk_SMBa3H' }
  },
  {
    names: ["Inuyashiki", "Inuyashiki: Last Hero"], audio: "au_112", pista: "Fall 2017", n: 1,
    video: { ja: 'https://youtu.be/cYciY8Y8Y8s?si=YJX_k9XY7NVfk6mn', o: 'https://youtu.be/yM6-QVxIXTs?si=GkpiE7GuJGDKnkMW' }
  },
  {
    names: ["Shinsekai Yori"], audio: "au_113", pista: 'Fall 2012', n: 1,
    video: { ja: 'https://youtu.be/mz1ypuGJ3VM?si=uwqT9hZyK6abjh0n', o: 'https://youtu.be/AuFdVEtAwjs?si=Ooqv8hWOV8mk8WLX' }
  },
  {
    names: ["Inu x Boku SS", "Inu x Boku Secret Service"], audio: "au_114", pista: 'Winter 2012', n: 1,
    video: { ja: 'https://youtu.be/WpJ8oP0ZWoc?si=x4HT3et6wVkcAX3l', o: 'https://youtu.be/2tkuZtej4jI?si=T6IOkEW9pqXFi8nU' }
  },
  {
    names: ["Bokusatsu Tenshi Dokuro-chan", "Bludgeoning Angel Dokuro-chan"], audio: "au_115", n: 1,
    video: { ja: 'https://youtu.be/au6feQA94mY?si=8n9rt9sQ5etysFEg', f: 'https://youtu.be/LL98d6Rpjpg?si=LzraKD_5CEOe6P-o' }
  },
  {
    names: ["Charlotte"], audio: "au_116", pista: "Summer 2015", n: 1,
    video: { ja: 'https://youtu.be/9DowtwdFP18?si=Cg2v5nqIKRRYSR_E', f: 'https://youtu.be/WhRsyIGN-cA?si=wJ2Pquh7BaTRiaW1' }
  },
  {
    names: ["Bungou Stray Dogs", "Bungo Stray Dogs"], audio: "au_117", pista: "Spring 2016", n: 1,
    video: { ja: 'https://youtu.be/tvHqaimwcKE?si=EbLbjdDSR7Kd5xpX', o: 'https://youtu.be/-e119C6VGHA?si=kDNB6KaiKFa_jgSh' }
  },
  {
    names: ["Chobits"], audio: "au_118", n: 1,
    video: { ja: 'https://youtu.be/i_pD9H2G61c?si=xgxW-g5pV-XgjtfA', f: 'https://youtu.be/0UBgYLjTERs?si=vWVMt8IKnAcYU68Z' }
  },
  {
    names: ["Toaru Majutsu no Index", "A Certain Magical Index"], audio: "au_119", pista: "Fall 2008", n: 1,
    video: { ja: 'https://youtu.be/fv2Ybecq92E?si=3LIjfnG_kL6opjp8', o: 'https://youtu.be/V_bQzoU3OB0?si=SAOd6QMG3ehfPbTM' }
  },
  {
    names: ["Heppoko Jikken Animation Excel♥Saga", "Excel Saga"], audio: "au_120", n: 1,
    video: { ja: 'https://youtu.be/MlIfqR6iTSg?si=oNFMqZT_vdz5U3Vm', f: 'https://youtu.be/oqiYzdqEiKw?si=DZ4JGfStI6jq0PnT' }
  },
  {
    names: ["Bakuten Shoot Beyblade", "Beyblade"], audio: "au_121", n: 1,
    video: {
      es: 'https://youtu.be/Q-KLSwjYU1Y?si=f2Xsc5gMBSaOSVKX', ja: 'https://youtu.be/P8gZbrDNbHM?si=8GNsfyhQLLMhLn3z',
      f: 'https://youtu.be/WsOlT-q89f0?si=9Pv0IWHldwyKBUPy'
    }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_122", n: 1,
    video: { ja: 'https://youtu.be/eXVRuxdfFaQ?si=ZKS3Y5wn88W0qWrf', f: 'https://youtu.be/cKUTx0tRi2s?si=8sPBDpPKKt9T0Hcu' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_123", pista: "Fall 2015", n: 1,
    video: { ja: 'https://youtu.be/KycmCEfuey4?si=eE_BpdgVbGh-gqJ4', o: 'https://youtu.be/libAD49_XNw?si=NTzNseaoKS37onFa' }
  },
];


