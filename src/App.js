import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'
import ListShelves from './ListShelves'

class BooksApp extends Component {
  state = {
    books: []
  }

  //Gettig data from an external source
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      //Set a shelf for a new book
      newBook.shelf = newShelf
      //Get an array of unfiltered books
      const booksArray = this.state.books.filter(book => book.id !== newBook.id)
      //Add a new book to the existing array
      booksArray.push(newBook)
      //Assign updated book array to the state of books
      this.setState({ books: booksArray })
    })
  }

  removeBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {

    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <ListShelves
              books={ books }
              onDeleteBook={this.removeBook}
              onChangeShelf={this.changeShelf}
            />
          </div>
        )}/>
        <Route path='/search' render={() => (
          <Search
            books={ books }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
