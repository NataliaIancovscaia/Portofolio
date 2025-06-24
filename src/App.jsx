// import logo from "./assets/img/logo.svg"
import { NavBar } from "./components/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from "./components/Banner"
  
// import { LoadingScreen } from './components/NavBar'

function App() {
 

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default App
