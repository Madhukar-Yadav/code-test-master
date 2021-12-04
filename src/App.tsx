import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home, Learn, Shop} from './components';
import './App.css';

function App(props: any) {
  return (
    <div className="App">
      <div className='Header'>
        <a href='https://www.volvocars.com/in'>
          <img 
            alt='volvo-logo'
            className='Header-logo'
            src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"
          />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop:carID" element={<Shop />} />
        <Route path="/Learn:carID" element={<Learn />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>No Information Available!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
