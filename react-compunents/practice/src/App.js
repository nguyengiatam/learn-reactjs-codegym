import { AddClassComponent } from './components/AddClassComponent';
import { AddFuncComponent } from './components/AddFuncComponent';
import './App.css';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <AddFuncComponent firstNumber={4} secondNumber={3} />
      <AddClassComponent firstNumber={1} secondNumber={2} />
      <Welcome name={'MaxSida'} />
    </div>
  );
}

export default App;
