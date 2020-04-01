import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Instructions = styled.div`
  width: 70%;
  text-align: center;
  font-size: 1.4em;
  font-weight: 500;
  text-shadow: 1px 1px 1px black;
  p {
    margin: 18px 0;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: white;
  color: red;
  padding: 5px;
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    color: black;

  }
`;

const Intro = (props) => {
  return (
    <Container>
      <Instructions>
        <p>
          Welcome to the world of Waldo! 
        </p>
        <p>
          There are five characters to find on this page:
        </p>
        <p>
          Waldo, Odlaw, Woof, Wizard, and Wenda
        </p>
        <p>
          When you find a character, click on them and select their name from a list.
        </p>
        <p>
          If you are quick enough, you might make it onto the list of top scores.
        </p>
        <p>
          So with that, let's begin!
        </p>
      </Instructions>
      <Button
        onClick={props.handleClickStart}
      >Start</Button>
    </Container>
  )
}

export default Intro;