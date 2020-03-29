import React, { useState } from 'react';
import Content from './Content';
import '../styles/App.scss';
import Login from './Login';

function App() {

  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="app">
      {!isLogged && <Login setIsLogged={setIsLogged} />}
      {isLogged && <Content />}
    </div>
  );
}
export default App;
