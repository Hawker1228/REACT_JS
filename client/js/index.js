// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('Mouse over')
// }), document.getElementById("app"));
const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");

const helpText = "Help text!";

const element = ( <div>
    <h1>{helpText}</h1>
    <input placeholder={helpText} 
    onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText == "Help text!" ? "Yes" : "No"}</p>
</div>);

const app = document.getElementById("app");

ReactDOM.render(element, app);