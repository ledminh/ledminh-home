import styled from 'styled-components';

const Img = styled.img`
  border: 4px double black;
  object-fit: cover;
  z-index: 1;
  width: 100%;

  @media screen and (max-width: 700px){
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 500px;
    background-color: white;
    width: 120px;
  }

`;


export default Img;
