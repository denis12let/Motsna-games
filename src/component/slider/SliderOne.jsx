import React, { Component } from 'react';
import ServiceOne from '../../elements/service/ServiceOne';

import RotatingText from '../../components/RotatingText';

import logoBig from '../../assets/images/logo/big-logo.svg';
import appStore from '../../assets/images/stores/APPLE.svg';
import googlePlay from '../../assets/images/stores/GOOGLE.svg';
import inImg from '../../assets/images/stores/in.svg';

class SliderOne extends Component {
  render() {
    return (
      <div className="slider-activation">
        <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  {/* <h1 className="title theme-gradient">
                    A digital <br /> agency.{' '}
                  </h1> */}
                  <div className="logo-1">
                    <img class="logo-big" src={logoBig} alt="Motsna games" />
                  </div>
                  <div class="animated-text">
                    <div class="static-text">GAMES POWERED BY</div>
                    <div class="changing-word">
                      <RotatingText
                        texts={[
                          { text: 'Passion', color: '#d83838' },
                          { text: 'Creativity', color: '#1ae62b' },
                          { text: 'Technologies', color: '#4863fc' },
                        ]}
                        // mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        // staggerFrom={'first'}
                        // initial={{ y: '-120%' }}
                        // animate={{ y: 0 }}
                        // exit={{ y: '120%' }}
                        // staggerDuration={0}
                        // splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        // transition={{ type: 'linear', duration: 0.8, damping: 30, stiffness: 400 }}
                        // rotationInterval={2000}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center
                      rounded-lg"
                        staggerFrom={'last'}
                        initial={{ y: '-120%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '110%' }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="store-footer">
                  <div className="footer-stores">
                    <div className="app-store store">
                      <img src={appStore} alt="" />
                    </div>
                    <div className="google-play store">
                      <img src={googlePlay} alt="" />
                    </div>
                  </div>
                  <div className="footer-in store">
                    <img src={inImg} alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SliderOne;
