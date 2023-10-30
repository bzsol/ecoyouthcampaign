import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import { useTranslation} from 'react-i18next';


function Home() {
    const { t } = useTranslation();
    const first = [
        { src: '/first/1.jpg', alt: '1'},
        { src: '/first/2.jpg', alt: '2'},
        { src: '/first/3.jpg', alt: '3'},
        { src: '/first/4.jpg', alt: '4'},
        {src: '/first/5.jpg', alt: '5'}
      ]

      const second = [
        { src: '/second/1.jpg', alt: '1'},
        { src: '/second/2.jpg', alt: '2'},
        { src: '/second/3.jpg', alt: '3'},
        { src: '/second/4.jpg', alt: '4'},
        {src: '/second/5.jpg', alt: '5'}
      ]
      const third = [
        { src: '/third/1.jpg', alt: '1' },
        { src: '/third/2.jpg', alt: '2' },
        { src: '/third/3.jpg', alt: '3' },
        { src: '/third/4.jpg', alt: '4' },
    ]
    const fourth = [
        { src: '/fourth/1.jpg', alt: '1' },
        { src: '/fourth/2.jpg', alt: '2' },
        { src: '/fourth/3.jpg', alt: '3' },
        { src: '/fourth/4.jpg', alt: '4' },
    ]
    const fifth = [
        { src: '/fifth/1.jpg', alt: '1' },
        { src: '/fifth/2.jpg', alt: '2' },
        { src: '/fifth/3.jpg', alt: '3' },
        { src: '/fifth/4.jpg', alt: '4' },
    ]
    const sixth = [
        { src: '/sixth/1.jpg', alt: '1' },
        { src: '/sixth/2.jpg', alt: '2' },
        { src: '/sixth/3.jpg', alt: '3' },
        { src: '/sixth/4.jpg', alt: '4' },
    ]
    const seventh = [
        { src: '/seventh/1.jpg', alt: '1' },
        { src: '/seventh/2.jpg', alt: '2' },
        { src: '/seventh/3.jpg', alt: '3' },
        { src: '/seventh/4.jpg', alt: '4' },
        { src: '/seventh/5.jpg', alt: '5' },
        { src: '/seventh/6.jpg', alt: '6' },
        { src: '/seventh/7.jpg', alt: '7' }
    ]

    return (
        <div id="main" className="App">
            <div className="flex flex-col">
                <Hero></Hero>
                <Navbar></Navbar>
                <Section url="/seventh-workshop" date={t('workshop.date_seventh')} title={t('workshop.seventh')} text={t('workshop.seventh_text')} photo={seventh}></Section>
                <Section url="/sixth-workshop" date={t('workshop.date_sixth')} title={t('workshop.sixth')} text={t('workshop.sixth_text')} photo={sixth}></Section>
                <Section url="/fifth-workshop" date={t('workshop.date_fifth')} title={t('workshop.fifth')} text={t('workshop.fifth_text')} photo={fifth}></Section>
                <Section url="/fourth-workshop" date={t('workshop.date_fourth')} title={t('workshop.fourth')} text={t('workshop.fourth_text')} photo={fourth}></Section>
                <Section url="/third-workshop" date={t('workshop.date_third')} title={t('workshop.third')} text={t('workshop.third_text')} photo={third}></Section>
                <Section url="/second-workshop" date={t('workshop.date_second')}  title={t('workshop.second')} text={t('workshop.second_text')}  photo={second}></Section>
                <Section url="/first-workshop" date={t('workshop.date_first')}  title={t('workshop.first')} text={t('workshop.first_text')}  photo={first}></Section>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;