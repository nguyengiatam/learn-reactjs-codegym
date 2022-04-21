import {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.getValue = this.getValue.bind(this)
  }

  getValue(event) {
    this.setState({value: event.key})
  }

  render() {
    return (
      <from className="card container text-center w-25">
        <p style={{fontWeight: "bold"}}>Key press is: {this.state.value}</p>
        <input type="text" name='abc' value={this.state.value} onKeyDown={this.getValue}/>
      </from>
    )
  }
}

