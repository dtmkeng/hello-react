import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import PaymentDetail from './PaymentDetail';

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Hello Frontend's</h1>
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/payment' component={PaymentDetail}  exact/>
      </Switch>
    </Router>
    </>
  )
}

export default Home;
