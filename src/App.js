import logo from './logo.svg';
import './App.css';

function App() {
  function Inner(){
     return (
      <h4>Innner component</h4>
      )
  }
  return (
    <>
     <h1>Nested component</h1>
     <h4>Outer component</h4>
     <Inner/>
    </>
  );
}

export default App;
