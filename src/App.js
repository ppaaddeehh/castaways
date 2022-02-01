import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <section className="ctas">
        <a href="steam://connect/185.44.78.3:28025">
          <span>Play</span>
        </a>
        <a href="https://discord.gg/3FFPbJBXMZ">
          <span>Discord</span>
        </a>
        <a href="https://twitch.tv/enumbars">
          <span>Twitch</span>
        </a>
      </section>
    </div>
  );
}

export default App;
