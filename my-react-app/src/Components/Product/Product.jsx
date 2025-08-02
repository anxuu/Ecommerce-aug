import { useEffect, useState } from 'react';
import './Product.css'
import axios, { Axios } from "axios";

function Products() {


    const [fetcheddata, setfetcheddata] = useState([]);


    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setfetcheddata(response.data)

            })
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => { console.log('code run') });

    }, []);




    return (
        <>

            {
                fetcheddata.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.title}</div>
                            <div>{item.price}</div>
                        </div>
                    )
                }

                )
            }




        </>
    )
}

export default Products;

