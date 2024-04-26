// components/Shop.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actFetchProductsRequest, AddCart } from '../../actions/actions';
import Pre from '../Pre';
import "./index.css";

export class Shop extends Component {
    componentDidMount() {
        this.props.actFetchProductsRequest();
    }

    handleClick = (product) => {
        const { AddCart } = this.props;
        AddCart(product); 
        // console.log(product)
    };

    render() {
        const { products } = this.props;
        if (products.length > 0) {
            return (
                <section>
                    <div className="page-heading-shows-events">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className='conhead '>Karibu Dukani</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shell">
                        <div className="headcon container">
                            <div className="row">
                                {products.map((product) => (
                                    <div className="col-md-6 col-lg-3 ftco-animate" key={product.id}>
                                        <div className="product">
                                            <a href="#" className="img-prod">
                                                <img className="img-fluid" src={product.image} alt={product.name} />
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="text py-3 pb-4 px-3 text-center">
                                                <h3><a href="#">{product.name}</a></h3>
                                                <div className="d-flex">
                                                    <div className="pricing">
                                                        <p className="price"><span className="price-sale">{product.price}</span></p>
                                                    </div>
                                                </div>
                                                <div className="bottom-area d-flex px-3">
                                                    <div className="m-auto d-flex">
                                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1" onClick={() => this.handleClick(product)}>
                                                            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return <Pre />;
        }
    }
}

const mapStateToProps = state => {
    return {
        products: state.todoProduct.products,
    };
};

const mapDispatchToProps = {
    actFetchProductsRequest,
     AddCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
