import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IPOList from './pages/IpoList';
import IPODetails from './pages/IpoDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<IPOList />} />
          <Route path="/ipo/:id" element={<IPODetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
