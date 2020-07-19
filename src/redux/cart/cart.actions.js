import CartActionTypes from './cart.types';

//display or hide th cart upon click
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//add item to cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});