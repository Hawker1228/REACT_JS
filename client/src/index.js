import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Logo from './components/Logo';
// import Button from './components/Button';
import Users from './components/Users';
import AddUser from './components/Add';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1";

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
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       helpText: "Welcome",
//       userData: ""
//     }
//     this.inputClick = this.inputClick.bind(this) //СВЯЗЫВАЕМ Input.Click с конструктором
//   }

//   render() {let test_id = 'p_test';
//     return (
//       <div className="App">
//         <Header a={'App-header'}><Logo><p>React  App</p></Logo>
//           <div className='div_nav'><a href='./index.js'>HELLO </a><a href='./index.js'>WE HERE </a><a href='./index.js'> ABOUT</a></div>
//         </Header> 
//          <div className='elem_1'>
//           <h1>{this.state.helpText}</h1>
//           <h2>{this.state.userData}</h2> 
//           <input placeholder={this.state.helpText}
//             onChange={event => this.setState({ userData: event.target.value })} //Отслеживаем изменение placeholder  и меняем значение userData
//             onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
//           <p>{this.state.helpText === "Welcome" ? "Yes" : "No"}</p>
//           <p id='p_test'>0</p>
//           <Button p_id={test_id} text='Увеличить'></Button>
//           </div>
//           <br />

//           <JsonParse></JsonParse> {/* ЗАГРУЖАЕМ КОМПОНЕНТ С ОТРИСОВКОЙ JSON */}
//       </div>
//     )
//   }
//   inputClick() {
//     this.setState({helpText: "Changed"}) //УСТАНАВЛИВАЕМ СОСТОЯНИЕ
//     console.log("Clicked")
//   }
//   mouseOver() {console.log("Mouse over")}
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    axios.get(baseUrl).then((res) => {
     this.setState({users: res.data.data})
    })
    this.state = {
        users: []
    }
    
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
    
  }
  render() {

    return (
      
      <div className="App">
        <Header title="Список пользователей" a={'App-header'}><Logo><p>React  App</p></Logo>
        <div className='div_nav'><a href='./index.js'>HELLO </a><a href='./index.js'>WE HERE </a><a href='./index.js'> ABOUT</a></div>
        </Header>
        <div className='content'>
        <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>{/* ЗАГРУЖАЕМ КОМПОНЕНТ С ОТРИСОВКОЙ JSON */}
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
        </div>
      </div>
    )
    
  }
  
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
})
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers] })
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
  }

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


