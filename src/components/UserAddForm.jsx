import React from 'react';
import './UserAddForm.css';
import {validateEmail} from '../utils/EmailValidator';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/users';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: 0,
            imgLogo: "https://img.pngio.com/bluecircleclip-artsymbollogographics-4367591-free-png-library-user-logo-png-250_250.png"
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalary(event){
        this.setState({salary: event.target.value});
    }

    updateImgLogo(event){
        this.setState({imgLogo: event.target.value})
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

        this.props.addUser({user:               {
            id: this.getMaxId(this.props.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            imgLogo
          }
        });
      }
    

    render() {
        const {name, email, isGoldClient, salary, imgLogo} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.submitAddForm(event, name, email, isGoldClient, salary, imgLogo)}
            >
                <h2>Adauga utilizatori:</h2>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-1 col-form-label">Nume</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateName(event)} 
                               id="name" 
                               placeholder="Nume"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-1 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateEmail(event)} 
                               id="email" 
                               placeholder="Email"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-1 col-form-label">Salariu</label>
                    <div className="col-sm-10">
                        <input type="number" 
                               className="form-control" 
                               onChange={(event) => this.updateSalary(event)} 
                               id="salary" 
                               placeholder="Salariu"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="img" className="col-sm-1 col-form-label">Imagine</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateImgLogo(event)} 
                               id="img" 
                               placeholder="Imagine"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="is-gold-client" className="col-sm-1 col-form-label">Client GOLD</label>
                    <div className="col-sm-1">
                        <input type="checkbox" 
                               className="form-control" 
                               onChange={(event) => this.updateIsGoldClient(event)} 
                               id="is-gold-client" 
                        />
                    </div>
                </div>

                <input className="btn btn-primary" type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUser: (payload) => dispatch(addUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);