import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
    state = {
      name: "",
      hp: "",
      frontImage: "", 
      backImage: ""
    }


  inputForm = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
    }
  

  render() {
      return (
        <div>
          <h3>Add a Pokemon!</h3>
          <Form onSubmit={() => { this.props.addPokemon(this.state) }}>
          
            <Form.Group widths="equal">
            
              <Form.Input
                fluid label="Name"
                placeholder="Name"
                name="name"
                onChange={this.inputForm}/>

              <Form.Input
                fluid label="hp"
                placeholder="hp"
                name="hp"
                onChange={this.inputForm}/>

              <Form.Input
                fluid label="Front Image URL"
                placeholder="url"
                name="frontUrl"
                onChange={this.inputForm}/>

              <Form.Input
                fluid label="Back Image URL"
                placeholder="url"
                name="backUrl"
                onChange={this.inputForm}/>

            </Form.Group>

            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      )
  }
}

export default PokemonForm
