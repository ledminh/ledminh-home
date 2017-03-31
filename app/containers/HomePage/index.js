/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';



import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';


import Header from 'components/Header';
import Navigation from 'components/Navigation';

import MainFrame from './components/main_frame';
import TopBar from './components/top_bar';
import LeftBar from './components/left_bar';
import MainContent from './components/main_content';
import ProfileButtons from 'components/ProfileButtons';

import ProfileText from 'components/ProfileText';

import ProfilePicture from 'containers/ProfilePicture';


import {makeSelectCurrentProfile, makeSelectCurrentSection} from './selectors';

import messages from './messages';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <Helmet
            title="::: LEDMINH HOME :::"
            meta={[
              { name: 'description', content: 'My Portfolio Website' },
              { name: 'keywords', content: 'React, Redux, Node.js, JavaScript, mongoDB, freeCodeCamp, Express.js'},
              { name: 'author', content: 'Minh Le'}
            ]}
          />
          <Header />
          <Navigation />

          <MainFrame current_profile={this.props.current_profile}>
              <TopBar>
                  <ProfilePicture  />
                  <ProfileButtons current_profile={this.props.current_profile}/>
              </TopBar>

              <LeftBar>
                  <ProfilePicture  />
                  <ProfileButtons current_profile={this.props.current_profile} />
              </LeftBar>


              <MainContent current_profile={this.props.current_profile}>
                  <ProfileText current_profile={this.props.current_profile}
                                current_section={this.props.current_section}/>
              </MainContent>
          </MainFrame>
      </div>
    );
  }
}

HomePage.propTypes = {
  current_profile: React.PropTypes.string,
  current_section: React.PropTypes.string
}

function mapDispatchToProps(dispatch){
  return {

  }
}


const mapStateToProps = createStructuredSelector({
  current_profile: makeSelectCurrentProfile(),
  current_section: makeSelectCurrentSection()
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
