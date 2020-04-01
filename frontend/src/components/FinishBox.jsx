import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 15%;
  right: 15%;
  top: 15%;
  bottom: 15%;
  border: 3px solid black;
  background: white;
  color: ${props => props.theme.main};
  font-family: 'Rye', cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
  }
  input {
    padding: 5px;
    text-align: center;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 15px;
    font-size: 2em;
    width: 70%;
    background: ${props => props.theme.main};
    color: white;
    &::placeholder {
      color: white;
    }
  }
  &>* {
    margin: 30px 0;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.main};
  color: white;
  font-size: 1.3em;
  padding: 8px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const FinishBox = (props) =>  {
  const [length] = useState(((Date.now() - props.startTime) / 1000).toFixed(2));
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  }

  const handleSubmit = () => {
    if (name === '') {
      alert('Please enter name!');
      return false;
    }
    fetch('/api/v1/players/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name, 
        length: length
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.")
    })
    .then(() => props.handleCloseFinishBox())
    .catch(error => console.log(error.message))
  }

  return (
    <Container>
      <p>You did it in {length} seconds!</p>
      <input
        type='text'
        value={name}
        placeholder='enter name'
        onChange={handleChange}
      />
      <ButtonBox>
        <Button onClick={props.handleCloseFinishBox}>Try Again</Button>
        <Button onClick={handleSubmit}>Submit Score</Button>
      </ButtonBox>
    </Container>
  )
}

export default FinishBox;