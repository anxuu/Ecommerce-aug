import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Product/Product'
import Carousel from '../Components/Carousel/Carousel'
import { useState } from 'react'


function Homepage() {

    const [cartquantity, setcartquantity] = useState(0);
    const [itemquantity, setitemquantity] = useState({});
    const [inCart, setinCart] = useState({});


    function Additem(e) {
        let index = e.target.value;
        setitemquantity(prev => ({
            ...prev,
            [index]: (prev[index] || 0) + 1
        }));
    }

    function Substractitem(e) {
        let index = e.target.value;

        setitemquantity(prev => ({
            ...prev,
            [index]: (prev[index] || 0) - 1
        }));
    }

    function AddtoCart(e) {
        const index = e.target.value;
        setcartquantity(prev => prev + 1);


        setinCart(prev => ({
            ...prev,
            [index]: true
        }));

        setitemquantity(prev => ({
            ...prev,
            [index]: 1
        }));
    }


    return (
        <>
            <Navbar quantity={cartquantity}></Navbar>
            <Carousel></Carousel>
            <Products AddtoCart={AddtoCart} inCart={inCart} Additem={Additem} Substractitem={Substractitem} itemquantity={itemquantity} ></Products>
            <Footer></Footer>
        </>
    )
}
export default Homepage;