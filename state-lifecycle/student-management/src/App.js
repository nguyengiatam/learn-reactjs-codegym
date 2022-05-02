import "./App.css";
import { Student } from "./components/student";
import { Component } from "react";

export class App extends Component {
  static id = 0;
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      inputNewValue: {
        name: '',
        phone: '',
        email: ''
      }
    };
    this.removeStudent = this.removeStudent.bind(this);
    this.inputName = this.inputName.bind(this);
    this.inputPhone = this.inputPhone.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  inputName(event) {
    this.setState({
      inputNewValue: {
        ...this.state.inputNewValue,
        ...{ name: event.target.value }
      }
    })
  }

  inputPhone(event) {
    this.setState({
      inputNewValue: {
        ...this.state.inputNewValue,
        ...{ phone: event.target.value }
      }
    })
  }

  inputEmail(event) {
    this.setState({
      inputNewValue: {
        ...this.state.inputNewValue,
        ...{ email: event.target.value }
      }
    })
  }

  addStudent() {
    const student = {
      id: App.id,
      ...this.state.inputNewValue,
      removeStudent: this.removeStudent
    }
    this.setState({ studentList: [...this.state.studentList, student] })
    App.id++;
  }

  removeStudent(studentId) {
    console.log(this);
    let newListStudent = this.state.studentList.filter(student => student.id !== studentId)
    this.setState({
      studentList: newListStudent
    });
  }

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="d-flex justify-content-center" style={{margin: '5px'}}>
            <span style={{width: '15%'}} htmlFor="input-name">Name</span>
            <input className="w-25" id="input-name" type="text" placeholder="" value={this.state.inputNewValue.name} onChange={this.inputName} />
          </div>
          <div className="d-flex justify-content-center" style={{margin: '5px'}}>
            <span style={{width: '15%'}} htmlFor="input-phone">Phone</span>
            <input className="w-25" id="input-phone" type="text" placeholder="" value={this.state.inputNewValue.phone} onChange={this.inputPhone} />
          </div>
          <div className="d-flex justify-content-center" style={{margin: '5px'}}>
            <span style={{width: '15%'}} htmlFor="input-email">Email</span>
            <input className="w-25" id="input-email" type="text" placeholder="" value={this.state.inputNewValue.email} onChange={this.inputEmail} />
          </div>
          <button className="btn btn-primary" style={{margin: '5px'}} onClick={this.addStudent}>Add student</button>
        </div>
        <table className="table table-striped text-center">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {this.state.studentList.map((student) => <Student value={student} key={student.id} />)}
        </table>
      </div>

    );
  }
}
