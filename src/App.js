import { useState } from 'react';
import { supabase } from './supabaseClient';
import 'tufte-css/tufte.css';
import logo from './logo.svg';
import './App.css';

function Sedanlibrary() {
  const [mySedans, setMySedans] = useState ([]);
  async function getSedans() {
    let { data: sedans, error } = await supabase
      .from('sedans')
      .select('*')
    setMySedans(sedans);
  }
  getSedans();
  return(
    <div>
      <table border = "3">
      {
        mySedans.map(se => (
          <tr>
            <td>{se.id}</td>
            <td>{se.manufacturer}</td>
            <td>{se.model}</td>
            <td>{se.price}</td>
            <td>{se.mpg}</td>
          </tr>
        ))
      }
      </table>
    </div>
  )
}


function Suvlibrary() {
  const [mySuvs, setMySuv] = useState ([]);
  async function getSuvs() {
    let { data: suvs, error } = await supabase
      .from('suvs')
      .select('*')
    setMySuv(suvs);
  }
  getSuvs();
  return(
    <div>
      <table border = "3">
      {
        mySuvs.map(su => (
          <tr>
            <td>{su.id}</td>
            <td>{su.manufacturer}</td>
            <td>{su.model}</td>
            <td>{su.price}</td>
            <td>{su.mpg}</td>
          </tr>
        ))
      }
      </table>
    </div>
  )
}





function App() {
  return (
    <div className="App">
      <h1>Sedans and SUV's of 2023</h1>

      <div className='intro'>
        <p>For the past 10 years, vehicles have continued to increase in price and this shows no sighns of slowing. The more technology that is being integrated into our everyday cars has caused the prices to skyrocket, making it difficult to find sinple everyday cars for cheaper prices.</p>

        <p>This being said, we have decided to go through the most commonly purchased auto manufacurer brands and have brought you, whatwe believe to be the best looking vehicles from these manufacturers for their price this year (2023)</p>

        <p>Below is a list, in no particular order, of these vehicles, allong with their manufacturer, price and fuel economy (City and HIghway respectively)</p>
      </div>

      <header className="App-header">

        <div>
        <p className='subtitle'>Sedans</p>
          <Sedanlibrary />
        </div>

        <div>
          <p className='subtitle'>SUV's</p>
          <Suvlibrary />
        </div>

      </header>
    </div>
  );
}

export default App;
