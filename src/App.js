import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  const cookie={
    backgroundColor:"#dddddd",
    height: '100vh',
    padding:'10px',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    borderStyle:'border-box',
    border:'3px solid green',
    alignItems:'stretch'
  }
  return (
    <div style={cookie} className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContent />
            <SubContent />
            <SubContent />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;
