import {Student} from './Components/student.js';
import './App.css';

function App() {
  const data = [
    {
      id: 'Id',
      name: 'Name',
      age: 'Age',
      address: 'Address'
    },
    {
      id: 1,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 2,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 3,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },{
      id: 4,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 5,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 6,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 7,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 8,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
    {
      id: 9,
      name: 'Nguyễn Văn A',
      age: 21,
      address: 'Hà Nội'
    },
  ];
  return (
    <div className="App container">
      {data.map(val => <Student value={val}/>)}
    </div>
  );
}

export default App;
