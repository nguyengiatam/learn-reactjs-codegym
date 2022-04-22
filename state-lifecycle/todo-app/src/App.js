import { Work } from './components/work';
import { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: [],
      workName: '',
      workTimeStart: '',
      workTimeEnd: '',
      status: null
    }
  }
  render() {
    return (
      <div className="App">
        <form className="input-value">
          <input type="text" className="input-group" placeholder="Nhập tên công việc" onChange={() => {this.setState({workList: this.state.workList})}}/>
        </form>
        <div className="list-group">

        </div>
      </div>
    );
  }
}

export default App;
