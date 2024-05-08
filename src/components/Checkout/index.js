import React, { useState, useEffect } from "react";
import "./checkout.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Payment from "./Payment";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from '../services/orderService';
import Map from '../Map/Map'; 
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAuth } from "../useAuth";

function Checkout({ setCart  }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();
  const [shippingPrice, setShippingPrice] = useState(0);
  const totalPriceFromTickets = location.state ? location.state.totalPrice : 0;
  const cart = useSelector((state) => state.todoProduct.Carts);
  const dispatch = useDispatch();
  const [order, setOrder] = useState({ addressLatLng: null }); 

  useEffect(() => {
    setTotalPrice(totalPriceFromTickets);
  }, [totalPriceFromTickets]);

  useEffect(() => {
    handlePrice();
  }, [cart]); 

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
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const submit = async (data) => {
    if (!order || !order.addressLatLng ) {
      toast.warning('Please select your location on the map');
      return;
    }

    const totalPriceWithShipping = totalPrice + shippingPrice;
  
    try {
      await createOrder({ ...order, name: data.name, address: data.address, totalPrice: totalPriceWithShipping, });
     
      navigate('/payment');
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Failed to create order. Please try again.');
    }
  };
  
  

  function handleMpesa(e) {
    const Price = totalPrice + shippingPrice
    e.preventDefault() 
    fetch('https://solserve.vercel.app/api/stkPush', {
        method: 'POST',
        headers: { 
           "Content-Type": "application/json",
           "Authorization": "HGA3VIEa85yA2KbljFWf0MIX41T7"
       },
        body: JSON.stringify({ amount: Price }), 
    })
    .then((res) => res.json())
    .then((data) => console.log("Mpesa Successful", data))
  }

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
        <div className="page-heading-shows-events">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                <h2 className='conhead '>Checkout</h2>
                </div>
            </div>
        </div>
      </div>      
  <div className="cart-box-main">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-6 mb-3">
                <div className="checkout-address">
                    <div className="title-left">
                        <h3>Deliveryaddress</h3>
                    </div>
                    <form  
                    // onSubmit={handleSubmit(submit)}                    
                     className="needs-validation" noValidate>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="firstName">Customer name *</label>
                                <input type="text" className="form-control" id="customerName" placeholder="" defaultValue={user.name} {...register('name')} error={errors.name} required />
                                <div className="invalid-feedback"> Valid first name is required. </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address *</label>
                            <input defaultValue={user.address} type="text" {...register('address')}  error={errors.address} className="form-control" id="address" placeholder="If outside Kenya Please specify" required />
                            <div className="invalid-feedback"> Please enter your shipping address. </div>                            
                        </div>
                        <Map
                              style={{ zIndex: '-90000px'}}
                              location={order.addressLatLng} 
                              onChange={latlng => {
                                setOrder({ ...order, addressLatLng: latlng,  cart: cart  });
                              }}
                            />
                      </form>
                    <hr className="mb-1" />                      
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
                    <span className="float-right font-weight-bold">FREE</span>{" "}
                  </div>
                  <div className="ml-4 mb-2 small">(2-5 business days)</div>
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
                    <span className="float-right font-weight-bold">Ksh500.00</span>{" "}
                  </div>
                  <div className="ml-4 mb-2 small">(1-2 business days)</div>
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
                    <span className="float-right font-weight-bold">Ksh 1000.00</span>{" "}
                  </div>
                </div>

            </div>
        </div>
    
        <div className="col-md-12 col-lg-12"> 
          <div className="title-left">
            <h3>Shopping cart</h3>
          </div>
          {cart.map((product) => (   
            <div  key={product.id}  className="odr-box">         
              <div className="rounded p-2 bg-light">
                <div className="media mb-2 border-bottom">
                  <div className="media-body">
                    <a href="detail.html">{product.name}</a>
                    <div className="small text-muted"> Subtotal: {product.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    <div className="col-md-12 col-lg-12">   
        <div className="order-box">  
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
     <Link 
      onClick={handleSubmit(submit)}
      to={{
        pathname: '/payment',
        state: { order }
      }}
     className="btn btn-primary checkout-btn" >Place Order</Link>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Checkout;
