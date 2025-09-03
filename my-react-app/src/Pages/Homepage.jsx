import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Product/Product'
import Carousel from '../Components/Carousel/Carousel'

import { useAtom } from 'jotai'
import { itemQuantityAtom, cartQuantityAtom } from '../atoms/cartAtom'


function Homepage() {


    const [cartQuantity, setcartQuantity] = useAtom(cartQuantityAtom);

    const [itemQuantity, setitemQuantity] = useAtom(itemQuantityAtom);

    // import { useState } from "react";



    // Add item to cart (first time)
    function AddtoCart(item) {
        // const itemid = item.id;
        setitemQuantity(prev => [
            ...prev,
            { ...item, quantity: 1 }
        ])
    };



    // Increment quantity
    function Additem(e) {
        const itemid = Number(e.target.value);
        setitemQuantity(prev =>
            prev.map(i =>
                i.id === itemid ? { ...i, quantity: i.quantity + 1 } : i
            )
        )
    }

    // Decrement quantity
    function Substractitem(e) {
        const itemid = Number(e.target.value);

        setitemQuantity(prev =>
            prev
                .map(i =>
                    i.id === itemid ? { ...i, quantity: i.quantity - 1 } : i
                )
                .filter(i => i.quantity > 0) // remove items with quantity 0
        );
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