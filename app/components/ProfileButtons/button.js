import styled from 'styled-components';
import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {changeSection} from 'containers/HomePage/actions';

import {
  PROFILE_NOW
} from 'containers/HomePage/constants';

const then = `
    border: 2px solid #9dbdf2;

    &:hover {
      border: 2px solid #3b5f99;
      background-color: #3b5f99;
      color: white;
    }
`;

const now = `
    border: 2px solid #afafaf;

    &:hover {
      border: 2px solid #505151;
      background-color: #505151;
      color: white;
    }
`;

const Style = styled.div`
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

    cursor: pointer;

    ${(props) => (props.current_profile === PROFILE_NOW)? now : then};

    display: block;

    @media screen and (max-width: 700px){
        display: inline-block;
        margin: 0px 15px 0px 0px;
    }
`;

const Button = ({children, current_profile, section, onClick}) => (
    <Style current_profile={current_profile} onClick={onClick(section)}>
        {children}
    </Style>
);

Button.propTypes = {
  current_profile: React.PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return {
      onClick: (section) => (e) => dispatch(changeSection(section))
    }
}


const mapStateToProps = createStructuredSelector({

});


export default connect(mapStateToProps, mapDispatchToProps)(Button);
