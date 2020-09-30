import React from 'react';
import './home-page.css';
import HomebuttonLayout from './homebutton-layout';
import ClassSelect from './class-selection';

function HomePage() {
  return (
        <div>
          <ClassSelect></ClassSelect>
          <HomebuttonLayout></HomebuttonLayout>
        </div>
      
  );
}

export default HomePage;