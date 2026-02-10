import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h1>Brent Oil Price Analysis Dashboard</h1>
      </header>
      <main className="container">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
