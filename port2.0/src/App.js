// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>
        <p>
          the section that needed to have to talk about my portfiolio. 
          If you click the portfolio button in the Navbar, then it will launch portfolio1.0
        </p>
      </h1>
      <Footer />

      
    </div>
    
  );
}

export default App;
