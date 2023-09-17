
import { useTranslation } from 'react-i18next';
import Feed from '../components/Feed'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function About() {
  const { t } = useTranslation();
    return (
        <div id="main" className="App">
          <div className="flex flex-col">
            <Hero></Hero>
            <Navbar></Navbar>
            <Feed title={t('about.title')} text={t('about.text')}></Feed>
          </div>
        </div>
      )
}

export default About