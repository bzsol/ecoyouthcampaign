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
          news: {
            title: "News:",
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },
          about: {
            title: "About:",
            text: "In our program, we want the young people of 3 cities to come together and launch an online and offline campaign for the sake of environmental protection and at the same time local democratic public life, on the basis of which we can achieve a fundamental change of attitude. We see and experience that young people are receptive to environmental protection and want to do much more for it. We want to generate this project in 3 countries, through which we can achieve change not only in the 13-30-year-old age group, but also locally among broad strata locally. The program was based on the fact that under the name of Eco-democracy, young people from 5 countries met in a double international youth exchange in Italy, in Sassari and Nyíregyháza , and on the occasion of this program, the possibility of further cooperation was formulated in the 3 participating organizations. We have seen and experienced that a lot can be done for environmental protection locally, and one of the most important parts of this is if we can implement basic attitude formation, since this is the basis of everything. There were activities related to volunteering on both exchanges, in both countries we could experience that people often do not pay attention to their environment, they pollute the environment with objects which do not decompose or need a long time to do so. The Student Mayor's Office of Nyíregyháza regularly carries out garbage collection campaigns, during which it finds that the 3 most common types of garbage in the city are cigarette butts, aluminum cans and plastic bottles, but we also experienced similar things when cleaning a stretch of beach in Italy. We also see and experience that environmental protection is increasingly becoming a part of everyday life, but in many cases only at the level of words. This is what our project would like to reflect on, in which we would launch attitude-changing campaigns in the 3 cities, naturally involving local decision-makers as well. There would be 3 main parts of our program series: in the first round, we would launch a joint campaign in which we would draw attention to the fact that local residents should not litter and protect their environment. As the second step in the series, we would now invite similar actions not only to the young communities of the cities, but also to a wider target group, and finally, we would launch actions pointing to the future, which would include tree planting, green covering, community garden development programs, and garbage collection. In this way, we could not only strengthen environmental awareness, but also develop communities, together, all in 3 cities of 3 countries. Internationally, we will spread the idea of recycling and sustainable development to protect the environment, helping nature and the planet to regenerate itself. We achieve all this by changing the thinking of young people with small steps, so that they only take from nature what they need and recycle what can be. During the attention-grabbing activities (Flash-mobs, NGO visits, work at home, workshops with locals, exhibition and auction), we will always mention that the project is the result of a European collaboration and was financed by the European Union. At the end of the project, the relationship between the partner organizations and their community will be stronger than ever. Communities will be in closer contact with local organizations and institutions, which will facilitate the implementation of more and more important events for the community. The community will realize that there are other ways to manage waste than throwing it into nature. It is easy to involve the decision-makers in such and similar projects, on the one hand, because we experienced during the previous double exchange that they are open to the question in all three cities, and on the other hand, because we have developed a program that does not entail financial expenses for the decision-makers, since the attitude-shaping campaigns or promotions are not, or they only require very few financial resources from the decision-makers, which is especially beneficial in terms of the implementation of the program and its success. The goals of our project: - To encourage young people to think consciously and ready for action. - To provide them with the opportunity to exchange good examples, learn new techniques and learn together in an international environment. - To support intercultural learning - To develop self-confidence and the ability to self-assess using non-formal education methods. - Creating communities with environmentally conscious and democratic values - Attitude formation in order to cause as little environmental damage as possible - Active channeling of decision-makers in order to achieve goals, cooperation and joint thinking between young people and decision-makers in order to protect our environment"
          },
          navbar: {
            home: 'Home',
            about: 'About Us',
            news: 'News',
            gallery: 'Gallery'
          },
          workshop: {
            date_first: '2023. JUNE 17-21. | MILCOVENI, ROMANIA',
            date_second: '2023. MARCH 31. – APR 3 | KROSNO, POLAND',
            first: 'First workshop',
            second: 'Second workshop',
            second_text: 'In our second workshop, the main role was the communication. We set up the groups who plan, prepare and take care of the content. We made videos, divided up the tasks of who would translate, who would manage and update the Instagram content. In the end, the group decided to prioritize visual representation in the campaign and not graphic elements. We held international evenings every night, but we also went on an unforgettable trip to Reșița, combined with mountain climbing.',
            first_text: 'In the first part of our workshop, we broke the ice, and then the participants from each city presented their settlements from an environmental protection point of view. We met with local representatives and a local environmental protection company, and then we collected the various environmental protection problems. We laid the foundations of our communication campaign, designed a logo and started designing the visual part of the website. Of course, international evenings also took place.'
          }
        }
      },
      hu: {
        translation: {
          news: {
            title: "Hírek:",
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
          },
          about: {
            title: "Rólunk:",
            text: "Programunkban szeretnénk elérni, hogy 3 város fiataljai összefogjanak és egy olyan online és offline kampányt indítsanak ela környezetvédelem és egyúttal demokratikus helyi közélet érdekében, mely alapján alapvető szemléletváltást tudunk elérni.Látjuk és tapasztaljuk, hogy a fiatalok fogékonyak a környezetvédelem iránt, szeretnének sokkal többet tenni ezért. Eztszeretnénk 3 országban generálni a projektet, mely révén nem csak a 13-30 éves korcsoportban, hanem helyben szélesrétegeknél is változást tudunk elérni. A program alapját az adta, hogy Eco-democracy néven 5 ország fiataljai egy duplanemzetközi ifjúsági cserén találkoztak az olaszországi Sassariban illetve Nyíregyházán és ezen program alkalmávalfogalmazódott meg 3 résztvevő szervezetben a továbblépés lehetősége. Láttuk és megtapasztaltuk, hogy akörnyezetvédelemért helyben igen sokat lehet tenni és ennek egyik legfőbb szelete, ha alapvető szemléletformálást tudunkeszközölni, hiszen ez mindennek az alapja. Mindkét cserén voltak önkéntes napok és ezeken mindkét országbanmegtapasztalhattuk, hogy az emberek sokszor nem figyelnek oda a környezetükre, olyan tárgyakkal szennyezik akörnyezetet, melyek lebomlása gyakorlatilag nem is valósul meg. A Nyíregyházi Diák-polgármesteri Iroda rendszeresenvégez szemétgyűjtő akciókat, melyeken azt tapasztalja a városban, hogy a 3 legtöbb szemét a cigarettacsikk, az alumíniumdoboz és a műanyag flakon, de hasonlókat tapasztalhattunk meg Olaszországban egy tengerparti szakasz megtisztításaalkalmával is. Azt is látjuk és tapasztaljuk, hogy a környezetvédelem egyre inkább a mindennapok részévé válik, de sokesetben csak a szavak szintjén. Erre szeretne reflektálni a projektünk, melyben a 3 városban szemléletváltó kampányokatindítanánk el, természetesen a helyi döntéshozókat is bevonva. Programsorozatunknak 3 egymásra épülő fő része lenne:első körben egy közös kampányt indítanánk, melyben felhívnánk a figyelmet arra, hogy a helyben élők ne szemeteljenek, akörnyezetüket óvják meg. A sorozat második lépéseként hasonló akciókra hívnánk immáron nem csak a városok fiatalközösségeit, hanem egy szélesebb célcsoportot szólítanánk meg, végezetül pedig a jövőbe mutató akciókat indítanánk el,melyben lennének fásítási, füvesítési, közösségi kert kialakítási programok, szemétszedések. Így nem csak akörnyezettudatosságot tudnánk erősíteni, hanem a közösségeket is fejleszteni lehetne, közösen, mindezt 3 ország 3városában. Nemzetközi szinten terjeszteni fogjuk az újrahasznosítás és a fenntartható fejlődés ötletét a környezetmegóvása érdekében, ezzel segítve a természetet és a bolygót, hogy regenerálhatja önmagát. Mindezt azzal érjük el, hogyapró lépésekkel megváltoztatjuk a fiatalok gondolkodását, hogy csak azt vegyék el a természettől, amire szükségük van ésamit lehet hasznosítsanak újra. A figyelem felkeltő aktivitások (Flash-mobok, civil szervezetlátogatások, otthoni munka,workshop a helyiekkel, kiállítás és aukció) során mindig kitérünk majd arra, hogy a pályázat egy európai összefogáseredménye és az Európai Unió finanszírozta. A projekt végén a partnerszervezetek és a közösségük közötti kapcsolaterősebb lesz mint valaha. A közösségek szorosabb kapcsolatba kerülnek a helyi szervezetekkel és intézményekkel, amimegkönnyíti majd újabb és újabb a közösség számára fontos események megvalósítását. A közösség ráébred majd, hogyvan más módja is a hulladékok kezelésének, mint eldobni azokat a természetbe.A döntéshozókat könnyű bevonni ilyen és hasonló projektekbe, egyrészt mert megtapasztalhattuk a korábbi dupla cserealkalmával, hogy mindhárom városban nyitottan állnak a kérdéshez, másrészt mert olyan programot dolgoztunk ki, melyneka döntéshozókra nézve nem járnak anyagi kiadásokkal, hiszen a szemléletformáló kampányok vagy az akciók nem, vagycsak nagyon kevés anyagi forrást igényelnek a döntéshozóktól, ami kifejezetten előnyös a program megvalósítása és annaksikeressége szempontjából.A pályázatunk céljai:- A fiatalokat tudatos és tettre kész gondolkodásmódra serkentjük.- Lehetőséget biztosítunk számukra, hogy jó példákat cserélhessenek, új technikákat sajátítsanak el és közösentanulhassanak egy nemzetközi környezetben.- Hogy támogassuk az interkulturális tanulást- Hogy fejlesszük a magabiztosságot és az önértékelés képességét non-formális oktatási módszereket használva.- Környezettudatos és demokratikus értékrendekkel rendelkező közösségek kialakítás- Szemléletformálás annak érdekében, hogy minél kevesebb környezeti károsodás legyen- Döntéshozók aktív becsatornázása a célok elérése érdekében, együttműködés és közös gondolkodás a fiatalok és adöntéshozók között a környezetünk védelme érdekében"
          },
          navbar: {
            home: 'Kezdőlap',
            about: 'Rólunk',
            news: 'Hírek',
            gallery: 'Galéria'
          },
            workshop: {
                date_first: '2023. JÚNIUS 17-21., MILCOVENI, ROMÁNIA',
                date_second: '2023. MÁRCIUS 31. – ÁPRILIS 3, KROSNO, LENGYELORSZÁG',
                first: 'Első műhelyfoglalkozás',
                second: 'Második műhelyfoglalkozás',
                second_text: 'Második műhelyfoglalkozásunkon a kommunikációé volt a főszerep. Felállítottuk a csoportokat, akik a tartalmakat tervezik, előkészítik, elkészítik. Csináltunk videós tartalmakat, leosztottuk a feladatokat, hogy kik fognak fordítani, kik kezelik és frissítik az instagram tartalmakat. A csoport végül arról döntött, hogy képi ábrázolást helyezi előtérbe a kampányban és nem a grafikus elemeket. Minden este nemzetközi esteket tartottunk, de eljutottunk egy felejthetetlen utazással Resicabányára is, hegymászással egybekötve',
                first_text: 'Műhelyfoglalkozásunk első részében jégtörést tartottunk, majd az egyes városok résztvevői bemutatták településüket környezetvédelmi szempontból. Találkoztunk helyi képviselőkkel illetve egy helyi környezetvédelmi vállalkozással, majd pedig a különböző környezetvédelmi problémákat szedtük össze. Leraktuk a kommunikációs kampányunk alapjait, terveztünk logót és elkezdtük a honlap vizuális részét megtervezni. Természetesen nemzetközi estekre is sor került.'

            }
        }
      },
      ro: {
        translation: {

        }
      }
    }
  });

export default i18n;