import React from 'react';
import Section1Component from './section_components/Section1Component.js';
import Section2Component from './section_components/Section2Component.js';
import Section3Component from './section_components/Section3Component.js';
import Section4Component from './section_components/Section4Component.js';
import Section5Component from './section_components/Section5Component.js';
import Section6Component from './section_components/Section6Component.js';
import Section7Component from './section_components/Section7Component.js';
import Section8Component from './section_components/Section8Component.js';

const MainComponent = () => {
  return (
    <main id="main">
      <Section1Component/>
      <Section2Component/>
      <Section3Component/>
      <Section4Component/>
      <Section5Component/>
      <Section6Component/>
      <Section7Component/>
      <Section8Component/>
    </main>
  );
};

export default MainComponent;