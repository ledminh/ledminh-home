import React from 'react';
import styled from 'styled-components';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {makeSelectSkillState} from 'containers/ProfileText/selectors';
import {toggleSkill} from 'containers/ProfileText/actions';

const Style = styled.div`
  position: absolute;
  top: -15px;
  left: -10px;
  background-color: #8cb082;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  transform-origin: left bottom;
  transform: ${props => props.skill_state? 'rotate(-10deg)' : 'rotate(0deg)' };

  transition: transform .2s;
`;

const Skill_Title = ({skill, onClick, skills_list}) => (
  <Style onClick={onClick(skill)} skill_state={skills_list[skill]}>
        {skill}
  </Style>
);


function mapDispatchToProps(dispatch){
  return {
    onClick : (skill) => (e) => dispatch(toggleSkill(skill))
  }
}


const mapStateToProps = createStructuredSelector({
    skills_list: makeSelectSkillState()
});

export default connect(mapStateToProps,mapDispatchToProps)(Skill_Title);
