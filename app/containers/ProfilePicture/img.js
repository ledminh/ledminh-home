import styled from 'styled-components';

const top = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 500px;
  background-color: white;
  width: 120px;

`;

const left = `
  width: 100%;
`;

const Img = styled.img`
  border: 4px double black;
  object-fit: cover;
  z-index: 1;
  ${(props) => (props.position === "top")? top : left}
`;


export default Img;
