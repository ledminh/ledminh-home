import React from 'react';

import styled from 'styled-components';

const Style = styled.div`
  display: inline-block;
  height: 100%;
  padding: 8px;
  font-size: 17px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #752b2b;
  }
`;

class Button extends React.PureComponent {
  render() {
    return (
      <Style>
          {this.props.children}
      </Style>
    )
  }
}

export default Button;
