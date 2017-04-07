import styled from 'styled-components';
import React from 'react';

const Style = styled.div`
  background-color: #d3d3d3;
  padding : 5px 0px 5px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Category = ({children}) => (
    <Style>
        {children}
    </Style>
);

export default Category;
