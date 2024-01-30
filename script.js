let locationsList = ["AHMEDABAD", "BANGALORE", "CHENNAI", "HUBLI", "HYDERABAD", "MUMBAI", "MYSORE", "NELLORE", "KADAPA", "TIRUPATI", "VIJAYAWADA", "VISAKHAPATNAM (VIZAG)"]

let theatersListArrayHYDSS = ["AARTI THEATER - SANGHI NAGAR", "ALANKAR (PRATHAP THEATER) - LANGER HOUSE", "ANJALI MOVIE MAX - SECUNDERABAD", "ARADHANA THEATER - TARNAKA", "ARJUN 70MM - KUKATPALLY", "ASIAN GANGA 4K - DILSHUKNAGAR", "ASIAN JYOTHI - RC PURAM", "ASIAN CINEPRIDE - CHANDRAKALA - MOOSAPET", "ASIAN CINEPRIDE - LAKSHMIKALA - MOOSAPET", "ASIAN CINEPRIDE - SHASHIKALA - MOOSAPET", "ASIAN MUKTA A2 KONARK - DILSHUKNAGAR", "ASIAN MUKUND CINEMA - MEDCHAL", "ASIAN SHA AND SHAHENSHA - CHINTAL", "ASIAN SHIVA 4K - DILSHUKNAGAR", "ASIAN TARAKARAMA CINEPLEX - KACHEGUDA", "BHRAMARAMBA 70MM A/C DTS - KUKATPALLY", "BHUJANGA 70MM - JEEDIMETLA", "BR HITECH 70MM - MADHAPUR", "CINE TOWN INDRA - KARMANGHAT", "CINE TOWN NAGENDRA - KARMANGHAT", "DEVI 70MM 4K LASER AND DOLBY ATMOS - RTC X ROADS", "GANESH 70MM - SHAMSHABAD", "GOKUL 70MM 4K DTS - ERRAGADDA", "INDRA PADMAVATHI CINEMA - KACHEGUDA", "INDRA VENKATARAMANA CINEMA - KACHEGUDA", "KUMAR THEATER - KACHEGUDA", "LAKSHMI KALA MANDIR - ALWAL", "LOCAL CINEMAS YAKUT MAHAL LASER AND DOLBY", "MAHALAKSHMI COMPLEX SCREEN 1 - KOTHAPETA", "MAHALAKSHMI COMPLEX SCREEN 2 - KOTHAPETA", "MALLIKARJUNA 70MM A/C DTS - KUKATPALLY", "MEGHA THEATER - DILSHUKNAGAR", "METRO CINEMA - BAHADURPURA", "MUKTA A2 CINEMAS,LAXMI - SHAMSHABAD", "MUKTA A2 CINEMAS,RAMAKRISHNA - ABIDS", "NARTAKI THEATER - ALWAL", "PRASHANTH CINEMA - SECUNDERABAD", "PRIYA THEATER - MALLEYPALLY", "RAJADHANI 70MM 2K DOLBY 7.1 - NEWLY RENOVATED - DILSHUKNAGAR", "RAJADHANI DELUXE 2K DOLBY 7.1 - DILSHUKNAGAR", "RAMA KRISHNA 70MM - ABIDS", "RANGA THEATER 70MM - JEEDIMETLA", "SAI RANGA 4K - MIYAPUR", "SAMPURNA 70MM 2K DOLBY DIGITAL - VANASTHALIPURAM", "SANDHYA 35MM - RTC X ROADS", "SANDHYA 70MM 4K DOLBY ATMOS - RTC X ROADS", "SANGEETHA THEATER - RC PURAM", "SANTHOSH THEATER - IBRAHIMPATNAM", "SAPTHAGIRI 70MM 4K DOLBY DIGITAL - RTC X ROADS", "SHANTHI THEATER - NARAYANAGUDA", "SHETTY CINEMA MINI THEATER - NARAPALLY", "SREE RAMULU 70MM 4K LASER - MOOSAPET", "SREE SAI PUJA - SURARAM", "SREE SAI RAJA THEATER - MUSHEERABAD", "SRI KRISHNA 70MM - UPPAL", "SRI PREMA 70MM - TUKKUGUDA", "SRI RAMANA 70MM 4K - AMBERPET", "SRI RAMANA GOLD 4K DOLBY 7.1 - AMBERPET", "SRI SAI RAM 70MM A/C 4K DOLBY ATMOS - MALKAJGIRI", "SUDARSHAN 35MM 4K LASER DOLBY ATMOS - RTC X ROADS", "SUPER CINEMA - BALAPUR", "SUSHMA 2K DOLBY DIGITAL CINEMA - VANASTHALIPURAM", "SV CINESQUARE - PATANCHERU", "SVC EESHWAR - ATTAPUR", "SVC SHIVA SAKTHI THEATER - KAPRA", "SVC SRI LAKSHMI THEATER - KARMANGHAT", "TALLURI THEATERS (CHITRA) - KUSHAIGUDA", "TALLURI THEATERS (GEETHA) - KUSHAIGUDA", "TALLURI THEATERS (RAAGA) - KUSHAIGUDA", "VENKATA SAI THEATER A/C - KEESARA", "VIJETHA 70MM 4K ATMOS - BORABANDA", "VIMAL 70MM - BALANAGAR", "VISHWANATH 70MM THEATER - KUKATPALLY", "VLS SRIDEVI 2K A/C DTS - CHILKALGUDA", "VYJAYANTHI CINEMA A/C 2K - NACHARAM", "YADAGIRI THEATER - SANTOSH NAGAR"]

