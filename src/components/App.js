import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            AAVE Connect
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <div className="content mx-auto mt-5">
                {/* Added Ethereum Balance heading */}
                <h2>Ethereum Balance:</h2>
                <p>10 eth</p>
                {/* Added DAI Balance heading */}
                <h2>DAI Balance:</h2>
                <p>1000 DAI</p>
                {/* Added Borrow DAI button */}
                <button onClick={() => alert("Borrow DAI")}>Borrow DAI</button>
              </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
