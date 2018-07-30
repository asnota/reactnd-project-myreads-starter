import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class Search extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    newBooks: []
  }

  updateQuery = (event) => {

    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 30).then((books) => {
        books.lenght > 0 ? this.setState({ newBooks: books }) : this.setState({ newBooks: [] })
      })
    }
  }

  render(){
    /*
    let showingBooks
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

    showingBooks.sort(sortBy('title'))
    */
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close Search</Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              value={ this.state.query }
              onChange={ this.updateQuery }
            />
          </div>
        </div>
      </div>
    )
  }
}


export default Search
