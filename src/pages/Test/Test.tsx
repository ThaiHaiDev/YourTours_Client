import React, { useState } from 'react';
import Paypal from '../../components/Paypal/Paypal';

function Test() {
    const [checkout, setCheckOut] = useState(false);

    return (
        <div>
            {checkout ? (
                <div><Paypal /></div>
                
            ) : (
                <button
                    onClick={() => {
                        setCheckOut(true);
                    }}
                >
                    Checkout
                </button>
            )}
        </div>
    );
}

export default Test;
