import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
//import BookShelf from './BookShelf'
//import ShelfChanger from './ShelfChanger'
import Search from './Search'


class BooksApp extends Component {
  state = {
    books: [
      {
        "id": "1",
        "title": "The Hobbit",
        "author": "The Hobbit",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      },
      {
        "id": "2",
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      },
      {
        "id": "3",
        "title": "1776",
        "author": "David McCullough",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      }
    ]
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
          <div className="list-books-content"></div>
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
