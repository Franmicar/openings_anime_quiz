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
    names: ["Hunter x Hunter"], audio: "au_1", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/faqmNf_fZlE?si=YmEdONdkbGCGmmvV', f: 'https://youtu.be/6q3gd47tTVw?si=tzilzK-LYmCo7wpD' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_2", n: 1, pista: 'Fall 2020',
    video: { ja: 'https://youtu.be/GwaRztMaoY0?si=lZB4osTdQyICzkZB', f: 'https://youtu.be/_LWXAPywCV4?si=mJCMIheI6j-BX19n' }
  },
  {
    names: ["Shinseiki Evangelion", "Neon Genesis Evangelion"], audio: "au_3", n: 1, pista: 'Fall 1995',
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
    names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_19", n: 3, pista: 'Summer 2020',
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
    video: { ja: 'https://youtu.be/Ca5Tf5BDSYI?si=ZVNQkWZihvoOvwu7', o: 'https://youtu.be/9wh8FgsEtNQ?si=EjXWonAJdfSyxpuJ' }
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
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_38", n: 1, pista: 'Spring 2009',
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
    video: { ja: 'https://youtu.be/JBqxVX_LXvk?si=KPZL8LuE6QAGFeWp', o: 'https://youtu.be/wfCcs0vLysk?si=zWsQTyJCUDw4xH34' }
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
    names: ["Code Geass", "Code Geass: Hangyaku no Lelouch"], audio: "au_50", n: 1, pista: 'Fall 2006',
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
    names: ["Gintama"], audio: "au_71", pista: "Spring 2013", n: 13,
    video: { ja: 'https://youtu.be/GQRMESLHVc0?si=SqSxICNQXut7AhnW', o: 'https://youtu.be/CpGPYFU4n0Y?si=Xj5h9LZ46xciVHxm' }
  },
  {
    names: ["Nanatsu no Taizai", "The Seven Deadly Sins"], audio: "au_72", pista: "Fall 2014", n: 1,
    video: { ja: 'https://youtu.be/dRsKZt9vAyM?si=IUVDA3uLnBADWspu', o: 'https://youtu.be/FLs2faYqoNU?si=awajOintt8N8MJuZ' }
  },
  {
    names: ["Fairy Tail"], audio: "au_73", n: 1, pista: 'Fall 2009',
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
    names: ["Sentai Daishikkaku", "Go! Go! Loser Ranger!"], audio: "au_107", pista: "Spring 2024", n: 1,
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
    video: { ja: 'https://youtu.be/7TzaEHUWvpM?si=HmD4o-p9k6qwijYt', f: '' }
  },
  {
    names: ["Bleach"], audio: "au_133", n: 1, pista: 'Fall 2004',
    video: { ja: 'https://youtu.be/wW9TwZdWpjw?si=-oLa2reDKFwVz_EV', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_134", n: 1, pista: 'Fall 1999',
    video: { es: 'https://youtu.be/dSUQXSXgvVw?si=UaS3_c0LJAC7cfin', ja: '', f: '' }
  },
  {
    names: ["Spy X Family"], audio: "au_135", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/EzGs8Tm_C2g?si=wfAT4i6XVVa-NkH5', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_136", n: 2, pista: '48 - 115',
    video: { es: 'https://youtu.be/-8Uw71LszDA?si=19_2zzCP73ilA_o-', ja: '', f: '' }
  },
  {
    names: ["Noragami"], audio: "au_137", n: 1, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/gWCnKoEgfP0?si=6iMvSk33GvwhqdUU', f: '' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_138", n: 3, pista: 'Summer 2023',
    video: { ja: 'https://youtu.be/gcgKUcJKxIs?si=HvBIOg1FWENKqK6O', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_139", n: 20, pista: '807 - 855',
    video: { ja: 'https://youtu.be/Oo52vQyAR6w?si=jCxAHSU3ej3-AiNX', f: '' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_140", n: 1, pista: 'Spring 2019',
    video: { ja: 'https://youtu.be/pmanD_s7G3U?si=H9JUW4Dk0BGRRfk-', f: '' }
  },
  {
    names: ["Wotaku ni Koi wa Muzukashii", "Wotakoi: Love is Hard for Otaku", "wotakoi"],
    audio: "au_141", n: 1, pista: 'Spring 2018',
    video: { ja: 'https://youtu.be/XjHqfhOcK_0?si=O2e6phJRLz2o-2nU', f: '' }
  },
  {
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_142", n: 2, pista: '15-26',
    video: { ja: 'https://youtu.be/aZcHqqqeNUs?si=LpgUy1ra5zLXUSP_', f: '' }
  },
  {
    names: ["Tokyo Revengers"], audio: "au_143", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/By_JYrhx-WY?si=O-TciITkqRW0WyDF', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_144", n: 4, pista: '169 - 206',
    video: { es: '', ja: 'https://youtu.be/TxzDvP-quXs?si=loZgdf6Zv8ptwEcm', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_145", n: 3, pista: '116 - 168',
    video: { es: '', ja: 'https://youtu.be/x1_sHTEEmik?si=NzHE077IeVzqU8Kn', f: '' }
  },
  {
    names: ["Spy X Family"], audio: "au_146", n: 2, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/YOIJOJsUkUg?si=UuXDJpxfJKVq1TaC', f: '' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_147", n: 3, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/F9EswQEBqmM?si=FPOUqtcZ0HGbGMzA', f: '' }
  },
  {
    names: ["Bleach"], audio: "au_148", n: 2, pista: '26 - 51',
    video: { ja: 'https://youtu.be/h1MoLQ9Wcv0?si=Xifu0YZaZhzb9I-x', f: '' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_149", n: 3, pista: 'Summer 2017',
    video: { ja: 'https://youtu.be/-owtG3xsQAg?si=g7nSa--pDGZj-eGE', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_150", n: 16, pista: '591 - 628',
    video: { ja: 'https://youtu.be/WsPI841IKw4?si=IlPrm0Pj32bx3nfj', f: '' }
  },
  {
    names: ["Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
      "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.", "BOFURI"], audio: "au_151", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/MVTMQbd4shI?si=vMhCqTIZvSO-H8iK', f: '' }
  },
  {
    names: ["Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai", "Shimoneta",
      "SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist"], audio: "au_152", n: 1, pista: 'Summer 2015',
    video: { ja: 'https://youtu.be/a1V8M2LwGq0?si=KPXGpnzb8UH08h69', f: '' }
  },
  {
    names: ["Marmalade Boy"], audio: "au_153", n: 1, pista: 'Spring 1994',
    video: { ja: 'https://youtu.be/Osv73GPCpRo?si=DBSsvDzTnAtTq9_P', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_154", n: 6, pista: '264 - 278',
    video: { ja: 'https://youtu.be/B4ZQvniSX4M?si=CxWyz_mDHCrd3vG_', f: '' }
  },
  {
    names: ["Kimetsu no Yaiba", "Demon Slayer"], audio: "au_155", n: 3, pista: 'Winter 2022',
    video: { ja: 'https://youtu.be/st4wcpjZeQQ?si=iN88vO7P3HoUhCU2', f: '' }
  },
  {
    names: ["Basilisk: Kouga Ninpou Chou", "Basilisk"], audio: "au_156", n: 1, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/b7Jt8wX_fu4?si=RyZLhqvs7MAcfucd', f: '' }
  },
  {
    names: ["TSUGUMOMO"], audio: "au_157", n: 1, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/IoMrm-lvAEQ?si=Y03yTZlfmuM7jqYo', f: '' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_158", n: 4, pista: 'Spring 2024',
    video: { ja: 'https://youtu.be/VihAYldjRa0?si=0XJWDuLs3LyDMIeV', f: '' }
  },
  {
    names: ["Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
      "WataMote: No Matter How I Look At It, It's You Guys' Fault I'm Not Popular!",
      "watamote"], audio: "au_159", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/rQjVvYj15zk?si=Nhzk_FnNCtR8-AxA', f: '' }
  },
  {
    names: ["Fruit Basket 2019", "Fruit Basket"], audio: "au_160", n: 2, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/3RJqEL2uHiE?si=p8dPJYaXQ6HvTWFy', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_161", n: 5, pista: '207 - 263',
    video: { es: '', ja: 'https://youtu.be/RO_VGv4GT9k?si=m2RbmmQjEjvJSJEn', f: '' }
  },
  {
    names: ["Shin Chan", "Crayon Shin-chan"], audio: "au_162", n: 1, pista: 'Spring 1992',
    video: { es: 'https://youtu.be/a0XV5Gcdqxs?si=ijbT_VtXSyiuv7U8', ja: '', f: '' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_163", n: 3, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/ILZh2xncU8A?si=FvkTcrVSqd5e2fSc', f: '' }
  },
  {
    names: ["Urusei Yatsura", "Lum, la chica invasora"], audio: "au_164", n: 1, pista: 'Fall 1981',
    video: { ja: 'https://youtu.be/2hulET9tn9M?si=j3_wJ_4GFhNpFU2K', f: '' }
  },
  {
    names: ["Nisekoi"], audio: "au_165", n: 1, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/G5YmZRs_L9k?si=lzst3iABNyKBkEI-', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_166", n: 13, pista: '459 - 492',
    video: { ja: 'https://youtu.be/9vc2r0s6M_M?si=RahQxmFW1MYB_loq', f: '' }
  },
  {
    names: ["Fullmetal Alchemist: Brotherhood"], audio: "au_167", n: 4, pista: '40-50',
    video: { ja: 'https://youtu.be/dnIlB6JhLyI?si=FBNe5lsdYib5LYzJ', f: '' }
  },
  {
    names: ["Angel Beats!"], audio: "au_168", n: 1, pista: 'Spring 2010',
    video: { ja: 'https://youtu.be/Eksw56g-WBY?si=nvqj_ARGvRHq_-9W', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_169", n: 14, pista: '493 - 516',
    video: { ja: 'https://youtu.be/dD9f09g5cxU?si=fD66hJCt23LIWj9B', f: '' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_170", n: 1, pista: 'Fall 2012',
    video: { ja: 'https://youtu.be/pwO2AVjTH9k?si=00p_CzWCK5mDqam-', f: '' }
  },
  {
    names: ["Fruit Basket"], audio: "au_171", n: 5, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/vVK7vO5hN34?si=UvUsHXWsc4Ct2Nto', f: '' }
  },
  {
    names: ["Koutetsujou no Kabaneri", "Kabaneri of the Iron Fortress"], audio: "au_172", n: 1, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/UqhZrl1KFpc?si=X8hrmHHKZSdgT_V3', f: '' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_173", n: 6, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/Y-eoYLBbZOA?si=LOlPsMliJOlcwI8k', f: '' }
  },
  {
    names: ["One Piece"], audio: "au_174", n: 23, pista: '935 - 999, 1001 - 1004',
    video: { ja: 'https://youtu.be/YycdCG0L8Kg?si=uF1hOWzIH6mm9Hym', f: '' }
  },
  {
    names: ["Boku no Hero Academia", "My Hero Academia"], audio: "au_175", n: 6, pista: 'Fall 2019',
    video: { ja: 'https://youtu.be/kYfNvEcMgOg?si=95RUZJC_15WTaztP', f: '' }
  },
  {
    names: ["Urusei Yatsura", "Lum, la chica invasora"], audio: "au_176", n: 2, pista: '21 - 100',
    video: { ja: 'https://youtu.be/KOyFSBAsf5s?si=LqYTxC8GlIXt7qOo', f: '' }
  },
  {
    names: ["Urusei Yatsura 2022", "Urusei Yatsura", "Lum, la chica invasora"], audio: "au_177", n: 1, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/OgsWK7pwx7k?si=VzKEKiOcuT7F5V60', f: '' }
  },
  {
    names: ["Shingeki no Kyojin", "Attack on Titan"], audio: "au_178", n: 7, pista: 'Winter 2022',
    video: { en: 'https://youtu.be/2S4qGKmzBJE?si=HYA8RDckSCc3wqHL', f: '' }
  },
  {
    names: ["Danganronpa", "Danganronpa: Kibou no Gakuen to Zetsubou no Koukousei The Animation",
      "Danganronpa: The Animation"], audio: "au_179", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/zKwRkTaIsZo?si=Q2vpekh0Qcbp1eyG', f: '' }
  },
  {
    names: ["Rurouni Kenshin", "Rurouni Kenshin: Meiji Kenkaku Romantan", "Samurai X"],
    audio: "au_180", n: 1, pista: 'Winter 1996',
    video: { ja: 'https://youtu.be/B6unFPDCVlc?si=WVSEVd_JCLwn-u57', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure: Stardust Crusaders",
      "JoJo"], audio: "au_181", n: 3, pista: 'Spring 2014',
    video: { ja: 'https://youtu.be/L9DK-DRg85w?si=ndt2LCsrRuJC97zB', f: '' }
  },
  {
    names: ["Cosas de Locos", "Tensai Bakabon"], audio: "au_182", n: 1, pista: 'Fall 1971',
    video: { es: 'https://youtu.be/iULqfBhBIsQ?si=wAPE7QQrfeEeWLmq', ja: '', f: '' }
  },
  {
    names: ["Kochikame", 'Kochira Katsushikaku Kameari Kouenmae Hashutsujo'], audio: "au_183", n: 1, pista: 'Summer 1996',
    video: { es: 'https://youtu.be/XJDboajV27g?si=Yn208Slqoyr4849Z', ja: '', f: '' }
  },
  {
    names: ["Sentouin, Hakenshimasu!", "Combatants Will Be Dispatched!"], audio: "au_184", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/1Dmn0RyhZGE?si=vZi9s6Cr6-PpO2qO', o: 'https://youtu.be/K-CodXtslc0?si=Jo_p1TBgottnMjU4' }
  },
  {
    names: ["Mato Seihei no Slave", "Chained Soldier"], audio: "au_185", n: 1, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/cxLspslAg1Q?si=PqvoL5CxIWD1oEa9', f: '' }
  },
  {
    names: ["Ajin", "Ajin: Demi-Human"], audio: "au_186", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/XtMMIkpDXNY?si=-O7nHBhsf-etQVwe', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_187", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/SJkCLcnGB-c?si=8OLHQ3NUBBBwHMxF', f: '' }
  },
  {
    names: ["Tomo-chan wa Onnanoko!", "Tomo-chan Is a Girl!", "Tomo-chan"], audio: "au_188", n: 1, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/JypMi-Dt_S8?si=dhiDBQEy3U6x_lOc', f: '' }
  },
  {
    names: ["Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
      "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You"], audio: "au_189", n: 1, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/ZmA3O50cMTY?si=V0dZbaSl5Ad-kGOl', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_190", n: 5, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/AQ3oyp4D6FY?si=1guS3ulMAXSso5Ma', f: '' }
  },
  {
    names: ["Yofukashi no Uta", "Call of the Night"], audio: "au_191", n: 1, pista: 'Summer 2022',
    video: { ja: 'https://youtu.be/rckYQnPW-wk?si=Nnka0I0y2d38h0rn', f: '' }
  },
  {
    names: ["Pokemon"], audio: "au_192", n: 3, pista: '119-159',
    video: { es: 'https://youtu.be/z0OUwsWjqds?si=K740gB0LnEg-Or78', ja: '', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_193", n: 8, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/i1N2cclJVys?si=zkdKb2oG-Qml33F7', f: '' }
  },
  {
    names: ["Nintama Rantarou", "Ninja Boy Rantaro"], audio: "au_194", n: 1, pista: 'Spring 1993',
    video: { es: 'https://youtu.be/ei9skqHkSKQ?si=rnl9e1q1HE1hgMQ_', ja: '', f: '' }
  },
  {
    names: ["Samurai Champloo"], audio: "au_195", n: 1, pista: 'Spring 2004',
    video: { en: 'https://youtu.be/Eq6EYcpWB_c?si=KGVotxanUYfrV19E', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_196", n: 1, pista: 'Fall 2012',
    video: { ja: 'https://youtu.be/wPdX66-Ag2s?si=U1lKqUbdyP8xYJ53', f: '' }
  },
  {
    names: ["JoJo no Kimyou na Bouken", "JoJo's Bizarre Adventure", "JoJo"], audio: "au_197", n: 10, pista: 'December 2021',
    video: { ja: 'https://youtu.be/Uki8nRI9eFg?si=G_ORSG7-76M6w5AN', f: '' }
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
    video: { ja: 'https://www.youtube.com/watch?v=5emM3JGI5JA', f: '' }
  },
  {
    names: ["Black Clover"], audio: "au_201", n: 3, pista: '28 - 39',
    video: { ja: 'https://youtu.be/dUiDZJMPh-s?si=DN-aQJRc7ulIrCIO', f: '' }
  },
  {
    names: ["Naruto"], audio: "au_202", n: 2, pista: '26 - 53',
    video: { ja: 'https://youtu.be/SRn99oN1p_c?si=YD8X8_LFECZiPeWx', f: '' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_203", n: 1, pista: 'Winter 2007',
    video: { ja: 'https://youtu.be/vxvP9zSOL7s?si=PO_Bw-lTHfjfcsQn', f: '' }
  },
  {
    names: ["Divine Gate"], audio: "au_204", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/WLWD-DcP0ko?si=_95x6qGbf1ELnAtH', f: '' }
  },
  {
    names: ["Black Clover"], audio: "au_205", n: 13, pista: '158 - 170',
    video: { ja: 'https://youtu.be/aaZq6SXXNt4?si=6Xf5D2mPtyTGHpam', f: '' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_206", n: 3, pista: '54 - 77',
    video: { ja: 'https://youtu.be/aJRu5ltxXjc?si=mUdRgH7oHQtfgaHe', f: '' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_207", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/QNWrygf815I?si=R6Lp3FUu8BuGtG4x', f: '' }
  },
  {
    names: ["Nisekoi"], audio: "au_208", n: 2, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/2vfkd7wr-js?si=ycV4CtJb6Slo7LRV', f: '' }
  },
  {
    names: ["Naruto Shippuden"], audio: "au_209", n: 6, pista: '129 - 153',
    video: { ja: 'https://youtu.be/SavhHnWla6c?si=HHQqXg2wqu04-g_7', f: '' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_210", n: 3, pista: 'Fall 2013',
    video: { ja: 'https://youtu.be/ltIA2qO0lE8?si=byTOGrlB8M2w4KFk', f: '' }
  },
  {
    names: ["Berserk", "Kenpuu Denki Berserk"], audio: "au_211", n: 1, pista: 'Fall 1997',
    video: { ja: 'https://youtu.be/9TRemrRaPjc?si=9k78dVBsiInwCx9-', f: '' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_212", n: 37, pista: '718 - 743',
    video: { ja: 'https://youtu.be/B_jcll0pB6A?si=bD7LKrsJ9ZD3ZK1g', o: 'https://youtu.be/ELgeAQg-yz4?si=82SsUrr-1-aGj1Nr' }
  },
  {
    names: ["Cardcaptor Sakura", "Sakura, cazadora de cartas"], audio: "au_213", n: 3, pista: '47 - 70',
    video: { ja: 'https://youtu.be/YcL-ymNCoZ8?si=W-q-6Fqt0xGnEWWJ', f: '' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_214", n: 50, pista: '941-964',
    video: { ja: 'https://youtu.be/jWoHRyQCjI0?si=iHJG7XJGjgJr5JkL', f: '' }
  },
  {
    names: ["Initial D", "Initial D First Stage"], audio: "au_215", n: 1, pista: 'Spring 1998',
    video: { ja: 'https://youtu.be/vJeWXw83Vp8?si=_h8pDldfkobf80YW', f: '' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_216", n: 1, pista: 'Summer 2019',
    video: { ja: 'https://youtu.be/tF4faMbs5oQ?si=ecg08XxLLT0i8WWr', f: '' }
  },
  {
    names: ["Detective Conan", "Meitantei Conan", "Case Closed"], audio: "au_217", n: 22, pista: '491 - 504',
    video: { ja: 'https://youtu.be/i9aJAdxCwdI?si=4mC09m7oRubI5LWA', f: '' }
  },
  {
    names: ["Magi", "Magi: The Labyrinth of Magic"], audio: "au_218", n: 4, pista: 'Winter 2014',
    video: { ja: 'https://youtu.be/gOrKqc78_Po?si=hj8yIZLjjXRDqq4_', f: '' }
  },
  {
    names: ["Ranma ½", "Ranma 1/2"], audio: "au_219", n: 1, pista: 'Spring 1989',
    video: {
      es: 'https://youtu.be/xMJbmdqucfo?si=psv0NcLiPp50tQe3', ja: 'https://youtu.be/4DlT1yI7CSM?si=uT4jZPg6oE4zNlvK',
      f: ''
    }
  },
  {
    names: ["Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
      "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.", "BOFURI"], audio: "au_220", n: 2, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/rOmPNZ6ZW9w?si=tIOrIYOsMUEiGvLh', f: '' }
  },
  {
    names: ["Fist of the North Star", "Hokuto no Ken"], audio: "au_221", n: 1, pista: 'Fall 1984',
    video: { ja: 'https://youtu.be/CvzAazSknGw?si=e9GYqIi286NGS-01', f: '' }
  },
  {
    names: ["Platinum End"], audio: "au_222", n: 1, pista: 'Fall 2021',
    video: { ja: 'https://youtu.be/apgMyxIcy0Q?si=1dKpOfdZqm7LdWDD', f: '' }
  },
  {
    names: ["Kokkoku"], audio: "au_223", n: 1, pista: 'Winter 2018',
    video: { ja: 'https://youtu.be/fhBA6ynorvc?si=vP2WIZaf47wnblyJ', f: '' }
  },
  {
    names: ["Karakuri Circus"], audio: "au_224", n: 2, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/KJ5lUHtI2xo?si=sQM_oQQaeGhd6x9G', f: '' }
  },
  {
    names: ["Chicho Terremoto", "Dash! Kappei"], audio: "au_225", n: 1, pista: 'Fall 1981',
    video: {
      es: 'https://youtu.be/8F54OAk0DSE?si=ny2fjoPXOOvDxeQR', ja: 'https://youtu.be/j0r-QqEtpgY?si=_9Bj6T2NcFJo70xC',
      f: ''
    }
  },
  {
    names: ["Ijiranaide, Nagatoro-san", "Don't Toy with Me, Miss Nagatoro", "Nagatoro"],
    audio: "au_226", n: 1, pista: 'Spring 2021',
    video: { ja: 'https://youtu.be/7Ewk3Oxyhgk?si=Jxdv9CCWM1f1CleL', f: '' }
  },
  {
    names: ["Ishuzoku Reviewers", "Interspecies Reviewers"], audio: "au_227", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/QLO4tg0ubXc?si=jsdIIm6vaRCjWQ2s', f: '' }
  },
  {
    names: ["Monster"], audio: "au_228", n: 1, pista: 'Spring 2004',
    video: { ja: 'https://youtu.be/EYdCd00TJhI?si=530-KNkot7zq3QmY', f: '' }
  },
  {
    names: ["Paranoia Agent", 'Mousou Dairinin'], audio: "au_229", n: 1, pista: 'Winter 2004',
    video: { ja: 'https://youtu.be/nuncFLIR1Qw?si=xO-pUzK7VvUxz_55', f: '' }
  },
  {
    names: ["Enen no Shouboutai", "Fire Force"], audio: "au_230", n: 3, pista: 'Summer 2020',
    video: { ja: 'https://youtu.be/xLGtT8WuidM?si=BFDOcjKGPDkxYnhu', f: '' }
  },
  {
    names: ["Overlord"], audio: "au_231", n: 3, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/vci9YwpFFcA?si=lwhcRAvMuRxrE9wq', f: '' }
  },
  {
    names: ["Gleipnir"], audio: "au_232", n: 1, pista: 'Spring 2020',
    video: { ja: 'https://youtu.be/bpybmJ4GhG8?si=dk42hRTrdUilAwyJ', f: '' }
  },
  {
    names: ["Jibaku Shounen Hanako-kun", "Toilet-Bound Hanako-kun"], audio: "au_233", n: 1, pista: 'Winter 2020',
    video: { ja: 'https://youtu.be/da3bYroZNSE?si=1tZ0sp6vffH4ENYe', f: '' }
  },
  {
    names: ["Himouto! Umaru-chan", "Himouto"], audio: "au_234", n: 1, pista: 'Summer 2015',
    video: { ja: 'https://youtu.be/b6-2P8RgT0A?si=nc8RZEec9kyzpfIc', f: '' }
  },
  {
    names: ["Mieruko-chan"], audio: "au_235", n: 1, pista: 'Fall 2021',
    video: { ja: 'https://youtu.be/stn29mdlKqA?si=ifkWVy9QRHZt9syI', f: '' }
  },
  {
    names: ["La Ley de Ueki", "Ueki no Housoku", "The Law of Ueki"], audio: "au_236", n: 1, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/YQd-7RyZ4Eo?si=vWOERyUdiOeNQQ_y', f: '' }
  },
  {
    names: ["Youjo Senki", "Saga of Tanya the Evil"], audio: "au_237", n: 1, pista: 'Winter 2017',
    video: { ja: 'https://youtu.be/voC3PvD_iZw?si=wxKkb6M5fsZQQ_ID', f: '' }
  },
  {
    names: ["Tensei shitara Slime Datta Ken", "That Time I Got Reincarnated as a Slime"], audio: "au_238", n: 1, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/SqdeDAbejkQ?si=re_9lte9fHrvwBmM', f: '' }
  },
  {
    names: ["Anohana", "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.",
      "Anohana: The Flower We Saw That Day"], audio: "au_239", n: 1, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/hu8JGQiXRFI?si=hTVgDcSQEUnX0ap7', f: '' }
  },
  {
    names: ["Summertime Render", "Summer Time Rendering"], audio: "au_240", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/DR88n4VMIfo?si=RFKbSxIGojfFfkgu', f: '' }
  },
  {
    names: ["Saiki Kusuo no Ψ-nan", "The Disastrous Life of Saiki K.",
      "Saiki K"], audio: "au_241", n: 1, pista: 'Summer 2016',
    video: { ja: 'https://youtu.be/4GNTfA-seHY?si=CAFMrqgNZVCU-rED', f: '' }
  },
  {
    names: ["Btooom!"], audio: "au_242", n: 1, pista: 'Fall 2012',
    video: { ja: 'https://youtu.be/cGncS_CzUDs?si=70hLuHPJXzAcTveU', f: '' }
  },
  {
    names: ["Psycho-pass"], audio: "au_243", n: 2, pista: 'Winter 2013',
    video: { ja: 'https://youtu.be/SJ-aUXmJM8Q?si=CgDqVBtEAJHUb13e', f: '' }
  },
  {
    names: ["Gantz"], audio: "au_244", n: 1, pista: 'Spring 2004',
    video: { ja: 'https://youtu.be/yL-lcOMc-vQ?si=n_RSZ7yQMY7fEWfV', f: '' }
  },
  {
    names: ["Black Lagoon"], audio: "au_245", n: 1, pista: 'Spring 2006',
    video: { ja: 'https://youtu.be/3n52e3HsEOM?si=vfePo5XVXfzhiser', f: '' }
  },
  {
    names: ["Eromanga Sensei", "Eromanga-sensei"], audio: "au_246", n: 1, pista: 'Spring 2017',
    video: { ja: 'https://youtu.be/DeGw8-KwxM4?si=sVu6YPIVMKfCbd8G', f: '' }
  },
  {
    names: ["Banana Fish"], audio: "au_247", n: 1, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/0z6FLH2HXl4?si=q8qbsoA5dhENy2v-', f: '' }
  },
  {
    names: ["Tate no Yuusha no Nariagari", "The Rising of the Shield Hero", "Tate no Yuusha"], audio: "au_248", n: 2, pista: 'Spring 2019',
    video: { ja: 'https://youtu.be/7cbJUjjTHH8?si=IdLvuPogCT3B439U', f: '' }
  },
  {
    names: ["Nisemonogatari"], audio: "au_249", n: 3, pista: 'Winter 2012',
    video: { ja: 'https://youtu.be/mqmV7tTCgXg?si=98X3o6TXmCiNqUW6', f: '' }
  },
  {
    names: ["Dagashi Kashi"], audio: "au_250", n: 1, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/ZqZC8P2ZA6Q?si=PF-NnfWcq4dOtUmU', f: '' }
  },
  {
    names: ["Sousou no Frieren"], audio: "au_251", n: 2, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/iqsnJJK8GA4?si=3W56zIoc_PrL3rfl', f: '' }
  },
  {
    names: ["Boku no kokoro no yabai yatsu", "The Dangers in My Heart"], audio: "au_252", n: 2, pista: 'Winter 2024',
    video: { ja: 'https://youtu.be/A0tKGpKOU4Y?si=44f9wV0zhAjz2QoR', f: '' }
  },
  {
    names: ["Isekai ojisan", "Uncle from Another World"], audio: "au_253", n: 1, pista: 'Summer 2022',
    video: { ja: 'https://youtu.be/rzQJ1stoUnE?si=Nax9HCpGCcen1pYU', f: '' }
  },
  {
    names: ["My Home Hero"], audio: "au_254", n: 1, pista: 'Spring 2023',
    video: { ja: 'https://youtu.be/omUKBP9ZCzQ?si=uweUEtJ8-Bu_gax0', f: '' }
  },
  {
    names: ["Link click", "Shiguang Dailiren"], audio: "au_255", n: 1, pista: 'April 2021',
    video: { ja: 'https://youtu.be/ZtEBMYcZvjY?si=1ew5Dv452MBMP7te', f: '' }
  },
  {
    names: ["Trigun"], audio: "au_256", n: 1, pista: 'Spring 1998',
    video: { ja: 'https://youtu.be/k6j4jrszKNQ?si=jXqaAr2BqDlKi5JH', f: '' }
  },
  {
    names: ["Trigun Stampede"], audio: "au_257", n: 1, pista: 'Winter 2023',
    video: { ja: 'https://youtu.be/mxYqXOL5uLk?si=ioH83xHTgKrVX2mn', f: '' }
  },
  {
    names: ["Darling in the franxxx"], audio: "au_258", n: 1, pista: 'Winter 2018',
    video: { ja: 'https://youtu.be/A4kLcDWBYcQ?si=fTEzHsi8yRP9-9ag', f: '' }
  },
  {
    names: ["FLCL", "Furi Kuri", "Fooly Cooly"], audio: "au_259", n: 1, pista: 'April 2000',
    video: { ja: 'https://youtu.be/qgLZLuPBCOE?si=-baj6vsuEMa-TJdz', f: '' }
  },
  {
    names: ["Guilty crown"], audio: "au_260", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/W10RXr9c44Y?si=m_aLfPrbP9-2QV6Q', f: '' }
  },
  {
    names: ["Cyberpunk edgerunners", "Cyberpunk: Edgerunners"], audio: "au_261", n: 1, pista: 'September 2022',
    video: { ja: 'https://youtu.be/OifiVCnFKzM?si=BOlKm3OUbdm4WQmj', f: '' }
  },
  {
    names: ["Blue exorcis", "Ao no Exorcist"], audio: "au_262", n: 2, pista: 'Summer 2011',
    video: { ja: 'https://youtu.be/vSUsiPvJv2Q?si=RsCfObEaJmJ3L4KN', f: '' }
  },
  {
    names: ["Golden Boy"], audio: "au_263", n: 1, pista: 'October 1995',
    video: { ja: 'https://youtu.be/g5zk5GyGYJM?si=URRKAZJsNrWC8l12', f: '' }
  },
  {
    names: ["Slam Dunk"], audio: "au_264", n: 1, pista: 'Fall 1993',
    video: { ja: 'https://youtu.be/m_QP5_rdH_g?si=I0BiyKULIurri_s3', f: '' }
  },
  {
    names: ["Free!", "Free! - Iwatobi Swim Club"], audio: "au_265", n: 1, pista: 'Summer 2013',
    video: { ja: 'https://youtu.be/bSB9am38_8Q?si=ARCpkERwBBMkmsnf', f: '' }
  },
  {
    names: ["Durarara!!", "Durarara"], audio: "au_266", n: 2, pista: 'Spring 2010',
    video: { ja: 'https://player.vimeo.com/video/982403836', o: 'https://youtu.be/HkQ_mzbC_WY?si=igpawP3j209h6v3_' }
  },
  {
    names: ["Solty rei"], audio: "au_267", n: 1, pista: 'Fall 2005',
    video: { ja: 'https://youtu.be/52YMT9KVNls?si=zoqdeHA7Eff9LveE', f: '' }
  },
  {
    names: ["Deadman Wonderland"], audio: "au_268", n: 1, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/_5WvUPHF5f8?si=_LiuIjL8IlMcF1er', f: '' }
  },
  {
    names: ["High school dxd"], audio: "au_269", n: 1, pista: 'Winter 2012',
    video: { ja: 'https://youtu.be/gG5xCXmzwgs?si=MiRr3k0I7KPmd4yC', f: '' }
  },
  {
    names: ["Great teacher onizuka", "GTO"], audio: "au_270", n: 2, pista: 'Winter 2000',
    video: { ja: 'https://youtu.be/xpAg0spgFJA?si=VaW5KQf2V-dYcHEb', f: '' }
  },
  {
    names: ["Darker than black"], audio: "au_271", n: 3, pista: 'Fall 2009',
    video: { ja: 'https://youtu.be/JXTNhHfcHpU?si=Sr9w-kIX7qOzJlP0', f: '' }
  },
  {
    names: ["Hellsing"], audio: "au_272", n: 1, pista: 'Fall 2001',
    video: { ja: 'https://youtu.be/2-hGDNMJL8k?si=LaXm5z-sF-X9GfJ1', f: '' }
  },
  {
    names: ["Yowamushi pedal"], audio: "au_273", n: 2, pista: 'Spring 2014',
    video: { ja: 'https://youtu.be/KWXeaLtn6j8?si=9D1kf2OD7eo1tZzH', f: '' }
  },
  {
    names: ["Nanatsu no Taizai", "The Seven Deadly Sins"], audio: "au_274", n: 2, pista: 'Winter 2015',
    video: { ja: 'https://youtu.be/U8_Kb96PUfE?si=-KDsPMhyqANZuyOo', f: '' }
  },
  {
    names: ["Shingeki no Bahamut: Genesis", "Rage of Bahamut: Genesis", "Shingeki no Bahamut"], audio: "au_275", n: 1, pista: 'Fall 2014',
    video: { ja: 'https://youtu.be/kYW1wrYOxy8?si=l49RwECCrRWJNT2z', f: '' }
  },
  {
    names: ["Akiba maid war", "Akiba Meido Sensou"], audio: "au_276", n: 1, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/JLY2gS0o-gE?si=d6ozXL71yEqvMbVH', f: '' }
  },
  {
    names: ["3-Gatsu no lion", "March Comes In Like a Lion"], audio: "au_277", n: 1, pista: 'Fall 2016',
    video: { ja: 'https://youtu.be/cKWqPXkLgzY?si=SR1tMFCbfBpWYRJF', f: '' }
  },
  {
    names: ["Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
      "Kaguya-sama: Love is War", "Kaguya-sama"], audio: "au_278", n: 1, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/WZof19wk4Ec?si=NzijEhj3UbXtX7kl', f: '' }
  },
  {
    names: ["Kakushigoto"], audio: "au_279", n: 1, pista: 'Spring 2020',
    video: { ja: 'https://youtu.be/vKtR0svZOAo?si=V5IOp7GUsKbBA3NZ', f: '' }
  },
  {
    names: ["Mob psycho 100"], audio: "au_280", n: 3, pista: 'Fall 2022',
    video: { ja: 'https://youtu.be/viOzQNX9ea8?si=26yh3807Wdgq7pGg', f: '' }
  },
  {
    names: ["Re:Zero kara Hajimeru Isekai Seikatsu", "Re:Zero"], audio: "au_281", n: 1, pista: 'Spring 2016',
    video: { ja: 'https://youtu.be/0Vwwr3VGsYg?si=CanQ9nzJVG42bqFb', f: 'https://youtu.be/R9i8nVS2NCA?si=u9Nvv4fNYmaYG8zh' }
  },
  {
    names: ["The god of high school"], audio: "au_282", n: 1, pista: 'Summer 2020',
    video: { ja: 'https://youtu.be/eRJyYfAq2tk?si=PjyaZMuqbmaZbzI_', f: '' }
  },
  {
    names: ["Sword Art Online", "SAO"], audio: "au_283", n: 6, pista: 'Fall 2018',
    video: { ja: 'https://youtu.be/3hdJ8PKNXrc?si=iQdsCeclS1j7Qgb8', f: '' }
  },
  {
    names: ["Heion Sedai no Idaten-tachi", "The Idaten Deities Know Only Peace"], audio: "au_284", n: 1, pista: 'Summer 2021',
    video: { ja: 'https://youtu.be/x59-Lr9nnho?si=uKmRLKFJJvjlfy_N', f: '' }
  },
  {
    names: ["Hajime no Ippo", "Fighting Spirit"], audio: "au_285", n: 4, pista: 'Winter 2009',
    video: { ja: 'https://youtu.be/tlgakY6HgU0?si=8lD4XiXH2EnAq5Bv', f: '' }
  },
  {
    names: ["Grand blue", "Grand Blue Dreaming"], audio: "au_286", n: 1, pista: 'Summer 2018',
    video: { ja: 'https://youtu.be/0PpTUtHtwt4?si=I-e0buZfulntwbhb', f: '' }
  },
  {
    names: ["Ansatsu Kyoushitsu", "Assassination Classroom"], audio: "au_287", n: 4, pista: 'Winter 2016',
    video: { ja: 'https://youtu.be/slFvxoRwNt0?si=oCIfEjmUN_eSgidO', f: '' }
  },
  {
    names: ["Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "Rascal Does Not Dream of Bunny Girl Senpai",
      "Bunny Girl Senpai"], audio: "au_288", n: 1, pista: 'Fall 2018',
    video: { ja: 'https://player.vimeo.com/video/982405364', f: '' }
  },
  {
    names: ["Ao Haru Ride", "Blue Spring Ride"], audio: "au_289", n: 1, pista: 'Summer 2014',
    video: { ja: 'https://youtu.be/IACs-yJoXKM?si=WU2jxuI9GGJAIyHV', f: '' }
  },
  {
    names: ["Chihayafuru"], audio: "au_290", n: 1, pista: 'Fall 2011',
    video: { ja: 'https://youtu.be/IcCJgmLZYkE?si=u8Z8pEzvafmQfgoT', f: '' }
  },
  {
    names: ["Barakamon"], audio: "au_291", n: 1, pista: 'Summer 2014',
    video: { ja: 'https://youtu.be/_vvL3z3pAs0?si=DOwRypa5xV4_XzrN', f: '' }
  },
  {
    names: ["Sword Art Online", "SAO"], audio: "au_292", n: 4, pista: 'Fall 2014',
    video: { ja: 'https://youtu.be/yPU0ykIeumw?si=Ua6-5am2pENPRAUf', f: '' }
  },
  {
    names: ["Fairy tail"], audio: "au_293", n: 16, pista: '176 - 187',
    video: { ja: 'https://youtu.be/CeGRYuEq2Rk?si=1HjOxl04raORf3Xk', f: '' }
  },
  {
    names: ["Konjiki no Gash Bell!!", "Zatch Bell!", "Zatch Bell"], audio: "au_294", n: 1, pista: 'Spring 2003',
    video: { ja: 'https://youtu.be/XaztbhhCEaE?si=MEKiPu5EubFmbPy7', f: '' }
  },
  {
    names: ["Fairy tail"], audio: "au_295", n: 21, pista: '240 - 252',
    video: { ja: 'https://youtu.be/MkBVsAYUc-g?si=g-DsK_P7uvrGY4Ao', f: '' }
  },
  {
    names: ["Rainbow", "Rainbow: Nisha Rokubou no Shichinin"], audio: "au_296", n: 1, pista: 'Spring 2010',
    video: { ja: 'https://youtu.be/ibkhGFKhyW8?si=eDNuIdDLMTXtssFD', f: '' }
  },
  {
    names: ["Highschool of the dead"], audio: "au_297", n: 1, pista: 'Summer 2010',
    video: { ja: 'https://youtu.be/ZDRvkxKcEqY?si=xfXmuWAr9arQV6s8', f: '' }
  },
  {
    names: ["Kekkai Sensen", "Blood Blockade Battlefront"], audio: "au_298", n: 1, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/cwAWY9FiMEw?si=j2sT85wSNcTciZ9b', f: '' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_299", n: 2, pista: 'Fall 2019',
    video: { ja: 'https://youtu.be/SohCAjC-Npk?si=DfsQ72FupQJf2vQC', f: '' }
  },
  {
    names: ["Dr. Stone", "Dr Stone"], audio: "au_300", n: 3, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/fkAL_LeCsZs?si=M3a66vsR-RjP26ip', f: '' }
  },
  {
    names: ["Chain Chronicle: Haecceitas no Hikari", "Chain Chronicle: The Light of Haecceitas", "Chain Chronicle"],
    audio: "au_301", n: 1, pista: 'Winter 2017',
    video: { ja: 'https://youtu.be/VCJoTp7vcFQ?si=n0O_NOTMf2CIWj_p', f: '' }
  },
  {
    names: ["Yuusha, Yamemasu", "I'm Quitting Heroing"], audio: "au_302", n: 1, pista: 'Spring 2022',
    video: { ja: 'https://youtu.be/hJt8cctjXr0?si=N68iCid5z20dVjXw', f: '' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_303", n: 2, pista: 'Winter 2021',
    video: { ja: 'https://youtu.be/LFTE4W--Htk?si=v-r4j0HCvTkfvbYz', f: '' }
  },
  {
    names: ["Jujutsu Kaisen"], audio: "au_304", n: 4, pista: 'Fall 2023',
    video: { ja: 'https://youtu.be/5yb2N3pnztU?si=WHvKug0a-eiPI77e', f: '' }
  },
  {
    names: ["Toaru Kagaku no Railgun S", "A Certain Scientific Railgun S"], audio: "au_305", n: 1, pista: 'Spring 2013',
    video: { ja: 'https://youtu.be/Ie3natE3-DE?si=DZCb8OzAM0g6KVj_', f: '' }
  },
  {
    names: ["Star Driver: Kagayaki no Takuto", "Star Driver"], audio: "au_306", n: 2, pista: 'Spring 2011',
    video: { ja: 'https://youtu.be/uSv4lUPShF4?si=90kdm-OMsVR6C4Pb', f: '' }
  },
  {
    names: ["Kuroko no basket", "Kuroko's Basketball"], audio: "au_307", n: 1, pista: 'Spring 2012',
    video: { ja: 'https://youtu.be/5RVEM8-UKlg?si=N_zY1nDiKybw210V', f: '' }
  },
  {
    names: ["Mob psycho 100"], audio: "au_308", n: 2, pista: 'Winter 2019',
    video: { ja: 'https://youtu.be/epZaT8B31-g?si=DJPnXvCbTwCOBnaJ', f: '' }
  },
  {
    names: ["Mahou Sensei Negima!", "Negima!", "Negima"], audio: "au_309", n: 2, pista: 'Spring 2005',
    video: { ja: 'https://youtu.be/vgA7kahrD4o?si=TE5AIPDNru2pyrbC', f: '' }
  },
  {
    names: ["Psycho-pass"], audio: "au_310", n: 3, pista: "Fall 2014",
    video: { ja: 'https://youtu.be/wHFnrITEE04?si=ZCwDek1avsXjRacD', o: '' }
  },
  {
    names: ["Mekakucity Actors"], audio: "au_311", n: 1, pista: "Spring 2014",
    video: { ja: 'https://youtu.be/AV-_bh4u-b4?si=Lk79L7gxZWJSxihC', o: '' }
  },
  {
    names: ["Ballroom e Youkoso", "Welcome to the Ballroom"], audio: "au_312", n: 1, pista: "Summer 2017",
    video: { ja: 'https://youtu.be/dokiZc3DoYQ?si=PvRDPhhcn9V3hriF', o: '' }
  },
  {
    names: ["Mashiro no Oto", "Those Snow White Notes"], audio: "au_313", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/hrz8_uUyxDA?si=0H3GvhryYq9NBx9X', o: '' }
  },
  {
    names: ["Jouran: The Princess of Snow and Blood", "Joran The Princess of Snow and Blood", "Jouran", "Joran"],
    audio: "au_314", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/uAXjiDlcS6A?si=yb-tDh2GuxMkGPJC', o: '' }
  },
  {
    names: ["Kusuriya no Hitorigoto", "The Apothecary Diaries"], audio: "au_315", n: 2, pista: "Winter 2023",
    video: { ja: 'https://youtu.be/z-UPUXGYYqo?si=EcVIYjdgZGxPVhLY', o: '' }
  },
  {
    names: ["K-on!"], audio: "au_316", n: 1, pista: "Spring 2009",
    video: { ja: 'https://youtu.be/PUJ30JwMHiw?si=YobK3uu7CHeYfmxF', o: '' }
  },
  {
    names: ["Nurarihyon no Mago", "Nura: Rise of the Yokai Clan"], audio: "au_317", n: 1, pista: "Summer 2010",
    video: { ja: 'https://youtu.be/7nreCjekf8k?si=97YK3Cmo1BTjzp9m', o: '' }
  },
  {
    names: ["Clannad"], audio: "au_318", n: 1, pista: "Fall 2007",
    video: { ja: 'https://youtu.be/oHdZOKm5xzo?si=_3_HdWCE97L7l0UE', o: '' }
  },
  {
    names: ["Toriko"], audio: "au_319", n: 1, pista: "Spring 2011",
    video: { ja: 'https://youtu.be/s0XgPT5dnmw?si=LPRkHqaSPTiig-ZH', o: '' }
  },
  {
    names: ["Candy Candy"], audio: "au_320", n: 1, pista: "Fall 1976",
    video: { es: 'https://youtu.be/QAgTLAAJUv4?si=sxhKMjeOKcEDy5mA', ja: 'https://youtu.be/IQrRJjhEZ4Y?si=aylG4_twH0Wz8GJ3',
      o: '' }
  },
  {
    names: ["Gamers!"], audio: "au_321", n: 1, pista: "Summer 2017",
    video: { ja: 'https://youtu.be/KE2ncZsxz50?si=M3ybX5amsnecs44S', o: '' }
  },
  {
    names: ["Yu-Gi-Oh!", "Yu☆Gi☆Oh!"], audio: "au_322", n: 1, pista: "Spring 1998",
    video: { es: 'https://youtu.be/timXx6CBjoA?si=zbBOpBWoKPERtnE9', ja: 'https://youtu.be/-PG7eyV5soA?si=27sLLumRMg9M2nCF',
      o: '' }
  },
  {
    names: ["Claymore"], audio: "au_323", n: 1, pista: "Spring 2007",
    video: { ja: 'https://youtu.be/dbj9Yjskco0?si=1wX5ONjjSptT6bGZ', o: '' }
  },
  {
    names: ["To LOVE-Ru", "To Love Ru"], audio: "au_324", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/sXZpOfsq1TA?si=BVYz5jIokKSGIFk2', o: '' }
  },
  {
    names: ["Love Live!", "Love Live! School Idol Project"], audio: "au_325", n: 1, pista: "Winter 2013",
    video: { ja: 'https://youtu.be/qOB7BNs9j3I?si=cTx1LccVA9WJ1r6O', o: '' }
  },
  {
    names: ["Kidou Senshi Gundam: Suisei no Majo", "Mobile Suit Gundam: The Witch from Mercury"],
    audio: "au_326", n: 1, pista: "Fall 2022",
    video: { ja: 'https://youtu.be/uqZ9tCxq9Yw?si=sji00IVkZOtMaCmO', o: '' }
  },
  {
    names: ["Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "How Not to Summon a Demon Lord"],
    audio: "au_327", n: 1, pista: "Summer 2018",
    video: { ja: 'https://youtu.be/UcCTFOEls9g?si=Kb21V-xYCsmG_ufF', o: '' }
  },
  {
    names: ["Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "How Not to Summon a Demon Lord"],
    audio: "au_328", n: 2, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/xGOJfEGQdrE?si=r2C4r8tLYJ-kVWMY', o: '' }
  },
  {
    names: ["Shaman King 2021", "Shaman King"], audio: "au_329", n: 1, pista: "Spring 2021",
    video: { ja: 'https://youtu.be/emrOpnSCYao?si=rXq8NS_mbVzavsf0', o: '' }
  },
  {
    names: ["Shaman King"], audio: "au_330", n: 1, pista: "Summer 2001",
    video: { ja: 'https://youtu.be/1eh6lN697K0?si=wbTEm7vFZnNhimDv', o: '' }
  },
  {
    names: ["Little Witch Academia"], audio: "au_331", n: 1, pista: "Winter 2017",
    video: { ja: 'https://youtu.be/JRmgL564x8E?si=nQX6WVjjqV5nVh16', o: '' }
  },
  {
    names: ["Lupin the Third Part 6", "Lupin the Third", "Lupin III", "Lupin the 3rd"], audio: "au_332", n: 1, pista: "Fall 2021",
    video: { ja: 'https://youtu.be/beNyyjXbYN0?si=kSbB5isiImNqDIDV', o: '' }
  },
  {
    names: ["Mahou Sensei Negima!", "Negima!", "Negima"], audio: "au_333", n: 1, pista: "Winter 2005",
    video: { ja: 'https://youtu.be/lm0P_i1sQfE?si=sbXnI6Lq4OF8_viN', o: '' }
  },
  {
    names: ["Negima!? Magister Negi Magi", "Negima!?", "Negima"], audio: "au_334", n: 1, pista: "Fall 2006",
    video: { ja: 'https://youtu.be/z7sJHgyROrY?si=YKA5-NRrjielSUyu', o: '' }
  },
  {
    names: ["D.Gray-man"], audio: "au_335", n: 1, pista: "Fall 2006",
    video: { ja: 'https://youtu.be/Sod2U4aXOmU?si=gTZTouzrjTwk7Go2', o: '' }
  },
  {
    names: ["Shuumatsu no Walküre", "Shuumatsu no Valkyrie", "Record of Ragnarok"],
    audio: "au_336", n: 1, pista: "June 2021",
    video: { ja: 'https://youtu.be/4_hFcVoaLAY?si=DmlXVjsxGSw78JVe', o: '' }
  },
  {
    names: ["Soul Eater"], audio: "au_337", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/zzJ8U8OtEsE?si=XpLTdg5qC3TREgk1', o: '' }
  },
  {
    names: ["Ouran Koukou Host Club", "Ouran High School Host Club"], audio: "au_338", n: 1, pista: "Spring 2006",
    video: { ja: 'https://youtu.be/BdfjslKWYmk?si=arqJihYt_rP9gAGh', o: '' }
  },
  {
    names: ["Kuroshitsuji", "Black Butler"], audio: "au_339", n: 1, pista: "Fall 2008",
    video: { ja: 'https://youtu.be/iQCox1kj9AU?si=_OQtQP0srWznMUb0', o: '' }
  },
  {
    names: ["Lucky☆Star", "Lucky star"], audio: "au_340", n: 1, pista: "Spring 2007",
    video: { ja: 'https://youtu.be/iJhGD2EDlLE?si=ufvWHSiOwJMnwpaJ', o: '' }
  },
  {
    names: ["Vampire knight"], audio: "au_341", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/vzZtU36yi8c?si=04egUWXBxmHLwT-A', o: '' }
  },
  {
    names: ["Clannad: After story", "Clannad"], audio: "au_342", n: 1, pista: "Fall 2008",
    video: { ja: 'https://youtu.be/PozVlhR20TE?si=Asg8riUnQsIOn8id', o: '' }
  },
  {
    names: ["Baccano!"], audio: "au_343", n: 1, pista: "Summer 2007",
    video: { ja: 'https://youtu.be/5N8MMn9uOdA?si=UjbpMgYX86Z94ele', o: '' }
  },
  {
    names: ["Suzumiya Haruhi no Yuuutsu", "The Melancholy of Haruhi Suzumiya"], audio: "au_344", n: 1, pista: "Spring 2006",
    video: { ja: 'https://youtu.be/C337shIT9LI?si=iiaB-Uq5yD1aTcD7', o: '' }
  },
  {
    names: ["Ergo proxy"], audio: "au_345", n: 1, pista: "Winter 2006",
    video: { ja: 'https://youtu.be/0AiiT6IO_LA?si=Pn18wZ3-TW-UCUSO', o: '' }
  },
  {
    names: ["xxxHolic", "xxxHOLiC◆Kei"], audio: "au_346", n: 1, pista: "Spring 2008",
    video: { ja: 'https://youtu.be/k2r9SY_Z_yM?si=9Dl4bdysGDBLD6zL', o: '' }
  },
  {
    names: ["Tsubasa reservoir chronicles", "Tsubasa Chronicle"], audio: "au_347", n: 1, pista: "Spring 2005",
    video: { ja: 'https://youtu.be/mi1cZ4Y5LOI?si=Yj0_UfguR_Sq1o_Y', o: '' }
  },
  {
    names: ["Higashi no Eden", "Eden of the East"], audio: "au_348", n: 1, pista: "Spring 2009",
    video: { ja: 'https://youtu.be/5M2duH2bz6A?si=O4sDY4m8QCpH8d_y', o: '' }
  },
  {
    names: ["True tears"], audio: "au_349", n: 1, pista: "Winter 2008",
    video: { ja: 'https://youtu.be/Ay40r4huTpo?si=qtPM6l6_jzEaRDnl', o: '' }
  },
  {
    names: ["Mirai Nikki"], audio: "au_350", n: 2, pista: "Winter 2012",
    video: { ja: 'https://youtu.be/VYsDwlxen1c?si=I5BniK-WFKNpfN7o', o: '' }
  },
  {
    names: ["Haikyuu!!", "Haikyu!! Los Ases del Vóley"], audio: "au_351", n: 5, pista: "Fall 2016",
    video: { ja: 'https://youtu.be/oRAF2-Exzx4?si=8ZoLmyf4Hn-gFikn', o: '' }
  },
  {
    names: ["High school dxd"], audio: "au_352", n: 3, pista: "Spring 2015",
    video: { ja: 'https://youtu.be/qo8FHPPdca8?si=S0WZy-8WWvF4Eob_', o: '' }
  },
  {
    names: ["Kimi ni todoke", "Kimi ni Todoke: From Me to You"], audio: "au_353", n: 2, pista: "Winter 2011",
    video: { ja: 'https://youtu.be/R7i-iTJJNp4?si=jIyzEPliAv_LOkA7', o: '' }
  },
  {
    names: ["Shikanoko Nokonoko Koshitantan"], audio: "au_354", n: 1, pista: "Summer 2024",
    video: { ja: 'https://youtu.be/S13IOQl8Td8?si=E4Mn7SypBPaY7CD-', o: '' }
  },
  {
    names: ["Carole & Tuesday"], audio: "au_355", n: 1, pista: "Spring 2019",
    video: { ja: 'https://youtu.be/0WdPJNbXaMk?si=EFXav1bE3t_MREuG', o: '' }
  },
  {
    names: ["Shokugeki no Souma", "Food Wars!"], audio: "au_356", n: 1, pista: 'Spring 2015',
    video: { ja: 'https://youtu.be/vV3l_1j8pPE?si=6O4C8M5MgKLl_cGg', o: '' }
  },
  {
    names: ["Fullmetal Alchemist"], audio: "au_357", n: 4, pista: "42 - 51",
    video: { ja: 'https://youtu.be/oPg1J79sgkQ?si=ZHnEbK1xapWO-8-0', o: '' }
  },
  {
    names: ["Shingeki no Bahamut: Virgin Soul", "Rage of Bahamut: Virgin Soul", "Shingeki no Bahamut"],
    audio: "au_358", n: 1, pista: "Spring 2017",
    video: { ja: 'https://youtu.be/KBITiblTBrY?si=lVftDZeY1tz7CWdV', o: '' }
  },
  {
    names: ["Wind Breaker"], audio: "au_359", n: 1, pista: "Spring 2024",
    video: { ja: 'https://youtu.be/IuSAC8ZDf1A?si=QYWrTWky1skCAMdf', o: '' }
  }
];
