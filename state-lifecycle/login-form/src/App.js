import { Component } from 'react';
import './App.css';
import { Login } from './components/login-form.js'
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  async login(user) {
    let userRegex = /^\w{6,}$/
    let passwordRegex = /(?=.*\d+)(?=.*[a-z]+).{8,}$/
    if (userRegex.test(user.username) && passwordRegex.test(user.password)) {
      const bodyRequest = {
        username: user.username,
        password: user.password
      }
      let res = await axios.post('/login', bodyRequest)
      alert("Xin Chào " + res.data.name)
      window.location.href = res.data.url
    } else {
      alert('Tên hoặc mật khẩu không chính xác')
    }
  }

  render() {
    return (
      <Login callback={this.login} />
    )
  }
}
