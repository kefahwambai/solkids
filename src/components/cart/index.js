import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../../actions/actions';
import "./cart.css";

function CartComponent({ products, cart, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    const [totalPrice, setTotalPrice] = useState(0);

    let ListCart = [];
    let TotalCart=0;
    Object.keys(products.Carts).forEach(function(item){
        TotalCart+=products.Carts[item].quantity * products.Carts[item].price;
        ListCart.push(products.Carts[item]);
    });
    const handleQuantityChange = (item, quantity) => {
    if (!Array.isArray(cart)) {
        console.error("Cart is not an array:", cart);
        return;
    }

    const updatedCart = cart.map(cartItem => {
        console.log(cart)
        if (cartItem.id === item.id) {
            const newQuantity = Math.max(1, quantity);
            return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
    });

    updateTotalPrice();
};
    
       
const updateTotalPrice = () => {
    let total = 0;
    if (Array.isArray(cart)) {
        cart.forEach(item => {
            console.log("Item:", item);
            const price = parseFloat(item.price?.replace(/[^\d.-]/g, ''));
            console.log("Parsed Price:", price);
            if (item.hasOwnProperty('quantity')) {
                console.log("Quantity:", item.quantity);
                const itemTotal = price * item.quantity;
                console.log("Item Total:", itemTotal);
                if (!isNaN(price) && typeof item.quantity === 'number' && !isNaN(item.quantity)) {
                    total += itemTotal;
                }
            } else {
                console.log("Quantity property is missing for this item.");
                handleQuantityChange(item, 1);
            }
        });
    } else {
        console.log("Cart is not an array or is empty.");
    }
    console.log("Total Price:", total);
    setTotalPrice(total);
};
 
    
    useEffect(() => {
        console.log("Cart:", cart); 
        updateTotalPrice();
    }, [cart]);

    useEffect(() => {
        console.log(totalPrice);
    }, [totalPrice]);

    const roundPrice = (price) => {
        const roundedPrice = Math.round(price * 100) / 100;
        return `Kshs. ${roundedPrice.toFixed(2)}`;
    };

    return (
        <section id="shopcart">
            <div className="page-heading-shows-events">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
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
                                            <thead>
                                                <tr>
                                                    <th>Images</th>
                                                    <th>Product Name</th>
                                                    {/* <th>Price</th> */}
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.length === 0 ? (
                                                    <div className="container">
                                                        <p>Your cart is empty.</p>
                                                        <Link style={{ color: '#ffcb51' }} to="/shop">Continue shopping </Link>
                                                    </div>
                                                ) : (
                                                    ListCart.map((item, key) => (
                                                        <tr key={key}>
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
                                                            {/* <td className="price-pr">
                                                                <p>{item.price}</p>
                                                            </td> */}
                                                            <td className="quantity-box">
                                                                <span style={{ margin: '2px', marginRight: '1rem', cursor: 'pointer' }} onClick={() => DecreaseQuantity(key)}>-</span>
                                                                <input type="number" value={item.quantity} min="1" step="1" className="c-input-text qty text" readOnly onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}  />
                                                                <span style={{ margin: '2px', marginLeft: '1rem', cursor: 'pointer' }} onClick={() => IncreaseQuantity(key)}>+</span>
                                                            </td>
                                                            <td className="total-pr">
                                                                <p>{item.quantity < 1 ? '-' : roundPrice(parseFloat(item.price.replace(/[^\d.-]/g, '')) * item.quantity)}</p>
                                                            </td>
                                                            <td className="remove-pr">
                                                                <a onClick={() => DeleteCart(key)}>
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

const mapStateToProps = state => {
    return {
        products: state.todoProduct,
        cart: state.todoProduct.Carts 
    };
};

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(CartComponent);
