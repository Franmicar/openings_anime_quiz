import { FormControl } from "@angular/forms";

// Definición de la interfaz Anime
export interface Anime {
  names: string[];
  audio: string;
  form?: FormControl;
  img?: string;
  video: Object;
  pista: string;
  n?: number;
}

export const animes: Anime[] = [
  {
    names: ["Yamada-kun to Lv999 no Koi wo Suru", "Yamada-kun to Lv999", "My Love Story with Yamada-kun at Lv999"],
    audio: "au_0", n: 1, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/mkxZXJN3zjI?si=noe7Lp225e128XW5', o: 'https://youtu.be/L5rL0pBzmAE?si=v0fEOuIOSRb8UxA_' }
  },
  {
    names: ["Hunter x Hunter 2011", "Hunter x Hunter"], audio: "au_1", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/faqmNf_fZlE?si=YmEdONdkbGCGmmvV', f: 'https://youtu.be/6q3gd47tTVw?si=tzilzK-LYmCo7wpD' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_2", n: 1, pista: 'Fall 2020',
    video: { ja: 'https://youtu.be/GwaRztMaoY0?si=lZB4osTdQyICzkZB', f: 'https://youtu.be/_LWXAPywCV4?si=mJCMIheI6j-BX19n' }
  },
  {
    names: ["Shinseiki Evangelion", "Neon Genesis Evangelion", "Evangelion"], audio: "au_3", n: 1, pista: 'Fall 1995',
    video: { ja: 'https://youtu.be/fShlVhCfHig?si=2pYs9AxiyZ8aXPOb', f: 'https://youtu.be/o6wtDPVkKqI?si=t4BL-QCkraDjkqsE' }
  },
  {
    names: ["Bishoujo Senshi Sailor Moon", "Sailor Moon"], audio: "au_4", n: 1, pista: 'Spring 1992',
    video: {
      ja: 'https://youtu.be/LGQCPOMcYJQ?si=glup5LzJ0bzZwRVh',
      es: 'https://youtu.be/wbbaisQFKKw?si=YBNzS9GYInsbmB-0',
      f: 'https://youtu.be/7LywczXfwZE?si=pJBbVFhN41aiYrzg'
    }
  },
  {
    names: ["Spy x Family"], audio: "au_5", n: 3, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/JqUsUe6B43g?si=G-xAJy0As1dXCIPD', o: 'https://youtu.be/W_fHWaoQwkw?si=U3KssGhwM0PFkzwE' }
  },
  {
    names: ["Tokyo Revengers"], audio: "au_6", n: 2, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/keFRueltLIU?si=uQ5V340AOy81kEDo', o: 'https://youtu.be/_ciQX22n9NE?si=z-GzToUpxzLU79iD' }
  },
  {
    names: ["Cardcaptor Sakura", "Sakura, cazadora de cartas"], audio: "au_7", n: 1, pista: 'Spring 1998',
    video: { ja: 'https://youtu.be/nTQD3ulK4yM?si=KelnURepHUZBaePQ', f: 'https://youtu.be/6gpcPYDkPdg?si=qjh8QwhXoddfB7DK' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_8", n: 4, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/OWBCIRhly4U?si=Y7KWfbuyX9ZMolGx', o: 'https://youtu.be/Jb6Zlg30rgk?si=NRzEpd0SqxXJYyEx' }
  },
  {
    names: ["Kusuriya no Hitorigoto", "The Apothecary Diaries"], audio: "au_9", n: 1, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/E3QN_uoHysA?si=gi6dB1EESr8PA34p', o: 'https://youtu.be/v-WcMQbXbKY?si=FLjiEUQ8eP5VWujF' }
  },
  {
    names: ["Sousou no Frieren", "Frieren: Beyond Journey's End"], audio: "au_10", n: 1, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/QoGM9hCxr4k?si=bwCYPzioZg2n2shA', f: 'https://youtu.be/OIBODIPC_8Y?si=K4fpOTp06NB_8Wol' }
  },
  {
    names: ["Toradora!"], audio: "au_11", n: 1, pista: 'Fall 2008',
    video: { ja: 'https://youtu.be/BDoNRDqgmT0?si=8KUSGOgG4pRU_usM', f: 'https://youtu.be/lwvS3hggTEg?si=yhn8LK-eS21Cd2tK' }
  },
  {
    names: ["One Piece"], audio: "au_12", n: 18, pista: '687 - 746',
    video: { ja: 'https://youtu.be/sqUL59PiRbg?si=Gbx9jfVKCT6XM0ku', o: 'https://youtu.be/6eHuPYOJ2ZE?si=27uEawQWUX1X8WNG' }
  },
  {
    names: ["Bakemonogatari"], audio: "au_13", n: 4, pista: 'Summer 2009',
    video: { ja: 'https://youtu.be/PiauQ7P7mtQ?si=mPaq9uTHWTwdqVez', f: 'https://youtu.be/uKxyLmbOc0Q?si=8Yk4gKVtRkHEsENt' }
  },
  {
    names: ["Sword Art Online", "SAO"], audio: "au_14", n: 1, pista: 'Summer 2012',
    video: { ja: 'https://youtu.be/Y4kfe8R1Iqs?si=fV5IecLM3gx2ki-z', o: 'https://youtu.be/KId6eunoiWk?si=_7pZ7sX2w70zYcMh' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_15", n: 1, pista: 'Spring 2013',
    video: { ja: 'https://youtu.be/ygeg6IiRmKA?si=XWvQVHCueAeYGEhQ', f: 'https://youtu.be/2B6nj38AdD0?si=bGYjV4do0P5eKsVL' }
  },
  {
    names: ["Oshi no Ko"], audio: "au_16", n: 1, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/ZYlaUrj2Zkk?si=Gwv1AH4nzL-dO_hC', f: 'https://youtu.be/ZRtdQ81jPUQ?si=xQQAJ3oAzoXeZy7L' }
  },
  {
    names: ["Noragami"], audio: "au_17", n: 2, pista: 'Fall 2015',
    video: { ja: 'https://youtu.be/3oFTHxkOzjE?si=tLpim5PIlzUrHLA9', o: 'https://youtu.be/C-o8pTi6vd8?si=jk6y7G3ExRu3nZHJ' }
  },
  {
    names: ["Overlord"], audio: "au_18", pista: "Summer 2015", n: 1,
    video: { ja: 'https://youtu.be/KOWcj7XKnfQ?si=afU90ZWpo2nJC7Ww', o: 'https://youtu.be/saah9UTwaUI?si=KJvFi4ZhbTgO4GWX' }
  },
  {
    names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_19", n: 3, pista: 'Winter 2021',
    video: {
      ja: "https://youtu.be/FmGGSI3zIRA?si=Qp233z3kGrXu1rkn",
      o: "https://youtu.be/uaRnwnmqrws?si=CglUImkaTsb_hKqe"
    }
  },
  {
    names: ["Mushoku Tensei: Isekai Ittara Honki Dasu", "Mushoku Tensei: Jobless Reincarnation",
      "Mushoku Tensei"], audio: "au_20", n: 2, pista: 'Summer 2023',
    video: { ja: 'https://youtu.be/hkcdLR_tdtA?si=Zx7Uw9ksnsxMqs3-', o: 'https://youtu.be/fE9trKOuT3Q?si=egbkYPywbHbFbUY3' }
  },
  {
    names: ["No Game No Life"], audio: "au_21", n: 1, pista: 'Spring 2014',
    video: { ja: 'https://youtu.be/6CBp4qylX6I?si=0i-VUSLubuUAFfI-', f: 'https://youtu.be/4a8XOwRzJC4?si=4bgqy1ok27bfF2Ks' }
  },
  {
    names: ["Doraemon"], audio: "au_22", pista: 'Spring 1979',
    video: {
      es: 'https://youtu.be/Al9VoanVRss?si=WEGVLjJF3fyRpYLs', cat: 'https://youtu.be/iEeL-X6xYzU?si=SEm8c5zbdHa9Zn5j',
      ja: 'https://youtu.be/mTmzuU-N62Y?si=egEtbubdcwr4FYld', f: 'https://youtu.be/s4pgnGqkNEU?si=P-zpYsi183sD7pPs'
    }
  },
  {
    names: ["Digimon 02"], audio: "au_23", n: 1, pista: 'Spring 2000',
    video: {
      es: 'https://youtu.be/d5Bc16yQLcI?si=bpBb5nfwDbtn4UCO', ja: 'https://youtu.be/WkHntdc3gKQ?si=A1k5dHV_0lpziClZ',
      f: 'https://youtu.be/LLhoDuVCKBE?si=3WMaoObL4EHD6zjY', fe: 'https://youtu.be/MSHCJif1XV0?si=G5-ouKgebGzvVam5'
    }
  },
  {
    names: ["Pokemon"], audio: "au_24", n: 1, pista: 'Spring 1997',
    video: {
      es: 'https://youtu.be/wvy-pO65GhQ?si=JMU7iC4oHQuMWDH-', ja: 'https://youtu.be/TZMoQjvoICE?si=pSvp0U9gL88I0Iwy',
      f: 'https://youtu.be/jbHG7fsZVkM?si=XQ6jFmYHHErs5hC8'
    }
  },
  {
    names: ["Slayers", 'Slayers NEXT'], audio: "au_25", n: 2, pista: 'Spring 1996',
    video: { ja: 'https://youtu.be/JnusURr9ArM?si=cX1qsnM6Fg_57XgT', o: 'https://youtu.be/kIS-ZvhZVmk?si=i-KRwB4p861MyzgV' }
  },
  {
    names: ["Naruto"], audio: "au_26", n: 4, pista: '78 - 103',
    video: {
      ja: 'https://youtu.be/xjBTNbEXbAA?si=cd0xUCUjnn4vnYX_', o: 'https://youtu.be/AE4b9jO1uB4?si=-H_4hWQwcaFxW3Wf',
      f: 'https://youtu.be/kV5UZvsvjcM?si=aKOAUQuMuecQtTQY'
    }
  },
  {
    names: ["Naruto Shippuden", "Naruto: Shippuden"], audio: "au_27", n: 16, pista: '380 - 405',
    video: { ja: 'https://youtu.be/zVgKnfN9i34?si=0h1Xvu3X9tVPNSLB', o: 'https://youtu.be/dlFA0Zq1k2A?si=JJVfWyS02nokoKlf' }
  },
  {
    names: ["Jigokuraku", "Hell's Paradise"], audio: "au_28", n: 1, pista: 'Spring 2023',
    video: {
      ja: 'https://youtu.be/04WuoQMhhxw?si=8WRkr-ET97omyFdl', o: 'https://youtu.be/dYzgZVhiqmU?si=qZ5xjYZz7p4yBn27',
      f: 'https://youtu.be/9oq4_PO2lIw?si=J1TrgT6KZ_p__cvC'
    }
  },
  {
    names: ["Undead Unluck"], audio: "au_29", n: 1, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/stzAsF51T_w?si=OnOSqtixCqRpBXhb', o: 'https://youtu.be/boq4EJv5YvM?si=HbQSIYgG0UzbWyXM' }
  },
  {
    names: ["Tengoku Daimakyou", 'Heavenly Delusion'], audio: "au_30", pista: "Spring 2023", n: 1,
    video: { ja: 'https://youtu.be/GuAcdIqcanA?si=csv89y__nwj_6Zf-', f: 'https://youtu.be/xTb2Dothdgk?si=PZAQ2yKfOXBLnJHV' }
  },
  {
    names: ["Dragon Ball", "As bolas maxicas", "As bolas máxicas"], audio: "au_31", n: 1, pista: 'Winter 1986',
    video: {
      es: 'https://youtu.be/dtD_xGvkWLk?si=zGGPM3wVv53utdMh', gl: 'https://youtu.be/aaqlIHdYhiM?si=G6VNliB-RLWmeGiP',
      ja: 'https://youtu.be/FJqGirLjQn4?si=5ZWKZVn5PLJGWgTD', f: 'https://youtu.be/Mmbc8E6rAmM?si=7giUql_gsyUoQYfQ'
    }
  },
  {
    names: ["Dragon Ball Z"], audio: "au_32", n: 2, pista: 'Spring 1989',
    video: {
      es: 'https://youtu.be/3HT60PKvrfM?si=4uMbDtx-cM3F5vmA', ja: 'https://youtu.be/ElqB359i_Os?si=tCBpDiMKUfjPt9RS',
      f: 'https://youtu.be/pYnLO7MVKno?si=cHHgARj-TeKT6My8'
    }
  },
  {
    names: ["Dragon Ball GT"], audio: "au_33", n: 1, pista: 'Winter 1996',
    video: {
      es: 'https://youtu.be/eEh8yzkFd8I?si=XXiIxUczpx6q1DRz', ja: 'https://youtu.be/DJcuDgVYjgI?si=1A8JRh1RV2_6jpvC',
      fe: 'https://youtu.be/lMTJt90mrwY?si=9LLORm8qPvoHgZCO', f: 'https://youtu.be/mTncQEr03u8?si=vCU4t4AA7QddhFPA'
    }
  },
  {
    names: ["Death Parade"], audio: "au_34", n: 1, pista: 'Winter 2015',
    video: { ja: 'https://youtu.be/L90XoAtwMic?si=4y6UTOGWQ4zCcnOq', o: 'https://youtu.be/9wh8FgsEtNQ?si=EjXWonAJdfSyxpuJ' }
  },
  {
    names: ["Death Note"], audio: "au_35", n: 1, pista: 'Fall 2006',
    video: {
      ja: 'https://youtu.be/kNyR46eHDxE?si=vAG_Lyk4SVAPDOax', o: 'https://youtu.be/D7MMMNTQ7H0?si=xIeJ26YQaNhL5TlR',
      f: 'https://youtu.be/RvIx-SJvlNY?si=TzwzL9yWou3Yvjt9'
    }
  },
  {
    names: ["Parasyte", "Kiseijuu: Sei no Kakuritsu"], audio: "au_36", n: 1, pista: 'Fall 2014',
    video: { en: 'https://youtu.be/ziatgnrtG0Y?si=W1Gj5ioHAtsrTOu4', o: 'https://youtu.be/D-SQqppuGvc?si=ySSRR4yFM6S7LkWJ' }
  },
  {
    names: ["Fullmetal Alchemist"], audio: "au_37", n: 1, pista: 'Fall 2003',
    video: {
      ja: 'https://youtu.be/-YoK0rosR2I?si=FXIex6SFKLG4HrXP', o: 'https://youtu.be/DXo_xX_Hqro?si=pymSKNZavz11kQjk',
      f: 'https://youtu.be/YzJcBq0xufI?si=QUekFiwq_HJeSTR1'
    }
  },
  {
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_38", n: 1, pista: '1 - 14',
    video: {
      ja: 'https://youtu.be/HRwK2u0Freo?si=BR1RrfKvlkKbsIZS', o: 'https://youtu.be/ZGoujlyWJv8?si=z7pQugxOgT0f6CdC',
      f: 'https://youtu.be/4cwQBiOmQPs?si=Cz721oqGnY2rZWaj'
    }
  },
  {
    names: ["Tokyo Ghoul"], audio: "au_39", n: 1, pista: 'Summer 2014',
    video: { ja: 'https://youtu.be/7aMOurgDB-o?si=LD4DR5jmJ4aHz63A', o: 'https://youtu.be/Fve_lHIPa-I?si=g6gIECjU0UDRouuK' }
  },
  {
    names: ["Dr Stone", "Dr. Stone"], audio: "au_40", pista: "Summer 2023", n: 5,
    video: { ja: 'https://youtu.be/TzZB-BOcpZY?si=U9vduD_7-kTAdBA6', o: 'https://youtu.be/eftwOafxhe0?si=SOUB9Cb02ycXeJiJ' }
  },
  {
    names: ["Black Clover"], audio: "au_41", n: 10, pista: '116 - 128',
    video: { ja: 'https://youtu.be/xj9aaqzKBwM?si=67ZgQQjZBykRp972', o: 'https://youtu.be/hP6VM6YAMIE?si=qNJLI_96fky8hRTy' }
  },
  {
    names: ["Bleach"], audio: "au_42", n: 5, pista: '98 - 120',
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
    names: ["Enen no Shouboutai", "Fire Force"], audio: "au_44", n: 1, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/MRVajvqdy_Y?si=rBo4jaeWniORwvL5', o: 'https://youtu.be/wfCcs0vLysk?si=zWsQTyJCUDw4xH34' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_45", n: 7, pista: 'Fall 2016',
    video: { ja: 'https://youtu.be/mU3vgXUKeFM?si=UdLVb136klFdKBAS', f: 'https://youtu.be/UztXN2rKQNc?si=Bugq8usaOCSzGD9i' }
  },
  {
    names: ["Cowboy Bebop"], audio: "au_46", n: 1, pista: 'Spring 1998',
    video: { en: 'https://youtu.be/EL-D9LrFJd4?si=qQ6Kut7DA3-VmRqk', o: 'https://youtu.be/UFFa0QoHWvE?si=HoH75owtxAKkSCBD' }
  },
  {
    names: ["Beastars"], audio: "au_47", n: 2, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/-5M4lbEpn6c?si=Jq4V9d3VgIYYXeNV', o: 'https://youtu.be/dy90tA3TT1c?si=coTsPeFs1TvUOIxK' }
  },
  {
    names: ["Chainsaw Man"], audio: "au_48", n: 1, pista: 'Fall 2022',
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
    names: ["Code Geass: Hangyaku no Lelouch", "Code Geass: Lelouch of the Rebellion", "Code Geass"],
    audio: "au_50", n: 1, pista: 'Fall 2006',
    video: { ja: 'https://youtu.be/G8CFuZ9MseQ?si=uExLOl6Swo_p8aLm', o: 'https://youtu.be/FUH9S44D1BM?si=DqCGwsbkouooy51_' }
  },
  {
    names: ["Domestic na Kanojo", "Domestic Girlfriend", "Domekano"], audio: "au_51", n: 1, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/SaKdpMnwZf0?si=aAEPb_BTDt-re9Vs', f: 'https://youtu.be/0YF8vecQWYs?si=vlvtYzoVmHDCDF0E' }
  },
  {
    names: ["InuYasha"], audio: "au_52", n: 1, pista: 'Fall 2000',
    video: { ja: 'https://youtu.be/y1QfqRTPUJI?si=IrZUVfAIEq9iUox2', o: 'https://youtu.be/Hok551J0Cbc?si=ceTA0kHpeP5ivgG3' }
  },
  {
    names: ["Gokudou-kun Manyuuki", "Jester: El Aventurero", "Jester el aventurero"], audio: "au_53", n: 1, pista: 'Spring 1999',
    video: { ja: 'https://youtu.be/yLvonhdeKuI?si=D1qJHtu-hNNFsq7g', o: 'https://youtu.be/S4Kwp0qtCnQ?si=z2-c1bD2DPHQ2Rvg' }
  },
  {
    names: ["Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen", "Kaguya-sama: Love is War",
      "Kaguya-sama"], audio: "au_54", n: 2, pista: 'Spring 2020',
    video: { ja: 'https://youtu.be/lTlzDfhPtFA?si=UMLjVhMqTj1d01zP', o: 'https://youtu.be/2Od7QCsyqkE?si=ikg9lJStfOMNr2MG' }
  },
  {
    names: ["Komi-san wa, Comyushou desu.", "Komi Can't Communicate", "Komi-san"], audio: "au_55", n: 1, pista: 'Fall 2021',
    video: { ja: 'https://youtu.be/xHlx3rx5Bew?si=9zp52YbGXRSuR0Hg', o: 'https://youtu.be/utqcdq6AqZg?si=n3l4dTtB33YOu_ba' }
  },
  {
    names: ["Mashle", "Mashle: Magic and Muscles"], audio: "au_56", n: 2, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/9rVKos-oGnQ?si=8j4AwmAkFrnQ7U_q', f: 'https://youtu.be/_yGkn9tI_0M?si=5nX3ve4RGwgnwS8e' }
  },
  {
    names: ["Mirai Nikki", "The Future Diary"], audio: "au_57", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/DU4IelmT1ow?si=ELYKcXW82Weuj83v', o: 'https://youtu.be/ZZvJY7_gyfw?si=zteh5PHs05EHq3kl' }
  },
  {
    names: ["Mob Psycho 100"], audio: "au_58", pista: "Summer 2016", n: 1,
    video: { ja: 'https://youtu.be/Bw-5Lka7gPE?si=7zZHaYyfWicFi6Ri', o: 'https://youtu.be/aFPGhSkx7eA?si=6BTD2H55nhN8tXO5' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_59", n: 4, pista: 'Spring 2018',
    video: { ja: 'https://youtu.be/v1YojYU5nPQ?si=-xuzcCF3iDGqXXLF', o: 'https://youtu.be/0zLxFAlS29A?si=fbdW_bNq4GVgEfy6' }
  },
  {
    names: ["One Punch Man"], audio: "au_60", n: 1, pista: 'Fall 2015',
    video: { ja: 'https://youtu.be/atxYe-nOa9w?si=d1S95iAMsqSzl01K', o: 'https://youtu.be/QImBolnTVH8?si=wArCm6LExlSsHNsq' }
  },
  {
    names: ["Paripi Koumei", "Ya Boy Kongming!"], audio: "au_61", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/gNn9NxZH2Vo?si=JWRgHI2FoSIgh0ns', o: 'https://youtu.be/TpwcPI09I4g?si=Ra-1LWVZDJ-Bsupn' }
  },
  {
    names: ["Ousama Ranking", "Ranking of Kings"], audio: "au_62", n: 2, pista: 'Winter 2022',
    video: { ja: 'https://youtu.be/dWZAH5w8jkQ?si=SWHJwtjALGJGS58f', o: 'https://youtu.be/FT0GKCuSaW0?si=AU6vFjgXFefsm-9x' }
  },
  {
    names: ["Yakusoku no Neverland", "The Promised Neverland"], audio: "au_63", n: 1, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/iIH38n1o6Kg?si=g2XKQeRDZZRAAV7z', o: 'https://youtu.be/GA9Yw5t-Mto?si=yPLu_Y9uqME5pNs8' }
  },
  {
    names: ["Tate no Yuusha no Nariagari", "The Rising of the Shield Hero", "Tate no Yuusha"],
    audio: "au_64", n: 1, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/jZvFEtR8RH0?si=ZrGpLGfU764cQJ72', o: 'https://youtu.be/Cs85gCoCaBA?si=HQzsddalzjTPGQfT' }
  },
  {
    names: ["Fumetsu no Anata e", "To Your Eternity"], audio: "au_65", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/HrO7ql2ZF6M?si=9aq6otL2lsc0giPG', o: 'https://youtu.be/U_Ry2dM0B34?si=cXMWQmkLSjwIFj8V' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_66", n: 2, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/aLgfFwAHb3I?si=wNUNzGEpy34_hPX7', o: 'https://youtu.be/AROi9sNCVKs?si=dnR5Ca6Hf0C9dFXE' }
  },
  {
    names: ["Shigatsu wa Kimi no Uso", "Your Lie in April"], audio: "au_67", n: 1, pista: 'Fall 2014',
    video: { ja: 'https://youtu.be/GqKbba2nOf0?si=E6L3lfsvRjhzK0-9', o: 'https://youtu.be/UpmSK1GPlBc?si=sgF9OvJu8NtyXUcN' }
  },
  {
    names: ["Yu Yu Hakusho", 'Yuu☆Yuu☆Hakusho', 'Yu Yu Hakusho: Ghost Files'], audio: "au_68", n: 1, pista: 'Fall 1992',
    video: { ja: 'https://youtu.be/urZWmEgm72Q?si=N0nYyUIyVHVJclyD', o: 'https://youtu.be/9ZbVCs3EJUA?si=9fHOOXYO72vsY4VG' }
  },
  {
    names: ["Yuri!!! on Ice"], audio: "au_69", n: 1, pista: 'Fall 2016',
    video: { en: 'https://youtu.be/5u3RGhznctE?si=TPREmPUjlg837Xzb', o: 'https://youtu.be/nnEOS5kupuc?si=dJuuq4bnC0BF5Sme' }
  },
  {
    names: ["Zom 100: Zombie ni Naru made ni Shitai 100 no Koto", "Zom 100: Bucket List of the Dead",
      "Zom 100"], audio: "au_70", n: 1, pista: 'Summer 2023',
    video: { ja: 'https://youtu.be/Tt4_enX63K0?si=cBoAWeaoO55gnmw0', o: 'https://youtu.be/zJRZ9ybACB4?si=ekJHGH-TxNesJyNM' }
  },
  {
    names: ["Gintama"], audio: "au_71", pista: "257 - 265", n: 13,
    video: { ja: 'https://youtu.be/GQRMESLHVc0?si=SqSxICNQXut7AhnW', o: 'https://youtu.be/CpGPYFU4n0Y?si=Xj5h9LZ46xciVHxm' }
  },
  {
    names: ["Nanatsu no Taizai", "The Seven Deadly Sins"], audio: "au_72", pista: "Fall 2014", n: 1,
    video: { ja: 'https://youtu.be/dRsKZt9vAyM?si=IUVDA3uLnBADWspu', o: 'https://youtu.be/FLs2faYqoNU?si=awajOintt8N8MJuZ' }
  },
  {
    names: ["Fairy Tail"], audio: "au_73", n: 1, pista: '1 - 11',
    video: { ja: 'https://youtu.be/9jvVBVcZ0-Y?si=3iHi_kjMTCA-DW-s', o: 'https://youtu.be/68Eq_2VCRYA?si=pLcL145v9Tbdz_i0' }
  },
  {
    names: ["Dororo"], audio: "au_74", pista: "Winter 2019", n: 1,
    video: { ja: 'https://youtu.be/FgQR2O8PGf4?si=9FaZDRyCcAWpr619', o: 'https://youtu.be/nS32IXrNgfw?si=CHBj6vk9_3AMjwzR' }
  },
  {
    names: ["Dragon Ball Super"], audio: "au_75", n: 2, pista: '77 - 131',
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
    names: ["Kakegurui××", "Kakegurui"], audio: "au_78", pista: "Spring 2019", n: 2,
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
    names: ["Kanojo, Okarishimasu", "Rent a Girlfriend", "Kanojo Okarishimasu", "Rent-a-Girlfriend"],
    audio: "au_81", pista: "Summer 2020", n: 1,
    video: { ja: 'https://youtu.be/JuRHKearHag?si=9dKtoKM3cBC0YH8b', o: 'https://youtu.be/I1hLZ2OchZ8?si=ggPPG4CZYyVfc6Sp' }
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
    video: { ja: 'https://youtu.be/V0r5LTR2Ff4?si=ALtBeFfrGGnmlqfs', o: 'https://youtu.be/5DjFpPSuGR0?si=K2kFTm24J7a1qBap' }
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
    names: ["Ansatsu Kyoushitsu", "Assassination Classroom"], audio: "au_87", n: 1, pista: 'Winter 2015',
    video: { ja: 'https://youtu.be/anWBta2mBkE?si=PDmWCcRI7xIOOEvp', f: 'https://youtu.be/QkmYpUvwjFU?si=e1r4qmgKo-xfGFf6' }
  },
  {
    names: ["Elfen Lied"], audio: "au_88", n: 1, pista: 'Summer 2004',
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
    names: ["Rurouni Kenshin 2023", "Rurouni Kenshin: Meiji Kenkaku Romantan", "Rurouni Kenshin", "Samurai X"],
    audio: "au_91", pista: "Summer 2023", n: 1,
    video: { ja: 'https://youtu.be/vAKBZeQklQw?si=qwzJZsH5QoaQmd1s', o: 'https://youtu.be/G9pt5O0Qu-0?si=qrxPJ4sHQKE0mZJg' }
  },
  {
    names: ["Saint Seiya", "Los Caballeros del Zodiaco"], audio: "au_92", n: 1, pista: 'Fall 1986',
    video: {
      ja: 'https://youtu.be/1gftUBdwcmc?si=e043X8fq-SvsVo_B', es: 'https://youtu.be/LKdW6p2OPkY?si=J3koqErMRRaSFdds',
      o: 'https://youtu.be/qVM4NNkPfAU?si=mJKz81_U7Gk8sNqI'
    }
  },
  {
    names: ["Solo Leveling", "Ore dake Level Up na Ken"], audio: "au_93", n: 1, pista: 'Winter 2024',
    video: {
      ko: 'https://youtu.be/XqD0oCHLIF8?si=9kvGuNVi3J9WAK5R', o: 'https://youtu.be/Jsc6bPHe4tM?si=cfj9rO6NUpCyFWBE',
      f: 'https://youtu.be/hc1XZYLwIhw?si=E0kVVuaDBvgYJd5a'
    }
  },
  {
    names: ["Sono Bisque Doll wa Koi wo Suru", "Sono bisque doll", "My Dress-Up Darling"],
    audio: "au_94", n: 1, pista: 'Winter 2022',
    video: { ja: 'https://youtu.be/oG4eu4HMtbo?si=i7ptzqTCCMwErYCX', o: 'https://youtu.be/8pGN2YEMXHo?si=EtCG6JR7xlOhNrzz' }
  },
  {
    names: ["Soul Eater"], audio: "au_95", n: 2, pista: 'Fall 2008',
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
    names: ["Puella Magi Madoka Magica", "Mahou Shoujo Madoka Magica", 'Madoka Magica'],
    audio: "au_98", n: 1, pista: 'Winter 2011',
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
    names: ["Mairimashita! Iruma-kun", "Welcome to Demon School! Iruma-kun"], audio: "au_105", n: 1, pista: 'Fall 2019',
    video: { ja: 'https://youtu.be/3uHGkJbNkX0?si=yk2038QxpeScLHw1', o: 'https://youtu.be/RHMaIluGaX4?si=egkn3MUzocCYwklO' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_106", pista: "Winter 2016", n: 4,
    video: { ja: 'https://youtu.be/zZJErzyzL6M?si=Qxmq637tTu-cGbDj', o: 'https://youtu.be/txgg-fbVjf4?si=6lH-un9l1aZaRXIp' }
  },
  {
    names: ["Sentai Daishikkaku", "Go! Go! Loser Ranger!", "Go Go Loser Ranger"], audio: "au_107", pista: "Spring 2024", n: 1,
    video: {
      ja: 'https://youtu.be/bG0cGW35-TI?si=f_ZwiySCUuE9QnJ8', o: 'https://youtu.be/O3ZYjfMqAsc?si=ZwAu0e4GXO3Jve1n',
      f: 'https://youtu.be/0Nj9bxkUhzQ?si=rWmO3fgno0FU92IU'
    }
  },
  {
    names: ["Kaijuu 8-gou", "Kaiju No. 8"], audio: "au_108", pista: "Spring 2024", n: 1,
    video: { en: 'https://youtu.be/aso1mQLUAbc?si=ay0OTTznRhEWG9ci', o: 'https://youtu.be/LYabT4zZnJQ?si=vODQqxAC1xd_o70Q' }
  },
  {
    names: ["Blend S", "Blend-S"], audio: "au_109", n: 1, pista: 'Fall 2017',
    video: { ja: 'https://youtu.be/ugZ2EsnnGxk?si=-tokXaWNPrpcbv3S', o: 'https://youtu.be/6nVXFuKkHoU?si=I-r-NHsucrWamgkm' }
  },
  {
    names: ["Oliver y Benji", "Captain Tsubasa"], audio: "au_110", n: 1, pista: 'Fall 1983',
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
    names: ["Bokusatsu Tenshi Dokuro-chan", "Bludgeoning Angel Dokuro-chan"], audio: "au_115", n: 1, pista: 'March 2005',
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
    names: ["Chobits"], audio: "au_118", n: 1, pista: 'Spring 2002',
    video: { ja: 'https://youtu.be/i_pD9H2G61c?si=xgxW-g5pV-XgjtfA', f: 'https://youtu.be/0UBgYLjTERs?si=vWVMt8IKnAcYU68Z' }
  },
  {
    names: ["Toaru Majutsu no Index", "A Certain Magical Index"], audio: "au_119", pista: "Fall 2008", n: 1,
    video: { ja: 'https://youtu.be/fv2Ybecq92E?si=3LIjfnG_kL6opjp8', o: 'https://youtu.be/V_bQzoU3OB0?si=SAOd6QMG3ehfPbTM' }
  },
  {
    names: ["Heppoko Jikken Animation Excel♥Saga", "Excel Saga"], audio: "au_120", n: 1, pista: 'Fall 1999',
    video: { ja: 'https://youtu.be/MlIfqR6iTSg?si=oNFMqZT_vdz5U3Vm', f: 'https://youtu.be/oqiYzdqEiKw?si=DZ4JGfStI6jq0PnT' }
  },
  {
    names: ["Bakuten Shoot Beyblade", "Beyblade"], audio: "au_121", n: 1, pista: 'Winter 2001',
    video: {
      es: 'https://youtu.be/Q-KLSwjYU1Y?si=f2Xsc5gMBSaOSVKX', ja: 'https://youtu.be/P8gZbrDNbHM?si=8GNsfyhQLLMhLn3z',
      f: 'https://youtu.be/WsOlT-q89f0?si=9Pv0IWHldwyKBUPy'
    }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_122", n: 1, pista: 'Winter 1996',
    video: { ja: 'https://youtu.be/eXVRuxdfFaQ?si=ZKS3Y5wn88W0qWrf', f: 'https://youtu.be/cKUTx0tRi2s?si=8sPBDpPKKt9T0Hcu' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_123", pista: "Fall 2015", n: 1,
    video: { ja: 'https://youtu.be/wKoAi5Nryqo?si=p5x9o58aveXMkZst', o: 'https://youtu.be/libAD49_XNw?si=NTzNseaoKS37onFa' }
  },
  {
    names: ["Digimon", "Digimon Adventure"], audio: "au_124", n: 1, pista: 'Spring 1999',
    video: {
      es: 'https://youtu.be/UXwunDD5Lm8?si=Yg8rWmD1xUqMofJ5', ja: 'https://youtu.be/aEmqwCkqkUk?si=nguGB9LAy42KUjVf',
      f: 'https://youtu.be/PeSVLxLFjwA?si=BO94MIBjqPa39tpY'
    }
  },
  {
    names: ["Digimon 03", "Digimon Tamers"], audio: "au_125", n: 1, pista: 'Spring 2001',
    video: {
      es: 'https://youtu.be/Gu2YHoDHt4c?si=N89IN1se66CMcQNw', ja: 'https://youtu.be/Se-2l5A2wu4?si=zOszBjYcYzSXJRIz',
      f: 'https://youtu.be/-ZWZIaxlRe4?si=woecp9t_SJK37kef'
    }
  },
  {
    names: ["Digimon Frontier"], audio: "au_126", n: 1, pista: 'Spring 2002',
    video: {
      es: 'https://youtu.be/L4IR6SkE_Aw?si=iFaNCqJXkI4fhkBR', ja: 'https://youtu.be/PLMJAdGEfs4?si=ToR4YjaieqjvTYj-',
      f: 'https://youtu.be/jITCxxobtdw?si=RiJa0LoN04VhUY5e'
    }
  },
  {
    names: ["Doremi", "Ojamajo Doremi", "Magical DoReMi"], audio: "au_127", n: 1, pista: 'Winter 1999',
    video: {
      es: 'https://youtu.be/YIpZuc_Pwnw?si=F5yw8-8mSiTDcBXH', ja: 'https://youtu.be/9CioAYtz4iM?si=iNFHjQVCFqORzHp7',
      f: 'https://youtu.be/yXD0AWOd9kM?si=Izs6rKuM1cc-Lxrp'
    }
  },
  {
    names: ["Love Hina"], audio: "au_128", n: 1, pista: 'Spring 2000',
    video: {
      es: 'https://youtu.be/9DibpuVcdG0?si=rnYhgFl8UylEyLn9', ja: 'https://youtu.be/8eXZ97tRIK0?si=DWbHnnclJkoOIk76',
      o: 'https://youtu.be/MVTJKUwI76I?si=hDUGhG8ZGo6895Z_'
    }
  },
  {
    names: ["Mazinger Z"], audio: "au_129", n: 1, pista: 'Winter 1973',
    video: {
      es: 'https://youtu.be/joEetudPr9s?si=S-7xrapeXk4oHfTX', ja: 'https://youtu.be/MR7xA2JbNCQ?si=e0GTm-lVJS9pGsmP',
      f: 'https://youtu.be/XnAITNbQ-hk?si=XAutEEppfxRoEm_e'
    }
  },
  {
    names: ["Bobobo", "Bobobo-bo Bo-bobo"], audio: "au_130", n: 2, pista: '27-52',
    video: { ja: 'https://youtu.be/phR_SkRSJtE?si=53TrgfpeRZQIADsm', o: 'https://youtu.be/n9QTaxnm-P0?si=dq21fuWmkc_M-Sj6' }
  },
  {
    names: ["YAT", "YAT Anshin! Uchuu Ryokou"], audio: "au_131", pista: 'Fall 1996', n: 1,
    video: { ja: 'https://youtu.be/l-jtQUnA1FM?si=TcgxxoeKoEH4BWkJ', f: 'https://youtu.be/uJlheX6nYWw?si=853muELWd_im6NTV' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_132", n: 2, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/7TzaEHUWvpM?si=HmD4o-p9k6qwijYt', o: 'https://youtu.be/9aJVr5tTTWk?si=Dny8FJhwIjfETs4P' }
  },
  {
    names: ["Bleach"], audio: "au_133", n: 1, pista: 'Fall 2004',
    video: {
      ja: 'https://youtu.be/wW9TwZdWpjw?si=-oLa2reDKFwVz_EV', f: 'https://youtu.be/r-MEKwXFF-s?si=sTAZYDWRSIAjGOhW',
      o: 'https://youtu.be/MS7qWGeOTfY?si=fPwWLMNxnBPgoWUw'
    }
  },
  {
    names: ["One Piece"], audio: "au_134", n: 1, pista: '1 - 47, 1000',
    video: {
      es: 'https://youtu.be/dSUQXSXgvVw?si=UaS3_c0LJAC7cfin', ja: 'https://youtu.be/gcjdXMfYIe4?si=gk-XrsMQhnQ_xXIv',
      f: 'https://youtu.be/IHhNTt3oxtY?si=ZAU3eiBv7PzQm1_2'
    }
  },
  {
    names: ["Spy X Family"], audio: "au_135", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/EzGs8Tm_C2g?si=wfAT4i6XVVa-NkH5', o: 'https://youtu.be/CbH2F0kXgTY?si=v9TEF2IsrtivNIUP' }
  },
  {
    names: ["One Piece"], audio: "au_136", n: 2, pista: '48 - 115',
    video: {
      es: 'https://youtu.be/OfsXP8YPJIY?si=IX1TevedpDSHVZpe', ja: 'https://youtu.be/QwSkErUIF9k?si=PYJVexZfYR5VpjSc',
      o: 'https://youtu.be/qM_FepDsJ-Q?si=OFUq1OgG95s0bt6i'
    }
  },
  {
    names: ["Noragami"], audio: "au_137", n: 1, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/gWCnKoEgfP0?si=6iMvSk33GvwhqdUU', o: 'https://youtu.be/J69oCCM1EcI?si=jhLvTzmJe1aPyqOH' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_138", n: 3, pista: 'Summer 2023',
    video: { ja: 'https://youtu.be/gcgKUcJKxIs?si=HvBIOg1FWENKqK6O', o: 'https://youtu.be/zuoVd2QNxJo?si=8AMV8g_982R5JJBY' }
  },
  {
    names: ["One Piece"], audio: "au_139", n: 20, pista: '807 - 855',
    video: { ja: 'https://youtu.be/Oo52vQyAR6w?si=jCxAHSU3ej3-AiNX', f: 'https://youtu.be/7Fr5Mas3AYM?si=ipu-zHXdL2BQkz80' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_140", n: 1, pista: 'Spring 2019',
    video: { ja: 'https://youtu.be/pmanD_s7G3U?si=H9JUW4Dk0BGRRfk-', o: 'https://youtu.be/CwkzK-F0Y00?si=S6JWY2iuBh1pmHeF' }
  },
  {
    names: ["Wotaku ni Koi wa Muzukashii", "Wotakoi: Love is Hard for Otaku", "wotakoi"],
    audio: "au_141", n: 1, pista: 'Spring 2018',
    video: { ja: 'https://youtu.be/XjHqfhOcK_0?si=O2e6phJRLz2o-2nU', o: 'https://youtu.be/IKHGAuNaGuA?si=V2aA2A1s7uk6v7gy' }
  },
  {
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_142", n: 2, pista: '15 - 26',
    video: { ja: 'https://youtu.be/aZcHqqqeNUs?si=LpgUy1ra5zLXUSP_', o: 'https://youtu.be/o71vyLnNtBo?si=Uk-FQGe8cwjVZ_Nd' }
  },
  {
    names: ["Tokyo Revengers"], audio: "au_143", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/By_JYrhx-WY?si=O-TciITkqRW0WyDF', o: 'https://youtu.be/O1bhZgkC4Gw?si=3Hx372YG5cnRDC8S' }
  },
  {
    names: ["One Piece"], audio: "au_144", n: 4, pista: '169 - 206',
    video: {
      es: 'https://youtu.be/tiFia3ELQeg?si=i5FXfTjbAYaMleK5', ja: 'https://youtu.be/TxzDvP-quXs?si=loZgdf6Zv8ptwEcm',
      o: 'https://youtu.be/tiBPGLWZe4s?si=7MJRed_nRis4cGdS'
    }
  },
  {
    names: ["One Piece"], audio: "au_145", n: 3, pista: '116 - 168',
    video: {
      es: 'https://youtu.be/PLhrsOlYNro?si=eWk0py4S9G3v-cS-', ja: 'https://youtu.be/x1_sHTEEmik?si=NzHE077IeVzqU8Kn',
      o: 'https://youtu.be/_YNtUuuBL78?si=LR_bJoTC6YUt58J7'
    }
  },
  {
    names: ["Spy X Family"], audio: "au_146", n: 2, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/YOIJOJsUkUg?si=UuXDJpxfJKVq1TaC', o: 'https://youtu.be/C9vAUfSEh8Q?si=CHwPVUypXWnrOU8y' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_147", n: 3, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/F9EswQEBqmM?si=FPOUqtcZ0HGbGMzA', o: 'https://youtu.be/uUANWiMP69A?si=PIqeacJuzOlju8fa' }
  },
  {
    names: ["Bleach"], audio: "au_148", n: 2, pista: '26 - 51',
    video: { ja: 'https://youtu.be/h1MoLQ9Wcv0?si=Xifu0YZaZhzb9I-x', o: 'https://youtu.be/L-u3fkgZkO0?si=irIY1w8oziYLzHQf' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_149", n: 3, pista: 'Summer 2017',
    video: { ja: 'https://youtu.be/-owtG3xsQAg?si=g7nSa--pDGZj-eGE', o: 'https://youtu.be/MJeqcGPtTqQ?si=JIZI4h6lwabKooKm' }
  },
  {
    names: ["One Piece"], audio: "au_150", n: 16, pista: '591 - 628',
    video: { ja: 'https://youtu.be/WsPI841IKw4?si=IlPrm0Pj32bx3nfj', o: 'https://youtu.be/UGvJ9aUD3Gs?si=9VTHpLJ13TLVSE0D' }
  },
  {
    names: ["Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
      "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.", "BOFURI"], audio: "au_151", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/MVTMQbd4shI?si=vMhCqTIZvSO-H8iK', o: 'https://youtu.be/s1pyKKLbDx0?si=cxEHLe5Iv9mHcWhU' }
  },
  {
    names: ["Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai", "Shimoneta",
      "SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist"], audio: "au_152", n: 1, pista: 'Summer 2015',
    video: { ja: 'https://youtu.be/a1V8M2LwGq0?si=j9YfhnSBkitl5JV6', o: 'https://youtu.be/7pmPHqAlph4?si=NOojFXzuL4pVjDYv' }
  },
  {
    names: ["Marmalade Boy"], audio: "au_153", n: 1, pista: 'Spring 1994',
    video: { ja: 'https://youtu.be/Osv73GPCpRo?si=DBSsvDzTnAtTq9_P', f: 'https://youtu.be/WWnK_jNt_h8?si=XlYU9zKTmFam4gCv' }
  },
  {
    names: ["One Piece"], audio: "au_154", n: 6, pista: '264 - 278',
    video: { ja: 'https://youtu.be/B4ZQvniSX4M?si=CxWyz_mDHCrd3vG_', o: 'https://youtu.be/n09MItNjXoQ?si=8sPXq-qqchvCURg3' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_155", n: 3, pista: 'Winter 2022',
    video: { ja: 'https://youtu.be/st4wcpjZeQQ?si=iN88vO7P3HoUhCU2', o: 'https://youtu.be/tLQLa6lM3Us?si=Q7Lm4CWKhp2xZ20u' }
  },
  {
    names: ["Basilisk: Kouga Ninpou Chou", "Basilisk"], audio: "au_156", n: 1, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/b7Jt8wX_fu4?si=RyZLhqvs7MAcfucd', o: 'https://youtu.be/v86m2RdPSo8?si=eN8sq_QgkMciALQV' }
  },
  {
    names: ["TSUGUMOMO"], audio: "au_157", n: 1, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/IoMrm-lvAEQ?si=Y03yTZlfmuM7jqYo', o: 'https://youtu.be/xWUPHH8Hr60?si=efHZ9NSAqC2q4FXz' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_158", n: 4, pista: 'Spring 2024',
    video: { ja: 'https://youtu.be/VihAYldjRa0?si=0XJWDuLs3LyDMIeV', o: 'https://youtu.be/1b5PCCo1YvI?si=EKaQWqm_zUDRZPsG' }
  },
  {
    names: ["Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
      "WataMote: No Matter How I Look At It, It's You Guys' Fault I'm Not Popular!",
      "watamote"], audio: "au_159", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/rQjVvYj15zk?si=Nhzk_FnNCtR8-AxA', o: 'https://youtu.be/NVI1NohUuAI?si=Bp-YlbVyAhGxar11' }
  },
  {
    names: ["Fruit Basket 2019", "Fruit Basket"], audio: "au_160", n: 2, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/3RJqEL2uHiE?si=p8dPJYaXQ6HvTWFy', o: 'https://youtu.be/BQqt2UmzGUY?si=EJvfxSY5hwDaOG0Q' }
  },
  {
    names: ["One Piece"], audio: "au_161", n: 5, pista: '207 - 263',
    video: {
      es: 'https://youtu.be/2uPYks1BrBQ?si=g70rWaPBYi1ohP2R', ja: 'https://youtu.be/RO_VGv4GT9k?si=m2RbmmQjEjvJSJEn',
      o: 'https://youtu.be/RUZCdggY34c?si=llZr9S4NfxmuAGnX'
    }
  },
  {
    names: ["Shin Chan", "Crayon Shin-chan"], audio: "au_162", n: 1, pista: 'Spring 1992',
    video: {
      es: 'https://youtu.be/a0XV5Gcdqxs?si=ijbT_VtXSyiuv7U8', ja: 'https://youtu.be/oHOiWBVtuvU?si=vtyZPcxb5FX1RXz5',
      f: 'https://youtu.be/aMeeCTb5rKM?si=XnXxyyzEcZys4Bu_'
    }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_163", n: 3, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/ILZh2xncU8A?si=FvkTcrVSqd5e2fSc', o: 'https://youtu.be/8QPyFlJNmus?si=tUmgE515bsTnPu47' }
  },
  {
    names: ["Urusei Yatsura", "Lum, la chica invasora"], audio: "au_164", n: 1, pista: 'Fall 1981',
    video: { ja: 'https://youtu.be/2hulET9tn9M?si=j3_wJ_4GFhNpFU2K', f: 'https://youtu.be/0XkZ-3RvC4A?si=_gjVTcUfpQaKV2Yh' }
  },
  {
    names: ["Nisekoi"], audio: "au_165", n: 1, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/G5YmZRs_L9k?si=lzst3iABNyKBkEI-', o: 'https://youtu.be/7wkj5NCSzbU?si=bzYXS5lktWbFb-CB' }
  },
  {
    names: ["One Piece"], audio: "au_166", n: 13, pista: '459 - 492',
    video: { ja: 'https://youtu.be/9vc2r0s6M_M?si=RahQxmFW1MYB_loq', o: 'https://youtu.be/8QHmMwqY5Lc?si=iMtETl4BBM-Qa1qz' }
  },
  {
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_167", n: 4, pista: '39 - 50',
    video: { ja: 'https://youtu.be/dnIlB6JhLyI?si=FBNe5lsdYib5LYzJ', o: 'https://youtu.be/xslAjvvlJkE?si=o3bG4UVULjbOGJcN' }
  },
  {
    names: ["Angel Beats!"], audio: "au_168", n: 1, pista: 'Spring 2010',
    video: { ja: 'https://youtu.be/Eksw56g-WBY?si=nvqj_ARGvRHq_-9W', o: 'https://youtu.be/cuxDSaU0hKM?si=QvOlMhAGWz8Vaso6' }
  },
  {
    names: ["One Piece"], audio: "au_169", n: 14, pista: '493 - 516',
    video: { ja: 'https://youtu.be/dD9f09g5cxU?si=fD66hJCt23LIWj9B', f: 'https://youtu.be/STBM-Tc9PgQ?si=er0NcCC8D6MEtKQX' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_170", n: 1, pista: 'Fall 2012',
    video: {
      ja: 'https://youtu.be/pwO2AVjTH9k?si=00p_CzWCK5mDqam-', o: 'https://youtu.be/txyKlKQtITk?si=nf5BGMd7IMYa8-Qr',
      f: 'https://youtu.be/bqhxKZitSW8?si=93IeBDs7ocHy9CHA'
    }
  },
  {
    names: ["Fruit Basket"], audio: "au_171", n: 5, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/vVK7vO5hN34?si=UvUsHXWsc4Ct2Nto', o: 'https://youtu.be/j98v9k9_0I0?si=h9hD1rqRN86O8b-C' }
  },
  {
    names: ["Koutetsujou no Kabaneri", "Kabaneri of the Iron Fortress"], audio: "au_172", n: 1, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/UqhZrl1KFpc?si=X8hrmHHKZSdgT_V3', f: 'https://youtu.be/BpAZbM6FYkE?si=BUskUpmekBOFrmB5' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_173", n: 6, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/Y-eoYLBbZOA?si=LOlPsMliJOlcwI8k', o: 'https://youtu.be/goXKlOozyx8?si=B2uMp_r_B3u8sZ6L' }
  },
  {
    names: ["One Piece"], audio: "au_174", n: 23, pista: '935 - 999, 1001 - 1004',
    video: { ja: 'https://youtu.be/YycdCG0L8Kg?si=uF1hOWzIH6mm9Hym', o: 'https://youtu.be/XPT91f5vU-k?si=yxZZFm3xpfYJzoT4' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_175", n: 6, pista: 'Fall 2019',
    video: { ja: 'https://youtu.be/kYfNvEcMgOg?si=95RUZJC_15WTaztP', o: 'https://youtu.be/Isb7Q4jEA04?si=ztTz4oqCwIneIvIT' }
  },
  {
    names: ["Urusei Yatsura", "Lum, la chica invasora"], audio: "au_176", n: 2, pista: '21 - 100',
    video: { ja: 'https://youtu.be/KOyFSBAsf5s?si=LqYTxC8GlIXt7qOo', f: 'https://youtu.be/0Rp2e1V4voM?si=1NhtOzh9f3trCYzh' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_177", n: 1, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/OgsWK7pwx7k?si=VzKEKiOcuT7F5V60', o: 'https://youtu.be/fwzRR6Bsro4?si=awSwEBulCJK8ZxIA' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_178", n: 7, pista: 'Winter 2022',
    video: { en: 'https://youtu.be/2S4qGKmzBJE?si=HYA8RDckSCc3wqHL', o: 'https://youtu.be/OBqw818mQ1E?si=tmNvOdwtFWtzS94S' }
  },
  {
    names: ["Danganronpa", "Danganronpa: Kibou no Gakuen to Zetsubou no Koukousei The Animation",
      "Danganronpa: The Animation"], audio: "au_179", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/zKwRkTaIsZo?si=Q2vpekh0Qcbp1eyG', f: 'https://youtu.be/Ziyz17r8F8A?si=675lmKWF__tDO5-U' }
  },
  {
    names: ["Rurouni Kenshin", "Rurouni Kenshin: Meiji Kenkaku Romantan", "Samurai X"],
    audio: "au_180", n: 1, pista: 'Winter 1996',
    video: { ja: 'https://youtu.be/B6unFPDCVlc?si=WVSEVd_JCLwn-u57', f: 'https://youtu.be/0DBkXcDU270?si=QWcxNmLZp5arnJU5' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure: Stardust Crusaders",
      "JoJo"], audio: "au_181", n: 3, pista: 'Spring 2014',
    video: { ja: 'https://youtu.be/L9DK-DRg85w?si=ndt2LCsrRuJC97zB', f: 'https://youtu.be/oAzNQKbncxA?si=G_qQcdq0nPRf8sEQ' }
  },
  {
    names: ["Cosas de Locos", "Tensai Bakabon"], audio: "au_182", n: 1, pista: 'Fall 1971',
    video: {
      es: 'https://youtu.be/iULqfBhBIsQ?si=wAPE7QQrfeEeWLmq', ja: 'https://youtu.be/WzkbUvWUdow?si=bQDe-YC2PUdPvfDd',
      f: 'https://youtu.be/El6XFu_tyLY?si=0gRd93aG2vuoBRzn'
    }
  },
  {
    names: ["Kochikame", 'Kochira Katsushikaku Kameari Kouenmae Hashutsujo'], audio: "au_183", n: 1, pista: 'Summer 1996',
    video: {
      es: 'https://youtu.be/XJDboajV27g?si=Yn208Slqoyr4849Z', ja: 'https://youtu.be/5d06rMlx1Ys?si=FizaBrq-YJ06rG3B',
      f: 'https://youtu.be/IG-GBtkxKMU?si=VFSrHKqKmG1otXnD'
    }
  },
  {
    names: ["Sentouin, Hakenshimasu!", "Combatants Will Be Dispatched!"], audio: "au_184", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/1Dmn0RyhZGE?si=vZi9s6Cr6-PpO2qO', o: 'https://youtu.be/K-CodXtslc0?si=Jo_p1TBgottnMjU4' }
  },
  {
    names: ["Mato Seihei no Slave", "Chained Soldier"], audio: "au_185", n: 1, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/cxLspslAg1Q?si=PqvoL5CxIWD1oEa9', o: 'https://youtu.be/L8udpF4ZFJs?si=q13jb-QBgVfywDUh' }
  },
  {
    names: ["Ajin", "Ajin: Demi-Human"], audio: "au_186", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/XtMMIkpDXNY?si=-O7nHBhsf-etQVwe', f: 'https://youtu.be/Ppl21c_zKo8?si=M3KwI9KP4vk8cw4g' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_187", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/SJkCLcnGB-c?si=8OLHQ3NUBBBwHMxF', o: 'https://youtu.be/hmpJqJLsR48?si=_lCpX9HT8noDLamb' }
  },
  {
    names: ["Tomo-chan wa Onnanoko!", "Tomo-chan Is a Girl!", "Tomo-chan"], audio: "au_188", n: 1, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/JypMi-Dt_S8?si=dhiDBQEy3U6x_lOc', o: 'https://youtu.be/KfFpQzuCkSo?si=2q5vuVus9hiLZE1T' }
  },
  {
    names: ["Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo", "The 100 Girlfriends",
      "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You", "Las 100 novias"],
    audio: "au_189", n: 1, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/ZmA3O50cMTY?si=V0dZbaSl5Ad-kGOl', f: 'https://youtu.be/h3t6osnyPWI?si=tu6Vm51QM4nu0r3J' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_190", n: 5, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/AQ3oyp4D6FY?si=1guS3ulMAXSso5Ma', o: 'https://youtu.be/qlaRFRA4qFU?si=hu6ya7GPp1tYTOZ5' }
  },
  {
    names: ["Yofukashi no Uta", "Call of the Night"], audio: "au_191", n: 1, pista: 'Summer 2022',
    video: { ja: 'https://youtu.be/rckYQnPW-wk?si=Nnka0I0y2d38h0rn', o: 'https://youtu.be/HRL5Cp_mPeo?si=adT_cvClq5mixHce' }
  },
  {
    names: ["Pokemon"], audio: "au_192", n: 3, pista: '119-159',
    video: { es: 'https://youtu.be/z0OUwsWjqds?si=K740gB0LnEg-Or78', ja: 'https://youtu.be/qa_95sP8II4?si=LVfVShHiXwCcUTOw',
      f: 'https://youtu.be/a6xVdR0h8pQ?si=nFMr9SeeuI85nLHr' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_193", n: 8, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/i1N2cclJVys?si=zkdKb2oG-Qml33F7', o: 'https://youtu.be/ub3EI4xw48c?si=_AruOQgCEOq9vZyM' }
  },
  {
    names: ["Nintama Rantarou", "Ninja Boy Rantaro"], audio: "au_194", n: 1, pista: 'Spring 1993',
    video: { es: 'https://youtu.be/ei9skqHkSKQ?si=rnl9e1q1HE1hgMQ_', ja: 'https://youtu.be/bl0F-sOYREE?si=T9ivJ-oJpNCrXSZQ',
       f: 'https://youtu.be/MWp3gxDRK2o?si=UjfY3n1b8XJUMZNm' }
  },
  {
    names: ["Samurai Champloo"], audio: "au_195", n: 1, pista: 'Spring 2004',
    video: { en: 'https://youtu.be/Eq6EYcpWB_c?si=KGVotxanUYfrV19E', f: 'https://youtu.be/GTWz7ugif-Y?si=uvKqfQZx7T9IRRBh' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_196", n: 1, pista: 'Fall 2012',
    video: { ja: 'https://youtu.be/wPdX66-Ag2s?si=U1lKqUbdyP8xYJ53', o: 'https://youtu.be/7jrKjkrX3Gw?si=d2sGQfW37_R3bWbK' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_197", n: 10, pista: 'December 2021',
    video: { ja: 'https://youtu.be/Uki8nRI9eFg?si=G_ORSG7-76M6w5AN', f: 'https://youtu.be/z6nbRXdDfN8?si=0f6YEE4YGo5suQhl' }
  },
  {
    names: ["City Hunter", "City Hunter 3"], audio: "au_198", n: 1, pista: 'Fall 1989',
    video: { ja: 'https://youtu.be/07uUSEPeP4A?si=uvphhewfO6AymEDY', f: 'https://youtu.be/FkiDM_xx-oA?si=wGVXYdFMQTlnhN8I' }
  },
  {
    names: ["Dumbbell Nan Kilo Moteru?", "How Heavy Are the Dumbbells You Lift?"], audio: "au_199", n: 1, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/ULjbIMvP6A0?si=A1bqH6gE8lkgJ1jD', f: 'https://youtu.be/sNhXgwVsW60?si=wxRxoAF0y_o1wncT' }
  },
  {
    names: ["Bleach"], audio: "au_200", n: 13, pista: '292 - 316',
    video: { ja: 'https://www.youtube.com/watch?v=5emM3JGI5JA', o: 'https://youtu.be/raMTMjaQ3mc?si=sJ3m3ZMLqPzshV-w' }
  },
  {
    names: ["Black Clover"], audio: "au_201", n: 3, pista: '28 - 39',
    video: { ja: 'https://youtu.be/dUiDZJMPh-s?si=DN-aQJRc7ulIrCIO', o: 'https://youtu.be/VSucxMB_Z6k?si=BmRpqg_KX5CE5E2d' }
  },
  {
    names: ["Naruto"], audio: "au_202", n: 2, pista: '26 - 53',
    video: { ja: 'https://youtu.be/SRn99oN1p_c?si=YD8X8_LFECZiPeWx', o: 'https://youtu.be/nJ6A6GC_ki4?si=nt6SCG51qxc9SV_G' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_203", n: 1, pista: '1 - 30',
    video: { ja: 'https://youtu.be/vxvP9zSOL7s?si=PO_Bw-lTHfjfcsQn', o: 'https://youtu.be/ipBCtl0j4O8?si=ESzfcUj2SF0ahCqq' }
  },
  {
    names: ["Divine Gate"], audio: "au_204", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/WLWD-DcP0ko?si=_95x6qGbf1ELnAtH', o: 'https://youtu.be/lq8-R9Ju5F0?si=EHfp6CZRGcq6KvM5' }
  },
  {
    names: ["Black Clover"], audio: "au_205", n: 13, pista: '158 - 170',
    video: { ja: 'https://youtu.be/aaZq6SXXNt4?si=6Xf5D2mPtyTGHpam', o: 'https://youtu.be/7RyewjSWnFo?si=F5grbHjMNwg7EcaS' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_206", n: 3, pista: '54 - 77',
    video: { ja: 'https://youtu.be/aJRu5ltxXjc?si=mUdRgH7oHQtfgaHe', o: 'https://youtu.be/KpsJWFuVTdI?si=8c1yw4vvXxxNFqlw' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_207", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/QNWrygf815I?si=R6Lp3FUu8BuGtG4x', o: 'https://youtu.be/chdM-Oo1WIY?si=cFf2DhwRmARPo6w0' }
  },
  {
    names: ["Nisekoi"], audio: "au_208", n: 2, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/2vfkd7wr-js?si=ycV4CtJb6Slo7LRV', o: 'https://youtu.be/Yqz_G25CjrE?si=BfBPCEiTHP6eae6v' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_209", n: 6, pista: '129 - 153',
    video: { ja: 'https://youtu.be/SavhHnWla6c?si=HHQqXg2wqu04-g_7', o: 'https://youtu.be/qpi9YXaChHI?si=H28JRyaKVrhU8EDa' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_210", n: 3, pista: 'Fall 2013',
    video: { ja: 'https://youtu.be/ltIA2qO0lE8?si=byTOGrlB8M2w4KFk', o: 'https://youtu.be/W8WfH375xkQ?si=mKWKIaLOdLF8bvK2' }
  },
  {
    names: ["Berserk", "Kenpuu Denki Berserk"], audio: "au_211", n: 1, pista: 'Fall 1997',
    video: { ja: 'https://youtu.be/9TRemrRaPjc?si=9k78dVBsiInwCx9-', f: 'https://youtu.be/OEvDglcEvX4?si=TW4VLsEy6JU0XF5g' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_212", n: 37, pista: '718 - 743',
    video: { ja: 'https://youtu.be/zE-XM_oXGok?si=G9UVknKCh80QPe9y', o: 'https://youtu.be/ELgeAQg-yz4?si=82SsUrr-1-aGj1Nr' }
  },
  {
    names: ["Cardcaptor Sakura", "Sakura, cazadora de cartas"], audio: "au_213", n: 3, pista: '47 - 70',
    video: { ja: 'https://youtu.be/YcL-ymNCoZ8?si=W-q-6Fqt0xGnEWWJ', o: 'https://youtu.be/AzPWGoHvJsM?si=Vh4mfPfX8P1Dr6-j' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_214", n: 50, pista: '941 - 964',
    video: { ja: 'https://player.vimeo.com/video/983665104', f: 'https://youtu.be/KpSXQJtjsnk?si=O3K57RDxR8q3xT79' }
  },
  {
    names: ["Initial D", "Initial D First Stage"], audio: "au_215", n: 1, pista: 'Spring 1998',
    video: { ja: 'https://youtu.be/vJeWXw83Vp8?si=_h8pDldfkobf80YW', o: 'https://youtu.be/67K6oXHyf_Q?si=7oI6m17uQErF5ZV6' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_216", n: 1, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/tF4faMbs5oQ?si=ecg08XxLLT0i8WWr', o: 'https://youtu.be/yQEUGxngQN4?si=Q2gs7bYpaoFdUACH' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_217", n: 22, pista: '491 - 504',
    video: { ja: 'https://youtu.be/i9aJAdxCwdI?si=4mC09m7oRubI5LWA', f: 'https://youtu.be/F4SvX22-lKA?si=tl9rRYS0Wqn9yoW2' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_218", n: 4, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/gOrKqc78_Po?si=hj8yIZLjjXRDqq4_', f: 'https://youtu.be/aUKppCxhQYc?si=YnQvRLS_LiyWfNhL' }
  },
  {
    names: ["Ranma ½", "Ranma 1/2"], audio: "au_219", n: 1, pista: 'Spring 1989',
    video: {
      es: 'https://youtu.be/xMJbmdqucfo?si=psv0NcLiPp50tQe3', ja: 'https://youtu.be/4DlT1yI7CSM?si=uT4jZPg6oE4zNlvK',
      f: 'https://youtu.be/MGREcRw3Xw8?si=Lja28Ymo9Nmlh3pG'
    }
  },
  {
    names: ["Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
      "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.", "BOFURI"], audio: "au_220", n: 2, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/rOmPNZ6ZW9w?si=tIOrIYOsMUEiGvLh', o: 'https://youtu.be/EO4zbnY1H-4?si=2SnkIdxoPcRpy47n' }
  },
  {
    names: ["Fist of the North Star", "Hokuto no Ken"], audio: "au_221", n: 1, pista: 'Fall 1984',
    video: { ja: 'https://youtu.be/CvzAazSknGw?si=e9GYqIi286NGS-01', f: 'https://youtu.be/RxkezvGwI20?si=RTNRppbVy3xa7Hth' }
  },
  {
    names: ["Platinum End"], audio: "au_222", n: 1, pista: 'Fall 2021',
    video: { ja: 'https://youtu.be/apgMyxIcy0Q?si=1dKpOfdZqm7LdWDD', o: 'https://youtu.be/BWN6iOFjm9U?si=gDrTTNftzwY_YbHp' }
  },
  {
    names: ["Kokkoku"], audio: "au_223", n: 1, pista: 'Winter 2018',
    video: { ja: 'https://youtu.be/fhBA6ynorvc?si=vP2WIZaf47wnblyJ', o: 'https://youtu.be/1n19mhKWoLk?si=jn6EA3xLlPBOGjxX' }
  },
  {
    names: ["Karakuri Circus"], audio: "au_224", n: 2, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/KJ5lUHtI2xo?si=sQM_oQQaeGhd6x9G', o: 'https://youtu.be/vNVlpyJAbx4?si=-umR8wILBOkTJ91X' }
  },
  {
    names: ["Chicho Terremoto", "Dash! Kappei"], audio: "au_225", n: 1, pista: 'Fall 1981',
    video: {
      es: 'https://youtu.be/8F54OAk0DSE?si=ny2fjoPXOOvDxeQR', ja: 'https://youtu.be/j0r-QqEtpgY?si=_9Bj6T2NcFJo70xC',
      f: 'https://youtu.be/_w7V2yyss2c?si=iwzPE6CTU1LvUA4g'
    }
  },
  {
    names: ["Ijiranaide, Nagatoro-san", "Don't Toy with Me, Miss Nagatoro", "Nagatoro"],
    audio: "au_226", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/7Ewk3Oxyhgk?si=Jxdv9CCWM1f1CleL', o: 'https://youtu.be/J51CxEEYq50?si=FPKVqJPHyKpr4Twt' }
  },
  {
    names: ["Ishuzoku Reviewers", "Interspecies Reviewers"], audio: "au_227", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/QLO4tg0ubXc?si=jsdIIm6vaRCjWQ2s', f: 'https://youtu.be/RR6kzUMimSI?si=KVwnkXERZa4jTuAu' }
  },
  {
    names: ["Monster"], audio: "au_228", n: 1, pista: 'Spring 2004',
    video: { ja: 'https://youtu.be/EYdCd00TJhI?si=530-KNkot7zq3QmY', f: 'https://youtu.be/fIgbbIkja9g?si=sLVM80ItTC8N3WJe' }
  },
  {
    names: ["Paranoia Agent", 'Mousou Dairinin'], audio: "au_229", n: 1, pista: 'Winter 2004',
    video: { ja: 'https://youtu.be/nuncFLIR1Qw?si=xO-pUzK7VvUxz_55', f: 'https://youtu.be/5XjTpm9coJA?si=dVu0mqZDs9SstMTk' }
  },
  {
    names: ["Enen no Shouboutai", "Fire Force"], audio: "au_230", n: 3, pista: 'Summer 2020',
    video: { ja: 'https://youtu.be/xLGtT8WuidM?si=BFDOcjKGPDkxYnhu', o: 'https://youtu.be/aQp8w1Dknv0?si=mqSqUFv1ts4-nV8t' }
  },
  {
    names: ["Overlord"], audio: "au_231", n: 3, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/vci9YwpFFcA?si=lwhcRAvMuRxrE9wq', o: 'https://youtu.be/bI2-ioFv3UA?si=slGSPZFsy1iiRJ-5' }
  },
  {
    names: ["Gleipnir"], audio: "au_232", n: 1, pista: 'Spring 2020',
    video: { ja: 'https://youtu.be/bpybmJ4GhG8?si=dk42hRTrdUilAwyJ', o: 'https://youtu.be/rbd8qYLDjRo?si=DqbvqfQD39_qHYaT' }
  },
  {
    names: ["Jibaku Shounen Hanako-kun", "Toilet-Bound Hanako-kun", "Hanako-kun"], audio: "au_233", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/da3bYroZNSE?si=1tZ0sp6vffH4ENYe', o: 'https://youtu.be/yExFsoZRA8k?si=J2AH-o7kesHnhBdM' }
  },
  {
    names: ["Himouto! Umaru-chan", "Himouto"], audio: "au_234", n: 1, pista: 'Summer 2015',
    video: { ja: 'https://youtu.be/b6-2P8RgT0A?si=nc8RZEec9kyzpfIc', f: 'https://youtu.be/tIlxa7glwUY?si=omqg7wU3lXk30G-J' }
  },
  {
    names: ["Mieruko-chan"], audio: "au_235", n: 1, pista: 'Fall 2021',
    video: { ja: 'https://youtu.be/stn29mdlKqA?si=ifkWVy9QRHZt9syI', f: 'https://youtu.be/9Cf43BUIWyA?si=tianbp9wjNICNECh' }
  },
  {
    names: ["La Ley de Ueki", "Ueki no Housoku", "The Law of Ueki"], audio: "au_236", n: 1, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/YQd-7RyZ4Eo?si=vWOERyUdiOeNQQ_y', o: 'https://youtu.be/wmWCZ85R3sI?si=LlIvPoKzSi6fxbam' }
  },
  {
    names: ["Youjo Senki", "Saga of Tanya the Evil"], audio: "au_237", n: 1, pista: 'Winter 2017',
    video: { ja: 'https://youtu.be/voC3PvD_iZw?si=wxKkb6M5fsZQQ_ID', o: 'https://youtu.be/5VRyiaszGtA?si=bb0lGBXK5Jbq0NrJ' }
  },
  {
    names: ["Tensei shitara Slime Datta Ken", "That Time I Got Reincarnated as a Slime", "Tensura"],
    audio: "au_238", n: 1, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/SqdeDAbejkQ?si=re_9lte9fHrvwBmM', o: 'https://youtu.be/W1O8iRu0V4A?si=XFBfgZp1CXIG8I5L' }
  },
  {
    names: ["Anohana", "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.",
      "Anohana: The Flower We Saw That Day"], audio: "au_239", n: 1, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/hu8JGQiXRFI?si=hTVgDcSQEUnX0ap7', o: 'https://youtu.be/T3bxbVGWy5k?si=svgYV2jTwIacvyhP' }
  },
  {
    names: ["Summertime Render", "Summer Time Rendering"], audio: "au_240", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/DR88n4VMIfo?si=RFKbSxIGojfFfkgu', o: 'https://youtu.be/ZlIdbht29kc?si=zO2_Bp2tYKT6SA3T' }
  },
  {
    names: ["Saiki Kusuo no Ψ-nan", "The Disastrous Life of Saiki K.",
      "Saiki K"], audio: "au_241", n: 1, pista: 'Summer 2016',
    video: { ja: 'https://youtu.be/4GNTfA-seHY?si=CAFMrqgNZVCU-rED', o: 'https://youtu.be/KHHjxCJpeKw?si=tLN0JWrz3Jy3DBJW' }
  },
  {
    names: ["Btooom!"], audio: "au_242", n: 1, pista: 'Fall 2012',
    video: { ja: 'https://youtu.be/cGncS_CzUDs?si=70hLuHPJXzAcTveU', f: 'https://youtu.be/6S1Ql39yAtQ?si=ELy8BtuTcNgyFYwv' }
  },
  {
    names: ["Psycho-pass"], audio: "au_243", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/SJ-aUXmJM8Q?si=CgDqVBtEAJHUb13e', o: 'https://youtu.be/rqsHvAq4R40?si=xoOG5UXavgGShYSr' }
  },
  {
    names: ["Gantz"], audio: "au_244", n: 1, pista: 'Spring 2004',
    video: { ja: 'https://youtu.be/yL-lcOMc-vQ?si=n_RSZ7yQMY7fEWfV', o: 'https://youtu.be/acGqQn9rk0U?si=LGalIjCTbW1Tnwxe' }
  },
  {
    names: ["Black Lagoon"], audio: "au_245", n: 1, pista: 'Spring 2006',
    video: { ja: 'https://youtu.be/3n52e3HsEOM?si=vfePo5XVXfzhiser', o: 'https://youtu.be/FM3JRDvthok?si=pPAP3Stjghgs8r3w' }
  },
  {
    names: ["Eromanga Sensei", "Eromanga-sensei"], audio: "au_246", n: 1, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/DeGw8-KwxM4?si=sVu6YPIVMKfCbd8G', o: 'https://youtu.be/pert73f8PEc?si=8U7mQFJ_O6fQADSE' }
  },
  {
    names: ["Banana Fish"], audio: "au_247", n: 1, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/0z6FLH2HXl4?si=q8qbsoA5dhENy2v-', o: 'https://youtu.be/VrOOigt76K0?si=hnezzTDb3PpkqM7c' }
  },
  {
    names: ["Tate no Yuusha no Nariagari", "The Rising of the Shield Hero", "Tate no Yuusha"],
    audio: "au_248", n: 2, pista: 'Spring 2019',
    video: { ja: 'https://youtu.be/7cbJUjjTHH8?si=IdLvuPogCT3B439U', o: 'https://youtu.be/A0iJkPbU7yA?si=Unxbv9xRkX51uVN7' }
  },
  {
    names: ["Nisemonogatari"], audio: "au_249", n: 3, pista: 'Winter 2012',
    video: { ja: 'https://youtu.be/mqmV7tTCgXg?si=98X3o6TXmCiNqUW6', o: 'https://youtu.be/14FOPsSCIPs?si=tz2w22tBSjZZEkOL' }
  },
  {
    names: ["Dagashi Kashi"], audio: "au_250", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/ZqZC8P2ZA6Q?si=PF-NnfWcq4dOtUmU', o: 'https://youtu.be/dusIMZ_mG40?si=nItsQGkS81rOjmsa' }
  },
  {
    names: ["Sousou no Frieren"], audio: "au_251", n: 2, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/iqsnJJK8GA4?si=3W56zIoc_PrL3rfl', o: 'https://youtu.be/CkvWJNt77mU?si=Tx7d7vNKAhGiX1QE' }
  },
  {
    names: ["Boku no kokoro no yabai yatsu", "The Dangers in My Heart"], audio: "au_252", n: 2, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/A0tKGpKOU4Y?si=44f9wV0zhAjz2QoR', o: 'https://youtu.be/8L5cQlXMpeY?si=pRGN9HKNCqfoOlAv' }
  },
  {
    names: ["Isekai ojisan", "Uncle from Another World"], audio: "au_253", n: 1, pista: 'Summer 2022',
    video: { ja: 'https://youtu.be/rzQJ1stoUnE?si=Nax9HCpGCcen1pYU', o: 'https://youtu.be/4wwi-wdpeck?si=D5OeKr7iTbdt7ZUd' }
  },
  {
    names: ["My Home Hero"], audio: "au_254", n: 1, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/omUKBP9ZCzQ?si=uweUEtJ8-Bu_gax0', o: 'https://youtu.be/YbAzCVoysiY?si=YLx0DKBs4_HXoj-c' }
  },
  {
    names: ["Link click", "Shiguang Dailiren"], audio: "au_255", n: 1, pista: 'April 2021',
    video: { ja: 'https://youtu.be/ZtEBMYcZvjY?si=1ew5Dv452MBMP7te', f: 'https://youtu.be/lLCEOrQVp-g?si=Lxuu0ROhJxZVD4L5' }
  },
  {
    names: ["Trigun"], audio: "au_256", n: 1, pista: 'Spring 1998',
    video: { ja: 'https://youtu.be/k6j4jrszKNQ?si=jXqaAr2BqDlKi5JH', f: 'https://youtu.be/m_nVgFoeDmc?si=wY_TfT-4v5rRXZ0b' }
  },
  {
    names: ["Trigun Stampede"], audio: "au_257", n: 1, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/mxYqXOL5uLk?si=ioH83xHTgKrVX2mn', o: 'https://youtu.be/-RQTxqPc5T0?si=3LHhHFINj54wI7E4' }
  },
  {
    names: ["Darling in the FranXX"], audio: "au_258", n: 1, pista: 'Winter 2018',
    video: { ja: 'https://youtu.be/A4kLcDWBYcQ?si=fTEzHsi8yRP9-9ag', f: 'https://youtu.be/N0ixzrZe--0?si=RE8v5kkZPNgkqrUn' }
  },
  {
    names: ["FLCL", "Furi Kuri", "Fooly Cooly"], audio: "au_259", n: 1, pista: 'April 2000',
    video: { ja: 'https://youtu.be/qgLZLuPBCOE?si=-baj6vsuEMa-TJdz', o: 'https://youtu.be/K4_Qzx-E2LQ?si=vmpSTz0X_7bc-SQ-' }
  },
  {
    names: ["Guilty crown"], audio: "au_260", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/W10RXr9c44Y?si=m_aLfPrbP9-2QV6Q', o: 'https://youtu.be/nIrYjzHAEp0?si=-lLvwgHEpI-Lw342' }
  },
  {
    names: ["Cyberpunk edgerunners", "Cyberpunk: Edgerunners"], audio: "au_261", n: 1, pista: 'September 2022',
    video: { ja: 'https://youtu.be/OifiVCnFKzM?si=BOlKm3OUbdm4WQmj', o: 'https://youtu.be/mH2wmyeiIpA?si=NyVP3tBcvF3pmoRa' }
  },
  {
    names: ["Blue exorcist", "Ao no Exorcist"], audio: "au_262", n: 2, pista: 'Summer 2011',
    video: { ja: 'https://youtu.be/vSUsiPvJv2Q?si=RsCfObEaJmJ3L4KN', o: 'https://youtu.be/j-5F1QjPAkI?si=WdbI2TYdGrNA6QDb' }
  },
  {
    names: ["Golden Boy"], audio: "au_263", n: 1, pista: 'October 1995',
    video: { ja: 'https://youtu.be/g5zk5GyGYJM?si=URRKAZJsNrWC8l12', f: 'https://youtu.be/ZzNEeVmjvv4?si=Ie77qyxMtvBTH-JQ' }
  },
  {
    names: ["Slam Dunk"], audio: "au_264", n: 1, pista: 'Fall 1993',
    video: { ja: 'https://youtu.be/m_QP5_rdH_g?si=I0BiyKULIurri_s3', f: 'https://youtu.be/JzurtO4yHrM?si=v9-mc1YymEIMp0M1' }
  },
  {
    names: ["Free! - Iwatobi Swim Club", "Free!"], audio: "au_265", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/bSB9am38_8Q?si=ARCpkERwBBMkmsnf', o: 'https://youtu.be/P8JV2xnyJ9Q?si=UR0QRPUArsrC10aA' }
  },
  {
    names: ["Durarara!!", "Durarara"], audio: "au_266", n: 2, pista: 'Spring 2010',
    video: { ja: 'https://player.vimeo.com/video/982403836', o: 'https://youtu.be/HkQ_mzbC_WY?si=igpawP3j209h6v3_' }
  },
  {
    names: ["Solty rei"], audio: "au_267", n: 1, pista: 'Fall 2005',
    video: { ja: 'https://youtu.be/52YMT9KVNls?si=zoqdeHA7Eff9LveE', f: 'https://youtu.be/SbRuPF8iJlg?si=24MKnJRVBNy4kDR7' }
  },
  {
    names: ["Deadman Wonderland"], audio: "au_268", n: 1, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/_5WvUPHF5f8?si=_LiuIjL8IlMcF1er', o: 'https://youtu.be/cLzGOyeu6cc?si=Nb82wA4Vnp5NaTNP' }
  },
  {
    names: ["High school dxd"], audio: "au_269", n: 1, pista: 'Winter 2012',
    video: { ja: 'https://youtu.be/gG5xCXmzwgs?si=MiRr3k0I7KPmd4yC', f: 'https://youtu.be/TENK5BwkXoY?si=QT2Zznx_vSa0CMQM' }
  },
  {
    names: ["Great teacher onizuka", "GTO"], audio: "au_270", n: 2, pista: 'Winter 2000',
    video: { ja: 'https://youtu.be/xpAg0spgFJA?si=VaW5KQf2V-dYcHEb', o: 'https://youtu.be/_rw6Vnyo8Sc?si=tp-FqjGCQaMwVk8f' }
  },
  {
    names: ["Darker than black"], audio: "au_271", n: 3, pista: 'Fall 2009',
    video: { ja: 'https://youtu.be/JXTNhHfcHpU?si=Sr9w-kIX7qOzJlP0', f: 'https://youtu.be/9sY9gH8v9FI?si=q8NngjrdojSzHIl3' }
  },
  {
    names: ["Hellsing"], audio: "au_272", n: 1, pista: 'Fall 2001',
    video: { ja: 'https://youtu.be/2-hGDNMJL8k?si=LaXm5z-sF-X9GfJ1', f: 'https://youtu.be/9aZZje-RzF0?si=bvuma6y6arw22JhL' }
  },
  {
    names: ["Yowamushi pedal"], audio: "au_273", n: 2, pista: 'Spring 2014',
    video: { ja: 'https://youtu.be/KWXeaLtn6j8?si=9D1kf2OD7eo1tZzH', o: 'https://youtu.be/6FpPv1dPvLM?si=s8xrmuwWQEJtniwo' }
  },
  {
    names: ["Nanatsu no Taizai", "The Seven Deadly Sins"], audio: "au_274", n: 2, pista: 'Winter 2015',
    video: { ja: 'https://youtu.be/U8_Kb96PUfE?si=-KDsPMhyqANZuyOo', o: 'https://youtu.be/2Vzksex5REE?si=DbHFNKC6tBs_K_0F' }
  },
  {
    names: ["Shingeki no Bahamut: Genesis", "Rage of Bahamut: Genesis", "Shingeki no Bahamut"],
    audio: "au_275", n: 1, pista: 'Fall 2014',
    video: { ja: 'https://youtu.be/kYW1wrYOxy8?si=l49RwECCrRWJNT2z', o: 'https://youtu.be/UG0WMZmkbm4?si=skIWJGMHBir7NU34',
       f: 'https://youtu.be/y49vRTBks18?si=iQRwWuyztjrlJE9Y' }
  },
  {
    names: ["Akiba maid war", "Akiba Meido Sensou"], audio: "au_276", n: 1, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/JLY2gS0o-gE?si=d6ozXL71yEqvMbVH', f: 'https://youtu.be/l_A-ufGHYvk?si=q9vY_3gsSBF481dz' }
  },
  {
    names: ["3-Gatsu no lion", "March Comes In Like a Lion", "San-Gatsu no lion"], audio: "au_277", n: 1, pista: 'Fall 2016',
    video: { ja: 'https://youtu.be/cKWqPXkLgzY?si=SR1tMFCbfBpWYRJF', o: 'https://youtu.be/bRWQckbQ9tQ?si=HQ8ItZkPwCtfp-Tl' }
  },
  {
    names: ["Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
      "Kaguya-sama: Love is War", "Kaguya-sama"], audio: "au_278", n: 1, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/WZof19wk4Ec?si=NzijEhj3UbXtX7kl', o: 'https://youtu.be/BC4zaaiXNMI?si=xqhnTI7ByWEBngkT' }
  },
  {
    names: ["Kakushigoto"], audio: "au_279", n: 1, pista: 'Spring 2020',
    video: { ja: 'https://youtu.be/vKtR0svZOAo?si=V5IOp7GUsKbBA3NZ', o: 'https://youtu.be/XVDG299bB34?si=5QhDcVGElxae8u3v' }
  },
  {
    names: ["Mob psycho 100"], audio: "au_280", n: 3, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/viOzQNX9ea8?si=26yh3807Wdgq7pGg', o: 'https://youtu.be/PB4VaN_qV3Q?si=mROV0JLoLbafZEFm' }
  },
  {
    names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_281", n: 1, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/0Vwwr3VGsYg?si=CanQ9nzJVG42bqFb', f: 'https://youtu.be/R9i8nVS2NCA?si=u9Nvv4fNYmaYG8zh' }
  },
  {
    names: ["The god of high school"], audio: "au_282", n: 1, pista: 'Summer 2020',
    video: { ja: 'https://youtu.be/eRJyYfAq2tk?si=PjyaZMuqbmaZbzI_', o: 'https://youtu.be/pkw_Hl3qXCs?si=Xt0RsA609mxYuHGC' }
  },
  {
    names: ["Sword Art Online: Alicization", "Sword Art Online", "SAO"], audio: "au_283", n: 5, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/3hdJ8PKNXrc?si=iQdsCeclS1j7Qgb8', o: 'https://youtu.be/v2tmzEuVEz8?si=XeeIfbFSA9BXG0V-' }
  },
  {
    names: ["Heion Sedai no Idaten-tachi", "The Idaten Deities Know Only Peace"], audio: "au_284", n: 1, pista: 'Summer 2021',
    video: { ja: 'https://youtu.be/x59-Lr9nnho?si=uKmRLKFJJvjlfy_N', o: 'https://youtu.be/e9RVh2bXA8M?si=xrbQSae69H2KNoVE' }
  },
  {
    names: ["Hajime no Ippo", "Fighting Spirit"], audio: "au_285", n: 4, pista: 'Winter 2009',
    video: { ja: 'https://youtu.be/tlgakY6HgU0?si=8lD4XiXH2EnAq5Bv', o: 'https://youtu.be/tQ-UZZSLRpE?si=eAfPkp6IOTXHJey3' }
  },
  {
    names: ["Grand blue", "Grand Blue Dreaming"], audio: "au_286", n: 1, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/0PpTUtHtwt4?si=I-e0buZfulntwbhb', o: 'https://youtu.be/yGqhuP4SMaE?si=pEIx2-VDRiGnCTUJ' }
  },
  {
    names: ["Ansatsu Kyoushitsu", "Assassination Classroom"], audio: "au_287", n: 4, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/slFvxoRwNt0?si=oCIfEjmUN_eSgidO', f: 'https://youtu.be/woFU8DGg1UI?si=Oze9lC6_OnxMbRmD' }
  },
  {
    names: ["Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "Rascal Does Not Dream of Bunny Girl Senpai",
      "Bunny Girl Senpai"], audio: "au_288", n: 1, pista: 'Fall 2018',
    video: { ja: 'https://player.vimeo.com/video/982405364', o: 'https://youtu.be/nWopwMbaIZ8?si=i60TfRBoibH4PtSE' }
  },
  {
    names: ["Ao Haru Ride", "Blue Spring Ride"], audio: "au_289", n: 1, pista: 'Summer 2014',
    video: { ja: 'https://youtu.be/IACs-yJoXKM?si=WU2jxuI9GGJAIyHV', f: 'https://youtu.be/wM4laths4-Y?si=-MnxwpiY6SWw6CDN' }
  },
  {
    names: ["Chihayafuru"], audio: "au_290", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/IcCJgmLZYkE?si=u8Z8pEzvafmQfgoT', o: 'https://youtu.be/2dDD1hs3zHs?si=6sD6uNARnri-wpox' }
  },
  {
    names: ["Barakamon"], audio: "au_291", n: 1, pista: 'Summer 2014',
    video: { ja: 'https://youtu.be/_vvL3z3pAs0?si=DOwRypa5xV4_XzrN', o: 'https://youtu.be/wol-XHb1VhM?si=ld8PuDhmaU1PnrMx' }
  },
  {
    names: ["Sword Art Online II", "Sword Art Online", "SAO"], audio: "au_292", n: 4, pista: 'Fall 2014',
    video: { ja: 'https://youtu.be/yPU0ykIeumw?si=Ua6-5am2pENPRAUf', o: 'https://youtu.be/pxr4lSNluEo?si=in57GfjOYfC9fBmL' }
  },
  {
    names: ["Fairy tail"], audio: "au_293", n: 16, pista: '189 - 203',
    video: { ja: 'https://youtu.be/CeGRYuEq2Rk?si=1HjOxl04raORf3Xk', o: 'https://youtu.be/2snm79cxw_8?si=bp_Y6lSCEfqZfags' }
  },
  {
    names: ["Konjiki no Gash Bell!!", "Zatch Bell!", "Zatch Bell"], audio: "au_294", n: 1, pista: 'Spring 2003',
    video: { ja: 'https://youtu.be/XaztbhhCEaE?si=MEKiPu5EubFmbPy7', o: 'https://youtu.be/kgQtOZb1qLA?si=Oh1buGpf5RjoXlJe' }
  },
  {
    names: ["Fairy tail"], audio: "au_295", n: 21, pista: '253 - 265',
    video: { ja: 'https://youtu.be/MkBVsAYUc-g?si=g-DsK_P7uvrGY4Ao', o: 'https://youtu.be/x2i_fsR0Lb8?si=d-Fia0y6pk7PC15L' }
  },
  {
    names: ["Rainbow", "Rainbow: Nisha Rokubou no Shichinin"], audio: "au_296", n: 1, pista: 'Spring 2010',
    video: { ja: 'https://youtu.be/ibkhGFKhyW8?si=eDNuIdDLMTXtssFD', o: 'https://youtu.be/o57sPCm3JBw?si=edF6Zfg01wv56nRq' }
  },
  {
    names: ["Highschool of the dead", "HOTD"], audio: "au_297", n: 1, pista: 'Summer 2010',
    video: { ja: 'https://youtu.be/ZDRvkxKcEqY?si=xfXmuWAr9arQV6s8', o: 'https://youtu.be/Vkq9y80Guws?si=L7SgaudK00y_qY1x' }
  },
  {
    names: ["Kekkai Sensen", "Blood Blockade Battlefront"], audio: "au_298", n: 1, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/cwAWY9FiMEw?si=j2sT85wSNcTciZ9b', o: 'https://youtu.be/rOU4YiuaxAM?si=magaSQtKMzIydIdg' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_299", n: 2, pista: 'Fall 2019',
    video: { ja: 'https://youtu.be/SohCAjC-Npk?si=DfsQ72FupQJf2vQC', o: 'https://youtu.be/iOQawGuWnIQ?si=ozkUr4o2-95u365J' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_300", n: 3, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/fkAL_LeCsZs?si=M3a66vsR-RjP26ip', o: 'https://youtu.be/TzlecLbdo-s?si=iTXI7unzxqZTO71Q' }
  },
  {
    names: ["Chain Chronicle: Haecceitas no Hikari", "Chain Chronicle: The Light of Haecceitas", "Chain Chronicle"],
    audio: "au_301", n: 1, pista: 'Winter 2017',
    video: { ja: 'https://youtu.be/VCJoTp7vcFQ?si=n0O_NOTMf2CIWj_p', o: 'https://youtu.be/rT46SjB48YQ?si=z6V6CVzEUGNQ9pyA' }
  },
  {
    names: ["Yuusha, Yamemasu", "I'm Quitting Heroing"], audio: "au_302", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/hJt8cctjXr0?si=N68iCid5z20dVjXw', o: 'https://youtu.be/PyvUULsgzYU?si=viwlAZRX-dyY5nm6' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_303", n: 2, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/LFTE4W--Htk?si=v-r4j0HCvTkfvbYz', f: 'https://youtu.be/nHsyLQ0ZPug?si=r6uyOIpJ2euWiEHl' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_304", n: 4, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/5yb2N3pnztU?si=WHvKug0a-eiPI77e', o: 'https://youtu.be/fhzKLBZJC3w?si=eW32O0Ca8MIH0tBD' }
  },
  {
    names: ["Toaru Kagaku no Railgun S", "A Certain Scientific Railgun", "Toaru Kagaku no Railgun"],
    audio: "au_305", n: 3, pista: 'Spring 2013',
    video: { ja: 'https://youtu.be/Ie3natE3-DE?si=DZCb8OzAM0g6KVj_', o: 'https://youtu.be/e6g3mkqhFzo?si=yLlJYtut6g0ztTjX' }
  },
  {
    names: ["Star Driver: Kagayaki no Takuto", "Star Driver"], audio: "au_306", n: 2, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/uSv4lUPShF4?si=90kdm-OMsVR6C4Pb', o: 'https://youtu.be/G_0EYoFa0sI?si=KuPLMZ2tdBnmiSah' }
  },
  {
    names: ["Kuroko no basket", "Kuroko's Basketball"], audio: "au_307", n: 1, pista: 'Spring 2012',
    video: { ja: 'https://youtu.be/5RVEM8-UKlg?si=N_zY1nDiKybw210V', o: 'https://youtu.be/Gou49bzZrvo?si=8PUOYSdHafnCe_7D' }
  },
  {
    names: ["Mob psycho 100"], audio: "au_308", n: 2, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/epZaT8B31-g?si=DJPnXvCbTwCOBnaJ', o: 'https://youtu.be/Ip7H4dXrfMM?si=eTEvTGtyL_0RWrIs' }
  },
  {
    names: ["Mahou Sensei Negima!", "Negima!", "Negima"], audio: "au_309", n: 2, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/vgA7kahrD4o?si=TE5AIPDNru2pyrbC', f: 'https://youtu.be/coSLiUHurUg?si=ePnF0jg0e_6rwiMh' }
  },
  {
    names: ["Psycho-pass"], audio: "au_310", n: 3, pista: "Fall 2014",
    video: { ja: 'https://youtu.be/wHFnrITEE04?si=ZCwDek1avsXjRacD', o: 'https://youtu.be/oApkz1EAuq0?si=PXu9orVJqvTY1ZOw' }
  },
  {
    names: ["Mekakucity Actors"], audio: "au_311", n: 1, pista: "Spring 2014",
    video: { ja: 'https://youtu.be/AV-_bh4u-b4?si=Lk79L7gxZWJSxihC', o: 'https://youtu.be/9d2iLvb3mwQ?si=KwAVEHr_PZDufSK2' }
  },
  {
    names: ["Ballroom e Youkoso", "Welcome to the Ballroom"], audio: "au_312", n: 1, pista: "Summer 2017",
    video: { ja: 'https://youtu.be/dokiZc3DoYQ?si=PvRDPhhcn9V3hriF', o: 'https://youtu.be/4yQN8Dt0nWQ?si=55cbNLt28zXKc9uT' }
  },
  {
    names: ["Mashiro no Oto", "Those Snow White Notes"], audio: "au_313", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/hrz8_uUyxDA?si=0H3GvhryYq9NBx9X', o: 'https://youtu.be/wP-MnPA3JCU?si=jHxFIwS3Se9lOsMy' }
  },
  {
    names: ["Jouran: The Princess of Snow and Blood", "Joran The Princess of Snow and Blood", "Jouran", "Joran"],
    audio: "au_314", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/uAXjiDlcS6A?si=yb-tDh2GuxMkGPJC', o: 'https://youtu.be/Hfkz4_HxI80?si=yrIZdGvnnQQUtca9' }
  },
  {
    names: ["Kusuriya no Hitorigoto", "The Apothecary Diaries"], audio: "au_315", n: 2, pista: "Winter 2023",
    video: { ja: 'https://youtu.be/z-UPUXGYYqo?si=EcVIYjdgZGxPVhLY', o: 'https://youtu.be/e_pdE__o5D8?si=dAK6U0froxwipGcZ' }
  },
  {
    names: ["K-on!"], audio: "au_316", n: 1, pista: "Spring 2009",
    video: { ja: 'https://youtu.be/PUJ30JwMHiw?si=YobK3uu7CHeYfmxF', f: 'https://youtu.be/ua02dloykJ4?si=duRmDtAJr31SoTAo' }
  },
  {
    names: ["Nurarihyon no Mago", "Nura: Rise of the Yokai Clan"], audio: "au_317", n: 1, pista: "Summer 2010",
    video: { ja: 'https://youtu.be/7nreCjekf8k?si=97YK3Cmo1BTjzp9m', o: 'https://youtu.be/9A2uEc68AHY?si=mDPRymrwRsbtN-w8' }
  },
  {
    names: ["Clannad"], audio: "au_318", n: 1, pista: "Fall 2007",
    video: { ja: 'https://youtu.be/oHdZOKm5xzo?si=_3_HdWCE97L7l0UE', f: 'https://youtu.be/zgB0Y_BUvFE?si=sa8QlJGbcT-y3xl6' }
  },
  {
    names: ["Toriko"], audio: "au_319", n: 1, pista: "Spring 2011",
    video: { ja: 'https://youtu.be/s0XgPT5dnmw?si=LPRkHqaSPTiig-ZH', o: 'https://youtu.be/CUj-weIpOl0?si=ZBntyFkbzts9bBWz' }
  },
  {
    names: ["Candy Candy"], audio: "au_320", n: 1, pista: "Fall 1976",
    video: {
      es: 'https://youtu.be/QAgTLAAJUv4?si=sxhKMjeOKcEDy5mA', ja: 'https://youtu.be/IQrRJjhEZ4Y?si=aylG4_twH0Wz8GJ3',
      f: 'https://youtu.be/RNUXhNd5exA?si=UeQ6kQ8h_5h7x40q'
    }
  },
  {
    names: ["Gamers!"], audio: "au_321", n: 1, pista: "Summer 2017",
    video: { ja: 'https://youtu.be/KE2ncZsxz50?si=M3ybX5amsnecs44S', f: 'https://youtu.be/DcDBwz32fME?si=omqO2TsnrvzWW2EK' }
  },
  {
    names: ["Yu-Gi-Oh!", "Yu☆Gi☆Oh!"], audio: "au_322", n: 1, pista: "Spring 1998",
    video: {
      es: 'https://youtu.be/timXx6CBjoA?si=zbBOpBWoKPERtnE9', ja: 'https://youtu.be/-PG7eyV5soA?si=27sLLumRMg9M2nCF',
      f: 'https://youtu.be/ONBQorvPlGk?si=WTPfUrVA5u8ZNLuh'
    }
  },
  {
    names: ["Claymore"], audio: "au_323", n: 1, pista: "Spring 2007",
    video: { ja: 'https://youtu.be/dbj9Yjskco0?si=1wX5ONjjSptT6bGZ', o: 'https://youtu.be/BNg-lgwRnhU?si=Ijgd9ed_B_C7nq38' }
  },
  {
    names: ["To LOVE-Ru", "To Love Ru"], audio: "au_324", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/sXZpOfsq1TA?si=BVYz5jIokKSGIFk2', o: 'https://youtu.be/l8KIJCrr0_o?si=tgDr__SzEDg9beZy' }
  },
  {
    names: ["Love Live!", "Love Live! School Idol Project"], audio: "au_325", n: 1, pista: "Winter 2013",
    video: { ja: 'https://youtu.be/qOB7BNs9j3I?si=cTx1LccVA9WJ1r6O', f: 'https://youtu.be/PIvnN-rOKmU?si=FRWyUHRCq9_79nIQ' }
  },
  {
    names: ["Kidou Senshi Gundam: Suisei no Majo", "Mobile Suit Gundam: The Witch from Mercury", "Mobile Suit Gundam", "G-Witch"],
    audio: "au_326", n: 1, pista: "Fall 2022",
    video: { ja: 'https://youtu.be/uqZ9tCxq9Yw?si=sji00IVkZOtMaCmO', o: 'https://youtu.be/3eytpBOkOFA?si=hKaFh-gYVhV-Ni2K' }
  },
  {
    names: ["Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "How Not to Summon a Demon Lord"],
    audio: "au_327", n: 1, pista: "Summer 2018",
    video: { ja: 'https://youtu.be/UcCTFOEls9g?si=Kb21V-xYCsmG_ufF', o: 'https://youtu.be/Hu2zZcBONF0?si=q4X7xGJdPpveiVLx' }
  },
  {
    names: ["Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "How Not to Summon a Demon Lord"],
    audio: "au_328", n: 2, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/xGOJfEGQdrE?si=r2C4r8tLYJ-kVWMY', o: 'https://youtu.be/5hxEwZWBflI?si=y_4sMpdbvrr8dIIm' }
  },
  {
    names: ["Shaman King 2021", "Shaman King"], audio: "au_329", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/emrOpnSCYao?si=rXq8NS_mbVzavsf0', o: 'https://youtu.be/N4smofVwRl8?si=bX2fzXe8PA_w8af0' }
  },
  {
    names: ["Shaman King"], audio: "au_330", n: 1, pista: "Summer 2001",
    video: { ja: 'https://youtu.be/1eh6lN697K0?si=wbTEm7vFZnNhimDv', o: 'https://youtu.be/G85XxnQyI0A?si=1_JzoETz6-gNojPK' }
  },
  {
    names: ["Little Witch Academia"], audio: "au_331", n: 1, pista: "Winter 2017",
    video: { ja: 'https://youtu.be/JRmgL564x8E?si=nQX6WVjjqV5nVh16', o: 'https://youtu.be/5mU66mU_Pw8?si=Ddx8VEOCbXwqJExd' }
  },
  {
    names: ["Lupin the Third Part 6", "Lupin the Third", "Lupin III", "Lupin the 3rd"], audio: "au_332", n: 1, pista: "Fall 2021",
    video: { ja: 'https://youtu.be/beNyyjXbYN0?si=kSbB5isiImNqDIDV', f: 'https://youtu.be/wAiMQKsx-iM?si=46I1UsP3vKmP7_tk' }
  },
  {
    names: ["Mahou Sensei Negima!", "Negima!", "Negima"], audio: "au_333", n: 1, pista: "Winter 2005",
    video: { ja: 'https://youtu.be/lm0P_i1sQfE?si=sbXnI6Lq4OF8_viN', f: 'https://youtu.be/P336igyVYBw?si=I3GAXbaY6stfComL' }
  },
  {
    names: ["Negima!? Magister Negi Magi", "Negima!?", "Negima"], audio: "au_334", n: 1, pista: "Fall 2006",
    video: { ja: 'https://youtu.be/z7sJHgyROrY?si=YKA5-NRrjielSUyu', f: 'https://youtu.be/lz9v84inayU?si=2MJTnOtQn52y7Kpj' }
  },
  {
    names: ["D.Gray-man"], audio: "au_335", n: 1, pista: "Fall 2006",
    video: { ja: 'https://youtu.be/Sod2U4aXOmU?si=gTZTouzrjTwk7Go2', o: 'https://youtu.be/NG2-nEkRAx0?si=DPBlWgfv3mX4oi06' }
  },
  {
    names: ["Shuumatsu no Walküre", "Shuumatsu no Valkyrie", "Record of Ragnarok"],
    audio: "au_336", n: 1, pista: "June 2021",
    video: { ja: 'https://youtu.be/4_hFcVoaLAY?si=DmlXVjsxGSw78JVe', o: 'https://youtu.be/QQs4u9aKha0?si=x8mDB9eawh5PYAyj' }
  },
  {
    names: ["Soul Eater"], audio: "au_337", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/zzJ8U8OtEsE?si=XpLTdg5qC3TREgk1', o: 'https://youtu.be/09mHLhPW_DE?si=OlEOBlnmbgGFOC2h' }
  },
  {
    names: ["Ouran Koukou Host Club", "Ouran High School Host Club"], audio: "au_338", n: 1, pista: "Spring 2006",
    video: { ja: 'https://youtu.be/BdfjslKWYmk?si=arqJihYt_rP9gAGh', o: 'https://youtu.be/-5l6Ob4AZf8?si=VVRcLA3k3upPZqAn' }
  },
  {
    names: ["Kuroshitsuji", "Black Butler"], audio: "au_339", n: 1, pista: "Fall 2008",
    video: { ja: 'https://youtu.be/iQCox1kj9AU?si=_OQtQP0srWznMUb0', o: 'https://youtu.be/kRHYuG1KBdA?si=VV_ndjAPBGRxmb-Q' }
  },
  {
    names: ["Lucky☆Star", "Lucky star"], audio: "au_340", n: 1, pista: "Spring 2007",
    video: { ja: 'https://youtu.be/iJhGD2EDlLE?si=ufvWHSiOwJMnwpaJ', o: 'https://youtu.be/Z76CwMfAGj0?si=-TVuDTiMl2QhBgyS' }
  },
  {
    names: ["Vampire knight"], audio: "au_341", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/vzZtU36yi8c?si=04egUWXBxmHLwT-A', o: 'https://youtu.be/RAxZogA4KCw?si=fDuD-epKRUXbf74w' }
  },
  {
    names: ["Clannad: After story", "Clannad"], audio: "au_342", n: 2, pista: "Fall 2008",
    video: { ja: 'https://youtu.be/PozVlhR20TE?si=Asg8riUnQsIOn8id', f: 'https://youtu.be/E3wWC6Cfikg?si=cquj9kOO2xJVZko5' }
  },
  {
    names: ["Baccano!"], audio: "au_343", n: 1, pista: "Summer 2007",
    video: { ja: 'https://youtu.be/5N8MMn9uOdA?si=UjbpMgYX86Z94ele', f: 'https://youtu.be/G9eCjJ2ygCk?si=KW42XD4rCNbCYPru' }
  },
  {
    names: ["Suzumiya Haruhi no Yuuutsu", "The Melancholy of Haruhi Suzumiya", "Haruhi Suzumiya"],
    audio: "au_344", n: 1, pista: "Spring 2006",
    video: { ja: 'https://youtu.be/C337shIT9LI?si=iiaB-Uq5yD1aTcD7', o: 'https://youtu.be/8Ycasy9odq4?si=2mrGw_Ubjw7XSJkL' }
  },
  {
    names: ["Ergo proxy"], audio: "au_345", n: 1, pista: "Winter 2006",
    video: { ja: 'https://youtu.be/0AiiT6IO_LA?si=Pn18wZ3-TW-UCUSO', f: 'https://youtu.be/hlgc3_4WL0M?si=miJcj_nlWlGziSZk' }
  },
  {
    names: ["xxxHolic", "xxxHOLiC◆Kei"], audio: "au_346", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/k2r9SY_Z_yM?si=9Dl4bdysGDBLD6zL', o: 'https://youtu.be/qOTYspCTdm4?si=QW7kseD9n1SGFQBj' }
  },
  {
    names: ["Tsubasa reservoir chronicles", "Tsubasa Chronicle"], audio: "au_347", n: 1, pista: "Spring 2005",
    video: { ja: 'https://youtu.be/mi1cZ4Y5LOI?si=Yj0_UfguR_Sq1o_Y', o: 'https://youtu.be/AJ1fUlbo8zE?si=gwZz1RahyOMF3CHE' }
  },
  {
    names: ["Higashi no Eden", "Eden of the East"], audio: "au_348", n: 1, pista: "Spring 2009",
    video: { ja: 'https://youtu.be/5M2duH2bz6A?si=O4sDY4m8QCpH8d_y', o: 'https://youtu.be/TEzmU7YSXJs?si=G_3q4eU_lOK_QQSJ' }
  },
  {
    names: ["True tears"], audio: "au_349", n: 1, pista: "Winter 2008",
    video: { ja: 'https://youtu.be/Ay40r4huTpo?si=qtPM6l6_jzEaRDnl', f: 'https://youtu.be/bPuCsWhFjLY?si=76DwubnBuDS6I1-A' }
  },
  {
    names: ["Mirai Nikki"], audio: "au_350", n: 2, pista: "Winter 2012",
    video: { ja: 'https://youtu.be/VYsDwlxen1c?si=I5BniK-WFKNpfN7o', o: 'https://youtu.be/js0I1r8ARhs?si=m066K7RDwTOYvPAg' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_351", n: 5, pista: "Fall 2016",
    video: { ja: 'https://youtu.be/oRAF2-Exzx4?si=8ZoLmyf4Hn-gFikn', o: 'https://youtu.be/dfMb37KGqdE?si=CsyrkbGeCVVasmSC' }
  },
  {
    names: ["High school dxd"], audio: "au_352", n: 3, pista: "Spring 2015",
    video: { ja: 'https://youtu.be/qo8FHPPdca8?si=S0WZy-8WWvF4Eob_', o: 'https://youtu.be/MvMjAGCuVoI?si=CZAQ2kfjc9xEy17H' }
  },
  {
    names: ["Kimi ni todoke", "Kimi ni Todoke: From Me to You"], audio: "au_353", n: 2, pista: "Winter 2011",
    video: { ja: 'https://youtu.be/R7i-iTJJNp4?si=jIyzEPliAv_LOkA7', o: 'https://youtu.be/hT2U4rpD7vU?si=k3tFCTZgmIUyRbQm' }
  },
  {
    names: ["Shikanoko Nokonoko Koshitantan"], audio: "au_354", n: 1, pista: "Summer 2024",
    video: { ja: 'https://youtu.be/S13IOQl8Td8?si=E4Mn7SypBPaY7CD-', f: 'https://youtu.be/fxPcJTU-A8U?si=ZV6_pbQ9AA_-0aah' }
  },
  {
    names: ["Carole & Tuesday"], audio: "au_355", n: 1, pista: "Spring 2019",
    video: { ja: 'https://youtu.be/0WdPJNbXaMk?si=EFXav1bE3t_MREuG', o: 'https://youtu.be/fPWP26JFufQ?si=1BbnUEb9qDjNK2tO' }
  },
  {
    names: ["Shokugeki no Souma", "Food Wars!"], audio: "au_356", n: 1, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/vV3l_1j8pPE?si=6O4C8M5MgKLl_cGg', o: 'https://youtu.be/mFYK47afoSY?si=51ftw7u1yQ8aX0z4' }
  },
  {
    names: ["Fullmetal Alchemist"], audio: "au_357", n: 4, pista: "42 - 51",
    video: { ja: 'https://youtu.be/oPg1J79sgkQ?si=ZHnEbK1xapWO-8-0', o: 'https://youtu.be/ZmeudwRMrsU?si=YZX6DBUyDGF3ooV-' }
  },
  {
    names: ["Shingeki no Bahamut: Virgin Soul", "Rage of Bahamut: Virgin Soul", "Shingeki no Bahamut"],
    audio: "au_358", n: 1, pista: "Spring 2017",
    video: { ja: 'https://youtu.be/KBITiblTBrY?si=lVftDZeY1tz7CWdV', o: 'https://youtu.be/GbrPUrcLSw4?si=SUWz2t13cig0U6VR' }
  },
  {
    names: ["Wind Breaker"], audio: "au_359", n: 1, pista: "Spring 2024",
    video: { ja: 'https://youtu.be/IuSAC8ZDf1A?si=QYWrTWky1skCAMdf', o: 'https://youtu.be/LFoyXEFaz2Q?si=e1f9qZvJvUJBkGjH' }
  }
];
