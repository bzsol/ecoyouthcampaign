import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

function Home() {

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


    return (
        <div id="main" className="App">
            <div className="flex flex-col">
                <Hero></Hero>
                <Navbar></Navbar>
                <Section date="2023. június 17-21., Milcoveni, Románia" title="Második műhelyfoglalkozás" text="Második műhelyfoglalkozásunkon a kommunikációé volt a főszerep. Felállítottuk a csoportokat, akik a tartalmakat tervezik, előkészítik, elkészítik. Csináltunk videós tartalmakat, leosztottuk a feladatokat, hogy kik fognak fordítani, kik kezelik és frissítik az instagram tartalmakat. A csoport végül arról döntött, hogy képi ábrázolást helyezi előtérbe a kampányban és nem a grafikus elemeket. Minden este nemzetközi esteket tartottunk, de eljutottunk egy felejthetetlen utazással Resicabányára is, hegymászással egybekötve" photo={second}></Section>
                <Section date="2023. március 31. – április 3, Krosno, Lengyelország" title="Első műhelyfoglalkozás" text="Műhelyfoglalkozásunk első részében jégtörést tartottunk, majd az egyes városok résztvevői bemutatták településüket környezetvédelmi szempontból. Találkoztunk helyi képviselőkkel illetve egy helyi környezetvédelmi vállalkozással, majd pedig a különböző környezetvédelmi problémákat szedtük össze. Leraktuk a kommunikációs kampányunk alapjait, terveztünk logót és elkezdtük a honlap vizuális részét megtervezni. Természetesen nemzetközi estekre is sor került." photo={first}></Section>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;