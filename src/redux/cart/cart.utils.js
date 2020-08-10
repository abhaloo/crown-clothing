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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    //if there is only one item we want to remove item from cart 
    if(exisitingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
     
    console.log("reached cart utils");

    //if there is more than one item to remove we just want to decrement the quantity of that item 
    return cartItems.map(cartItem => 
    (cartItem.id === cartItemToRemove.id) ? 
    {...cartItem, quantity: cartItem.quantity - 1} : cartItem)

   
}