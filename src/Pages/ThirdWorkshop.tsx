import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useTranslation } from 'react-i18next';

const third = [
    { src: '/third/1.jpg', alt: '1' },
    { src: '/third/2.jpg', alt: '2' },
    { src: '/third/3.jpg', alt: '3' },
    { src: '/third/4.jpg', alt: '4' },
]

function ThirdWorkshop() {
    const { t } = useTranslation();
    return (
        <div id="main" className="App">
            <div className="flex flex-col">
                <Hero></Hero>
                <Navbar></Navbar>
                <Section url="/third-workshop" date={t('workshop.date_third')} title={t('workshop.third')} text={t('workshop.third_text')} photo={third}></Section>
            </div>
        </div>
    )
}

export default ThirdWorkshop