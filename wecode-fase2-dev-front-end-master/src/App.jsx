import React from 'react';
import './App.scss';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './Routes/AppRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
