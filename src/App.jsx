import { Banner } from "./components/Organisms/Banner/Banner"
import { Footer } from "./components/Organisms/Footer/Footer"
import { Header } from "./components/Organisms/Header/Header"
import { Login } from "./components/Organisms/Login/Login"
import { Brands } from "./components/Molecules/Brands/Brands"
import { Newsletter } from "./components/Molecules/Newsletter/Newsletter"
import { Intro } from "./components/Molecules/Intro/Intro"
import { Publi } from "./components/Molecules/Publi/Publi"
import { Recommended } from "./components/Molecules/Recommended/Recommended"
import { Slider } from "./components/Molecules/Slider/Slider"
import { GlobalStyles } from "./Global"
import { Theme } from "./Theme"
import { Conditions } from "./components/Molecules/Conditions/Conditions"
import { Paint } from "./components/Molecules/Paint/Paint"



const App = () => {
  return (
    <Theme>
      <>
        <GlobalStyles/>
        <Login/>
        <Header/>
        <Banner/>
        <Intro/>

        <Brands/>
        <Recommended/>
        <Publi/>
        <Paint/>
        <Slider/>
        <Newsletter/>
        <Conditions/>
        <Footer/>
      </>
    </Theme>
  )
}

export default App