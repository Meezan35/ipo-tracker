import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IPOList from './pages/IpoList';
import IPODetails from './pages/IpoDetails';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Router */}
      <Router>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<IPOList />} />
            <Route path="/ipo-details/:id" element={<IPODetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
