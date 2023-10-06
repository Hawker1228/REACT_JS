import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    const { a, children } = this.props;
  return (
<header className={a}>
  <div>{children}</div>
</header>
  );
}
}

class App extends React.Component {
  helpText = "Help text!";
  render() {
    return (
      <div>
      <div className="App">
         <Header a={'App-header'}><Logo><a href='./index.js'>React  App</a></Logo>

          <div className='div_nav'><a href='./index.js'>HELLO </a><a href='./index.js'>WE HERE </a><a href='./index.js'> ABOUT</a></div>
         </Header> 
      </div>
        <div className='elem_1'>
          <h1>{this.helpText}</h1><input placeholder={this.helpText} 
          onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
          <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
        </div>
      </div>
    )
  }
  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("Mouse over")}
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


