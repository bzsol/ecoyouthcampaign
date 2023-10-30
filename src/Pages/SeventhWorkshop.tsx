import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const seventh = [
  { src: '/seventh/1.jpg', alt: '1'},
  { src: '/seventh/2.jpg', alt: '2'},
  { src: '/seventh/3.jpg', alt: '3'},
  { src: '/seventh/4.jpg', alt: '4'},
  { src: '/seventh/5.jpg', alt: '5'},
  { src: '/seventh/6.jpg', alt: '6'},
  { src: '/seventh/7.jpg', alt: '7'}
]

function SeventhWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/seventh-workshop" date={t('workshop.date_seventh')}  title={t('workshop.seventh')} text={t('workshop.seventh_text')}  photo={seventh}></Section>
      </div>
    </div>
  );
}

export default SeventhWorkshop;
