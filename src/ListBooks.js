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
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  render(){

    const { book, books, changeShelf, title, onDeleteBook } = this.props

    return(
          <ol className ="books-grid">
              { books.map((book) => (
                <li key={ book.id }>
                  <div className= "book-cover" style={{width:128, height: 188, backgroundImage: `url(${ book.imageLinks })`}}></div>
                  <div className="book-title"> { book.title } </div>
                  <div className="book-authors"> { book.authors }</div>
                  <ShelfChanger
                    book={ book }
                    books={ books }
                    changeShelf={ changeShelf }
                    />
                  <button onClick={() => onDeleteBook(book)}>Remove</button>
                </li>
              ))}

              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </ol>
    )
  }
}

export default ListBooks
