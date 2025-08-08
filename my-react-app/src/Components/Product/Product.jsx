import { useEffect, useState } from 'react';
import './Product.css';
import axios from "axios";

function Products() {

    const [fetcheddata, setfetcheddata] = useState([]);
    const [filtereddata, setfiltereddata] = useState([]);
    const [isfiltered, setisfiltered] = useState(false);
    const [selectedopt, setselectedopt] = useState('Categories');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setfetcheddata(response.data))
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => console.log('Data fetched'));
    }, []);



    function Filteredarray(name) {

        let category_data = fetcheddata.filter(item => {
            return (item.category === name);
        });

        setfiltereddata(category_data);
        setisfiltered(true);

    }

    function ClearFilter() {
        setisfiltered(false);
        setselectedopt('Categories')

    }

    function Htl() {
        console.log('htl');

    }
    function Lth() {
        console.log('htl2');


    }


    return (
        <>


            <div className='Sortby'>



                <div className='Categories'>

                    <select name="Categories" id="Categories" className='Categoriesselect' value={selectedopt} onChange={(e) => {
                        setselectedopt(e.target.value);
                        Filteredarray(e.target.value)
                    }}  >
                        <option value="Categories" disabled hidden >Categories</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="noitem">Testing No Items</option>
                    </select>

                    <button className='Clear' onClick={ClearFilter} >X</button>

                </div >

            </div>






            <div className="product-grid">

                {
                    isfiltered ? (

                        filtereddata.length > 0 ? (

                            filtereddata.map((item, index) => (
                                <div className="cart" key={index}>
                                    <div className="imgdiv">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="product-details">
                                        <p className="category">{item.category}</p>
                                        <h3 className="product-name" title={item.title}>
                                            {item.title.slice(0, 26)}{item.title.length > 24 ? '...' : ''}
                                        </h3>
                                        <div className="price-rating">
                                            <p className="price">₹{item.price}</p>
                                            <p className="rating">⭐ {item.rating.rate}</p>
                                        </div>
                                        <div className="btn-parent">
                                            <button className="add-to-cart">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))

                        ) : (
                            <p>Items not Found</p>
                        )

                    ) : (

                        (
                            fetcheddata.map((item, index) => (
                                <div className="cart" key={index}>
                                    <div className="imgdiv">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="product-details">
                                        <p className="category">{item.category}</p>
                                        <h3 className="product-name" title={item.title}>
                                            {item.title.slice(0, 26)}{item.title.length > 24 ? '...' : ''}
                                        </h3>
                                        <div className="price-rating">
                                            <p className="price">₹{item.price}</p>
                                            <p className="rating">⭐ {item.rating.rate}</p>
                                        </div>
                                        <div className="btn-parent">
                                            <button className="add-to-cart">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )

                    )


                }


            </div>



        </>

    );
}

export default Products;
