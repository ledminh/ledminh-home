/**********************
* IMPORT
***********************/
import React from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  PROJECT_BOX__NORMAL,
  PROJECT_BOX__LARGE
} from 'containers/Projects/constants';

import {change_CSS_State} from 'containers/Projects/actions';


/**********************
* STYLES
***********************/

const Wrapper = styled.div`
  position: relative;
  display: ${props => (props.css_state !== PROJECT_BOX__LARGE)? 'none' : 'block'}
  text-align: center;
  padding: 10px;
  height: 50px;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  padding: 5px;
`

/*****************
* BUTTONS
******************/
const source = `
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #ebedd0;
  }
`;

const link = `
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #7d83c4;
  }
`

const close = `
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f2d0d0;
  }
`;

const non_link = `
  background-color: #e5e5e5;
`

const Button = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 7px;
  padding: 5px;
  margin-left: 5px;
  font-size: 12px;



  ${props => (props.source)? ((props.href !== '')? source : non_link) : ''}
  ${props => (props.link)? ((props.href !== '')? link : non_link) : ''}
  ${props => props.close? close : ''}

`;


/**********************
* COMPONENTS
***********************/

export class Buttons extends React.PureComponent {
  constructor(){
    super();

    this.buttonOnclick = this.buttonOnclick.bind(this);
  }

  buttonOnclick(e){
    e.stopPropagation();
    this.props.dispatch(change_CSS_State(PROJECT_BOX__NORMAL, this.props.id));
  }

  render(){
    return (
      <Wrapper css_state={this.props.css_state}>
        <Content>
            <Button source href={this.props.links.source_code} onClick={() => open(this.props.links.source_code)}>SOURCE CODE</Button>
            <Button link href={this.props.links.demo} onClick={() => open(this.props.links.demo)}>LINK/DEMO</Button>
            <Button close onClick={this.buttonOnclick}>CLOSE</Button>
        </Content>
      </Wrapper>
    );
  }
}


const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
