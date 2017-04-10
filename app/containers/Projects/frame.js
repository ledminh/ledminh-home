import React from 'react';
import styled from 'styled-components';


const Frame = styled.div`
    margin-top: 110px;
    margin-left: ${props => props.category_display? '220px' : '20px'};
    transition: margin .2s;

    text-align: center;

`;

export default Frame;
