import React from 'react';
import styled from 'styled-components';

const Block = styled.p`
  font-size: 30px;
  color: red;
  background: yellow;
`;

const Paragraph = () => {
  return (
    <Block>This is the paragraph test.</Block>
  )
}

export default Paragraph;