import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation} from 'react-i18next';

const first = [
  { src: '/fourth/1.jpg', alt: '1'},
  { src: '/fourth/2.jpg', alt: '2'},
  { src: '/fourth/3.jpg', alt: '3'},
  { src: '/fourth/4.jpg', alt: '4'},
  {src: '/fourth/5.jpg', alt: '5'}
]

function FirstWorkshop() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Section url="/fourth-workshop" date={t('workshop.date_fourth')}  title={t('workshop.fourth')} text={t('workshop.fourth_text')}  photo={first}></Section>
      </div>
    </div>
  );
}

export default FirstWorkshop;
