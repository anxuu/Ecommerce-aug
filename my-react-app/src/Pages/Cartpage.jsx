import './Cartpage.css';

function Cartpage() {
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
                    <tr>
                        <td style={{ display: 'flex', gap: '3%' }}>
                            <div>
                                <img src="/product1.jpg" alt="Product 1" style={{ height: '100px' }} />
                            </div>
                            <div>
                                <p className="category">Headphone</p>
                                <h3 className="product-name">Sony WX-50</h3>
                            </div>
                        </td>
                        <td>1</td>
                        <td>399</td>
                    </tr>

                    <tr>
                        <td style={{ display: 'flex', gap: '3%' }}>
                            <div>
                                <img src="/product-2-watch.jpg" alt="Product 2" style={{ height: '100px' }} />
                            </div>
                            <div>
                                <p className="category">Watch</p>
                                <h3 className="product-name">Fastrack Pro</h3>
                            </div>
                        </td>
                        <td>1</td>
                        <td>589</td>
                    </tr>

                    <tr>
                        <td style={{ display: 'flex', gap: '3%' }}>
                            <div>
                                <img src="/product-3-iphone.jpg" alt="Product 3" style={{ height: '100px' }} />
                            </div>
                            <div>
                                <p className="category">Phone</p>
                                <h3 className="product-name">iPhone 14</h3>
                            </div>
                        </td>
                        <td>3</td>
                        <td>1000</td>
                    </tr>
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

export default Cartpage;
