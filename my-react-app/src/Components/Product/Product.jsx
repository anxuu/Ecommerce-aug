import { useEffect, useState } from 'react';
import './Product.css';
import axios from "axios";

function Products({ AddtoCart, inCart, Additem, Substractitem, itemquantity }) {
    const [displaydata, setdisplaydata] = useState([]);

    const [selectedopt, setselectedopt] = useState('Categories');
    const [alldata, setalldata] = useState([]);



    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setalldata(response.data);
                setdisplaydata(response.data);
            })
            .catch(error => console.error('Error fetching data:', error))
            .finally();
    }, []);

    function Filteredarray(name) {

        let category_data = alldata.filter(item => {
            return (item.category === name);
        });

        setdisplaydata(category_data);
    }

    function ClearFilter() {
        setselectedopt('Categories');
        setdisplaydata(alldata);

    }

    function Htl() {
        setdisplaydata(prevData =>
            [...prevData].sort((a, b) => b.price - a.price)
        );

    }

    function Lth() {
        setdisplaydata(prevData =>
            [...prevData].sort((a, b) => a.price - b.price)
        );

    }

    return (
        <>

            <h4>Sort by :-</h4>

            <div className='Sortby'>
                <div>
                    <div className='btns'>
                        <button onClick={Lth}>Price -- Low to High</button>
                        <button onClick={Htl}>Price -- High to Low</button>
                    </div>

                </div>


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
                    displaydata.length > 0 ? (
                        displaydata.map((item, index) => (
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
                                    {
                                        inCart[index] ? (

                                            <div className="btn-parent">
                                                <button value={index} onClick={Additem}>+</button>
                                                <span>{itemquantity[index]}</span>
                                                <button value={index} onClick={Substractitem}>-</button>
                                            </div>
                                        ) : (
                                            <div className="btn-parent">
                                                <button onClick={AddtoCart} value={index} className="add-to-cart">Add To Cart</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Items not Found</p>
                    )
                }
            </div>
        </>

    );
}

export default Products;
