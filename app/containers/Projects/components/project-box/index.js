import React from 'react';
import styled from 'styled-components';

import Category from './category';

const Style = styled.div`
  margin-left: 20px;
  margin-top: 100px;


  border: 1px solid black;
  width: 200px;
  box-shadow: 0px 0px 10px 2px;
`;

const ProjectBox = (props) => (
  <Style>
      <Category>GAME</Category>
      <div>TIC TAC TOE GAME</div>
      <div>
          <div>Description</div>
          <div>A game that you can never win</div>
          <div>SOURCE CODE</div>
          <div>LINK/DEMO</div>
      </div>
  </Style>
);

export default ProjectBox;
