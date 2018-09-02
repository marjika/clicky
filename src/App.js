import React, {Component} from "react";
import Portrait from "./components/Portrait";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./imagearray.json";
import "./App.css";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const initalState = images;

class App extends Component {

  state = {
    images,
    idNums : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    wins: 0,
    losses: 0,
    score: 0
  };

  // removeFriend = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // }
  shuffleImages = id => {
    if (this.state.idNums.includes(id)) {
      console.log("keep going");
      const idNums = this.state.idNums.filter(item => item !== id);
      if (idNums.length<1) {
        console.log("You win");
        const wins = this.state.wins + 1;
        const images = shuffle(initalState);
        this.setState({ images, wins,  score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
      }
      else {
        this.setState({ idNums });
        const score = this.state.score + 1;
        this.setState({ score });
      }
    }
    else {
      console.log("you lost");
      const losses = this.state.losses + 1;
      this.setState({ losses,  score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
    }
 
    const images = shuffle(this.state.images);
    this.setState({ images });
  };
  
  render() {
    return (
      <div>
      <Navbar 
        wins={this.state.wins}
        losses={this.state.losses}
        score={this.state.score}
      />
      <Wrapper>
      <Title>Master the Masters</Title>
        {this.state.images.map(image => (
          <Portrait
          shuffleImages={this.shuffleImages}
          clicked={image.clicked}
          id={image.id}
          key={image.id}
          name={image.name}
          image={image.image}
        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
