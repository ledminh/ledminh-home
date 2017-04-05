import React from 'react';

//import Style from './style';

import Summary from './summary';
import Skills from './components/skills';
import Experience from './experience';
import Education from './education';

class ProfileText extends React.PureComponent {
  render(){
    return (
      <div>
          <Summary current_profile={this.props.current_profile} current_section={this.props.current_section}/>
          <Skills current_profile={this.props.current_profile} current_section={this.props.current_section}/>
          <Experience current_profile={this.props.current_profile} current_section={this.props.current_section}/>
          <Education current_profile={this.props.current_profile} current_section={this.props.current_section}/>
      </div>
    )
  }
}

ProfileText.propTypes = {
    current_profile: React.PropTypes.string,
    current_section: React.PropTypes.string
}

export default ProfileText;
