import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewOrderForCurrentUser } from '../services/orderService';
import Map from '../Map/Map';
import Payment from '../Checkout/Payment';
import { clearCart } from '../../actions/actions'; 

export default function PaymentPage() {
  const cart = useSelector((state) => state.todoProduct.Carts);
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch(); 
  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => {
      // console.log(data)
      setOrder(data);
      // console.log(order)
    });
  }, []);

  const handlePaymentSuccess = () => {
    dispatch(clearCart());
  };

  if (!order) return null; 

  return (
    <>
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="conhead">Payment</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-4">
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div className="mt-4">
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
            <div className="mt-4">
              <h3>Order Details:</h3>
              {cart.map((product) => (
                <div key={product.id} className="bg-light p-3 my-2">
                  <div>
                    <a href="detail.html">{product.name}</a>
                  </div>
                  <div className="text-muted">Subtotal: {`${product.price}`}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <Map readonly={true} location={{ lat: order.address_lat, lng: order.address_lng }} />
          </div>
        </div>
        <div className="m-5 mt-4 col-lg-4">
          <h4>Payment</h4>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Mpesa
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <form className="loginForm">
                    <div className="mb-3">
                      <label htmlFor="phonenumber" className="form-label">
                        Phone Number
                      </label>
                      <input className="form-control" type="number" placeholder="+***-*********" id="phonenumber" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Amount" className="form-label">
                        Amount
                      </label>
                      <div className="h5">Kshs {order.totalPrice}/-</div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlePaymentSuccess}>
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Visa/MasterCard
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <Payment totalPrice={order.totalPrice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
