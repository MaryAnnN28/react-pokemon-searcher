import React from 'react'

const Search = props => {
  const handleChange = (event) => {
    props.searchPokemon(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
          onChange={(event) => { handleChange(event) }} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
