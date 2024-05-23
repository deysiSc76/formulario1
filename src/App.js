import Form from './component/Form';
import Result from './component/Result';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
     <Form inputs={state} setInputs={setState}/>
    <Result data={state}/>
    </div>
  );
}

export default App;
