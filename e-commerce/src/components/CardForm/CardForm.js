import React, { useMemo } from 'react';
import styles from './CardForm.css';
import {Row, Col, Button} from 'react-bootstrap';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
  );

  return options;
};

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
  <form onSubmit={handleSubmit}>
    <Row>
      <Col>
          <CardElement />
          </Col>
    </Row>
    <Row>
      <Col md="auto">
        <Button variant="primary" type="submit" disabled={!stripe}>Pay</Button>{''}
      </Col>
    </Row>
  </form>
  );
}

CardForm.propTypes = {};

CardForm.defaultProps = {};

export default CardForm;
