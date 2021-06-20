import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import PressKit from './components/pages/PressKit';
import Blog from './components/pages/Blog';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component=
                    {Home}
                />
                <Route path='/presskit' component=
                    {PressKit}
                />
                <Route path='/blog' component=
                    {Blog}
                />

            </Switch>
            
            <Footer />
        </Router>
        </>
    );
}

export default App;