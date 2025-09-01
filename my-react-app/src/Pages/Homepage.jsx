import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Product/Product'
import Carousel from '../Components/Carousel/Carousel'
import { useState, useEffect } from 'react'

import { useAtom } from 'jotai'
import { itemQuantityAtom, cartQuantityAtom } from '../atoms/cartAtom'


function Homepage() {

    const [cartQuantity, setcartQuantity] = useAtom(cartQuantityAtom);

    const [itemQuantity, setitemQuantity] = useAtom(itemQuantityAtom);


    function AddtoCart(e) {

        const itemid = e.target.value;

        setitemQuantity(prev => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));

    }

    function Additem(e) {
        let itemid = e.target.value;
        setitemQuantity(prev => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));
    }

    function Substractitem(e) {
        let itemid = e.target.value;

        setitemQuantity(prev => ({
            ...prev,
            [itemid]: prev[itemid] > 1 ? (prev[itemid] - 1) : 0
        }));

    }




    return (
        <>
            <Navbar quantity={cartQuantity}></Navbar>
            <Carousel></Carousel>
            <Products AddtoCart={AddtoCart} Additem={Additem} Substractitem={Substractitem} itemquantity={itemQuantity}  ></Products>
            <Footer></Footer>
        </>
    )
}
export default Homepage;