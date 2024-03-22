import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome'
import Greed from './component/Greed'
import Count from './component/Count'
import Parent from './component/Parent';


function App() {
  return (
    <div className="App">
     {/* <Welcome name="props1" />
     <Greed name="propos2"/>
     <Count  count={10}/> */}
     <Parent />
    </div>
  );
}

export default App;
