import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import '../App.css';
import PostList from '../components/PostList';
import {validateEmail} from '../utils/EmailValidator'

class Home extends React.Component {
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
        data = data.filter(user => user.id < 10);
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
      <div className="app p-xl-5 align-middle" style={{background: this.state.background, color: this.state.textColor}}>
        <h1 className="text-center mb-1">Admin panel - Proiectul 1</h1>
        
        <div className="text-center mb-3">
          <span className="font-weight-bold">Backgroud color: <input className="mr-3" type="color" onChange={(event) => this.changeColor(event)}/></span>
          <span className="font-weight-bold">Text color: <input type="color" onChange={(event) => this.changeTextColor(event)}/></span>
        </div>
        
        <UserAddForm submitAddForm={(event, name, email, isGoldClient,salary, imgLogo) => this.submitAddForm(event, name, email, isGoldClient, salary, imgLogo)}/>
        <button className="btn btn-primary m-2 bg-primary d-inline-block" onClick={() => this.changeDisplay(true)}>Afisare Utilizatori</button>
        <button className="btn btn-primary m-2 bg-primary d-inline-block" onClick={() => this.changeDisplay(false)}> Afisare Postari</button>
        {this.state.displayUsers === true 
            ? <UserList 
                users={this.state.users}
                handleDeleteUser={id => this.handleDeleteUser(id)}
            /> 
            : <PostList/>}
      </div>
    );
  }
}

export default Home;