let theaterSectionsListHYDSS = ["none%Balcony%First Class%Second Class", "none%Balcony%Balcony%Second Class", "Balcony%Lower Balcony%First Class%Third Class", "none%Balcony%First Class%Second Class", "Box%Balcony%Dress Circle%Second Class", "Box%Balcony%First Class%Silver", "Balcony%Family Circle%First Class%Second Class", "Couple Seats%Platinum%Gold%Silver", "none%Platinum%Gold%Silver", "none%Platinum%Gold%Silver", "Recliners + Loungers%Balcony%Dress Circle%Lower Class", "Recliners%Gold%Lounger%Silver", "none%Box A + Box B%Gold%Silver", "Box%Balcony%First Class%Silver", "Box%Recliners%Balcony Sofa%Lower Class", "Box%Maharaja Circle%Dress Circle%First Class", "Balcony%Box%First Class%Second Class", "Box%Reserved Class%Second Class%Third Class", "Upper Balcony%Family Circle%Lower Balcony%Lower Class", "Upper Balcony%Family Circle%Lower Balcony%Lower Class", "Upper Balcony%Lower Balcony%First Class%Second Class", "none%Gold%Silver%Bronze", "Upper Balcony%Lower Balcony%First Class%Second Class", "none%Premium%Prime%Economy", "Premium%Elite Recliners%Elite Sofa%Economy", "none%Balcony%Dress Circle%Lower Class", "Balcony%Sofa Class%Reserved Class%Second Class", "none%Balcony%Dress Circle%none", "Box%Balcony%First Class%Second Class", "none%Balcony%First Class%Second Class", "Box%Maharaja Circle%Dress Circle%none", "none%Balcony%Dress Circle%Lower Class", "none%Balcony%Silver%Bronze", "none%Premium%Gold%Silver", "Gold%Premium Recliners%Premium Sofa%Silver", "none%Balcony%Reserved Class%none", "none%Premium%Royal%Lower Class", "none%Balcony Upper%Maharaja Lower%Second Front Class", "Platinum%Diamond + Diamond + Diamond Box%Gold%Silver", "none%Executive Class%Economy Class%Lower Class", "Balcony 2%Balcony 1%Dress Circle%Lower Class", "none%Balcony%First Class%Second Class", "Upper Balcony%Lower Balcony%Dress Circle%Lower Class", "Balcony%Dress Circle%First Class%Lower Class", "none%Balcony%Front Circle%Third Class", "Box A + Box B%Lower Balcony + Upper Balcony%First Class%Third Class", "none%Platinum%Gold%Silver", "Box%Balcony%First Class%Lower Class", "none%Balcony%First Class%none", "Upper Balcony%Lower Balcony%Second Class%Third Class", "none%First Class%Second Class%none", "none%Balcony%First Class%Second Class", "Upper Balcony Maharaja%Lower Balcony Raja%Second Class%Sofa", "none%Balcony%Dress Circle%Third Class", "Upper Balcony%Lower Balcony%Dress Circle%Third Class", "none%Balcony%Dress Circle%Second Class", "none%Balcony%Dress Circle%Second Class", "none%Balcony%Dress Circle%Second Class", "none%Platinum%Gold%Silver", "Upper Balcony%Lower Balcony%First Class%Second Class", "none%Balcony%Raja Circle%Third Class", "none%Balcony%Dress Circle%Third Class", "none%Balcony%First Class%Second Class", "none%Gold%Silver%Bronze", "Upper Balcony%Lower Balcony%First Class%Second Class", "none%Balcony%First Class%Second Class", "none%none%Gold%Silver", "none%none%Gold%Silver", "none%none%Gold%Silver", "Classic%none%none%none", "Box%Balcony%Dress Circle%none", "none%Diamond Circle%First Class%none", "Box A + Box B%Balcony%First Class%Second Class", "none%Upper Balcony%Lower Balcony%Third Class", "none%Balcony%First Class%Second Class", "Balcony + Box A + Box B%Dress Circle%Reserved Class%Second Class"]

let sectionCapacityHYDSS = ["0+303+102+90", "0+48+410+119", "98+212+195+164", "0+460+200+163", "36+365+237+119", "53+537+170+190", "160+360+134+166", "40+338+177+135", "0+718+70+157", "0+612+62+145", "33+527+75+178", "16+519+20+145", "0+29+560+156", "52+455+99+153", "6+24+440+122", "13+488+190+170", "530+20+499+256", "60+321+232+83", "304+26+130+116", "327+28+140+124", "455+462+140+263", "0+174+493+74", "340+262+174+205", "0+120+204+98", "286+42+176+126", "0+346+182+120", "295+248+192+96", "0+196+192+0", "16+467+84+106", "0+318+59+20", "13+488+190+0", "0+415+380+194", "0+412+225+144", "0+118+260+109", "313+18+212+67", "0+723+97+0", "0+196+416+153", "0+150+336+114", "24+449+212+108", "0+384+120+124", "168+230+326+198", "0+553+511+242", "305+374+168+208", "265+300+125+158", "0+720+109+215", "54+884+120+265", "0+486+52+154", "94+426+93+105", "0+354+414+0", "391+285+88+207", "0+30+70+0", "0+723+211+232", "384+325+176+12", "0+377+338+182", "111+326+316+186", "0+434+228+170", "0+527+220+230", "0+410+245+165", "0+265+316+118", "525+315+124+250", "0+571+211+156", "0+566+256+156", "0+518+200+95", "0+432+226+184", "64+230+26+82", "0+369+156+101", "0+0+79+19", "0+0+288+72", "0+0+555+140", "282+0+0+0", "4+432+182+0", "0+582+183+0", "30+517+385+241", "0+158+472+132", "0+380+142+155", "341+400+119+216"]

