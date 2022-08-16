import React from 'react';
import ReactDOM from 'react-dom/client';
import SkipComponent from './components/SkipComponent.js';
import WrapComponent from './components/WrapComponent.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SkipComponent/>
    <WrapComponent/>
  </>
);