import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./cart.css";

function CartComponent({ cart, setCart, handleChange }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };

    const handleQuantityChange = (item, amount) => {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          const newQuantity = cartItem.quantity + amount;
          return { ...cartItem, quantity: newQuantity < 1 ? 1 : newQuantity };
        }
        return cartItem;
      });
      setCart(updatedCart);
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => (ans += item.price * item.quantity));
        setTotalPrice(ans);
    };
    
    useEffect(() => {
    handlePrice();
    }, [cart]);

    useEffect(() => {
      const cartData = JSON.stringify(cart);
      sessionStorage.setItem('cart', cartData);

      const clearCartTimeout = setTimeout(() => {
        sessionStorage.removeItem('cart');
        setCart([]);
      }, 5 * 60 * 1000); // 5 minutes

      return () => clearTimeout(clearCartTimeout);
    }, [cart, setCart]);

    return (
      <section id="shopcart">
        <div className="row">
          <div className="col-md-8 shoppingcartt">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
              </div>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="cartcrd row main align-items-center">
                <div className="col-2"><img className='carimg' src={item.image} alt={item.name} /></div>
                <div className="cartname col">
                  <div className="row">{item.name}</div>
                  <div className="pricediv">{item.price }</div>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="btn btn-secondary"
                    disabled={item.quantity <= 1}
                  >-</button>
                  <button className="btn btn-light">{item.quantity}</button>
                  <button onClick={() => handleQuantityChange(item, 1)} className="btn btn-secondary">+</button>
                </div>
                <button onClick={handleRemove} className="rmvbtn btn btn-danger">Remove</button>
              </div>
            ))}
          </div>
          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>{cart.length} ITEMS</div>
            </div>
            <form>
                <p>SHIPPING</p>
                <select>
                <option>Select Shipping Options</option>
                <option class="text-muted">Standard-Delivery- Ksh 500.00</option>
                <option class="text-muted">Fast Shipping- Ksh 5000.00</option>
                </select>
                
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
            </form>
            <div className="row total-price">
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">{totalPrice}</div>
            </div>
            <button className="btn btn-primary checkout-btn">CHECKOUT</button>
          </div>
        </div>
      </section>
    );
}

export default CartComponent;
