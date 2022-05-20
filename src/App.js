import logo from './logo.svg';
import './App.css';
import Selfie from './Selfie'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Selfie/>
    </div>
  );
}

export default App;
