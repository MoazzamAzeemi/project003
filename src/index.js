import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hi({name, age}) {
  return <div>
            <h1>React App</h1>
            <p>Hello from <strong>{name}</strong></p>
            <p>The number <strong>{age}</strong> is passed through <code>"props"</code></p>
            <hr></hr>
            <h3>Unordered List</h3>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ul>
            <hr></hr>
            <p>When we add 5 and 3 through JS expression, answer is following:</p>
            <h4>{5+8}</h4>
         </div>
}

ReactDOM.render(<Hi name="Moazzam Shah" age={40} />, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
