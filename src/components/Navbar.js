import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  
  render() {
    return (
      <div className='navbar'>
        <div className='title1'>News-Monkey</div>
        <div className='navbar-buttons'><Link to="/">HOME</Link></div>
        <div className='navbar-buttons'><Link to="/business">Business</Link></div>
        <div className='navbar-buttons'><Link to="/entertainment">Entertainment</Link></div>
        <div className='navbar-buttons'><Link to="/general">General</Link></div>
        <div className='navbar-buttons'><Link to="/health">Health</Link></div>
        <div className='navbar-buttons'><Link to="/science">Science</Link></div>
        <div className='navbar-buttons'><Link to="/sports">Sports</Link></div>
        <div className='navbar-buttons'><Link to="/technology">Technology</Link></div>
      </div>
    );
  }
}

export default Navbar;
