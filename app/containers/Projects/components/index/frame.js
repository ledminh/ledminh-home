 import styled from 'styled-components';

const Frame = styled.div`
    position: fixed;
    top: 120px;

    left: ${props => props.category_display? `0px` : `-200px`};
    transition: left .2s;

    width: 200px;
    background-color: rgba(206, 200, 209, .9);

    padding: 15px;
    box-shadow: 4px 4px 10px;

    border-radius: 0px 15px 15px 0px;
    z-index: 10;
`;


export default Frame;
