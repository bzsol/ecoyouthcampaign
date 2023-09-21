import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const second = [
    { src: '/second/1.jpg', alt: '1'},
    { src: '/second/2.jpg', alt: '2'},
    { src: '/second/3.jpg', alt: '3'},
    { src: '/second/4.jpg', alt: '4'},
    {src: '/second/5.jpg', alt: '5'}
  ]

function FirstWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/second-workshop" date={t('workshop.date_second')}  title={t('workshop.second')} text={t('workshop.second_text')}  photo={second}></Section>
      </div>
    </div>
  );
}

export default FirstWorkshop;
