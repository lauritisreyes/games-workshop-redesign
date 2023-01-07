import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Login } from "./components/Login/Login"
import { Brands } from "./components/Brands/Brands"
import { Newsletter } from "./components/Newsletter/Newsletter"
import { Intro } from "./components/Intro/Intro"
import { Publi } from "./components/Publi/Publi"
import { Recommended } from "./components/Recommended/Recommended"
import { Slider } from "./components/Slider/Slider"
import { GlobalStyles } from "./Global"
import { Theme } from "./Theme"
import { Conditions } from "./components/Conditions/Conditions"
import { Paint } from "./components/Paint/Paint"




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
        {/* <Slider/> */}
        <Newsletter/>
        <Conditions/>
        <Footer/>

      </>
    </Theme>
  )
}

export default App