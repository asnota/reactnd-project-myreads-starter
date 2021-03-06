import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
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


  render() {

    const { books, book } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListShelves
              book={ book }
              books={ books }
              onChangeShelf={ this.changeShelf }
            />
          </div>
        )}/>
        <Route path='/search' render={() => (
          <Search
            book= { book }
            books={ books }
            onChangeShelf={ this.changeShelf }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
