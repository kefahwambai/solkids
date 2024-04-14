import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "./checkout.css";
import { useLocation } from "react-router-dom";

function Checkout({ setCart, cart }) {
  const [customer_name, setCustomerName] = useState('');
  const [customer_email, setCustomerEmail] = useState('');
  const [customer_phonenumber, setCustomerPhonenumber] = useState('');
  const [delivery_address, setDeliveryAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();
  const [shippingPrice, setShippingPrice] = useState(0);
  const totalPriceFromTickets = location.state ? location.state.totalPrice : 0;

  useEffect(() => {
    setTotalPrice(totalPriceFromTickets);
  }, [totalPriceFromTickets]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach(item => {
        const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
        if (!isNaN(price) && typeof item.quantity === 'number' && !isNaN(item.quantity)) {
          ans += price * item.quantity;
        }
      });
      setTotalPrice(ans);
    setTotalPrice(ans);
    };

    useEffect(() => {
    handlePrice();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!customer_name.trim() || !customer_email.trim() || !delivery_address.trim()) {
          alert('Please fill in all required fields *');
          return;
        }
    };

    const handleShippingChange = (event) => {
      const selectedShippingOption = event.target.value;
      const priceRegex = /Ksh (\d+(\.\d+)?)/;
      const match = selectedShippingOption.match(priceRegex);
      if (match) {
          const price = parseFloat(match[1]);
          setShippingPrice(price);
      } else {
          setShippingPrice(0); 
      }
  };

  return (
    <div className="checkoutform">
      <div className="cart-container">
        <h2 className="my-5 text-center">Checkout form</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="customerName">Customer Name*</label>
              <input
                type="text"
                id="customerName"
                className="form-control"
                value={customer_name}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerEmail">Email*</label>
              <input
                type="email"
                id="customerEmail"
                className="form-control"
                value={customer_email}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerPhoneNumber">Phone Number</label>
              <input
                type="tel"
                id="customerPhoneNumber"
                className="form-control"
                value={customer_phonenumber}
                onChange={(e) => setCustomerPhonenumber(e.target.value)}
                required
              />
            </div>
            <div className="delidiv form-group">
              <label htmlFor="deliveryAddress">Delivery Address*</label>
              <input
                type="text"
                id="deliveryAddress"
                className="form-control"
                value={delivery_address}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                required
              />
            </div>
            <hr />
            <div className="form-group">
              <p className="formp">Payment Method:</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="mpesa"
                  value="mpesa"
                />
                <label className="form-check-label" htmlFor="mpesa">
                  Mpesa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="disabledPaymentMethod"
                  value="disabled"
                  disabled
                />
                <label className="form-check-label" htmlFor="disabledPaymentMethod">
                  Visa / MasterCard (coming soon)
                </label>
              </div>
            </div>
            <Button onClick={handleSubmit} className="place-order-btn" variant="primary">
              Make Order
            </Button>
          </div>
          <div className="col cartfrm">
          <form>
                        <p>SHIPPING</p>
                        <select onChange={handleShippingChange}>
                            <option disabled hidden selected>Select Shipping Options</option>
                            <option className="text-muted">Standard-Delivery - 0.00</option>
                            <option className="text-muted">Fast-Shipping - Ksh 500.00</option>
                            <option className="text-muted">Same Day Delivery - Ksh 1500.00</option>
                        </select>
                        <p className="promo">Have a Promo CODE?</p>
                        <input id="code" placeholder="Enter your code here" />
                    </form>
            <h4 className="cartnme d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge rounded-pill badge-primary">{cart.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((product) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between">
                  <div>
                    <h6 className="my-0">{product.name}</h6>
                  </div>
                  <span className="text-muted">{`${product.price}`}</span>
                  <AiFillDelete
                    style={{ marginBottom: "2px" }}
                    onClick={() => handleRemove(product.id)}
                  />
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Your Total is: </span>
                <strong>Kshs {totalPrice + shippingPrice}/-</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
