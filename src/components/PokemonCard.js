import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    card: true 
  }

  flipCard = () => {
    this.setState({
      card: !this.state.card 
    })
  }


  render() {
    return (
      <Card>
        <div>
          {console.log(this.props.pokeObj.sprites.front)}
          <div className="image" onClick={this.flipCard}>
          {this.state.card ? <img src={ this.props.pokeObj.sprites.front } alt="oh no!" /> : <img src={this.props.pokeObj.sprites.back } alt="oh no!" />}
            
          </div>

          <div className="content">
            <div className="header">{ this.props.pokeObj.name }</div>
          </div>

          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp} hp
            </span>
          </div>

        </div>
      </Card>
    )
  }
}

export default PokemonCard
