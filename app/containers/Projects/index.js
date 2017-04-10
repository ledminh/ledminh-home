/*
 *
 * Projects
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import makeSelectProjects from './selectors';
import {makeSelectCurrentLarge} from './selectors';

import {dataRequest} from './actions';


import ProjectBox from './components/project-box';
import Frame from './frame';

import {renderProjectBoxs} from './utils';

import {
  DATA_INITIAL
} from './constants';

export class Projects extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    this.props.initData();
  }

  render() {
    return (
      <div>
        <Helmet
          title="::: PROJECTS - LEDMINH HOME:::"
          meta={[
            { name: 'Projects', content: "All of the projects that I've done so far"},
            { name: 'keywords', content: 'React, Redux, Node.js, JavaScript, mongoDB, freeCodeCamp, Express.js'},
            { name: 'author', content: 'Minh Le'}
          ]}
        />
        <Header />
        <Navigation />

        <Frame>
            {renderProjectBoxs(this.props.projects)}
        </Frame>
      </div>
    );
  }
}

Projects.propTypes = {
  dispatch: PropTypes.func.isRequired,
  current_large : PropTypes.string,
  projects: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
  current_large: makeSelectCurrentLarge()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initData: () => dispatch(dataRequest(DATA_INITIAL))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
