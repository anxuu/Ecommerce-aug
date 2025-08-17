import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Product/Product'
import Carousel from '../Components/Carousel/Carousel'
import { useState } from 'react'


function Homepage() {

    const [cartquantity, setcartquantity] = useState(0);
    const [itemquantity, setitemquantity] = useState({});


    function AddtoCart(e) {

        const itemid = e.target.value;

        setcartquantity(prev => prev + 1);


        setitemquantity(prev => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));
    }

    function Additem(e) {
        let itemid = e.target.value;
        setitemquantity(prev => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));
    }

    function Substractitem(e) {
        let itemid = e.target.value;

        setitemquantity(prev => ({
            ...prev,
            [itemid]: prev[itemid] > 1 ? (prev[itemid] - 1) : 0
        }));
    }




    return (
        <>
            <Navbar quantity={cartquantity}></Navbar>
            <Carousel></Carousel>
            <Products AddtoCart={AddtoCart} Additem={Additem} Substractitem={Substractitem} itemquantity={itemquantity}  ></Products>
            <Footer></Footer>
        </>
    )
}
export default Homepage;