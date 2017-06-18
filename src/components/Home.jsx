import React from 'react';
import Navbar from './Navbar';

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <Navbar />
      <div className="col-sm-12 header">
        <h1>Home</h1>
      </div>
        <ul className="list">
          <li className="col-sm-4 list-item">
            <img className="img-responsive" src="https://unsplash.it/200" alt="purchase"/>
            <h4>Caption</h4>
          </li>
          <li className="col-sm-4 list-item">
            <img className="img-responsive" src="https://unsplash.it/200" alt="purchase"/>
          </li>
          <li className="col-sm-4 list-item">
            <img className="img-responsive" src="https://unsplash.it/200" alt="purchase"/>
          </li>
        </ul>
    </div>
  </div>
)

export default Home;