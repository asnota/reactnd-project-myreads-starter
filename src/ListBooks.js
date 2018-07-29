import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import Search from './Search'

class ListBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  state = {

  }

  render(){

    const { books, onDeleteBook } = this.props

    return(
      <ol className = 'books-grid'>
      { books.map((book) => (
        <li key={ book.id } className='book-top'>
          <div className='book-cover' style={{width:128, height: 188, backgroundImage: `url(${book.avatarURL})`}}></div>
          <div className='book-title'>
            <p>{ book.title }</p>
          </div>
          <div className='book-authors'>
            <p>{ book.author }</p>
          </div>
          <button onClick={() => onDeleteBook(book)}>Remove</button>
        </li>
      ))}
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
      </ol>
    )
  }
}

export default ListBooks
