import React from 'react';
import styled from 'styled-components';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import Skill_Title from './skill-title';

import {makeSelectSkillState} from 'containers/ProfileText/selectors';

const Style = styled.div`
  position: relative;
  margin-top: 30px;
  margin-left: 40px;
`

const Inner = styled.div`
  background-color: #c7e8be;
  border-top: 4px double black;
  border-bottom: 4px double black;
  padding: 10px;
  overflow: hidden;
  transition: height .2s, opacity .2s;
  height: ${props => props.skill_state? 'auto' : '0px'};
  opacity: ${props => props.skill_state? '1' : '0'};
`

const Skill_Block = ({children,skills_list, skill, desc}) => (
  <Style skill_state={skills_list[skill]}>
    <Skill_Title skill={skill} />
    <Inner skill_state={skills_list[skill]}>
        <p>{desc}</p>
    </Inner>
  </Style>
);

function mapDispatchToProps(dispatch){
  return {

  }
}

const mapStateToProps = createStructuredSelector({
    skills_list: makeSelectSkillState()
});

export default connect(mapStateToProps,mapDispatchToProps)(Skill_Block);
