import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  border: 4px dashed black;
  position: absolute;
  left: ${props => `${props.left - 10}px`};
  top: ${props => `${props.top + 50}px`};
  height: ${props => `${props.bottom - props.top + 20}px`};
  width: ${props => `${props.right - props.left + 20}px`};
  background: rgba(0,15,255,0.33);
`;

const Frames = (props) => {
  const generateFrames = () => {
    let foundCharacters = [];
    props.boxes.forEach(box => {
      foundCharacters.push(
        <Frame
          key={box[0]}
          left={box[0]}
          right={box[1]}
          top={box[2]}
          bottom={box[3]} 
        />
      )
    })
    return foundCharacters;
  }
  
  return (
    <>
      {generateFrames()}
    </>
  )
}

export default Frames;