import styled from 'styled-components';
import React from 'react';

const Frame = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 80%;
    min-width: 600px;
    height: 200px;

`;

/*******************
* TAG COMPONENT
********************/
const Tag_Wrapper = styled.div`
    color: white;
    text-align: center;
`;

const Title = styled.div`
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
    margin-right: 10px;
`;

const Content = styled.div`
    display: inline-block;
    font-size: 20px;
`;

const Tag = ({title, content}) => (
    <Tag_Wrapper>
      <Title>{title + " :"}</Title>
      <Content>{content}</Content>
    </Tag_Wrapper>
);


/*******************
* MAIN COMPONENT
********************/
const Screen = ({data}) => (
    <Frame>
      {data.map((contact, i) => <Tag key={i} title={contact.title} content={contact.content}/>)}
    </Frame>
);



export default Screen;
