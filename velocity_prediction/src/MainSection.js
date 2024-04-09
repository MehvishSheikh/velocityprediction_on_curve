import React, { useState } from 'react';
import MaskedVideo from './MaskedVideo'; // Import your MaskedVideo component

const MainSection = () => {
  const [showMaskedVideo, setShowMaskedVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowMaskedVideo(true);
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
            <div className="page">
              <form>
                <button type="button" className='classify-button' onClick={handlePlayButtonClick}>Play</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/img/recycling.jpeg" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

      {showMaskedVideo && <MaskedVideo />}
    </section>
  );
};

export default MainSection;
