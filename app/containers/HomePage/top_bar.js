import styled from 'styled-components';

const TopBar = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    margin: auto;
    height: 30px;
    background-color: blue;

    display: none;
    @media screen and (max-width: 700px) {
        display: block;
    }
`;

export default TopBar;
