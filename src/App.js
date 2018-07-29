import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
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
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks
              books={this.state.books}
              onDeleteBook={this.removeBook}
            />
          </div>
        )}/>
        <Route path='/search' component={Search}/>
      </div>
    )
  }
}

export default BooksApp
