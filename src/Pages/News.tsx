import Feed from "../components/Feed"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useTranslation } from 'react-i18next';

function News() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <Feed title={t('news.title')} text={t('news.text')}></Feed>
      </div>
    </div>
  )
}

export default News