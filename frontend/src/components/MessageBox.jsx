import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button.jsx';

const Container = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 10px;
  background: ${props => props.isFound ? 'yellow' : '#ff4f5c'};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => `${props.posX - 25}px`};
  top: ${props => `${props.posY + 130}px`};
`;

const Message = styled.p`
  justify-self: center;
  font-family: 'Rye', cursive;
  margin: 0 10px;
`;

const MessageBox = (props) => {
  return (
    <Container
      posX={props.posX}
      posY={props.posY}
      isFound={props.isFound}
    >
      <Message>
        {props.isFound ? 'Good job!' : 'Try again!'}
      </Message>
      <Button
        onClick={props.handleCloseMessage}
      >
        X
      </Button>
    </Container>
  )
}

export default MessageBox;