let HYD_MPXTL = ["PRASADS MULTIPLEX SCREEN 1 - KHAIRATHABAD", "PRASADS MULTIPLEX SCREEN 2 - KHAIRATHABAD", "PRASADS MULTIPLEX SCREEN 3 - KHAIRATHABAD", "PRASADS MULTIPLEX SCREEN 4 - KHAIRATHABAD", "PRASADS MULTIPLEX SCREEN 5 - KHAIRATHABAD", "PRASADS MULTIPLEX SCREEN 6 (PCX) - KHAIRATHABAD", "AAA CINEMAS SCREEN 1 - AMEERPET", "AAA CINEMAS SCREEN 2 - AMEERPET", "AAA CINEMAS SCREEN 3 - AMEERPET", "AAA CINEMAS SCREEN 4 - AMEERPET", "AAA CINEMAS SCREEN 5 - AMEERPET", "AMB CINEMAS SCREEN 1 - GACHIBOWLI", "AMB CINEMAS SCREEN 2 - GACHIBOWLI", "AMB CINEMAS SCREEN 3 - GACHIBOWLI", "AMB CINEMAS SCREEN 4 - GACHIBOWLI", "AMB CINEMAS SCREEN 5 (VIP) - GACHIBOWLI", "AMB CINEMAS SCREEN 6 - GACHIBOWLI", "AMB CINEMAS SCREEN 7 - GACHIBOWLI", "ASIAN CINESQUARE MULTIPLEX SCREEN 1 - UPPAL", "ASIAN CINESQUARE MULTIPLEX SCREEN 2 - UPPAL", "ASIAN CINESQUARE MULTIPLEX SCREEN 3 - UPPAL", "ASIAN CINESQUARE MULTIPLEX SCREEN 4 - UPPAL", "ASIAN CINESQUARE MULTIPLEX SCREEN 5 - UPPAL", "ASIAN CINEPLANET MULTIPLEX SCREEN 1 - KOMPALLY", "ASIAN CINEPLANET MULTIPLEX SCREEN 2 - KOMPALLY", "ASIAN CINEPLANET MULTIPLEX SCREEN 3 - KOMPALLY", "ASIAN CINEPLANET MULTIPLEX SCREEN 4 - KOMPALLY", "ASIAN MUKTA CINEMAS A2: MJR SQUARE SCREEN 1 -  NARAPALLY", "ASIAN MUKTA CINEMAS A2: MJR SQUARE SCREEN 2 -  NARAPALLY", "ASIAN MUKTA CINEMAS A2: MJR SQUARE SCREEN 3 -  NARAPALLY", "ASIAN MUKTA CINEMAS A2: MJR SQUARE SCREEN 4 -  NARAPALLY", "ASIAN M CUBE MALL SCREEN 1 - ATTAPUR", "ASIAN M CUBE MALL SCREEN 2 - ATTAPUR", "ASIAN M CUBE MALL SCREEN 3 - ATTAPUR", "ASIAN M CUBE MALL SCREEN 4 - ATTAPUR", "ASIAN RADHIKA MULTIPLEX SCREEN 1 - ECIL", "ASIAN RADHIKA MULTIPLEX SCREEN 2 - ECIL", "ASIAN RADHIKA MULTIPLEX SCREEN 3 - ECIL", "ASIAN CINEMART (VAISHNAVI) SCREEN 1 - RC PURAM", "ASIAN CINEMART (VAISHNAVI) SCREEN 2 - RC PURAM", "ASIAN CINEMART (VAISHNAVI) SCREEN 3 - RC PURAM", "ASIAN CINEMART (VAISHNAVI) SCREEN 4 - RC PURAM", "ASIAN CINEMART (VAISHNAVI) SCREEN 5 - RC PURAM", "ASIAN CINEPRIDE LALITHA - MOOSAPET", "ASAIN SHA SCREEN 1 - CHINTAL", "ASAIN SHAHENSHA SCREEN 2 - CHINTAL", "ASAIN SWAPNA 35MM - KATEDAN", "ASAIN SWAPNA 70MM - KATEDAN", "BVK MULTIPLEX VIJAYALAKSHMI SCREEN 1 - LB NAGAR", "BVK MULTIPLEX VIJAYALAKSHMI SCREEN 2 - LB NAGAR", "BVK MULTIPLEX VIJAYALAKSHMI SCREEN 3 - LB NAGAR", "CINEPOLIS CCPL MALL AUDI 1 - MALKAJGIRI", "CINEPOLIS CCPL MALL AUDI 2 - MALKAJGIRI", "CINEPOLIS CCPL MALL AUDI 3 - MALKAJGIRI", "CINEPOLIS CCPL MALL AUDI 4 - MALKAJGIRI", "CINEPOLIS CCPL MALL AUDI 5 - MALKAJGIRI", "CINEPOLIS DSL VIRTUE MALL AUDI 1 - UPPAL", "CINEPOLIS DSL VIRTUE MALL AUDI 2 - UPPAL", "CINEPOLIS DSL VIRTUE MALL AUDI 3 - UPPAL", "CINEPOLIS DSL VIRTUE MALL AUDI 4 - UPPAL", "CINEPOLIS DSL VIRTUE MALL AUDI 5 - UPPAL", "CINEPOLIS DSL VIRTUE MALL AUDI 6 - UPPAL", "CINEPOLIS LULU MALL AUDI 1 - JNTUH", "CINEPOLIS LULU MALL AUDI 2 - JNTUH", "CINEPOLIS LULU MALL AUDI 3 - JNTUH", "CINEPOLIS LULU MALL AUDI 4 - JNTUH", "CINEPOLIS LULU MALL AUDI 5 - JNTUH", "CINEPOLIS MANTRA MALL AUDI 1 - ATTAPUR", "CINEPOLIS MANTRA MALL AUDI 2 - ATTAPUR", "CINEPOLIS MANTRA MALL AUDI 3 - ATTAPUR", "CINEPOLIS MANTRA MALL AUDI 4 - ATTAPUR", "CINEPOLIS MANTRA MALL AUDI 5 - ATTAPUR", "CINEPOLIS MANTRA MALL AUDI 6 - ATTAPUR", "CINEPOLIS SUDHA CINEMAS AUDI 1 - HYDERABAD", "CINEPOLIS SUDHA CINEMAS AUDI 2 - HYDERABAD", "CINEPOLIS SUDHA CINEMAS AUDI 3 - HYDERABAD", "CINEPOLIS SUDHA CINEMAS AUDI 4 - HYDERABAD", "CINEPOLIS SUDHA CINEMAS AUDI 5 - HYDERABAD", "GPR MULTIPLEX SCREEN 1 - NIZAMPET", "GPR MULTIPLEX SCREEN 2 - NIZAMPET", "GPR MULTIPLEX SCREEN 3 - NIZAMPET", "INOX ASHOKA ONE MALL SCREEN 1 - KUKATPALLY", "INOX ASHOKA ONE MALL SCREEN 2 - KUKATPALLY", "INOX ASHOKA ONE MALL SCREEN 3 - KUKATPALLY", "INOX ASHOKA ONE MALL SCREEN 4 - KUKATPALLY", "INOX ASHOKA ONE MALL SCREEN 5 - KUKATPALLY", "INOX GSM MALL SCREEN 1 - MADINAGUDA", "INOX GSM MALL SCREEN 2 - MADINAGUDA", "INOX GSM MALL SCREEN 3 - MADINAGUDA", "INOX GSM MALL SCREEN 4 - MADINAGUDA", "INOX GSM MALL SCREEN 5 - MADINAGUDA", "INOX GSM MALL SCREEN 6 - MADINAGUDA", "INOX GSM MALL SCREEN 7 - MADINAGUDA", "INOX GSM MALL SCREEN 8 - MADINAGUDA", "INOX GVK ONE MALL SCREEN 1 - BANJARAHILLS", "INOX GVK ONE MALL SCREEN 2 - BANJARAHILLS", "INOX GVK ONE MALL SCREEN 3 - BANJARAHILLS", "INOX GVK ONE MALL SCREEN 4 - BANJARAHILLS", "INOX GVK ONE MALL SCREEN 5 - BANJARAHILLS", "INOX GVK ONE MALL SCREEN 6 - BANJARAHILLS", "INOX MAHESHWARI PARMESHWARI MALL SCREEN 1 - KACHEGUDA", "INOX MAHESHWARI PARMESHWARI MALL SCREEN 2 - KACHEGUDA", "INOX MAHESHWARI PARMESHWARI MALL SCREEN 3 - KACHEGUDA", "INOX MAHESHWARI PARMESHWARI MALL SCREEN 4 - KACHEGUDA", "INOX MAHESHWARI PARMESHWARI MALL SCREEN 5 - KACHEGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 1 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 2 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 3 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 4 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 5 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 6 - KAVADIGUDA", "INOX SATTAVA NECKLACE MALL SCREEN 7 - KAVADIGUDA", "JP CINEMAS SCREEN 1 - CHANDANAGAR", "JP CINEMAS SCREEN 2 - CHANDANAGAR", "JP CINEMAS SCREEN 3 - CHANDANAGAR", "JP CINEMAS SCREEN 4 - CHANDANAGAR", "JP CINEMAS SCREEN 5 - CHANDANAGAR", "MIRAJ CINEMAS A2A CENTRAL MALL SCREEN 1 - BALANAGAR", "MIRAJ CINEMAS A2A CENTRAL MALL SCREEN 2 - BALANAGAR", "MIRAJ CINEMAS A2A CENTRAL MALL SCREEN 3 - BALANAGAR", "MIRAJ CINEMAS A2A CENTRAL MALL SCREEN 4 - BALANAGAR", "MIRAJ CINEMAS CINE TOWN SCREEN 1 - MIYAPUR", "MIRAJ CINEMAS CINE TOWN SCREEN 2 - MIYAPUR", "MIRAJ CINEMAS CINE TOWN SCREEN 3 - MIYAPUR", "MIRAJ CINEMAS GEETHA SCREEN 1 - CHANDANAGAR", "MIRAJ CINEMAS GEETHA SCREEN 2 - CHANDANAGAR", "MIRAJ CINEMAS GEETHA SCREEN 3 - CHANDANAGAR", "MIRAJ CINEMAS GEETHA SCREEN 4 - CHANDANAGAR", "MIRAJ CINEMAS RAGHAVENDRA SCREEN 1 - MALKAJGIRI", "MIRAJ CINEMAS RAGHAVENDRA SCREEN 2 - MALKAJGIRI", "MIRAJ CINEMAS RAGHAVENDRA SCREEN 3 - MALKAJGIRI", "MIRAJ CINEMAS SHALINI SHIVANI SCREEN 1 - KOTHAPET", "MIRAJ CINEMAS SHALINI SHIVANI SCREEN 2 - KOTHAPET", "MIRAJ CINEMAS SHALINI SHIVANI SCREEN 3 - KOTHAPET", "MIRAJ CINEMAS SHALINI SHIVANI SCREEN 4 - KOTHAPET", "MOVIE MAX AMR PLANET SCREEN 1 - ECIL", "MOVIE MAX AMR PLANET SCREEN 2 - ECIL", "MOVIE MAX AMR PLANET SCREEN 3 - ECIL", "MOVIE MAX AMR PLANET SCREEN 4 - ECIL", "MOVIE MAX AMR PLANET SCREEN 5 - ECIL", "MOVIE MAX AMR PLANET SCREEN 6 - ECIL", "MOVIE MAX AMR PLANET SCREEN 7 - ECIL", "PVR ICON HITECH AUDI 1 - MADHAPUR", "PVR ICON HITECH AUDI 2 - MADHAPUR", "PVR ICON HITECH AUDI 3 - MADHAPUR", "PVR ICON HITECH AUDI 4 - MADHAPUR", "PVR ICON HITECH AUDI 5 - MADHAPUR", "PVR ATRIUM MALL AUDI 1 - GACHIBOWLI", "PVR ATRIUM MALL AUDI 2 - GACHIBOWLI", "PVR ATRIUM MALL AUDI 3 - GACHIBOWLI", "PVR ATRIUM MALL AUDI 4 - GACHIBOWLI", "PVR ATRIUM MALL AUDI 5 - GACHIBOWLI", "PVR CENTRAL MALL AUDI 1 - PANJAGUTTA", "PVR CENTRAL MALL AUDI 2 - PANJAGUTTA", "PVR CENTRAL MALL AUDI 3 - PANJAGUTTA", "PVR CENTRAL MALL AUDI 4 - PANJAGUTTA", "PVR CENTRAL MALL AUDI 5 - PANJAGUTTA", "PVR INORBIT MALL SCREEN 1 - CYBERABAD", "PVR INORBIT MALL SCREEN 2 - CYBERABAD", "PVR INORBIT MALL SCREEN 3 - CYBERABAD", "PVR INORBIT MALL SCREEN 4 - CYBERABAD", "PVR INORBIT MALL SCREEN 5 - CYBERABAD", "PVR INORBIT MALL SCREEN 6 - CYBERABAD", "PVR AUDI 1 4DX - IRRUM MANZIL", "PVR AUDI 2 - IRRUM MANZIL", "PVR AUDI 3 - IRRUM MANZIL", "PVR AUDI 4 - IRRUM MANZIL", "PVR AUDI 5 - IRRUM MANZIL", "PVR AUDI 6 - IRRUM MANZIL", "PVR AUDI 7 - IRRUM MANZIL", "PVR SCREEN 1 - MALLAPUR", "PVR SCREEN 2 - MALLAPUR", "PVR SCREEN 3 - MALLAPUR", "PVR SCREEN 4 - MALLAPUR", "PVR AUDI 1 - MUSARAMBAGH", "PVR AUDI 2 - MUSARAMBAGH", "PVR AUDI 3 - MUSARAMBAGH", "PVR AUDI 4 - MUSARAMBAGH", "PVR AUDI 5 - MUSARAMBAGH", "PVR AUDI 6 - MUSARAMBAGH", "PVR NEXT GALLERIA MALL AUDI 1 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 2 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 3 PLAY HOUSE - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 4 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 5 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 6 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 7 - PANJAGUTTA", "PVR NEXT GALLERIA MALL AUDI 8 - PANJAGUTTA", "PVR NEXUS MALL AUDI 1 - KUKATPALLY", "PVR NEXUS MALL AUDI 2 - KUKATPALLY", "PVR NEXUS MALL AUDI 3 - KUKATPALLY", "PVR NEXUS MALL AUDI 4 - KUKATPALLY", "PVR NEXUS MALL AUDI 5 4DX - KUKATPALLY", "PVR NEXUS MALL AUDI 6 - KUKATPALLY", "PVR NEXUS MALL AUDI 7 - KUKATPALLY", "PVR NEXUS MALL AUDI 8 - KUKATPALLY", "PVR NEXUS MALL AUDI 9 - KUKATPALLY", "PVR PRESTON MALL AUDI 1 - GACHIBOWLI", "PVR PRESTON MALL AUDI 2 - GACHIBOWLI", "PVR PRESTON MALL AUDI 3 - GACHIBOWLI", "PVR PRESTON MALL AUDI 4 - GACHIBOWLI", "PVR RK CINEPLEX SCREEN 1 - BANJARAHILLS", "PVR RK CINEPLEX SCREEN 2 - BANJARAHILLS", "PVR RK CINEPLEX SCREEN 3 - BANJARAHILLS", "PLATINUM MOVIETIME CINEMA SLN TERMINUS SCREEN 1  -  GACHIBOWLI", "PLATINUM MOVIETIME CINEMA SLN TERMINUS SCREEN 2  -  GACHIBOWLI", "PLATINUM MOVIETIME CINEMA SLN TERMINUS SCREEN 3  -  GACHIBOWLI", "PLATINUM MOVIETIME CINEMA SLN TERMINUS SCREEN 4  -  GACHIBOWLI", "PLATINUM MOVIETIME CINEMA SLN TERMINUS SCREEN 5  -  GACHIBOWLI", "PLATINUM MOVIETIME CINEMAS SCREEN 1 - AMEERPET", "PLATINUM MOVIETIME CINEMAS SCREEN 2 - AMEERPET", "PLATINUM MOVIETIME CINEMAS SCREEN 3 - AMEERPET", "PLATINUM MOVIETIME CINEMAS SCREEN 4 - AMEERPET", "TIVOLI CINEMAS EXTREEME - SECUNDERABAD", "TIVOLI CINEMAS SCREEN 1 - SECUNDERABAD", "TIVOLI CINEMAS SCREEN 2 - SECUNDERABAD", "TIVOLI CINEMAS SCREEN 3 - SECUNDERABAD"]

