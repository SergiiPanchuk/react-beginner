import "./App.css";

function Greeting({name}) {
  return <h1 className="greeting">Hello {name} Welcome.</h1>;
}

function App() {
  return <Greeting name="Sergii" />;
}

export default App;
