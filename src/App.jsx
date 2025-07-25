// import logo from "./assets/img/logo.svg"
import { NavBar } from "./components/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from "./components/Banner"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
  
function App() {
 

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
