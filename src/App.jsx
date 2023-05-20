import Home from './Home.jsx'
import Gallery from './Gallery.jsx'
import Shop from './Shop.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import background from '/src/assets/gunstore_background.png'


function App() {
  return (
    <div style={{backgroundImage:`url(${background})`}} className="m-0 w-screen h-[284.444444444vh] flex flex-col items-center bg-cover bg-no-repeat overflow-x-hidden backdrop:backdrop-filter">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </div>
  )
}

export default App
