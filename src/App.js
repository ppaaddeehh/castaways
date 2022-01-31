import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <section className="ctas">
        <button>Play</button>
        <button>Discord</button>
        <button>Twitch</button>
      </section>
    </div>
  );
}

export default App;
