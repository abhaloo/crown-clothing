export const addItemToCart = (cartItems, cartItemToAdd) => {

    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(exisitingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem )
    }
    //if cart item is not found, add a quantity value so
    //any subsequent items have a quantity value that can be referenced 
    //above
    return [...cartItems, {...cartItemToAdd, quantity: 1}] 
}