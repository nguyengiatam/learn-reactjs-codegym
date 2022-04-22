import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', callback: props.callback};
        this.submitLogin = this.submitLogin.bind(this)
        this.handlEventInputUser = this.handlEventInputUser.bind(this);
        this.handlEventInputPassword = this.handlEventInputPassword.bind(this)
    }

    handlEventInputUser(event) {
        this.setState({ username: event.target.value })
    }

    handlEventInputPassword(event) {
        this.setState({ password: event.target.value })
    }

    shouldComponentUpdate() {
        return false
    }

    submitLogin() {
        this.state.callback({
            username: this.state.username,
            password: this.state.password
        })
    }

    render() {
        return (
            <form className="card d-flex flex-column rounded border-success container text-center" style={{ width: "20vw" }}>
                <p className="card-title h4">Login form</p>
                <div className="card-body">
                    <input type="text" placeholder="Username" className="d-block w-100 input-group-text text-start" style={{ marginBottom: "5px" }} onChange={this.handlEventInputUser} />
                    <input type="password" placeholder="Password" className="d-block w-100 input-group-text text-start" onChange={this.handlEventInputPassword} />
                    <div>
                        <input type="checkbox" id='save-me' />
                        <label for="save-me" style={{ marginLeft: '5px' }}>Check me out</label>
                    </div>

                </div>
                <div className="card-text" style={{ margin: "0px 0px 5px 0px" }}>
                    <button onClick={this.submitLogin} className="btn btn-success">Login</button>
                </div>
            </form>
        )
    }
}