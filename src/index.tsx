import React from 'react';
import ReactDOM from 'react-dom';
import './output.css'
import './index.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import PaymentDetail from './pages/PaymentDetail'
import Title from './pages/atomic/atomic/Title'

ReactDOM.render(
  <React.StrictMode>
    {/* <PaymentDetail/> */}
    <div>
    <Title title='keng'></Title>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
