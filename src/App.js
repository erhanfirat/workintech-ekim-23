import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  const PI = 3.1415;

  return (
    // JSX - Updated HTML
    <div className="App">
      <Greeting></Greeting>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
