import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

export default class App extends Component {
  apiKey=  process.env.REACT_APP_API_KEY;
  
  render() {
   
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exast path="/" element={<News  apiKey={this.apiKey} key="general" pageSize={15} country ="in" category="general"/>} />
            <Route exast path="/business" element={<News apiKey={this.apiKey} key="business"  pageSize={15} country ="in" category="business"/>} />
            <Route exast path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment "pageSize={15} country ="in" category="entertainment"/>} />
            <Route exast path="/health" element={<News apiKey={this.apiKey} key="health"  pageSize={15} country ="in" category="health"/>} />
            <Route exast path="/science" element={<News apiKey={this.apiKey} key="science"  pageSize={15} country ="in" category="science"/>} />
            <Route exast path="/sports" element={<News  apiKey={this.apiKey}key="sports"  pageSize={15} country ="in" category="sports"/>} />
            <Route exast path="/technology" element={<News apiKey={this.apiKey} key="technology"  pageSize={15} country ="in" category="technology"/>} />
            <Route exast path="/general" element={<News  apiKey={this.apiKey} key="general" pageSize={15} country ="in" category="general"/>} />

          </Routes>
        </Router>

     
        
        
        
      </div>
    )
  }
}

