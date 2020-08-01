import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { properties } from '../../properties.js';
import CardForm from '../CardForm/CardForm';
import { Container } from 'react-bootstrap';

const stripePromise = loadStripe(properties.stripeKey);

function App() {
  return (
    <Container>
      <Elements stripe={stripePromise}>
        <CardForm />
      </Elements>
    </Container>
  );
}

export default App;
