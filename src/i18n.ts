import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          copy:{
            clipboard: 'Link has been copied to the clipboard'
          },
          news: {
            title: "News:",
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },
          about: {
            title: 'About us:',
            first_paragraph: 'In our program, we want the young people of 3 cities to come together and launch an online and offline campaign for the sake of environmental protection and at the same time local democratic public life, on the basis of which we can achieve a fundamental change of attitude. We see and experience that young people are receptive to environmental protection and want to do much more for it. We want to generate this project in 3 countries, through which we can achieve change not only in the 13-30-year-old age group, but also locally among broad strata locally. The program was based on the fact that under the name of Eco-democracy, young people from 5 countries met in a double international youth exchange in Italy, in Sassari and Nyíregyháza , and on the occasion of this program, the possibility of further cooperation was formulated in the 3 participating organizations.',
            second_paragraph: 'We have seen and experienced that a lot can be done for environmental protection locally, and one of the most important parts of this is if we can implement basic attitude formation, since this is the basis of everything. There were activities related to volunteering on both exchanges, in both countries we could experience that people often do not pay attention to their environment, they pollute the environment with objects which do not decompose or need a long time to do so.',
            third_paragraph: "The Student Mayor's Office of Nyíregyháza regularly carries out garbage collection campaigns, during which it finds that the 3 most common types of garbage in the city are cigarette butts, aluminum cans and plastic bottles, but we also experienced similar things when cleaning a stretch of beach in Italy. We also see and experience that environmental protection is increasingly becoming a part of everyday life, but in many cases only at the level of words. This is what our project would like to reflect on, in which we would launch attitude-changing campaigns in the 3 cities, naturally involving local decision-makers as well.",
            fourth_paragraph: 'There would be 3 main parts of our program series: in the first round, we would launch a joint campaign in which we would draw attention to the fact that local residents should not litter and protect their environment. As the second step in the series, we would now invite similar actions not only to the young communities of the cities, but also to a wider target group, and finally, we would launch actions pointing to the future, which would include tree planting, green covering, community garden development programs, and garbage collection.',
            fifth_paragraph: 'In this way, we could not only strengthen environmental awareness, but also develop communities, together, all in 3 cities of 3 countries. Internationally, we will spread the idea of recycling and sustainable development to protect the environment, helping nature and the planet to regenerate itself. We achieve all this by changing the thinking of young people with small steps, so that they only take from nature what they need and recycle what can be.',
            sixth_paragraph: 'During the attention-grabbing activities (Flash-mobs, NGO visits, work at home, workshops with locals, exhibition and auction), we will always mention that the project is the result of a European collaboration and was financed by the European Union. At the end of the project, the relationship between the partner organizations and their community will be stronger than ever. Communities will be in closer contact with local organizations and institutions, which will facilitate the implementation of more and more important events for the community. The community will realize that there are other ways to manage waste than throwing it into nature.',
            seventh_paragraph: 'It is easy to involve the decision-makers in such and similar projects, on the one hand, because we experienced during the previous double exchange that they are open to the question in all three cities, and on the other hand, because we have developed a program that does not entail financial expenses for the decision-makers, since the attitude-shaping campaigns or promotions are not, or they only require very few financial resources from the decision-makers, which is especially beneficial in terms of the implementation of the program and its success.',
            goal: 'The goals of our project:',
            first_ul: 'To encourage young people to think consciously and ready for action.',
            second_ul: 'To provide them with the opportunity to exchange good examples, learn new techniques and learn together in an international environment.',
            third_ul: ' To support intercultural learning',
            fourth_ul: 'To develop self-confidence and the ability to self-assess using non-formal education methods.',
            fifth_ul: 'Creating communities with environmentally conscious and democratic values',
            sixth_ul: 'Attitude formation in order to cause as little environmental damage as possible',
            seventh_ul: 'Active channeling of decision-makers in order to achieve goals, cooperation and joint thinking between young people and decision-makers in order to protect our environment'
          },
          navbar: {
            home: 'Home',
            about: 'About Us',
            news: 'News',
            gallery: 'Gallery'
          },
          workshop: {
            date_first: '2023. MARCH 31. – APR 3 | KROSNO, POLAND',
            date_second: '2023. JUNE 17-21. | MILCOVENI, ROMANIA',
            date_third: '2023. JULY 24., | NYÍREGYHÁZA, HUNGARY',
            first: 'First workshop',
            second: 'Second workshop',
            third: 'Environmental protection campaign, garbage collection',
            second_text: 'We had great expectations regarding our second workshop, which took place near the Serbian border, in Milcoveni, where there have been severe weather alerts sent out about floods on the day of our arrival. Despite this everybody got there safe, so following some ice-breaker games we started reviewing the project and the things we have already established. Compared to the first workshop we had minimal changes in the participants, therefore we informed the ne w members and told them about the details of the project. We also had a short selfbranding presentation. On the second day we learned about the details of a good communication campaign, that has the purpose to be present on most platforms. We also finalised and digitalised some design elements of the project. We set up workgroups responsible for working on the different parts of the project, such as a website, an Instagram and Facebook, a Tiktok and a translating team. The groups made presentations about their platforms and also showed how they wanted to be present on them, talking about the frequency and content of the future posts. The participants have decided that instead of graphic designs they will opt for a more simple appearence with photos. In the evening we once again organised an intercultural night, where the different cities could show their gastronomy and culture. On the third day we worked on the detailed planning of the campaign and a lot of discussions occured. We made the exact script for what we will post on every platform. We set up deadlines for the debut of the website and for the translators and talked about the frequency of posting on other platforms. These plans were than presented by the groups to other participants so that they could also give their opinions on them, which generated even more discussion. Later we had an unforgettable dance-night. On the fourth day we visited Reșița, where we hiked the mountain next to the city. We could see first hand the environmental protection the city does, like the selective waste collection and the bond of nature and artificial areas. During a structured conversation we got to learn more about its environmental protection aspirations as well. On the fifth day we evaluated the whole workshop. We established the events of the up-coming time period and went through the tasks of the different groups. In each city we are planning to do 2-2 actions bringing awareness to environmental protection (like picking up trash, planting trees and similar things), preferably whith including local decison-makers.',
            first_text: 'We held our project in the beautiful polish small town of Krosno, where we found a place, also home to an art gallery, as our workshop location. After arrival we played ice-breaker games, to learn eachothers names, which already set up a good mood for the event. Following this, we talked about Erasmus+ opportunities, Youthpass and of the results of studying. After a short break we got to know more about the aim, the events and the planned end results of the project during a presentation. On the second day, following breakfast, we held a debate about general questions surrounding environmental protection and during the rest of the morning we met with some local decision-makers. Besides we also listened to a presentation about the very innovative local waste management, where first of all they have 6-7 different types of selective waste collection and second of all they also burn the garbage locally, generating enough heat for most public institutions in the area. During this we could also ask any question that came up and we were provided with answers. After a coffee break we did some groupwork, where we all introduced our cities from an environmental standpoint and we also made a mini SWOT analysis about the cities, once again, from a green perspective. Later we had lunch and held debates again, but now about the ethics of demonstrative actions for environmental protection, for example, how far can you go with these actions and do they really help with bringing awareness? Following the debate we worked in groups again, where we created an ideal imaginary city with mostly taking into consideration ecologycal factors and presented them to eachother. We ended the day with an intercultural night, that included a lot of folk dances and songs. On the third day we practiced non-formal environmental protection exercises and went through some basic concepts about communication. We discussed the potential platforms we could use during the project (like a website, facebook, intagram or tiktok) and we came up with „local-newspapers” as a group exercise. During the afternoon we started planning the future image of the project, once again, in goups, where we came up with a logo design and started planning for the website and its sturcture. In the evening we played bowling together. On the last day we chose the people responsible for different tasks, went into more detail about how we want to do the project and discussed our goals. After doing reflections and evaluation it was time to say goodbye, but not for long, because we knew we would meet again, but that time in Romania.',
            third_text: 'In our project we try to avoide only campaigning online and we opt to make societal changes among people we cant reach on the internet. One of the best ways to make this happen is by setting an example with our garbage collection event. This firstly discourages the participating youth from throwing away trash in the future and secondly when other people see our action it will lead them to follow proper social norms or to join similar actions. In our garbage collecting activity we also included foreign students living and studying in Nyíregyháza. It also helped the dissemination, that there was serious media attention surrounding the event and the vice-mayor of Nyíregyháza payed a visit to it.'
          }
        }
      },
      hu: {
        translation: {
          copy:{
            clipboard: 'A link vágólapra lett másolva'
          },
          news: {
            title: "Hírek:",
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },
          about: {
            title: 'Rólunk:',
            first_paragraph: 'Programunkban szeretnénk elérni, hogy 3 város fiataljai összefogjanak és egy olyan online és offline kampányt indítsanak el a környezetvédelem és egyúttal demokratikus helyi közélet érdekében, mely alapján alapvető szemléletváltást tudunk elérni.Látjuk és tapasztaljuk, hogy a fiatalok fogékonyak a környezetvédelem iránt, szeretnének sokkal többet tenni ezért. Ezt szeretnénk 3 országban generálni a projektet, mely révén nem csak a 13-30 éves korcsoportban, hanem helyben szélesrétegeknél is változást tudunk elérni. A program alapját az adta, hogy Eco-democracy néven 5 ország fiataljai egy duplanemzetközi ifjúsági cserén találkoztak az olaszországi Sassariban illetve Nyíregyházán és ezen program alkalmával fogalmazódott meg 3 résztvevő szervezetben a továbblépés lehetősége.',
            second_paragraph: 'Láttuk és megtapasztaltuk, hogy a környezetvédelemért helyben igen sokat lehet tenni és ennek egyik legfőbb szelete, ha alapvető szemléletformálást tudunk eszközölni, hiszen ez mindennek az alapja. Mindkét cserén voltak önkéntes napok és ezeken mindkét országban megtapasztalhattuk, hogy az emberek sokszor nem figyelnek oda a környezetükre, olyan tárgyakkal szennyezik a környezetet, melyek lebomlása gyakorlatilag nem is valósul meg.',
            third_paragraph: 'A Nyíregyházi Diák-polgármesteri Iroda rendszeresen végez szemétgyűjtő akciókat, melyeken azt tapasztalja a városban, hogy a 3 legtöbb szemét a cigarettacsikk, az alumínium doboz és a műanyag flakon, de hasonlókat tapasztalhattunk meg Olaszországban egy tengerparti szakasz megtisztítása alkalmával is. Azt is látjuk és tapasztaljuk, hogy a környezetvédelem egyre inkább a mindennapok részévé válik, de sok esetben csak a szavak szintjén. Erre szeretne reflektálni a projektünk, melyben a 3 városban szemléletváltó kampányokat indítanánk el, természetesen a helyi döntéshozókat is bevonva.',
            fourth_paragraph: 'Programsorozatunknak 3 egymásra épülő fő része lenne: első körben egy közös kampányt indítanánk, melyben felhívnánk a figyelmet arra, hogy a helyben élők ne szemeteljenek, a környezetüket óvják meg. A sorozat második lépéseként hasonló akciókra hívnánk immáron nem csak a városok fiatal közösségeit, hanem egy szélesebb célcsoportot szólítanánk meg, végezetül pedig a jövőbe mutató akciókat indítanánk el, melyben lennének fásítási, füvesítési, közösségi kert kialakítási programok, szemétszedések.',
            fifth_paragraph: 'Így nem csak a környezettudatosságot tudnánk erősíteni, hanem a közösségeket is fejleszteni lehetne, közösen, mindezt 3 ország 3 városában. Nemzetközi szinten terjeszteni fogjuk az újrahasznosítás és a fenntartható fejlődés ötletét a környezet megóvása érdekében, ezzel segítve a természetet és a bolygót, hogy regenerálhatja önmagát. Mindezt azzal érjük el, hogy apró lépésekkel megváltoztatjuk a fiatalok gondolkodását, hogy csak azt vegyék el a természettől, amire szükségük van és amit lehet hasznosítsanak újra.',
            sixth_paragraph: 'A figyelem felkeltő aktivitások (Flash-mobok, civil szervezetlátogatások, otthoni munka, workshop a helyiekkel, kiállítás és aukció) során mindig kitérünk majd arra, hogy a pályázat egy európai összefogás eredménye és az Európai Unió finanszírozta. A projekt végén a partnerszervezetek és a közösségük közötti kapcsolat erősebb lesz mint valaha. A közösségek szorosabb kapcsolatba kerülnek a helyi szervezetekkel és intézményekkel, ami megkönnyíti majd újabb és újabb a közösség számára fontos események megvalósítását. A közösség ráébred majd, hogy van más módja is a hulladékok kezelésének, mint eldobni azokat a természetbe.',
            seventh_paragraph: 'A döntéshozókat könnyű bevonni ilyen és hasonló projektekbe, egyrészt mert megtapasztalhattuk a korábbi dupla csere alkalmával, hogy mindhárom városban nyitottan állnak a kérdéshez, másrészt mert olyan programot dolgoztunk ki, melynek a döntéshozókra nézve nem járnak anyagi kiadásokkal, hiszen a szemléletformáló kampányok vagy az akciók nem, vagy csak nagyon kevés anyagi forrást igényelnek a döntéshozóktól, ami kifejezetten előnyös a program megvalósítása és annak sikeressége szempontjából.',
            goal: 'A pályázatunk céljai:',
            first_ul: 'A fiatalokat tudatos és tettre kész gondolkodásmódra serkentjük.',
            second_ul: 'Lehetőséget biztosítunk számukra, hogy jó példákat cserélhessenek, új technikákat sajátítsanak el és közösen tanulhassanak egy nemzetközi környezetben.',
            third_ul: ' Hogy támogassuk az interkulturális tanulást',
            fourth_ul: 'Hogy fejlesszük a magabiztosságot és az önértékelés képességét non-formális oktatási módszereket használva.',
            fifth_ul: 'Környezettudatos és demokratikus értékrendekkel rendelkező közösségek kialakítás',
            sixth_ul: 'Szemléletformálás annak érdekében, hogy minél kevesebb környezeti károsodás legyen',
            seventh_ul: 'Döntéshozók aktív becsatornázása a célok elérése érdekében, együttműködés és közös gondolkodás a fiatalok és a döntéshozók között a környezetünk védelme érdekében'
          },
          navbar: {
            home: 'Kezdőlap',
            about: 'Rólunk',
            news: 'Hírek',
            gallery: 'Galéria'
          },
            workshop: {
                date_first: '2023. MÁRCIUS 31. – ÁPRILIS 3, | KROSNO, LENGYELORSZÁG',
                date_second: '2023. JÚNIUS 17-21., | MILCOVENI, ROMÁNIA',
                date_third: '2023. JÚLIUS 24., | NYÍREGYHÁZA',
                second: 'Második műhelyfoglalkozás',
                first: 'Első műhelyfoglalkozás',
                third: 'Környezetvédelmi kampány, szemétszedés',
                second_text: 'Nagy várakozásokkal telve indultunk neki második műhelyfoglalkozásunknak, melynek helyszíne a szerb határhoz közel eső Milcoveni volt, ahol épp az érkezésünk napján adtak ki vörös riasztást az áradások miatt. Ennek ellenére mindenki rendben és épségben megérkezett, így a jégtörést követően áttekintettük a projektet, az addig megbeszélteket. Az első műhelyfoglalkozáshoz képest minimális személyes változások is voltak, így őket segítve és informálva beszéltük át, hogy hogyan áll a projekt. Egy rövid selfbranding előadásra is sort kerítettünk. A második napon áttekintettük egy kommunikációs kampány részleteit, előadást hallgattunk meg egy jól működő koncentrált kampányról, melynek lényege az, hogy a lehető legtöbb platformon jelen legyünk. Véglegesítettük az első műhely arculatai elemeit, azokat digitalizáltuk. Felállítottunk csoportokat, akik az egyes kommunikációs kampány fázisait előállítják és ellenőrzik: egy honlap, egy instagram és facebook, egy tiktok és egy fordító munkacsoport jött létre. A munkacsoportok bemutatták a felületeket, ahol és ahogyan megjelenni szeretnének, a gyakoriságot, a színvilágot. A résztvevők elvették azt, hogy a kampányban grafikus elemeket használjanak, így az egyszerűbb fotós megjelenések mellett tették le a voksukat. Este nemzetközi est mellett a városok bemutatták kultúrájuk mellett a gasztronómiájukat is. A harmadik napon a kommunikációs kampány részletes kidolgozásra fordítottuk az időt, sok-sok vitával fűszerezve azt. Pontos forgatókönyvet fogadtunk el a megjelenésekre, legyen az insta vagy tiktok. Határidőt határoztunk meg a honlap elkészítésére, meghatároztuk a megjelenések számát, a fordítók határidejét. A munkacsoportok bemutatták részletesen résztvevőknek ezt, akik szintén véleményezhették azokat, ezzel is újabb vitákat generálva. Este egy feledhetetlen táncos estben volt részünk. A negyedik nap délelőttjén Resicabányát látogattuk meg, ahol felmásztunk a várost ölelő hegyre. Megtapasztalhattuk a város környezetvédelmi irányait, a szelektív hulladékgyűjtést, a természet és az épített közeg összefonódását. Strukturált párbeszéd révén megismerhettük a város környezetvédelmi törekvéseit. Az ötödik napon értékeltük a teljes műhelyfoglalkozást. Meghatároztuk a következő időszak eseményeit, átvettük és átismételtük a munkacsoportok feladatait. Mindhárom városban legalább 2-2 környezetvédelemre felhívó eseményt fogunk tartani (szemétszedés, faültetés és hasonlók) lehetőség szerint döntéshozók bevonásával.',
                first_text: 'Műhelyfoglalkozásunkat a festői lengyelországi kisvárosban, Krosnoban tartottuk, ahol egy galériának is helyet adó workshop helyszínt sikerült találnunk. Az érkezést követően jégtörést végeztünk, mindezt névtanulós játékokkal, ezzel sikerült jó hangulatot teremtenünk már az esemény elején. Ezt követően az Erasmus+ lehetőségeiről és a Youthpass-ról esett szó, valamint a tanulási eredményekről. Egy rövid szünetet követően megismerkedhettünk a projekt céljaival, eseményeivel, kimeneti eredményeivel egy előadás keretében. A második napon a reggelit követően egy vitával indítottuk a napot, amiben a környezetvédelemről általánosságban volt szó, majd a délelőtt további részében helyi döntéshozókkal találkoztunk, illetve egy előadást hallgattunk meg a helyi hulladékgyűjtésről és annak igen innovatív felhasználásáról, ugyanis egyrészt legalább 6-7 különböző szelektív hulladékgyűjtés folyik a városban, másrészt a keletkezett szemét nagy részét helyben elégetik, amivel a helyi közintézmények hő ellátását nagyrészt biztosítani is tudják. Az előadóknak kérdéseket tettünk fel, akik készséggel válaszoltak mindenre. A kávészünet után csoportmunkák következtek, melyben bemutattuk városainkat környezetvédelmi szempontból, majd egy mini SWOT analízist készített minden város csoportja, természetesen környezetvédelmi szempontok alapján. Az ebédet követően környezetvédelmi gerillaakciókról vitáztunk; meddig lehet elmenni, mi fér még bele, felhívja-e a társadalom figyelmét ez? A vitát követően ismét a csoportmunkáé volt a főszerep, melyben elkészítettük ideális településünket környezetvédelmi szempontok alapján, melyeket természetesen be is mutattunk egymásnak. A napot este egy közös interkulturális esttel zártuk, sok-sok néptánccal és dallal. A harmadik napon nem-formális környezetvédelmi gyakorlatokat végeztünk, majd a kommunikációs alapfogalmak kerültek terítékre. Megvitattuk azokat a platformokat, melyek projektünk esetében szóba jöhetnek (honlap, facebook, instagram, tiktok) és elkészítettünk csoportmunkában néhány „helyi újságot”. A délután folyamán elkezdtük megtervezni az arculati elemeket csoportmunkában szintén, így lett logója a projektnek. Elkezdtük tervezni a honlapot és annak felépítését. Este egy közös bowlingozáson vettünk részt. A negyedik nap a felelősök kijelölésével, a részfeladatok átbeszélésével folytatódott, majd szó esett az eredmények terjesztéséről is. A reflexiók és az értékelést követően búcsúztunk el egymástól azzal, hogy hamarosan találkozunk ismét, immár Romániában.',
                third_text: 'Részvételi projektünkben szeretnénk nem csak az online térben kampányt folytatni, hanemtársadalmi változásokat elérni azoknál is, akikhez nem, vagy kevésbé jutunk el. Ennek egyiklegfontosabb színtere, ha tükröt mutatunk és például szemétszedést szervezünk, amely egyrészt arésztvevő fiatalokat is arra ösztönzi, hogy a jövőben ne szemeteljenek, másrészt az akciót látókat isráirányítja arra, hogy vagy kövessék a megfelelő társadalmi normákat vagy maguk is csatlakozzanakbe hasonló akciókba. A szemétszedési akcióba bevontuk a Nyíregyházán tanuló és élő külföldihallgatókat is. Külön segíti a disszeminációt, hogy az eseményt igen komoly médiaérdeklődés övezte,valamint hogy az eseményen tiszteletét tette Nyíregyháza Megyei Jogú Város alpolgármestere is.',

            }
        }
      },
      ro: {
        translation: {
          copy: {
            clipboard: 'Linkul a fost copiat în clipboard'
          },

          news: {
            title: 'Știri:',
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },
          about: {
            title: 'Despre noi:',
            first_paragraph: 'În programul nostru, dorim ca tinerii din 3 orașe să se unească într-o campanie online și offline pentru mediul înconjurător și protecția sa și în același timp pentru viața democratică locală, pe baza căreia putem atinge o schimbare fundamentală de atitudine. Observăm că tinerii sunt receptivi la ideea de protecție a mediului înconjurător și doresc să facă mai multe în legătură cu asta. Dorim să generăm proiectul acesta în 3 țări, prin care putem atinge schimbări nu doar în grupurile de oameni de 13-30 de ani, dar și local într-un strat mai larg de oameni.  Programul e bazat pe faptul că, sub numele de Eco-democracy, tineri din 5 țări s-au întâlnit într-un youth exchange internațional dublu, în Italia, în Sassari și Nyíregyháza, și cu ocazia acestui program, posibilitatea unei cooperări în continuare a fost formulată în 3 dintre organizațiile participante.',
            second_paragraph: 'Am văzut și experimentat că se pot face multe pentru protecția mediului la nivel local, și unul dintre cele mai importante aspecte este dacă putem implementa formare de atitudine de bază, căci asta e baza la toate.  În ambele exchange-uri au fost întreținute activități de voluntariat, în ambele țări am putut experimenta cum oamenii de obicei sunt nepăsători față de mediu, poluându-l cu obiecte nedegradabile.',
            third_paragraph: 'Oficiul Președintelui Studențesc din Nyíregyháza întreține campanii de colectare a gunoiului în care se găsește că cele 3 cele mai comune tipuri din oraș sunt chiștoace, doze de aluminiu și sticle de plastic, dar am descoperit lucruri similare când curățam o bucată de plajă în Italia. De asemenea, vedem că protecția mediului devine o parte cotidiană a vieții, însă, în multe cazuri, doar la nivelul cuvintelor. Acesta este aspectul asupra căruia proiectul nostru vrea să reflecteze, în care vom lansa campanii de schimbare a atitudinii în 3 orașe, evident, implicând și administratori locali.',
            fourth_paragraph: 'Vor fi 3 părți principale ale programului nostru: în prima rundă, vom lansa o campanie unită în care atragem atenția la faptul că rezidenții locali nu ar trebui să arunce pe jos, ci să protejeze mediul. Ca al doilea pas în serie, vom invita la acțiuni similare nu numai tineretului orașelor, dar și grupuri mai largi, și finalmente vomlansa acțiuni care indică na viitor care vor include plantare de copaci, înverzire, programe de dezvoltare de grădini comunutare și colectarea deșeurilor.',
            fifth_paragraph: 'În felul acesta, vom putea nu doar întări conștiința de mediu, dar și să dezvoltăm comunitățile împreună, toate în e orașe a 3 țări. Internațional, vom răspândi ideea de reciclare și de dezvoltare sustenabilă ca să apărăm mediul, ajutând natura și planeta să se regenereze. Obținem toate astea prin schimjarea mentalității tinerilor cu pași mici, astfel încât să ia din natură doar ce le trebuie și să recicleze ce se poate.',
            sixth_paragraph: 'În timpul activităților de captare a atenției( Flash-mobs, vizite NGO, lucru de acasă, ateliere cu localnicii, expoziții și licitații), vom menționa mereu că proiectul este rezultatul unei colaborări europene și finanțat de Uniunea Europeană. La finalul proiectului, relațiile dintre organizațiile partenere și comunitățile lor vor fi mai puternice ca niciodată. Comunitățile vor fi în contact apropiat cu instituțiile și organizațiile locale, care vor facilita implementarea a tot mai multor evenimente importante pentru comunitate. Comunitatea va realiza că existâ și alte căi de a administra deșeurile decât a le arunca în natură.',
            seventh_paragraph: 'Este ușor să implicăm administratori în astfel de proiecte, pe de-o parte, pentru că am experimentat pe durata "exchange-ului" trecut că sunt deschiși la întrebări în toate 3 orașele, și pe de-o alta, pentru că avem un program de dezvoltare care nu cere cheltuieli financiare pentru administratori, având în vedere că campaniile de schimbare de atitudine nu cer deloc, sau decât foarte puține resurse financiare de la aceștia, ceea ce este în special benefic în termeni de implementare a programului și succesului său.',
            goal: 'Ținta proiectului nostru este:',
            firtst_ul: 'De a încuraja tinerii să conștientizeze și să fie gata de acțiune',
            second_ul: 'Să îi procure cu oportunități de a face schimburi de exemple bune, să învețe tehnici noi și să învețe împreună într-un mediu internațional',
            third_ul: 'Să susțină învățarea interculturală',
            fourth_ul: 'Să dezvolte siguranță de sine și abilutatea de a lua decizii prin metode de educare neformale',
            fifth_ul: 'Stabilirea de comunități conștiente de mediu și cu valori democratice',
            sixth_ul: 'Formare a atitudinii pentru a cauza cât mai puțină distrugere a mediului',
            seventh_ul: 'Channeling activ al administratorilor pentru a atinge scopuri, cooperarea și gândire împreună între tineri și administrație pentru a proteja mediul nostru.'
          },

          navbar: {
            home: 'Acasă',
            about: 'Despre',
            news: 'Știri',
            gallery: 'Galerie'
            
          },

            workshop: {
              date_first: '2023',
              date_second: '2023',
              date_third: '2023. 24 iulie, | Nyíregyháza,',
              first: 'lorem',
              second: 'lorem',
              third: 'Campanie de protecția mediului, colectare a deșeurilor',
              second_text: 'lorem',
              first_text: 'lorem',
              third_text: 'În proiectul nostru încercăm să evităm să fim activi doar campaniile online și optăm la facerea de schimbări sociale printre oameni la care nu putem ajunge pe internet. Unul dintre cele mai bune moduri de a face asta să se întâmple este prin setarea unui exemplu cu colectarea deșeurilor pe care o facem. Asta în primul rând descurajează tinerii din a participa la aruncarea gunoiului în viitor și, în al doilea rând, când alții vor vedea acțiunile noastre îi va face să urmeze norme sociale cum trebuie și să se alăture unor acțiuni similare. În activitățile noastre de colectare a deșeurilor includem și studenți străini care trăiesc și studiază în Nyíregyháza. A ajutat foarte mult și diseminarea, faptul că a fost o mediatizare serioasă în jurul evenimentului și viceprimarul Nyíregyháza a vizitat'
            }

        }
      },

      pl: {
        translation: {
          copy: {
            clipboard: 'Link został skopiowany do schowka.'
          },

          news: {
            title: 'Aktualności:',
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },

          about: {
            title: ':',
            first_paragraph: '.',
            second_paragraph: '.',
            third_paragraph: '.',
            fourth_paragraph: '.',
            fifth_paragraph: '.',
            sixth_paragraph: '.',
            seventh_paragraph: '.',
            goal: '.',
            first_ul: '.',
            second_ul: '.',
            third_ul: '.',
            fourth_ul: '.',
            fifth_ul: '.',
            sixth_ul: '.',
            seventh_ul: '.'
          },

          navbar: {
            home: 'Strona główna',
            about: 'O nas',
            news: 'Aktualności',
            gallery: 'Galeria'
          },

          workshop: {
            date_first: '2023',
            date_second: '2023',
            date_third: '24 lipiec 2023, | Nyíregyháza',
            first: 'polish first',
            second: 'polish second',
            third: 'Kampania ochrony środowiska, zbieranie śmieci',
            second_text: 'polish second text',
            first_text: 'polish first text',
            third_text: 'W ramach naszego projektu staramy się nie tylko prowadzić kampanie online, ale również dążyć do zmian społecznych wśród ludzi, do których nie możemy dotrzeć przez internet. Jednym z najlepszych sposobów, żeby zrealizować ten cel jest dawanie przykładu podczas naszej akcji zbierania śmieci. Po pierwsze, zniechęca to młodzież, która uczestniczyła w tym wydarzeniu do śmiecenia w przyszłości, a po drugie, gdy inni ludzie zobaczą nasze działania, skłoni ich to do przestrzegania właściwych norm społecznych lub do dołączenia do podobnych przedsięwzięć. W naszej akcji zbierania śmieci wzięli również udział zagraniczni studenci mieszkający i studiujący w Nyíregyházie. Pomocne w nagłośnieniu naszych działań było także to, że wydarzenie spotkało się z poważnym zainteresowaniem mediów, a także wiceburmistrza Nyíregyházy.'
          }
        }
      }
    }
  });

export default i18n;