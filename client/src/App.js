import './App.css';
import Navbar from './Components/Navbar/navbar';
import Jumbotron from './Components/Jumbotron/jumbotron';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">

        <Jumbotron/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
