import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const first = [
  { src: '/first/1.jpg', alt: '1'},
  { src: '/first/2.jpg', alt: '2'},
  { src: '/first/3.jpg', alt: '3'},
  { src: '/first/4.jpg', alt: '4'},
  {src: '/first/5.jpg', alt: '5'}
]

function FirstWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/first-workshop" date={t('workshop.date_first')}  title={t('workshop.first')} text={t('workshop.first_text')}  photo={first}></Section>
      </div>
    </div>
  );
}

export default FirstWorkshop;
