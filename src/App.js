import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js';

class Game extends Component{
  constructor(){
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state ={
      playerOne: "rock",
      playerTwo: "scissors",
    }
  }

  render(){
    return (

      <div className="container">
        <div >
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>

        <div className="winner">Player Winner</div>

        <button type="button"> Play Game </button>
      </div>
    )
  }
}

export default Game;
