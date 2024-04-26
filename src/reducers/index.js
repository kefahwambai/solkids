// reducers/index.js
import { combineReducers } from 'redux';
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions/actions';

const initialState = {
    numberCart: 0,
    Carts: [], 
    products: []
};

function todoProduct(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: action.products
            };
        case GET_NUMBER_CART:
            return {
                ...state
            };
            case ADD_CART:
                const existingProductIndex = state.Carts.findIndex(item => item.id === action.product.id);
    
                if (existingProductIndex !== -1) {    
                    const updatedCarts = state.Carts.map((item, index) =>
                        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
                    );
    
                    return {
                        ...state,
                        numberCart: state.numberCart + 1,
                        Carts: updatedCarts
                    };
                } else {
                    return {
                        ...state,
                        numberCart: state.numberCart + 1,
                        Carts: [...state.Carts, { ...action.product, quantity: 1 }]
                    };
                }
        case INCREASE_QUANTITY:
            return {
                ...state,
                numberCart: state.numberCart + 1,
                Carts: state.Carts.map((item, index) => index === action.productId ? { ...item, quantity: item.quantity + 1 } : item)
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                numberCart: state.numberCart - 1,
                Carts: state.Carts.map((item, index) => index === action.productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
            };
        case DELETE_CART:
            const deletedItem = state.Carts[action.productId];
            return {
                ...state,
                numberCart: state.numberCart - deletedItem.quantity,
                Carts: state.Carts.filter((item, index) => index !== action.productId)
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todoProduct
});

export default rootReducer;
