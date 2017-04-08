import React from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Category from './category';
import Title from './title';
import Description from './description';

import {
  PROJECT_BOX__HOVER,
  PROJECT_BOX__NORMAL
} from 'containers/Projects/constants';

import {change_CSS_State} from 'containers/Projects/actions';

const Wrapper = styled.div`
  position: relative;
  float: left;
  margin: 50px 10px 0px 10px;
  width: 210px;
  height: ${250*210/200}px;
`

const Style = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 200px;
  height: 250px;
  box-shadow: 0px 0px 10px 2px;
  cursor: pointer;

  background-color: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `#c4c4c4` : `#a2a1e2`};

  transition: width .2s, height .2s;

  &:hover {
    width: 100%;
    height: 100%;
  }
`;

const ProjectBox = ({data, dispatch}) => (
  <Wrapper>
      <Style css_state={data.css_state}
        onMouseEnter={() => dispatch(change_CSS_State(PROJECT_BOX__HOVER, data.title))}
        onMouseLeave={() => dispatch(change_CSS_State(PROJECT_BOX__NORMAL, data.title))}>
        <Category css_state={data.css_state}>{data.category.toUpperCase()}</Category>
        <Title css_state={data.css_state}>{data.title.toUpperCase()}</Title>
        <Description css_state={data.css_state} text={data.description} />
      </Style>
  </Wrapper>
);



const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBox);
