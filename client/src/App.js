
import React from 'react';
import logo from './logo.svg';
import './App.css';

const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");
const helpText = "Help text!";
const element = ( <div>
    <h1>{helpText}</h1>
    <input placeholder={helpText} 
    onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>);



const App = () => {
  return (
    <div className="App">{element}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
export default App;