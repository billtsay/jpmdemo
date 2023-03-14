import React from 'react';
import './App.css';

const SignIn = React.lazy(() => import('jpm/SignIn'));

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