let HYD_MPXSL = ["Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Gold%none%none%none", "Recliner%Gold%Loungers%none", "Semi Recliner%Gold%none%none", "Semi Recliner%Gold%none%none", "Semi Recliner%Gold%none%none", "Semi Recliner%Gold%none%none", "Platinum%Gold%Loungers%none", "Platinum%Gold%Loungers%none", "Platinum%Gold%Loungers%none", "Platinum%Gold%Loungers%none", "Platinum%none%none%none", "Platinum%Gold%Loungers%none", "Platinum%Gold%Loungers%none", "Gold%Box%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Box A + Box B%Recliner%Gold%none", "Box A%Box B%Gold%none", "Gold%none%none%none", "Box A%Recliner%Gold%none", "Recliner + Couples%Gold%Loungers%none", "Recliner + Sofa%Gold%Loungers%none", "Recliner + Sofa%Gold%Loungers%none", "Recliner + Couples%Gold%Loungers%none", "Gold%none%none%none", "Recliners%Gold%none%none", "Gold%none%none%none", "Recliners%Gold%none%none", "Gold%none%none%none", "Box%Gold%none%none", "Sofa%Gold%none%none", "Sofa%Platinum%none%none", "Sofa%Platinum%none%none", "Sofa%Platinum%none%none", "Platinum%none%none%none", "Platinum%none%none%none", "Platinum%none%none%none", "Box A + Box B%Gold%Silver%none", "Box A + Box B%Gold%Silver%none", "Platinum%none%none%none", "Gold%Platinum%none%none", "Box A%Box B%Balcony%none", "Balcony%none%none%none", "Balcony%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "VIP%Executive%Normal%none", "VIP%Executive%Normal%none", "VIP%Executive%Normal%none", "VIP%Executive%Normal%none", "VIP%Executive%Normal%none", "VIP%Executive%Normal%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "VIP%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Royale%Executive%none%none", "Royale%Executive%none%none", "Royale%Executive%none%none", "Royale%Executive%none%none", "Royale%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Recliner%Gold%none%none", "Recliner%Gold%none%none", "Sofa%Gold%none%none", "Sofa%Gold%none%none", "Gold%none%none%none", "Executive%none%none%none", "Gold%Executive%none%none", "Gold%Executive%none%none", "Gold%Executive%none%none", "Executive%Gold%ExecutiveP%none", "Executive%Gold%ExecutiveP%none", "Executive%none%none%none", "Gold%Executive%none%none", "Executive%none%none%none", "Gold%Executive%none%none", "Executive%none%none%none", "Executive%Gold%ExecutiveP%none", "Gold%ExecutiveP%none%none", "Executive%Gold%ExecutiveP%none", "Executive%none%none%none", "Gold%Executive%none%none", "Executive%none%none%none", "Gold%Executive%none%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Prime%Classic%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "4DX%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "4DX%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Classic%none%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Recliner%Classic%none%none", "Platinum Premium Recliner%Platinum Recliner%none%none", "Platinum Premium Recliner%Platinum Recliner%none%none", "Platinum Premium Recliner%Platinum Recliner%none%none", "Platinum Premium Recliner%Platinum Recliner%none%none", "Platinum Premium Recliner%Platinum Recliner%none%none", "Silver Class%none%none%none", "Platinum Recliners%Silver Class%none%none", "Silver Class%none%none%none", "Silver Class%none%none%none", "Gold Upper%Gold Lower%none%none", "Gold Upper%Gold Lower%none%none", "Box A%Box B%Gold%none", "Gold%none%none%none"]

