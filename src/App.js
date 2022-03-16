//STYLING
import "./styles/app.scss";
// components
import Color from './components/Color'
import Power from './components/Power'
import Drive from './components/Drive'
import Package from './components/Package'
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <h1>Spaceship configurator</h1>
       <div className="container">
         <div className="left">
            <Color />
            <Power />
            <Drive />
            <Package />
         </div>
         <div className="right">
         <Result />
         </div>
       </div>
    </div>
  );
}

export default App;
