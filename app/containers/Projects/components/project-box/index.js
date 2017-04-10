import React from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Category from './category';
import Title from './title';
import Description from './description';
import Buttons from './buttons';

import {
  PROJECT_BOX__HOVER,
  PROJECT_BOX__NORMAL,
  PROJECT_BOX__LARGE
} from 'containers/Projects/constants';

import {change_CSS_State} from 'containers/Projects/actions';

/******************
* Wrapper css
*******************/
const Wrapper_normal = `
    position: relative;
    display: inline-block;
    width: 210px;
    height: ${250*210/200}px;
    margin: 50px 15px 10px 15px;

`;

const Wrapper_hover = `
    position: relative;
    display: inline-block;
    width: 210px;
    height: ${250*210/200}px;
    margin: 50px 10px 10px 10px;

`;

const Wrapper_large = `
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 100;
    background-color: rgba(1,1,1, .7);
`;

const Wrapper =  styled.div`
  transition: width .2s, height .2s;

  ${props => (props.css_state === PROJECT_BOX__NORMAL)? Wrapper_normal : ``}
  ${props => (props.css_state === PROJECT_BOX__HOVER)? Wrapper_hover : ``}
  ${props => (props.css_state === PROJECT_BOX__LARGE)? Wrapper_large : ``}
`


/******************
* Style css
*******************/
const Style_normal = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #c4c4c4;

  width: 200px;
  height: 250px;

  cursor: pointer;
`;


const Style_hover = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #a2a1e2;

  width: 100%;
  height: 100%;

  cursor: pointer;
`;


const Style_large = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  width: 420px;
`;

const Style = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 10px 2px;
  transition: width .2s, height .2s;

  ${props => (props.css_state === PROJECT_BOX__NORMAL)? Style_normal : ``}
  ${props => (props.css_state === PROJECT_BOX__HOVER)? Style_hover : ``}
  ${props => (props.css_state === PROJECT_BOX__LARGE)? Style_large : ``}
`;


/******************
* Main Component
*******************/
const ProjectBox = ({data, dispatch}) => (
  <Wrapper css_state={data.css_state}>
      <Style css_state={data.css_state}
        onMouseEnter={() => (data.css_state !== PROJECT_BOX__LARGE)? dispatch(change_CSS_State(PROJECT_BOX__HOVER, data.id)) : null}
        onMouseLeave={() => (data.css_state === PROJECT_BOX__HOVER)? dispatch(change_CSS_State(PROJECT_BOX__NORMAL, data.id)) : null}
        onClick={(e) => dispatch(change_CSS_State(PROJECT_BOX__LARGE, data.id, e.pageY))}>
            <Category css_state={data.css_state}>{data.category.toUpperCase()}</Category>
            <Title css_state={data.css_state}>{data.title.toUpperCase()}</Title>
            <Description css_state={data.css_state} text={data.description} />
            <Buttons css_state={data.css_state} links={data.links} id={data.id}/>
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
