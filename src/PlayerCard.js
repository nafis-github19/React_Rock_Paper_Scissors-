import React from 'react';


const scissors = "";
const rock = "";
const paper = "";

const PlayerCard = (props) =>{

  return(
    <div className="player-card">{props.sign}</div>

  )
}

export default PlayerCard;
