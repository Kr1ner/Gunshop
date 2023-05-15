import Home from './Home.jsx'
import Gallery from './Gallery.jsx'
import NavBar from './NavBar.jsx'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import background from '/src/assets/gunstore_background.png'


function App() {
  return (
    <div style={{backgroundImage:`url(${background})`}} className="m-0 w-screen h-[284.444444444vh] flex flex-col items-center bg-cover bg-no-repeat overflow-x-hidden backdrop:backdrop-filter">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
