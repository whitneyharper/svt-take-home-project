import React from 'react';
import Search from './components/Search';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Search />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
