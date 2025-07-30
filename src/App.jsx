import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Create from "./pages/user/Create"
import About from "./pages/about/About"

function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/users" element = {<Home />} />
            <Route path = "/add" element = {<Create />} />
            <Route path = "/about" element = {<About />} />
            
          </Routes>
        </div>

      <Footer />
    </>
  )
}

export default App