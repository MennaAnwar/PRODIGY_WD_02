import "./App.css";
import StopWatch from "./components/StopWatch";
import img from "./stopwatch.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="stopwatch-img">
          <img src={img} />
        </div>
        <h2>Stop Watch</h2>
        <StopWatch />
      </header>
    </div>
  );
}

export default App;
