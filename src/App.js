import React from 'react';
import { useFormFields } from './hooks/useForm';
import './App.css';

function App() {

  const [values, handleFieldChange] = useFormFields({email: "", password: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  return (
      <div className="App" style={{ margin: '50px'}}>
        <form onSubmit={handleSubmit}>
          <input type="eamil" value={values.email} onChange={handleFieldChange} name="email"/>
          <input type="password" value={values.password} onChange={handleFieldChange} name="password"/>
          <button htmltype="submit">Submit</button>
        </form>
      </div>
  );
}

export default App;
