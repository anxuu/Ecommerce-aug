import './App.css'

import Homepage from './Pages/Homepage'
import Cartpage from './Pages/Cartpage'

import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<div> <Homepage></Homepage></div>} />
          <Route path="/Homepage" element={<div> <Homepage></Homepage></div>} />
          <Route path="/Cartpage" element={<div> <Cartpage></Cartpage></div>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
