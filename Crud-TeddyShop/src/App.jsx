import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import NavbarRoutes from './routes/NavbarRoutes';

import theme from './Theme/theme';

function App(){
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar/>
                <div className='content'>
                    <NavbarRoutes />
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;