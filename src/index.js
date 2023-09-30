import React from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import HelloWorld from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg="Hello,World!" />
          <HelloWorld msg="State using functional component!" />
        </div>
      </div>
    </div>

  </React.StrictMode>
);