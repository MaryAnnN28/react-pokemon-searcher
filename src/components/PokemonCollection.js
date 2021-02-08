import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    return (
      <div>
        <Card.Group itemsPerRow={6}>
          <h1>Hello From Pokemon Collection</h1>
          {this.props.pokemons.map(pokemon =>
            <PokemonCard pokeObj={pokemon} key={pokemon.id} />
          )}
      </Card.Group>
        
      </div>
    )
  }
}

export default PokemonCollection
