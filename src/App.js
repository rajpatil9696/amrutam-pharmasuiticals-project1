import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Info from './components/Info'
import Specialize from './components/Specialize';
import Concers from './components/Concers';
import Workexperience from './components/Workexperience';
import Featured from './components/Featured';
import Appoinment from './components/Appoinment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Info></Info>
      <Specialize></Specialize>
      <Concers></Concers>
      <Workexperience></Workexperience>
      <Featured></Featured>
      <Appoinment></Appoinment>
    </div>
  );
}

export default App;
