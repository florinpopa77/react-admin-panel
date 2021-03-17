import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import '../App.css';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import { changeBackground } from '../redux/actions/background';
import { chnageTextColor } from '../redux/actions/textColor';
import { usersDisplay } from '../redux/actions/usersDisplay';
import { getUsers } from '../redux/actions/users';
import { getPosts } from '../redux/actions/posts';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
  }

  render() {
    return(
      <div className="app p-xl-5 align-middle" style={{background: this.props.back, color: this.props.text }}>
        <h1 className="text-center mb-1">Admin panel - Proiectul 1</h1>
        
        <div className="text-center mb-3">
          <span className="font-weight-bold">Backgroud color: 
                <input className="mr-3 ml-2" 
                       type="color" 
                       onChange={(event) => this.props.changeBackground({color: event.target.value})}/>
          </span>
          <span className="font-weight-bold">Text color: 
                       <input className="ml-2"
                       type="color" 
                       onChange={(event) => this.props.changeTextColor({color: event.target.value})}/>
          </span>
        </div>
        <UserAddForm/>
        <button className="btn btn-primary m-2 bg-primary d-inline-block" 
                onClick={() => this.props.changeDisplay({users: true})}>Afisare Utilizatori</button>
        <button className="btn btn-primary m-2 bg-primary d-inline-block" 
                onClick={() => this.props.changeDisplay({users: false})}> Afisare Postari</button>
        {this.props.displayUsersPosts === true 
            ? <UserList /> 
            : <PostList/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      back: state.background.color,
      text: state.text.color,
      displayUsersPosts: state.display.users,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      changeBackground: (payload) => dispatch(changeBackground(payload)),
      changeTextColor: (payload) => dispatch(chnageTextColor(payload)),
      changeDisplay: (payload) => dispatch(usersDisplay(payload)),
      getUsers: () => dispatch(getUsers()),
      getPosts: () => dispatch(getPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
