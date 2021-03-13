import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textColor: 'black',
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

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.textColor}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient,salary, imgLogo) => this.submitAddForm(event, name, email, isGoldClient, salary, imgLogo)}/>
        <UserList users={this.state.users}/>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <input type="color" onChange={(event) => this.changeTextColor(event)}/>
      </div>
    );
  }
}

export default App;
