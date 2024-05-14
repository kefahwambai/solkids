import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/scrollToTop";
import Contact from "./components/Contact";
import Shop from "./components/Shop/shop";
import Cart from "./components/cart";
import Orders from "./components/Order/orders";
import UsersPage from "./components/UsersPage/UsersPage";
import UserEditPage from "./components/UserEdit/UserEditPage";
import Events from "./components/Events";
import Tickets from "./components/Tickets";
import Checkout from "./components/Checkout";
import Gallery from "./components/Gallery";
import ProfilePage from "./components/profile/profilepage";
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Profile from "./components/profile/loginsec";
import Payment from "./components/Payment/PaymentPage";
import Topbar from "./components/Topbar";
import Backtotop from "./components/Backtotop";
import Success from "./components/success";
import "./App.css";
import OrderTrackPage from './components/OrderTrack/OrderTrackPage';
import { connect } from 'react-redux'; 
import { AddCart } from './actions/actions'; 
import Dashboard from "./components/Dashboard/Dashboard";
import AuthRoute from "./components/AuthRoute/AuthRoute"
import AdminRoute from "./components/AdminRoute/AdminRoute"
import { useAuth } from "./components/useAuth";



function App({ cart, addToCart }) {
  const [load, updateLoad] = useState(true);
  const navigate = useNavigate();  
  const { user } = useAuth(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Preloader load={load} /> */}
        <Topbar/>
        <Navbar size={cart.length} user={user} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={ <Events/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/shop" element={<Shop  />} />
          <Route path="/cart" element={<Cart cart={cart} user={user}   />} />     
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/ticket" element={ <Tickets  cart={cart} />} /> 
          <Route path="/checkout" element={<AuthRoute><Checkout cart={cart} user={user} /></AuthRoute>} />          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />      
          <Route path="/profile" element={<AuthRoute><ProfilePage /></AuthRoute>}   />
          <Route path="/dashboard" element={ <AuthRoute>  <Dashboard /> </AuthRoute> } />   
          <Route path="/user" element={<AuthRoute><Profile user={user}  /></AuthRoute> } />
          <Route path="/orders" element={<AuthRoute><Orders user={user}  /></AuthRoute>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/payment" element={ <AuthRoute><Payment /></AuthRoute>} />   
          <Route path="/track/:orderId" element={<AuthRoute><OrderTrackPage /></AuthRoute>}   />     
          <Route path="/admin/users" element={<AdminRoute><UsersPage /></AdminRoute> }  />
          <Route path="/admin/editUser/:userId"   element={<AdminRoute><UserEditPage /></AdminRoute> }   />  
        </Routes>
        <Backtotop/>
        <Footer />
          </div>  
  );
}

const mapStateToProps = state => ({
  cart: state.todoProduct.numberCart,
  cartItems: state.todoProduct.Carts
});


const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(AddCart(product)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
