import React from 'react';
import ImageUploadForm from './ImageUploadForm';
import ComponentWeb from './ComponentWeb';
import MaskedVideo from './MaskedVideo'; // Import the MaskedVideo component
import MainSection from './MainSection';

function App() {
  return (
    <div>
      <div className="App">
        {/* <h1>Waste Classification App</h1> */}
        <ComponentWeb/>
        {/* <MainSection/> */}
        {/* <ImageUploadForm /> */}
      </div>
      {/* <div>
        <MaskedVideo />
      </div> */}
    </div>
  );
}

export default App;
