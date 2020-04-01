import React from 'react';
import styled from 'styled-components';
import Waldo from '../images/Waldo.png';
import Odlaw from '../images/Odlaw.png';
import Wenda from '../images/Wenda.png';
import Woof from '../images/Woof.png';
import Wizard from '../images/Wizard.png';

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 50px;
  border: 5px solid rgba(190, 1, 14, 1);
  box-shadow: -2px 3px 2px grey, 2px 3px 2px grey;
  background: white;
`;

const ImagesBox = styled.div`
  display: flex;
`;

const NamesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  text-align: center;
  font-size: .9em;
  padding: 5px 0;
  text-decoration: underline;
`;

const Img = styled.img`
  height: 60px;
`; 

const Characters = () => {
  return (
    <Container>
      <NamesBox>
        <p>Waldo</p>
        <p>Wenda</p>
        <p>Wizard</p>
        <p>Odlaw</p>
        <p>Woof</p>
      </NamesBox>
      <ImagesBox>
        <Img src={Waldo}></Img>
        <Img src={Wenda}></Img>
        <Img src={Wizard}></Img>
        <Img src={Odlaw}></Img>
        <Img src={Woof}></Img>
      </ImagesBox>
    </Container>
  )
}

export default Characters;