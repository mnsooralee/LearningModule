import logo from './logo.svg';
import './App.css'; //
import { useState } from 'react';
import NavBar from './my-components/NavBar';
import Footer from './my-components/Footer';

function App() {  
  const [value, setValue] = useState(0);//const [name, function] = default value (any); created new state named "value", which has default value 0 and can be updated by setValue
  //state: any variable that we can change using dom
  return (
    <div className="App">
      <NavBar/>
      Hello world
       <div className='value'>{value}</div>
       <button onClick={() => {setValue(value+1)}}>Click me</button>
       <Footer/>
    </div>
    //Hello world cannot write here
  );
}

export default App;
