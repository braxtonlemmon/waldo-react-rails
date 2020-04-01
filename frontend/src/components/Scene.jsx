import React from 'react';
import GoldRushScene from '../images/gold_rush_scene.jpg';
import styled from 'styled-components';

const Img = styled.img`
  border: 10px double black;
  min-height: 100%;
  position: relative;
  cursor: crosshair;
`;

const SceneBox = styled.div`
  position: relative;
`;

const handleMouseMove = (e) => {
  const bounds = document.getElementById('waldoScene').getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  console.log(`x: ${x} y: ${y}`);
}

const Scene = (props) => {
  return (
    <SceneBox>
      <Img 
        src={GoldRushScene} 
        alt="Where's Waldo Gold Rush Scene"
        onClick={props.handleClick}
        // onMouseMove={handleMouseMove}
        id="waldoScene"
      />
    </SceneBox>
  )
}

export default Scene;