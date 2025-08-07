import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Product/Product'
import Carousel from './Components/Carousel/Carousel'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <br />
      <Carousel></Carousel>
      <br />
      <Products></Products>
      <br />
      <Footer></Footer>
    </>
  )
}

export default App
