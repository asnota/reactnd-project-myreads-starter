import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component{
  static propTypes = {

  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render(){
    return(
      <div className="search-books">
      {JSON.stringify(this.state)}
        <div className="search-books-bar">
        <input
          type='text'
          placeholder='Search by title or author"'
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        </div>
      </div>
    )
  }
}


export default Search
