import './App.css';
import Album from './pages/Album';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Album />
    </div>
  );
}
export default App;
