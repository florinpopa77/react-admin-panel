import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';
import {validateEmail} from './utils/EmailValidator'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textColor: 'black',
      displayUsers: true,
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary = 1000;
          user.imgLogo = "https://img.pngio.com/bluecircleclip-artsymbollogographics-4367591-free-png-library-user-logo-png-250_250.png"
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event){
    this.setState({textColor: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salary, imgLogo) {
    event.preventDefault();

    if(name.length <= 0) {
      alert("Numele trebuie completat");
      return;
    }

    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if(!validateEmail(email)){
      alert("Email incorect");
      return;    
    }

    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            imgLogo
          }
        ]
      }
    });
  }

  changeDisplay(setOnOff){
    this.setState({displayUsers: setOnOff});
  }

  handleDeleteUser(id){
    let usersFiltered = this.state.users.filter(user => user.id !== id);
    this.setState({users: usersFiltered});
  }


  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.textColor}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient,salary, imgLogo) => this.submitAddForm(event, name, email, isGoldClient, salary, imgLogo)}/>
        <button onClick={() => this.changeDisplay(true)}>Afisare Utilizatori</button>
        <button onClick={() => this.changeDisplay(false)}> Afisare Postari</button>
        {this.state.displayUsers === true 
            ? <UserList 
                users={this.state.users}
                handleDeleteUser={id => this.handleDeleteUser(id)}
            /> 
            : <PostList/>}
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <input type="color" onChange={(event) => this.changeTextColor(event)}/>
      </div>
    );
  }
}

export default App;
