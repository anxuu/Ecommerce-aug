import Navbar from "../Components/Navbar/Navbar";
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";

import { atom, useAtom } from "jotai";
import { itemQuantityAtom } from "../atoms/cartAtom";

function Cartpage() {

    const [items] = useAtom(itemQuantityAtom);
    return (
        <>
            <Navbar></Navbar>
            <br />
            <Cart></Cart>
            <br />
            <Footer></Footer>
        </>
    )
}

export default Cartpage;