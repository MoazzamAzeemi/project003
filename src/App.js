import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Edited by Moazzam</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited <code>src/App.js</code> and pushed to github.
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
