import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ShelfChanger from './ShelfChanger'

class ListBooks extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  render(){

    const { book, books, onChangeShelf } = this.props

    return(
          <ol className ="books-grid">

              { books.map((book) => (
                <li key={ book.id }>
                  <div className="book">
                    <div className="book-top">
                      <div className= "book-cover" style={{width:128, height: 188, backgroundImage: `url(${ book.imageLinks })`}}></div>
                      <ShelfChanger
                        book={ book }
                        books={ books }
                        onChangeShelf={ onChangeShelf }
                        />
                      </div>
                    </div>
                  <div className="book-title"> { book.title } </div>
                  <div className="book-authors"> { book.authors }</div>
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
