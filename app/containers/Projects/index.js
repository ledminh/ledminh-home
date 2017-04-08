/*
 *
 * Projects
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectProjects from './selectors';
import {dataRequest} from './actions';

import ProjectBox from './components/project-box';

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
        {renderProjectBoxs(this.props.projects)}
      </div>
    );
  }
}

Projects.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initData: () => dispatch(dataRequest(DATA_INITIAL))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
