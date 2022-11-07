import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.initialState = {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    };
    this.state = this.initialState;
  }
  changeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }
  changeUserName(e) {
    this.setState({
      userName: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('http://localhost:4000/signup', registered).then((res) => {
      console.log(res.data);
    });

    // window.location
    this.setState(this.initialState);
  }
  render() {
    return (
      <div>
        <div className='container'>
          <form
            action=''
            className='mt-4'
            onSubmit={this.onSubmitHandler.bind(this)}
          >
            <div className='mb-3'>
              <input
                className='form-control'
                type='text'
                name=''
                id='full_name'
                placeholder='Full Name'
                value={this.state.fullName}
                onChange={this.changeFullName.bind(this)}
              />
            </div>
            <div className='mb-3'>
              <input
                className='form-control form-group'
                type='text'
                name=''
                id='user_name'
                placeholder='Username'
                value={this.state.userName}
                onChange={this.changeUserName.bind(this)}
              />
            </div>
            <div className='mb-3'>
              <input
                className='form-control form-group'
                type='email'
                name=''
                id='_email'
                placeholder='Email : max@max.com'
                value={this.state.email}
                onChange={this.changeEmail.bind(this)}
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='mb-3'>
              <input
                className='form-control form-group'
                type='password'
                name=''
                id='_password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.changePassword.bind(this)}
              />
              <div id='passwordHelp' className='form-text'>
                Password should contains 8 characters minimum, one number && one
                special character .
              </div>
            </div>
            <button type='submit' className='btn btn-danger'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
