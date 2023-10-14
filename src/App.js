import React from 'react';
import './App.css';
import Footer from './Component/Common/Footer/Footer';
import Header from './Component/Common/Header/Header';
import MainComp from './Component/LandingPage/MainComponent';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainComp/>
    {/* <Footer/> */}
    
    </div>
  );
}

export default App;
