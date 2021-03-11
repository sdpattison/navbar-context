import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MyContext from './components/Context';
import FormWrapper from './components/FormWrapper';
import Form from './components/Form';


function App() {
  const [name, setName] = useState("Todd");
  
  return (
    <div className="App">
      <MyContext.Provider value={name, setName}>
        <Navbar />
        <FormWrapper>
          <Form />
        </FormWrapper>
      </MyContext.Provider>
    </div>

  );
}

export default App;
