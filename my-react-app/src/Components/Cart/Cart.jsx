import './Cart.css';

import { atom, useAtom } from "jotai";
import { itemQuantityAtom } from '../../atoms/cartAtom';


function Cart() {
    const [items, setitems] = useAtom(itemQuantityAtom);
    return (
        <div className="Cartgrid">

            <table className="Carttable">
                <thead>
                    <tr style={{ backgroundColor: 'rgb(116, 118, 119)', color: 'white', position: 'sticky', top: '0px' }}>
                        <th><h2>Product</h2></th>
                        <th><h2>Quantity</h2></th>
                        <th><h2>Sub Total</h2></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.length > 0 ? (
                            items.map((item) => {
                                return (<tr key={item.id}>
                                    <td style={{ display: 'flex', gap: '3%' }}>
                                        <div>
                                            <img src={item.image} alt="Product 1" style={{ height: '100px' }} />
                                        </div>
                                        <div>
                                            <p className="category">{item.title}</p>
                                            <h3 className="product-name">{item.category}</h3>
                                        </div>
                                    </td>


                                    <td>  <button>-</button> {item.quantity}  <button>+</button></td>


                                    <td>{item.price}</td>
                                </tr>)
                            })) : (
                            <h1>Nothing is in cart</h1>
                        )
                    }

                </tbody>
            </table>

            <div className="OrderTotalbtn">
                <table className="OrderTotal">
                    <thead>
                        <tr>
                            <th style={{ paddingBottom: '20%' }}>Order Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Items</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Total Quantities</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>50</td>
                        </tr>
                        <tr style={{ color: 'red' }}>
                            <td>Total</td>
                            <td>1038</td>
                        </tr>
                    </tbody>
                </table>

                <a href='/checkout' className='proceed-btn'>
                    Proceed To Checkout
                </a>
            </div>
        </div>
    )
}

export default Cart;
