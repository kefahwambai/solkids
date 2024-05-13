import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trackOrderById } from '../services/orderService';
import NotFound from '../NotFound/NotFound';
import Map from '../Map/Map';
import { useSelector } from 'react-redux';

export default function OrderTrackPage() {
  const cart = useSelector((state) => state.todoProduct.Carts);
  const { id } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    id && trackOrderById(id).then(order => {
      setOrder(order);
      console.log(order)
    });
  }, []);

  if (!id)
    return <NotFound message="Order Not Found" linkText="Go To Home Page" />;

  return (
    order && (
      <>
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="conhead">Track your Order</h2>
            </div>
          </div>
        </div>
      </div>
        <div className="page-heading-shows-events">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="conhead">Order Details</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6">
              <h1>Order #{order.id}</h1>
              <div>
                <strong>Date</strong>: {/* <DateTime date={order.createdAt} /> */}
              </div>
              <div>
                <strong>Name</strong>: {order.name}
              </div>
              <div>
                <strong>Address</strong>: {order.address}
              </div>
              <div>
                <strong>State</strong>: {order.status}
              </div>
              {order.paymentId && (
                <div>
                  <strong>Payment ID</strong>: {order.paymentId}
                </div>
              )}
            </div>

            <div className="col-lg-6">
              <Map location={{ lat: order.addressLat, lng: order.addressLng }} readonly={true} />
            </div>
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

          {order.status === 'NEW' && (
            <div className="row mt-4">
              <div className="col-lg-12">
                <Link to="/payment" className="btn btn-primary">Go To Payment</Link>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
}
