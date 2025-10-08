import React, { Component } from 'react';

import CircularGallery from '../components/CircularGallery';
import SwiperCarousel from './SwiperCarousel';

class Slogan extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slogan-wrapper">
          {/* <div className="container"> */}
          <div className="slogan">
            <div className="inner">
              <SwiperCarousel />
            </div>
          </div>
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Slogan;

<SwiperCarousel />;
