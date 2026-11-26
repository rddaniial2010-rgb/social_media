import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let football = {
//   team: "Gersokipou FC",
//   amount: 11,
//   coach: "Mike Thoma",
//   team: {
//     atacker: 1,
//     defenders: 4,
//     midfield: 5,
//     goalkeeper: 1
//   }
// }
// football.goalkeeper="Stavros"
// console.log(football.team.midfield)

// console.dir(Window)
const name="makhachev"
const fruit="apple"
const number=21
console.log(`my name is ${name} i love ${fruit} i fould eat ${number} items`)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
