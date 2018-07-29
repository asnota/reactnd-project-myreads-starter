import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'
//import BookShelf from './BookShelf'
//import ShelfChanger from './ShelfChanger'


class BooksApp extends Component {
  state = {
    books: []
  }

  //Gettig data from an external source
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  removeBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooks
            books={this.state.books}
            onDeleteBook={this.removeBook}
          />
            <Search />
        </div>
      </div>
    )
  }
}

//<BookShelf />
//<ShelfChanger />
//<Search />


export default BooksApp
