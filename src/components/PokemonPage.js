import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [], 
    filteredArray: []
  }

  //--------------------------- Main Fetch ------------------------------

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonArray => {
        this.setState({
          pokemons: pokemonArray, 
          filteredArray: pokemonArray
        })
      })
  }


 // ------------------------ Search Pokemon ---------------------------

 searchPokemon = (inputValue) => {
  let searchedPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(inputValue))
  this.setState({
    filteredArray: searchedPokemon
  })

}


  //----------------------- Add a Pokemon Form --------------------------

  addPokemon = (newPokemon) => {

    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    }
      
      fetch('http://localhost:3000/pokemon', reqPack)
        .then(res => res.json())
        .then(newPoke => {
          this.setState({
            pokemons: [...this.state.pokemons, newPoke],
            filteredArray: [...this.state.pokemons, newPoke]
          })
        })
    }
  



  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.filteredArray} />
      </Container>
    )
  }
}

export default PokemonPage
