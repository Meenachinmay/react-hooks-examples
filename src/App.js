import React, { useState } from 'react';
import './App.css';

function App() {

  // USING REACT USESTATE HOOK NORMALLY
  // const [product, setProduct] = useState('');
  //
  // const handleProductSubmit = (e) => {
  //   e.preventDefault();
  //
  //   console.log(product);
  // }

  //  USING REACT useSTATE HOOKS WITH ARRAY
  // const [names, setNames] = useState([]);
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setNames([
  //     ...names,
  //     {
  //       id: Date.now(),
  //       firstName: firstname,
  //       lastName: lastname,
  //       Email: email
  //     }
  //   ]);
  // }

  return (
    <div className="App" style={{ margin: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Firatname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button htmltype="submit" style={{ margin: '10px'}} onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            {name.firstName}, {name.lastName}, {name.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
