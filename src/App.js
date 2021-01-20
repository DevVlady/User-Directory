import './App.css';
import React from 'react';
import Header from './components/Header/index';
import Form from './components/Form/index';
import Table from './components/Table/index';
import Directory from './pages/Directory';


function App() {
  return (
    <div>
      <Header/>
      <Form/>
      <Table/>
      <Directory/>
    </div>
  );
}

export default App;
