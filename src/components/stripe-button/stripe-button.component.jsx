import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = price * 100; //stripe requires price in cents
    const publishableKey = "pk_test_51HKOLFLzUuCaBFxdvgk0sRsgrOnJSPxJigK6LoesZstnukmlq6qOtWHF2QkGtyMXo8Q7EzLxkN2W294oXcyxIZbc00OJI7aDVz";
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name = "CROWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