let HYD_MPXTSC = ["364+0+0+0", "364+0+0+0", "390+0+0+0", "390+0+0+0", "224+0+0+0", "630+0+0+0", "20+376+26+0", "15+156+0+0", "18+304+0+0", "11+120+0+0", "17+287+0+0", "14+403+19+0", "12+283+13+0", "12+283+13+0", "12+132+14+0", "52+0+0+0", "10+192+12+0", "10+138+14+0", "144+6+0+0", "14+184+0+0", "13+184+0+0", "22+453+0+0", "19+477+0+0", "38+26+690+0", "17+11+359+0", "382+0+0+0", "12+16+304+0", "64+370+13+0", "27+133+12+0", "27+133+12+0", "64+370+13+0", "356+0+0+0", "14+310+0+0", "352+0+0+0", "14+306+0+0", "341+0+0+0", "22+360+0+0", "9+192+0+0", "21+366+0+0", "17+302+0+0", "15+197+0+0", "125+0+0+0", "125+0+0+0", "365+0+0+0", "29+560+156+0", "34+292+88+0", "175+0+0+0", "189+323+0+0", "24+24+596+0", "357+0+0+0", "210+0+0+0", "116+0+0+0", "141+0+0+0", "156+0+0+0", "147+0+0+0", "143+0+0+0", "14+160+35+0", "14+196+35+0", "14+196+35+0", "10+129+25+0", "10+133+25+0", "14+160+35+0", "28+225+0+0", "28+265+0+0", "28+265+0+0", "28+267+0+0", "28+265+0+0", "12+207+0+0", "12+203+0+0", "11+155+0+0", "12+213+0+0", "12+206+0+0", "9+208+0+0", "225+46+0+0", "180+40+0+0", "129+35+0+0", "97+25+0+0", "159+46+0+0", "12+218+0+0", "12+218+0+0", "25+658+0+0", "34+269+0+0", "13+174+0+0", "12+174+0+0", "13+288+0+0", "13+284+0+0", "17+386+0+0", "17+287+0+0", "12+180+0+0", "11+141+0+0", "12+141+0+0", "11+152+0+0", "13+106+0+0", "13+192+0+0", "11+140+0+0", "16+172+0+0", "9+209+0+0", "14+257+0+0", "9+208+0+0", "16+196+0+0", "236+0+0+0", "161+0+0+0", "139+0+0+0", "241+0+0+0", "244+0+0+0", "15+210+0+0", "10+132+0+0", "16+233+0+0", "16+294+0+0", "16+287+0+0", "16+148+0+0", "14+126+0+0", "23+230+0+0", "18+264+0+0", "14+190+0+0", "15+204+0+0", "94+0+0+0", "143+0+0+0", "25+260+0+0", "25+262+0+0", "25+338+0+0", "408+22+272+0", "344+22+336+0", "313+0+0+0", "86+349+0+0", "111+0+0+0", "32+292+0+0", "101+0+0+0", "292+20+348+0", "12+262+0+0", "150+15+279+0", "94+0+0+0", "28+426+0+0", "130+0+0+0", "29+540+0+0", "16+183+40+0", "16+180+40+0", "12+196+34+0", "10+170+32+0", "12+192+36+0", "12+140+32+0", "12+134+36+0", "11+179+0+0", "143+0+0+0", "140+0+0+0", "13+289+0+0", "9+152+0+0", "16+276+0+0", "16+156+0+0", "16+156+0+0", "14+152+0+0", "12+113+0+0", "255+0+0+0", "217+0+0+0", "141+0+0+0", "255+0+0+0", "416+0+0+0", "147+0+0+0", "161+0+0+0", "161+0+0+0", "170+0+0+0", "161+0+0+0", "147+0+0+0", "96+0+0+0", "10+94+0+0", "10+158+0+0", "8+132+0+0", "8+142+0+0", "18+264+0+0", "14+228+0+0", "201+0+0+0", "196+0+0+0", "201+0+0+0", "201+0+0+0", "160+0+0+0", "187+0+0+0", "117+0+0+0", "8+188+0+0", "150+0+0+0", "7+168+0+0", "10+193+0+0", "145+0+0+0", "54+0+0+0", "152+0+0+0", "9+181+0+0", "144+0+0+0", "170+0+0+0", "11+209+0+0", "12+232+0+0", "13+244+0+0", "12+232+0+0", "9+135+0+0", "108+0+0+0", "13+282+0+0", "13+246+0+0", "12+250+0+0", "13+278+0+0", "217+0+0+0", "256+0+0+0", "256+0+0+0", "217+0+0+0", "52+429+0+0", "22+228+0+0", "22+248+0+0", "18+32+0+0", "15+24+0+0", "16+32+0+0", "18+40+0+0", "18+16+0+0", "316+0+0+0", "30+240+0+0", "357+0+0+0", "372+0+0+0", "381+376+0+0", "128+269+0+0", "5+5+254+0", "56+0+0+0"]


