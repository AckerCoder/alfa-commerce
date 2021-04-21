import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IiVrsLNnPn2OyMt9OLj2QvzXWEflo8i0lhygQ1NTNucPc8Gp7ksonclnZGaUFu7WTxlkNSdgoepTgpI1Z5ulqZk00ZPB8xkgg';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name="Alfa Commerce"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;