import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const PAYPAL_CLIENT_ID: any = process.env.REACT_APP_PAYPAL_CLIENT_ID;

function Paypal(props: any) {
    return (
        <div className="paypal">
            <PayPalScriptProvider
                options={{
                    'client-id': PAYPAL_CLIENT_ID,
                }}
            >
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: props?.pricePayment,
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
                            await props.booking()
                            
                        }
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Paypal;
