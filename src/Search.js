import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class Search extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render(){
  /*  let showingBooks
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.contacts.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

    showingBooks.sort(sortBy('title'))
 */
    return(
      <div className="search-books">
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