let vizagTL = ["A SQUARE CINEMAS - SUJATHA NAGAR 80FT ROAD PENDURTHI", "AVR SAPTHAGIRI 2K - CHITTIVALASA", "CINEPOLIS SREEKANYA CINEGLITZ AUDI 1 - MADHURAWADA", "CINEPOLIS SREEKANYA CINEGLITZ AUDI 2 - MADHURAWADA", "CINEPOLIS SREEKANYA CINEGLITZ AUDI 3 - MADHURAWADA", "CINEPOLIS SREEKANYA CINEGLITZ AUDI 4 - MADHURAWADA", "GANESH A/C 2K DOLBY - TAGARAPUVALASA", "GLOBEX CINEMA 2K DOBLY SCREEN 2 - GAJUWAKA", "GLOBEX CINEMA 2K DOBLY SCREEN 4 - GAJUWAKA", "GLOBEX CINEMA 2K DOBLY SCREEN 5 - GAJUWAKA", "INOX CMR CENTRAL SCREEN 1 - GAJUWAKA", "INOX CMR CENTRAL SCREEN 2 - GAJUWAKA", "INOX CMR CENTRAL SCREEN 3 - GAJUWAKA", "INOX CMR CENTRAL SCREEN 1 - MADDILAPALEM", "INOX CMR CENTRAL SCREEN 2 - MADDILAPALEM", "INOX CMR CENTRAL SCREEN 3 - MADDILAPALEM", "INOX CMR CENTRAL SCREEN 4 - MADDILAPALEM", "INOX VARUN BEACH SCREEN 1 - BEACH ROAD", "INOX VARUN BEACH SCREEN 2 - BEACH ROAD", "INOX VARUN BEACH SCREEN 3 - BEACH ROAD", "INOX VARUN BEACH SCREEN 4 - BEACH ROAD", "INOX VARUN BEACH SCREEN 5 - BEACH ROAD", "INOX VARUN BEACH SCREEN 6 - BEACH ROAD", "INOX VIZAG CHITRALAYA MALL SCREEN 1", "INOX VIZAG CHITRALAYA MALL SCREEN 2", "INOX VIZAG CHITRALAYA MALL SCREEN 3", "INOX VIZAG CHITRALAYA MALL SCREEN 4", "INOX VIZAG CHITRALAYA MALL SCREEN 5", "JAGADAMBA 70MM PREMIUM LASER 4K IMAGES - VIZAG", "KAMESHWARI CINEMA -  MADDILAPALEM", "KINNERA CINEMA - MADDILAPALEM", "LSK CINEMAS - VELLANKI", "M/S TATA PICTURE PALACE A/C DTS - THAGARAPUVALASA", "MOHINI CINEMAS 70MM BOLBY ATMOS - GAJUWAKA", "MOHINI CINEMAS 35MM BOLBY ATMOS - GAJUWAKA", "MOHINI CINEMAS MINI BOLBY ATMOS - GAJUWAKA", "MOURYA THEATER A/C DTS - GOPALAPATNAM", "MUKTA A2 CINEMAS SCREEN 1 - VIZAG CENTRAL,VIZAG", "MUKTA A2 CINEMAS SCREEN 2 - VIZAG CENTRAL,VIZAG", "MUKTA A2 CINEMAS SCREEN 3 - VIZAG CENTRAL,VIZAG", "NARASIMHA A/C 2K DOLBY - GOPALAPATNAM", "NATRAJ A/C DTS SCREEN 1 - PENDURTHI", "NATRAJ A/C DTS SCREEN 2 - PENDURTHI", "RAJA CINEMAX A/C 2K DOLBY SCREEN 1 - KOTHAVALASA", "RAJA CINEMAX A/C 2K DOLBY SCREEN 2 - KOTHAVALASA", "RAMADEVI 4K - VIZAG", "STBL BALAJI VILLAGE CINEMA SCREEN 1 - SABBAVARAM,VIZAG", "STBL BALAJI VILLAGE CINEMA SCREEN 2 - SABBAVARAM,VIZAG", "STBL CINE WORLD SCREEN 1 - MADHURAWADA,VIZAG", "STBL CINE WORLD SCREEN 2 - MADHURAWADA,VIZAG", "STBL CINE WORLD SCREEN 3 (BVC) - SHEELANAGAR,VIZAG", "STBL CINE WORLD SCREEN 2 (DRIVING) - SHEELANAGAR,VIZAG", "STBL CINE WORLD SCREEN 4 (BVC) - SHEELANAGAR,VIZAG", "SANGAM THEATRE 4K DOLBY ATMOS - VIZAG", "SARADA THEATRE 4K DOLBY ATMOS - VIZAG", "SARAT THEATER A/C 4K DOLBY ATMOS - VIZAG", "SHRI LAKSHMI NARASIMHA THEATRE - KOTHAVALASA,VIZAG", "SREE KANYA CINEMAS - KANYA (SCREEN 1) - GAJUWAKA", "SREE KANYA CINEMAS - SREE KANYA (SCREEN 2) - GAJUWAKA", "SREE KANYA THEATRE 4K DOLBY ATMOS - RLY NEW COLONY", "SREE LEELA MAHAL THEATRE - VIZAG", "SREE RAMA THEATRE 4K DOLBY ATMOS - VIZAG", "SRI LAKSHMI NARASIMHA PICTURE PALACE SCREEN 1 - 104 AREA", "SRI LAKSHMI NARASIMHA PICTURE PALACE SCREEN 2 - 104 AREA", "SRI MELODY 4K DOLBY ATMOS - VIZAG", "SRI NARASIMHA A/C DTS - GOPALAPATNAM", "SRI RAMULAMMA THEATRE - THAGARAPUVALASA,VIZAG", "SRI VENKATESWARA THEATRES DOLBY 7.1 2K A/C SCREEN 1 - VIZAG", "SRI VENKATESWARA THEATRES DOLBY 7.1 2K A/C SCREEN 2 - VIZAG", "SUKANYA COMPLEX - VIZAG", "URVASI THEATER DOLBY 2K A/C - VISHAKHAPATNAM"]

