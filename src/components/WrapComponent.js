import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import PopVideoComponent from './PopVideoComponent.js';
import ChatbotComponent from './ChatbotComponent.js';
import GoToTopComponent from './GoToTopComponent.js';

const WrapComponent = () => {
  return (
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <PopVideoComponent/>
      <ChatbotComponent/>
      <GoToTopComponent/>
    </div>
  );
};

export default WrapComponent;