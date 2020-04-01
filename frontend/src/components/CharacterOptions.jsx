import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: grey;
  ul {
    width: 100%;
  }
`;

const Item = styled.li`
  text-align: center;
  border: 1px solid black;
  background: yellow;
  font-size: 18px;
  font-family: 'Rye', cursive;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background: lightseagreen;
  }
`;

const CharacterOptions = (props) => {
  const generateList = () => {
    let list = [];
    props.characters.forEach(character => {
      return list.push(
        <Item
          key={character.name}
          onClick={() => props.handleCharacterSelect(character.name)}
        >
          {character.name}
        </Item>
      )
    })

    return list;
  }
  
  return (
    <Container>
      <ul>
        {generateList()}
      </ul>
    </Container>
  )
}

export default CharacterOptions;