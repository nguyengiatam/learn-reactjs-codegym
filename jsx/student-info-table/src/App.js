import './App.css';

function App(props) {
  return (
    <div className="App">
      <table className="table">
        <tr className="raw">
          <th className="col title">Company</th>
          <th className="col title">Contact</th>
          <th className="col title">Country</th>
        </tr>
        {props.studentList.map(student => <tr className="raw">
          <th className="col value">{student.company}</th>
          <th className="col value">{student.contact}</th>
          <th className="col value">{student.country}</th>
        </tr>)}
      </table>
    </div>
  );
}

export default App;
