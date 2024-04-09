import React from 'react';
import ImageUploadForm from './ImageUploadForm';
import ComponentWeb from './ComponentWeb';
import MaskedVideo from './MaskedVideo'; // Import the MaskedVideo component

function App() {
  return (
    <div>
      <div className="App">
        {/* <h1>Waste Classification App</h1> */}
        <ComponentWeb/>
        {/* <ImageUploadForm /> */}
      </div>
      <div>
        <MaskedVideo />
        <h1>Mehvish</h1>
      </div>
    </div>
  );
}

export default App;
