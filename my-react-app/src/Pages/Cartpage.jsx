import Navbar from "../Components/Navbar/Navbar";
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";

function Cartpage() {
    return (
        <>
            {/* <button>Show products</button> */}
            <Navbar></Navbar>
            <br />
            <Cart></Cart>
            <br />
            <Footer></Footer>
        </>
    )
}

export default Cartpage;