let vizagTSL = ["Executive Class%none%none%none", "Premium%Non Premium%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Executive%Normal%none%none", "Premium Class%Non Premium Class%none%none", "Gold%none%none%none", "Gold%none%none%none", "Gold%none%none%none", "Executive%none%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Royal%Executive%none%none", "Royal%Executive%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Royale%Executive%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "Executive%none%none%none", "1 Premium%2 Premium%1 Non Premium%2 Non Premium", "Premium%Non Premium%none%none", "Premium%Non Premium%none%none", "Classique%none%none%none", "Premium Class%Second Class%none%none", "Premium%Non Premium%none%none", "Premium%Non Premium%none%none", "Premium%Non Premium%none%none", "Balcony%First Class%Second Class%none", "Premium%Gold%none%none", "Premium%Gold%none%none", "Premium%Gold%none%none", "Premium%Non Premium%none%none", "First Class%Second Class%none%none", "First Class%Second Class%none%none", "Box A%Box B%First Class%Second Class", "First Class%Second Class%none%none", "1 Premium%1 Non Premium%2 Non Premium%none", "First Class%Second Class%none%none", "First Class%Second Class%none%none", "Recliners%Premium%Executive%none", "Recliners%Premium%Executive%none", "Club% Executive%none%none", "Sofa%Premium Class%Executive Class%none", "Recliners%Sofa%Premium Class%Executive Class", "A Box%B Box%Premium%Non Premium", "1 Premium%1 Non Premium%2 Non Premium%none", "Box A%Box B%Premium%Non Premium", "Premium%Non Premium%none%none", "Premium 1%Premium 2%Non Premium%none", "Premium 2%Premium 3%Non Premium%none", "Premium%Non Premium%none%none", "Box A%Box B%Balcony%Second Class", "Balcony%Second Class%none%none", "First Class%Second Class%Third Class%none", "First Class%Second Class%Third Class%none", "Premium%Non Premium%none%none", "Premium%Non Premium%none%none", "Premium First Class%Non Premium%none%none", "First Class%Second Class%none%none", "First Class%Second Class%Third Class%none", "Balcony%First Class%none%none", "Premium%Non Premium%none%none"]

let vizagTSC = ["100+0+0+0", "359+94+0+0", "150+38+0+0", "144+38+0+0", "187+38+0+0", "180+38+0+0", "387+130+0+0", "246+0+0+0", "193+0+0+0", "105+0+0+0", "220+0+0+0", "15+306+0+0", "12+250+0+0", "236+0+0+0", "234+0+0+0", "338+0+0+0", "161+0+0+0", "18+245+0+0", "19+278+0+0", "147+0+0+0", "156+0+0+0", "156+0+0+0", "147+0+0+0", "15+320+0+0", "166+0+0+0", "134+0+0+0", "122+0+0+0", "157+0+0+0", "276+310+217+213", "280+213+0+0", "280+147+0+0", "100+0+0+0", "382+146+0+0", "224+150+0+0", "222+75+0+0", "293+132+0+0", "361+54+104+0", "312+32+0+0", "118+24+0+0", "118+24+0+0", "240+150+0+0", "368+96+0+0", "194+50+0+0", "24+23+317+114", "191+64+0+0", "163+39+76+0", "241+61+0+0", "224+48+0+0", "13+330+97+0", "13+330+97+0", "168+42+0+0", "20+249+65+0", "6+64+174+53", "26+26+532+193", "229+73+105+0", "24+24+572+208", "366+102+0+0", "210+210+177+0", "242+122+137+0", "441+154+0+0", "18+18+497+182", "416+138+0+0", "339+23+93+0", "162+18+45+0", "575+199+0+0", "208+92+0+0", "350+124+0+0", "339+128+0+0", "167+57+82+0", "259+220+0+0", "500+166+0+0"]

let tirupathiTL = ["CS CINEMAS (DEVENDRA THEATER) A/C 4K DOLBY ATMOS", "CVS MOVIE LAND A/C DTS - TIRUPATI", "KRISHNATEJA A/C 4K DOLBY(NEWLY RENOVATED) - TIRUPATI", "NVR JAYSYAM A/C 4K DOLBY ATMOS - TIRUPATI", "NVR SANDHYA THEATER 4K DOLBY ATMOS - TIRUPATI", "NVR VELRAMS A/C 4K DOLBY SURROUND - TIRUPATI", "PGR CINEMAS A/C 4K DOLBY ATMOS - TIRUPATI", "PADMA PICTURE PALACE A/C 4K DOLBY ATMOS - RENIGUNTA", "PRATAP DELUX A/C 2K DOLBY ATMOS - TIRUPATI", "PRATAP THEATER A/C 4K DOLBY ATMOS - TIRUPATI", "SV CINEMAS A/C 4K DOLBY ATMOS - CHANDRAGIRI", "SRINIVAS TEJA A/C DTS - TIRUPATI"]
let tirupathiTSL = ["Diamond Class%Gold Class%none%none", "Diamond%Platinum%Silver%none", "Diamond%Platinum%Gold%none", "Diamond%Gold%none%none", "Diamond%Gold%none%none", "Diamond%Gold%none%none", "Platinum%Gold%Regular%none", "Platinum%Gold%none%none", "Diamond%Platinum%Gold%none", "Diamond%Platinum%Silver%none", "Diamond Class%Gold Class%none%none", "Platinum%Gold%none%none"]
let tirupathiTSC = ["385+79+0+0", "138+175+80+0", "118+389+126+0", "458+152+0+0", "463+133+0+0", "307+84+0+0", "352+132+71+0", "324+110+0+0", "18+242+84+0", "22+473+166+0", "272+70+0+0", "231+54+0+0"]

let ahmedabadTL = ["1, NEWFANGLED MINIPLEX SCREEN 1 - MONDEAL RETAIL PARK", "1, NEWFANGLED MINIPLEX SCREEN 2 - MONDEAL RETAIL PARK", "1, NEWFANGLED MINIPLEX SCREEN 3 - MONDEAL RETAIL PARK", "1, NEWFANGLED MINIPLEX SCREEN 4 - MONDEAL RETAIL PARK", "19 CINEMA SCREEN 1 - GODREJ GARDEN CITY, AHMEDABAD", "19 CINEMA SCREEN 2 - GODREJ GARDEN CITY, AHMEDABAD", "19 CINEMA SCREEN 1 - SANAND, AHMEDABAD", "19 CINEMA SCREEN 2 - SANAND, AHMEDABAD", "19 CINEMA SCREEN 3 - SANAND, AHMEDABAD", "2, NEWFANGLED MINIPLEX SCREEN 1 - MOTERA, AHMEDABAD", "2, NEWFANGLED MINIPLEX SCREEN 2 - MOTERA, AHMEDABAD", "2, NEWFANGLED MINIPLEX SCREEN 3 - MOTERA, AHMEDABAD", "2, NEWFANGLED MINIPLEX SCREEN 4 - MOTERA, AHMEDABAD", "AB MINIPLEX SCREEN 1 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 3 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 4 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 6 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 7 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 8 - SHIVRANJINI CROSS ROAD, SATELLITE", "AB MINIPLEX SCREEN 9 - SHIVRANJINI CROSS ROAD, SATELLITE"]
let ahmedabadTSL = ["VIP Club%Premium%none%none", "VIP Club%Premium%none%none", "VIP Club%Premium%none%none", "VIP Club%Premium%none%none", "Platinum%Gold%Silver%none", "Platinum%Gold%Silver%none", "Premium Sofa%Standard%Recliner Bed%none", "Platinum%Gold%Silver%none", "Premium Sofa%Standard%Recliner Bed%none", "Couple Seat%none%none%none", "Couple Seat%none%none%none", "Couple Seat%none%none%none", "Couple Seat%none%none%none", "Platinum%Gold%Silver%none", "Platinum%Gold%Silver%none", "Executive%none%none%none", "Single Seat%Couple Seat%none%none", "Upper Sofa%Lower Sofa%none%none", "Upper Bed%Lower Bed%none%none", "Upper Sofa%Lower Sofa%none%none"]
let ahmedabadTSC = ["10+10+0+0", "12+11+0+0", "10+10+0+0", "12+11+0+0", "21+33+22+0", "16+33+22+0", "34+20+20+0", "21+48+36+0", "30+41+10+0", "29+0+0+0", "38+0+0+0", "25+0+0+0", "11+0+0+0", "24+61+17+0", "22+60+20+0", "54+0+0+0", "13+34+0+0", "15+26+0+0", "10+30+0+0", "17+27+0+0"]

let bangloreTL = ["ABHINAY THEATRE 4K A/C - GANDHINAGAR", "AKASH CINEMAS - LAGGERE", "ALANKAR THEATER HOSKOTE DOLBY ATMOS,2K LASER", "AMRUTH DIGITAL 2K A/C CINEMA - LINGARAJAPURAM", "ANJAN DIGITAL 4K A/C CINEMA - MAGADI ROAD", "ANUPAMA THEATRE A/C 4K DOLBY - GANDHINAGAR ", "ARUNA THEATRE A/C 4K 7.1 DOLBY 3D - SRIRAMPURAM", "ASHOKA CINEMAS - DOLBY LASER - CHIKKABANAVARA"]
let bangloreTSL = ["Balcony%Mini Balcony%Second Class%none", "VIP Box%Silver Class%none%none", "VIP A%VIP B%none%none", "Gold%Silver%none%none", "Balcony%Second Class%none%none", "Balcony%Middle Class%none%none", "Diamond%Gold%none%none", "Premium%Classic%none%none"]
let bangloreTSC = ["369+146+480+0", "44+729+0+0", "19+21+0+0", "477+261+0+0", "279+650+0+0", "247+480+0+0", "320+577+0+0", "250+158+0+0"]
