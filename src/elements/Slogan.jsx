import React, { Component } from 'react';

import SwiperCarousel from './SwiperCarousel';
import ScrollVelocity from '../components/ScrollVelocity';

import { motion, useScroll, useTransform } from 'framer-motion';

import N from '../assets/images/slogan/N.svg';

class Slogan extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slogan-wrapper">
          {/* <div className="container"> */}
          <div className="slogan">
            <div className="inner">
              <div className="slogan-top">
                {/* <div className="slogan-title">
                  <img src={N} alt="sloganN" />
                  <h2>Play byoyond the limits</h2>
                </div> */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <div className="marquee-track">
                    {[...Array(3)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="slogan-title"
                        initial={{ opacity: 1, scale: 1 }}
                        // whileHover={{
                        //   scale: 1.05,
                        //   rotate: 2,
                        //   animationPlayState: 'paused',
                        //   transition: { duration: 0.3 },
                        // }}
                      >
                        <h2>Play Beyond The Limits</h2>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="slogan-subtitle">
                  We don`t just build games - we craft unforgettable experiencies. Our team combines creativity, technology, and passion to
                  deliver worlds that players love and remember. With us, your vision becomes a living, brathing adventure.
                </div>
              </div>
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
