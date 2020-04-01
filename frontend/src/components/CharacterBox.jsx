import React from 'react';
import styled from 'styled-components';
import CharacterOptions from './CharacterOptions.jsx';

const FinderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 2px dotted black;
  width: 100px;
  height: 210px;
  left: ${props => `${props.posX - 50}px`};
  top: ${props => `${props.posY + 20}px`};
`;

const CharacterBox = (props) => {
  return (
    <FinderContainer
      posX={props.posX}
      posY={props.posY}
    >
    <CharacterOptions 
      handleCharacterSelect={props.handleCharacterSelect}
      characters={props.characters}
    />
    </FinderContainer>
  )
}

export default CharacterBox;