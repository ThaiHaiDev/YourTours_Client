import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
const PAYPAL_CLIENT_ID: any = process.env.REACT_APP_PAYPAL_CLIENT_ID;

function Paypal(props: any) {
    const [paid, setPaid] = useState<any>(props?.pricePayment);
    useEffect(() => {
        setPaid(props?.pricePayment)
    }, [props?.pricePayment]);

    return (
        <div className="paypal">
            <PayPalScriptProvider
                options={{
                    'client-id': PAYPAL_CLIENT_ID,
                }}
            >
                <PayPalButtons 
                forceReRender={[paid]}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: paid,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={async (data: any, actions: any) => {
                        const details = await actions.order.capture();
                        // const name = details.payer.name.given_name;
                        // alert('Transaction completed by ' + name);
                        if (details.status === 'COMPLETED') {
                            await props.booking();
                        }
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Paypal;
