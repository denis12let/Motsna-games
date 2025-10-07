import React, { Component } from 'react';

class Outsource extends Component {
  render() {
    let title = 'About',
      description =
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    return (
      <React.Fragment>
        <div className="outsource-wrapper">
          <div className="container">
            <div className="outsource">
              <div className="inner">
                <span>Ready To Do This</span>
                <h2>
                  Let's get <br /> to work
                </h2>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Outsource;
