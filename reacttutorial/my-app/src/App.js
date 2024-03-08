import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="App-link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>
      <button className="button" onClick={hideTitle}>
          Hide learn react title
      </button>
    </div>
    </>
  );
}

function hideTitle(){
    document.getElementById("App-link").style.display = "none";
}

export default App;
