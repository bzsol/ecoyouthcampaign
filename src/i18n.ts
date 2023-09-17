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
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
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
            text: "Lorem dolores et et duo sea minim clita esse mazim diam sed no iusto lorem kasd praesent rebum. Voluptua amet eirmod. Invidunt lorem sea. Stet eum sanctus amet duo eirmod dolor sanctus ipsum. Feugiat nonumy sit diam ut no elit. Nihil lorem diam esse dolor mazim lorem sed vero at clita sadipscing dolore justo te no. In eu augue eos in facilisi magna. Sadipscing diam in accusam et dolore erat takimata illum amet ipsum. At duis illum nostrud diam vel voluptua consetetur sanctus et no quis et no delenit."
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