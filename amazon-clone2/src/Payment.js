import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows to charge a customer
    const getClientSecret = async () => {
       const response = await axios({
         method: 'post',
         //stripe expects the total in a currencies subunits
         url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
       });
       console.log("the new client secret is >>>>", response.data.clientSecret)
       setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
    
  }, [basket]);

  console.log('the secret is >>>>', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) =>{
      //paymentIntent = payment confermation
      db.collection('user').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      })

      setSucceeded(true);
      setError(null)
      setProcessing(false);
      dispatch({
        type: 'EMPTY_BASKET',

      })

      history.replace('/orders')
    })

  };
  const handleChange = (event) => {
    // listen for changes in the card element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div class="payment__container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        {/* payment section -- delivery section */}
        <div class="payment__section">
          <div class="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div class="payment__address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div class="payment__section">
          <div class="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div class="payment__items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div class="payment__section">
          <div class="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div class="payment__details">
            {/* Strip payment method */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div class="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
