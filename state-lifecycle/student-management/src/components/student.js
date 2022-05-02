import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.value.id,
            name: props.value.name,
            phone: props.value.phone,
            email: props.value.email,
            button: 'Edit',
            changeInfo: {
                name: props.value.name,
                phone: props.value.phone,
                email: props.value.email,
            },
            callback: props.value.removeStudent
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.remove = this.remove.bind(this)
    }

    changeName(event) {
        this.setState({
            changeInfo: {
                name: event.target.value,
                phone: this.state.changeInfo.phone,
                email: this.state.changeInfo.email,
            },
            name: <input type="text" value={event.target.value} onChange={this.changeName}/>,
        })
    }

    changePhone(event) {
        this.setState({
            changeInfo: {
                name:  this.state.changeInfo.name,
                phone: event.target.value,
                email: this.state.changeInfo.email,
            },
            phone: <input type="text" value={event.target.value} onChange={this.changePhone}/>,
        })
    }

    changeEmail(event) {
        this.setState({
            changeInfo: {
                name: this.state.changeInfo.name,
                phone: this.state.changeInfo.phone,
                email: event.target.value,
            },
            email: <input type="text" value={event.target.value} onChange={this.changeEmail}/>,
        })
    }


    changeInfo() {
        if(this.state.button === 'Edit'){
            this.setState({
                name: <input type="text" value={this.state.name} onChange={this.changeName}/>,
                phone: <input type="text" value={this.state.phone} onChange={this.changePhone}/>,
                email: <input type="text" value={this.state.email} onChange={this.changeEmail}/>,
                button: "Save"
            })
        } else {
            this.setState({
                name: this.state.changeInfo.name,
                phone: this.state.changeInfo.phone,
                email: this.state.changeInfo.email,
                button: "Edit"
            })
            // this.state.updateStuden(this.state)
        }
    }

    remove(){
        this.state.callback(this.state.id)
    }

    render() {
        return (
            <tr>
                <td className="w-25">{this.state.name}</td>
                <td className="w-25">{this.state.phone}</td>
                <td className="w-25">{this.state.email}</td>
                <td className="w-25"><button className="btn btn-info" onClick={this.changeInfo}>{this.state.button}</button><button className="btn btn-danger" onClick={this.remove}>Delete</button></td>
            </tr>
        )
    }
}