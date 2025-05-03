import React from 'react';
import CalculatorTable from './CalculatorTable';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Glory Calculator</h1>
      </header>
      <main>
        <CalculatorTable />
      </main>
      <footer>
        <p>Made by ARYA</p>
      </footer>
    </div>
  );
}

export default App;