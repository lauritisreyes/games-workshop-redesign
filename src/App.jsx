import { Banner } from "./components/Common/Banner/Banner"
import { Footer } from "./components/Common/Footer/Footer"
import { Header } from "./components/Common/Header/Header"
import { Login } from "./components/Common/Login/Login"
import { Brands } from "./components/Home/Brands/Brands"
import { Newsletter } from "./components/Home/Newsletter/Newsletter"
import { Intro } from "./components/Home/Intro/Intro"
import { Publi } from "./components/Home/Publi/Publi"
import { Recommended } from "./components/Home/Recommended/Recommended"
import { Slider } from "./components/Home/Slider/Slider"
import { GlobalStyles } from "./Global"
import { Theme } from "./Theme"
import { Conditions } from "./components/Home/Conditions/Conditions"
import { Paint } from "./components/Home/Paint/Paint"



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