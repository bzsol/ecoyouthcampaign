import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const sixth = [
  { src: '/sixth/1.jpg', alt: '1'},
  { src: '/sixth/2.jpg', alt: '2'},
  { src: '/sixth/3.jpg', alt: '3'},
  { src: '/sixth/4.jpg', alt: '4'}
]

function SixthWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/sixth-workshop" date={t('workshop.date_sixth')}  title={t('workshop.sixth')} text={t('workshop.sixth_text')}  photo={sixth}></Section>
      </div>
    </div>
  );
}

export default SixthWorkshop;
