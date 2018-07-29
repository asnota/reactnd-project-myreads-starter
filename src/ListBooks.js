import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Search from './Search'

class ListBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  state = {

  }

  render(){
    return(
      <ol className = 'books-grid'>
      {showingBooks.map((book) => (
        <li key={book.id} className='book-top'>
          <div className='book-cover' style={{width:128, height: 188, backgroundImage: `url(${book.avatarURL})`}}></div>
          <div className='book-title'>
            <p>{book.title}</p>
          </div>
          <div className='book-authors'>
            <p>{book.author}</p>
          </div>
          <button onClick={() => this.props.onDeleteBook(book)}>Remove</button>
        </li>
      ))}
      </ol>
    )
  }
}

export default ListBooks
