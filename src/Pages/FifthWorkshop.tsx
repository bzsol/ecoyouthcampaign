import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const fifth = [
  { src: '/fifth/1.jpg', alt: '1'},
  { src: '/fifth/2.jpg', alt: '2'},
  { src: '/fifth/3.jpg', alt: '3'},
  { src: '/fifth/4.jpg', alt: '4'}
]

function FirstWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/fifth-workshop" date={t('workshop.date_fifth')}  title={t('workshop.fifth')} text={t('workshop.fifth_text')}  photo={fifth}></Section>
      </div>
    </div>
  );
}

export default FirstWorkshop;
