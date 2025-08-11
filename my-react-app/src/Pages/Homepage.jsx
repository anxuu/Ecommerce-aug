import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Product/Product'
import Carousel from '../Components/Carousel/Carousel'

function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Products></Products>
            <Footer></Footer>
        </>
    )
}
export default Homepage;