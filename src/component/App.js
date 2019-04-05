import React, { Component } from 'react';
import '../css/App.css';
import Nav from './navbar.js';
import Header from './header.js';
import Card from './cards.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
