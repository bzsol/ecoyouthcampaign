import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useTranslation } from 'react-i18next';
import NewsFeed from "../components/NewsFeed";

function News() {
  const { t } = useTranslation();
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
        <NewsFeed title={t('news.title')} text={t('news.text')} />
      </div>
    </div>
  )
}

export default News