import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class Search extends Component{
  static propTypes = {
  //  book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    screen: 'foundBooks',
    query: '',
    newBooks: []
  }

  updateQuery = (event) => {

    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 15).then((books) => {

        this.verifyBookShelf(books)

        books.length > 0 ? this.setState({ newBooks: books }) : this.setState({ newBooks: [] })

      })
    } else {
      this.setState({ newBooks: [], screen: 'noBooks' })
    }
  }


  verifyBookShelf = ( books ) => {
      let all_Books = this.props.books
      for ( let book of books ) {
        book.shelf = "none"
      }

      for ( let book of books ) {
        for ( let b of all_Books ) {
          if ( b.id === book.id ) {
            book.shelf = b.shelf
          }
        }
      }
      return books
    }

  clearQuery = () => {
    this.setState({
      query:'',
      newBooks: []
    })
  }


  render(){

  //Allows to search with a letter
    let showingBooks
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

    showingBooks.sort(sortBy('title'))

    const { query, newBooks } = this.state
    const { books, onChangeShelf } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            onClick={ this.clearQuery }
            >Close Search</Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              value={ query }
              onChange={ this.updateQuery }
            />
          </div>
        </div>

        <div className="search-books-results">
          { newBooks.length > 0 && (
            <ol className="books-grid">
              { newBooks.map((book) => (
                <ListBooks
                  book={ book }
                  books={ newBooks }
                  key={ book.id }
                  onChangeShelf={ onChangeShelf }
                />
              ))}
            </ol>
          )}

          { this.state.screen === 'noBooks' && (
            <div>
              <h2>No books were found. Please perform another request.</h2>
            </div>
          )}
        </div>
      </div>

    )
  }
}


export default Search
