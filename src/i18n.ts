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
            second_text: 'In our second workshop, communication took the spotlight. We formed groups responsible for planning, preparing, and creating content. We produced video content and delegated tasks, determining who would translate and manage/update Instagram content. Ultimately, the group decided to prioritize visual representation in the campaign rather than graphic elements. We hosted international events every evening and even had an unforgettable journey to Resicabánya, combined with mountain climbing.',
            first_text: 'In the first part of our workshop, we conducted an icebreaker activity, and then participants from different cities presented their towns from an environmental perspective. We had meetings with local representatives and a local environmental company. Subsequently, we collected various environmental issues. We laid the foundations for our communication campaign, designed a logo, and began planning the visual aspects of the website. Of course, international evenings were also held.'
          }
        }
      },
      hu: {
        translation: {
          navbar: {
            home: 'Kerzdőlap',
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
          first: 'Első műhelyfoglalkozás',
          second: 'Második műhelyfoglalkozás'
        }
      }
    }
  });

export default i18n;