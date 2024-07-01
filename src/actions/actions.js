export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const actFetchProductsRequest = () => {
    return {
        type: GET_ALL_PRODUCT,
        products: [
            { id: 1, name: "Hibiscus Oak", price: "Kshs 700", image: require("../Assets/Books/Oak.png") },
            { id: 2, name: "Towering Twiga", price: "Kshs 700", image: require("../Assets/Books/Twiga.png") },
            { id: 3, name: "Funny fisi", price: "Kshs 700", image: require("../Assets/Books/fisi.png") },
            { id: 4, name: "Written in the Stars", price: "Kshs 950", image: require("../Assets/Books/written in stars.png") },
            { id: 5, name: "Lala land", price: "Kshs 950", image: require("../Assets/Books/Lalaland.png") },
            { id: 6, name: "Pipo and the Poop Pile", price: "Kshs 950", image: require("../Assets/Books/Pipo.png") },
            { id: 7, name: "Papas Fingers", price: "Kshs 950", image: require("../Assets/Books/Papafingers.png") },
            { id: 8, name: "Budubas The Colombus Monkey", price: "Kshs 950", image: require("../Assets/Books/BududasM.png") }
        ]
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