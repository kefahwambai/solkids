import axios from 'axios';

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/products')
            .then(response => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    products: response.data
                });
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    };
};

export const GetNumberCart = () => {
    return {
        type: GET_NUMBER_CART
    };
};

export const AddCart = (product) => {
    return {
        type: ADD_CART,
        product
    };
};

export const UpdateCart = (product) => {
    return {
        type: UPDATE_CART,
        product
    };
};

export const DeleteCart = (productId) => {
    return {
        type: DELETE_CART,
        productId
    };
};

export const IncreaseQuantity = (productId) => {
    return {
        type: INCREASE_QUANTITY,
        productId
    };
};

export const DecreaseQuantity = (productId) => {
    return {
        type: DECREASE_QUANTITY,
        productId
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};
