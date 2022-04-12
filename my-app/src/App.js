import './App.css';

export function Func1(props) {
  return (
    <div className="App">
      <h1>{props.name}</h1>
      <ul>
        { props.fruits.map(val => <li>{val}</li>) }
      </ul>
    </div>
  );
}

export function Func2(props) {
  return (
    <div className="App">
      <img src={props.src} alt="."/>
    </div>
  );
}

export function ShowTime() {
  return (
    <div>
      <h1>Time</h1>
      <h3>It is {new Date().getUTCFullYear()}</h3>
    </div>
  )
}

