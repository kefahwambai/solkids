import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./cart.css";

function CartComponent({ cart, setCart, user }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
            if (!isNaN(price) && typeof item.quantity === 'number' && !isNaN(item.quantity)) {
                total += price * item.quantity;
            }
        });
        setTotalPrice(total);
    };

    const handleQuantityChange = (item, quantity) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                const newQuantity = Math.max(1, quantity);
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });

        setCart(updatedCart);
        updateTotalPrice();
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        updateTotalPrice();
    };

    useEffect(() => {    
    if (!user) {
        sessionStorage.setItem("cart_last_updated", JSON.stringify(cart));
        
        }
    }, [cart, user]);
    
    useEffect(() => {    
        updateTotalPrice();
    }, [cart]);

    useEffect(() => {
        if (user) {
            const storedCartData = sessionStorage.getItem(`cart_${user.user_id}`);
            if (storedCartData) {
                setCart(JSON.parse(storedCartData));
            }
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            sessionStorage.setItem(`cart_${user.user_id}`, JSON.stringify(cart));
        }
    }, [user, cart]);

    const roundPrice = (price) => {
        const roundedPrice = Math.round(price * 100) / 100;
        return `Kshs. ${roundedPrice.toFixed(2)}`;
    };

    return (
        <section id="shopcart">            
        <div class="page-heading-shows-events">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                <h2 className='conhead '>Your Cart</h2>
                </div>
            </div>
        </div>
      </div>
            <div className="row">
                <div className="col-md-8 shoppingcartt">
                    <div className="cart-box-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-main table-responsive">
                                        <table className="table">
                                            <thead >
                                                <tr>
                                                    <th>Images</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {cart.length === 0 ? (
                                                <div class="container">
                                                    <p>Your cart is empty.</p>
                                                    <Link style={{color: '#ffcb51'}} to="/shop">Continue shopping </Link>
                                                </div>
                                                    ) : (
                                                cart.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="thumbnail-img">
                                                            <a href="#">
                                                                <img className="img-fluid" src={item.image} alt={item.name} />
                                                            </a>
                                                        </td>
                                                        <td className="name-pr">
                                                            <a href="#">
                                                                {item.name}
                                                            </a>
                                                        </td>
                                                        <td className="price-pr">
                                                            <p>{item.price}</p>
                                                        </td>
                                                        <td className="quantity-box">
                                                            <input type="number" value={item.quantity} min="1" step="1" className="c-input-text qty text" onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))} />
                                                        </td>
                                                        <td className="total-pr">
                                                            <p>{item.quantity < 1 ? '-' : roundPrice(parseFloat(item.price.replace(/[^\d.-]/g, '')) * item.quantity)}</p>
                                                        </td>
                                                        <td className="remove-pr">
                                                            <a onClick={() => handleRemove(item.id)}>
                                                                <i className="fas fa-times"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="coupon-box">
                                        <div className="input-group input-group-sm">
                                            <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                                            <div className="input-group-append">
                                                <button className="btn btn-theme" type="button">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col-lg-8 col-sm-12"></div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="order-box">
                                        <h3>Order summary</h3>
                                        <div className="d-flex">
                                            <h4>Sub Total</h4>
                                            <div className="ml-auto font-weight-bold">{roundPrice(totalPrice)}</div>
                                        </div>
                                        <hr />
                                        {cart.length > 0 && (
                                            <div className="d-flex gr-total">
                                                <h5>Grand Total</h5>
                                                <div className="ml-auto h5"> {roundPrice(totalPrice)}</div>
                                            </div>
                                        )}
                                        <hr />
                                        {cart.length > 0 && (
                                            <Link to="/checkout" className="btn btn-primary checkout-btn">CHECKOUT</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartComponent;
