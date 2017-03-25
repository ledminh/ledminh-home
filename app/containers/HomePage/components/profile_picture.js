import React from 'react';
import styled from 'styled-components';

import Now from './now';
import Then from './then';

const Frame = styled.div`
  position: relative;
  border: 4px double black;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`



const ProfilePicture = (props) => (
  <Frame onMouseEnter={() => console.log("hi")}>
      <Now />
      <Then onMouseOver= {() => console.log("then")}>THEN</Then>
      <Img src="https://www.ledminh.com/imgs/about-me/profile-picture.jpg" />
  </Frame>
);



export default ProfilePicture;
