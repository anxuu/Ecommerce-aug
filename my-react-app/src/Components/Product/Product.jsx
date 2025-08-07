import { useEffect, useState } from 'react';
import './Product.css';
import axios from "axios";

function Products() {
    const [fetcheddata, setfetcheddata] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setfetcheddata(response.data))
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => console.log('Data fetched'));
    }, []);



    return (
        <div className="product-grid">
            {
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
            }


        </div>
    );
}

export default Products;
