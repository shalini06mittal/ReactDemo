import logo from './logo.svg';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <div className="main ui text container">
  
          <div className="ui dividing centered header"> 
            <h1>Currency Converter</h1>
            <h2>
              <i className="fa fa-dollar" style={{color: "#ffb3ba"}}></i>
              <i className="fa fa-gbp" style={{color:"#bae1ff"}}></i>
              <i className="fa fa-eur" style={{color:"#c6acc7"}}></i>
            </h2>
        </div>
        </div>
        <CurrencyConverter/>
    </div>
  );
}

export default App;
