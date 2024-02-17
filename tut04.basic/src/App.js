//import logo from './logo.svg';
import './App.css';

let name ="Vaishnavi";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
        <li>service</li>
      </nav>
      <div className="container">
        <h1>hello {name}</h1>
        <p className="text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore tempore cumque amet ea consectetur modi. Repellat, eaque. Magnam tempore ipsam maxime ducimus!</p>
      </div>
      </>
  );
}

export default App;
