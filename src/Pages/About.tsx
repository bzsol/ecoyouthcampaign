
import { useTranslation } from 'react-i18next';
import Feed from '../components/Feed'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'



function About() {
  const { t } = useTranslation();
  const ulist = [
    t('about.first_ul'),
    t('about.second_ul'),
    t('about.third_ul'),
    t('about.fourth_ul'),
    t('about.fifth_ul'),
    t('about.sixth_ul'),
    t('about.seventh_ul'),


]
    return (
        <div id="main" className="App">
          <div className="flex flex-col">
            <Hero></Hero>
            <Navbar></Navbar>
            <Feed title={t('about.title')} first_paragraph={t('about.first_paragraph')} second_paragraph={t('about.second_paragraph')} third_paragraph={t('about.third_paragraph')} fourth_paragraph={t('about.fourth_paragraph')}  fifth_paragraph={t('about.fifth_paragraph')}  sixth_paragraph={t('about.sixth_paragraph')}  seventh_paragraph={t('about.seventh_paragraph')} goal={t('about.goal')} ulist={ulist}></Feed>
            <br></br>
          </div>
        </div>
      )
}

export default About