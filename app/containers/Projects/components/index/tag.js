import styled from 'styled-components';

const all = `
  background-color: rgba(80, 82, 84, .8)
  color: white;

  text-align: center;

  &:hover {
    background-color: rgba(128, 128, 181, .8);
    color: black;
  }
`

const normal = `
  background-color: rgba(255, 255, 255, .8)
  color: black;

  &:hover {
    background-color: rgba(128, 128, 181, .8);
  }
`
export default styled.div`
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 7px;
    border-radius: 5px;
    cursor: pointer;

    ${props => props.all? all : normal}
`;
