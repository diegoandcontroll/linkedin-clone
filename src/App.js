import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

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
