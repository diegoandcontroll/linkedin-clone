import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
        <Header />
      {/* AppBody */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/* SideBar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
