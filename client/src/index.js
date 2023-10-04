import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Logo from './Logo';


const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");
const helpText = "Help text!";

const element = ( <div>
    <h1>{helpText}</h1><input placeholder={helpText} 
    onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>);

const App = () => {
  return (
    <div className="App">{element}
      <header className="App-header">
      <Logo str1={'HELLO'}str2={"УБЛЮДОК"}str3={'Мать твою'}/>
      </header>
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


