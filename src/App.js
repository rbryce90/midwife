import React from 'react';
import MyHeader from './components/header/MyHeader';
import Routes from './components/Routes';
import Banner from './components/header/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <MyHeader />
      <Routes />
    </div>
  );
}

export default App;
