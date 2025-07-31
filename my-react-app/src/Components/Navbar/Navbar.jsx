import './Navbar.css';


function Navbar() {

    return (

        <>
            <header className='flex navbar'>

                <div className='flex navleft'>

                    <img src="/logo-ecommerce.png" alt="logo" />


                    <a href="/home">home</a>



                    <div className='flex cart'>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="">Cart</a>

                        <span className="cart-icon bi bi-cart4">
                            <span className="cart-count">2</span>
                        </span>
                    </div>



                </div>


                <div className='flex Searchbar'>
                    <input type="text" name="" id="" placeholder="Search" />

                    <select name="" id="" className='select'>
                        <option disabled style={{ display: 'none' }}  > My Account</option>
                        <option value="" >My Orders</option>

                        <option value="">Profile</option>
                        <option value="">Logout</option>
                    </select>

                </div>




                <div className='bi bi-justify justify'></div>

            </header>


        </>
    )
}

export default Navbar;