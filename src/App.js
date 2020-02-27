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

  // this is where the game methods live
  playGame = () =>{
    this.setState({

      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)],
    })
  }

  decideWinner =() =>{


      const playerOne = this.state.playerOne;
      const playerTwo = this.state.playerTwo;

      if(playerOne === "rock" && playerTwo === "paper"){
        return "player 2 wins"
      }
      else if(playerOne === "rock" && playerTwo === "scissors"){
        return "player 1 wins"
      }
      else if(playerOne === "paper" && playerTwo === "scissors"){
        return "player 2 wins"
      }
      else if(playerOne === "paper" && playerTwo === "rock"){
        return "player 1 wins"
      }
      else if(playerOne === "scissors" && playerTwo === "rock"){
        return "player 2 wins"
      }
      else if(playerOne === "scissors" && playerTwo === "paper"){
        return "player 1 wins"
      }
      else{
        return "Game Draw"
      }



  }





  render(){
    return (

      <div className="container">
        <div >
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>

        <div className="winner">{this.decideWinner()}</div>

        <button type="button" onClick={this.playGame}> Play Game </button>
      </div>
    )
  }
}

export default Game;
