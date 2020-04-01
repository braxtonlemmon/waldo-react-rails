import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
  border: 5px solid ${props => props.theme.main};
  background: white;
  color: ${props => props.theme.main};
  text-shadow: 1px 1px 1px lightgray;
  font-weight: 300;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  margin: 15px;
  text-decoration: underline;
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 2em;
  width: 2em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  outline: none;
`;

const ScoreTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  width: 70%;
  gap: 10px;

  p {
    margin-left: 30%;
    font-size: 1.5em;
  }
`;

const TopScores = (props) => {
  const generateScores = () => {
    let list = [];
    if (props.topScores) {
      props.topScores.forEach(scoreObj => {
      list.push(<p key={scoreObj.name}>{scoreObj.name}</p>)
      list.push(<p key={scoreObj.length}>{scoreObj.length}</p>)
      })
    }
    return list;
  }
  
  return (
    <Container>
      <H1>Top Scores</H1>
      <ScoreTable>
        {generateScores()}
      </ScoreTable>
      <CloseButton
        onClick={props.handleCloseTopScores}
      >
        x
      </CloseButton>
    </Container>
  )
}

export default TopScores;