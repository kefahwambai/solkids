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
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);


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
        <div class="page-heading-shows-events">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                <h2 className='conhead '>Checkout</h2>
                </div>
            </div>
        </div>
      </div>      
  <div className="cart-box-main">
    <div className="container">
        <div className="row new-account-login">
            <div className="col-sm-6 col-lg-6 mb-3">
                <div className="title-left">
                    <h3>Account Login</h3>
                </div>
                <h5><a data-toggle="collapse" role="button" aria-expanded="false" onClick={() => { setShowLoginForm(!showLoginForm); setShowRegisterForm(false) }}>Click here to Login</a></h5>
                {showLoginForm && (
                <form className="mt-3 collapse review-form-box" id="formLogin">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="InputEmail" className="mb-0">Email Address</label>
                            <input type="email" className="form-control" id="InputEmail" placeholder="Enter Email" /> </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="InputPassword" className="mb-0">Password</label>
                            <input type="password" className="form-control" id="InputPassword" placeholder="Password" /> </div>
                    </div>
                    <button type="submit" className="btn hvr-hover">Login</button>
                </form>
              )}
            </div>
            <div className="col-sm-6 col-lg-6 mb-3">
                <div className="title-left">
                    <h3>Create New Account</h3>
                </div>
                <h5><a data-toggle="collapse" role="button" aria-expanded="false" onClick={() => {setShowRegisterForm(!showRegisterForm); setShowLoginForm(false); }}>Click here to Register</a></h5>
                {showRegisterForm && (
                <form className="mt-3 collapse review-form-box" id="formRegister">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="InputName" className="mb-0">Name</label>
                            <input type="text" className="form-control" id="InputName" placeholder="First Name" /> </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="InputEmail1" className="mb-0">Email Address</label>
                            <input type="email" className="form-control" id="InputEmail1" placeholder="Enter Email" /> </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="InputPassword1" className="mb-0">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" /> </div>
                    </div>
                    <button type="submit" className="btn hvr-hover">Register</button>
                </form>
                 )}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-lg-6 mb-3">
                <div className="checkout-address">
                    <div className="title-left">
                        <h3>Billing address</h3>
                    </div>
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="firstName">Customer name *</label>
                                <input type="text" className="form-control" id="customerName" placeholder="" value={customer_name} onChange={(e) => setCustomerName(e.target.value)} required />
                                <div className="invalid-feedback"> Valid first name is required. </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Username *</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="username" placeholder="" required />
                                <div className="invalid-feedback" style={{ width: '100%' }}> Your username is required. </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" className="form-control" id="email" placeholder="" />
                            <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address *</label>
                            <input type="text" className="form-control" id="address" placeholder="" required />
                            <div className="invalid-feedback"> Please enter your shipping address. </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 *</label>
                            <input type="text" className="form-control" id="address2" placeholder="" /> </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country *</label>
                                <select className="wide w-100" id="country">
                                    <option value="Choose..." data-display="Select">Choose...</option>
                                    <option>Algeria</option>
                                      <option>Angola</option>
                                      <option>Benin</option>
                                      <option>Botswana</option>
                                      <option>Burkina Faso</option>
                                      <option>Burundi</option>
                                      <option>Cabo Verde</option>
                                      <option>Cameroon</option>
                                      <option>Central African Republic</option>
                                      <option>Chad</option>
                                      <option>Comoros</option>
                                      <option>Congo</option>
                                      <option>Democratic Republic of the Congo</option>
                                      <option>Djibouti</option>
                                      <option>Egypt</option>
                                      <option>Equatorial Guinea</option>
                                      <option>Eritrea</option>
                                      <option>Eswatini</option>
                                      <option>Ethiopia</option>
                                      <option>Gabon</option>
                                      <option>Gambia</option>
                                      <option>Ghana</option>
                                      <option>Guinea</option>
                                      <option>Guinea-Bissau</option>
                                      <option>Ivory Coast</option>
                                      <option>Kenya</option>
                                      <option>Lesotho</option>
                                      <option>Liberia</option>
                                      <option>Libya</option>
                                      <option>Madagascar</option>
                                      <option>Malawi</option>
                                      <option>Mali</option>
                                      <option>Mauritania</option>
                                      <option>Mauritius</option>
                                      <option>Morocco</option>
                                      <option>Mozambique</option>
                                      <option>Namibia</option>
                                      <option>Niger</option>
                                      <option>Nigeria</option>
                                      <option>Rwanda</option>
                                      <option>Sao Tome and Principe</option>
                                      <option>Senegal</option>
                                      <option>Seychelles</option>
                                      <option>Sierra Leone</option>
                                      <option>Somalia</option>
                                      <option>South Africa</option>
                                      <option>South Sudan</option>
                                      <option>Sudan</option>
                                      <option>Tanzania</option>
                                      <option>Togo</option>
                                      <option>Tunisia</option>
                                      <option>Uganda</option>
                                      <option>Zambia</option>
                                      <option>Zimbabwe</option>

                                </select>
                                <div className="invalid-feedback"> Please select a valid country. </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State *</label>
                                <select className="wide w-100" id="state">
                                    <option data-display="Select">Choose...</option>
                                    
                                </select>
                                <div className="invalid-feedback"> Please provide a valid state. </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip *</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback"> Zip code required. </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <div className="title"> <span>Payment</span> </div>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                            </div>

                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" htmlFor="paypal">Mpesa</label>
                            </div>
                        </div>
                        
                        <hr className="mb-1" /> </form>
                </div>
            </div>
            <div className="col-sm-6 col-lg-6 mb-3">
    <div className="col-md-12 col-lg-12">
        <div className="shipping-method-box">
            <div className="title-left">
                <h3>Shipping Method</h3>
            </div>
            <div className="mb-4">
              <div className="custom-control custom-radio">
                <input
                  id="shippingOption1"
                  name="shipping-option"
                  className="custom-control-input"
                  value="Standard Delivery - FREE"
                  type="radio"
                  onChange={handleShippingChange}
                  checked={shippingPrice === 0}
                />
                <label className="custom-control-label" htmlFor="shippingOption1">
                  Standard Delivery
                </label>{" "}
                <span className="float-right font-weight-bold">- FREE</span>{" "}
              </div>
              <div className="ml-4 mb-2 small">(3-7 business days)</div>
              <div className="custom-control custom-radio">
                <input
                  id="shippingOption2"
                  name="shipping-option"
                  className="custom-control-input"
                  value="Express Delivery - Ksh 500.00"
                  type="radio"
                  onChange={handleShippingChange}
                  checked={shippingPrice === 500}
                />
                <label className="custom-control-label" htmlFor="shippingOption2">
                  Express Delivery
                </label>{" "}
                <span className="float-right font-weight-bold">- Ksh500.00</span>{" "}
              </div>
              <div className="ml-4 mb-2 small">(2-4 business days)</div>
              <div className="custom-control custom-radio">
                <input
                  id="shippingOption3"
                  name="shipping-option"
                  className="custom-control-input"
                  value="Next Business day - Ksh 1000.00"
                  type="radio"
                  onChange={handleShippingChange}
                  checked={shippingPrice === 1000}
                />
                <label className="custom-control-label" htmlFor="shippingOption3">
                  Next Business day
                </label>{" "}
                <span className="float-right font-weight-bold">- Ksh 1000.00</span>{" "}
              </div>
            </div>

        </div>
    </div>
    
       <div className="col-md-12 col-lg-12"> 
       {cart.map((product) => (   
         <div  key={product.id}  className="odr-box">
            <div className="title-left">
                  <h3>Shopping cart</h3>
            </div>
           <div className="rounded p-2 bg-light">
              <div className="media mb-2 border-bottom">
                  <div className="media-body">
                      <a href="detail.html"> {product.name}</a>
                      <div className="small text-muted">{`${product.price}`} Subtotal: $80.00</div>
                  </div>
              </div>
            </div>
          </div>
            ))}
        </div>
   

    <div className="col-md-12 col-lg-12">   
        <div className="order-box">       
            <div className="title-left">
                <h3>Your order</h3>
            </div>
            <div className="d-flex">
                <div className="font-weight-bold">Product</div>
                <div className="ml-auto font-weight-bold">Total</div>
            </div>
            <hr className="my-1" />
            <div className="d-flex">
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold"> {totalPrice} </div>
            </div>
            <hr className="my-1" />
            <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold"> {shippingPrice} </div>
            </div>
            <hr />
            <div className="d-flex gr-total">
                <h5>Grand Total</h5>
                <div className="ml-auto h5"> Kshs {totalPrice + shippingPrice}/-</div>
            </div>
            <hr />
            
        </div>
    </div>
    <div className="col-12 d-flex shopping-box"> <a href="checkout.html" className="ml-auto btn hvr-hover">Place Order</a> </div>
        </div>
        </div>
          </div>
    </div>
    </div>
  );
}

export default Checkout;
