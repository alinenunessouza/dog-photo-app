import React, { Component } from 'react';
import { DogPhoto } from './components'
import { DogService } from './services'
import './App.css';

class App extends Component {
  //isso ficaria em uma screen
  constructor(){
    super()
    this.state = {
        dogs: []
    }

    this.dogService = new DogService()

  }

  async componentDidMount(){
    const dogs = await this.dogService.getRandomImages(10)

    this.setState({ dogs })
  }

  onAddDog = async () => {
    const dog = await this.dogService.getRandomImage()

    const dogs = [...this.state.dogs, dog]
    this.setState({ dogs })
  }

  renderDogs(){
    return this.state.dogs.map(dog => (
      <DogPhoto image={dog.image} />
    ))
  }

  render() {
    return (
      <div className="container">
        <h1>Listagem de Dogs</h1>
        <button type="button" onClick={this.onAddDog} >Adicionar</button>
        <div className="dogs">
        { this.renderDogs() }
 
        </div>
       
      </div>
    )
  }
}

export default App
