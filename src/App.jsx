import { Header } from "./components/Common/Header/Header"
import { Login } from "./components/Common/Login/Login"
import { Brands } from "./components/Home/Brands/Brands"
import { Intro } from "./components/Home/Intro/Intro"
import { Recommended } from "./components/Home/Recommended/Recommended"
import { GlobalStyles } from "./Global"
import { Theme } from "./Theme"



const App = () => {
  return (
    <Theme>
      <>
        <GlobalStyles/>
        <Login/>
        <Header/>
        <Intro/>
        <Brands/>
        <Recommended/>
      </>
    </Theme>
  )
}

export default App