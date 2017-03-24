/*
 *
 * AboutMe
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectAboutMe from './selectors';

export class AboutMe extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>


      </div>
    );
  }
}

AboutMe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AboutMe: makeSelectAboutMe(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
