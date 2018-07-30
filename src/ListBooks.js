import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ShelfChanger from './ShelfChanger'

class ListBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  state = {

  }

  render(){

    const { books, title, onDeleteBook } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className ="books-grid">
              { books.map((book) => (
                <li key={ book.id }>
                  <div className= "book-cover" style={{width:128, height: 188, backgroundImage: `url(${ book.imageLinks })`}}></div>
                  <div className="book-title"> { book.title } </div>
                  <div className="book-authors"> { book.authors }</div>
                  <ShelfChanger />
                  <button onClick={() => onDeleteBook(book)}>Remove</button>
                </li>
              ))}
            </ol>

          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
