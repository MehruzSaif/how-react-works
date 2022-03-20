import './App.css';
import Device from './componenets/Device/Device';
import Watch from './componenets/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="iphone 13 Pro Max" price="1,50,000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
