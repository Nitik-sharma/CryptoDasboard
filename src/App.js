import React from 'react';
import './App.css';
import Footer from './Component/Common/Footer/Footer';
import Header from './Component/Common/Header/Header';
import MainComp from './Component/LandingPage/MainComponent';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import WatchListPage from './pages/WatchList';
import ComparePage from './pages/Compare';
import CoinPage from './pages/Coin';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/coin/:id' element={<CoinPage/>}/>
      <Route path='/compare' element={<ComparePage/>}/>
      <Route path='/watchlist' element={<WatchListPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
