import logo from "./logo.svg"
import "./App.css"
import MyNavbar from "./components/MyNavbar"
import Footer from "./components/Footer"
import Welcome from "./components/Welcome"
import Home from "./components/Home"

function App() {
  return (
    <div className="m-auto">
      <MyNavbar></MyNavbar>
      <Welcome></Welcome>
      <Home></Home>
      <Footer> </Footer>
    </div>
  )
}

export default App
