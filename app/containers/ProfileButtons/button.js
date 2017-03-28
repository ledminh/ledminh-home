import styled from 'styled-components';
import React from 'react';

const Style = styled.div`
    border: 2px solid #afafaf;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

    cursor: pointer;

    &:hover {
      border: 2px solid #505151;
      background-color: #505151;
      color: white;
    }
    display: block;

    @media screen and (max-width: 700px){
        display: inline-block;
        margin: 0px 15px 0px 0px;
    }
`;

const Button = ({children}) => (
    <Style>
        {children}
    </Style>
);

export default Button;
