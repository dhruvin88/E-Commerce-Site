import React from 'react';
import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { properties } from '../../properties.js';
import CardForm from '../CardForm/CardForm';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { Home, Page1, Page2, Page3 } from '../pages';
import { Nav } from '../Nav/nav.js';
import Footer from '../Footer/Footer';

const stripePromise = loadStripe(properties.stripeKey);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={Page1} />
      <Route exact path='/2' component={Page2} />
      <Route exact path='/3' component={Page3} />
      <Route exact path='/pay'> 
        <Elements stripe={stripePromise}>
          <CardForm />
        </Elements>
      </Route>
    </Switch>
  </main>
)

function App() {
  return (
    <div>
      <Nav></Nav>
      <Container>
        <Main></Main>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
