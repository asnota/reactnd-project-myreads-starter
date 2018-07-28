import React from 'react'
import PropTypes from 'prop-types'


function ListBooks (props){
  return(
    <ol className = 'books-grid'>
      {props.books.map((book) => (
        <li key={book.id} className='book-top'>
          <div className='book-cover' style={{width:128, height: 188, backgroundImage: `url(${book.avatarURL})`}}></div>
          <div className='book-title'>
            <p>{book.title}</p>
          </div>
          <div className='book-authors'>
            <p>{book.author}</p>
          </div>
          <button onClick={() => props.onDeleteBook(book)}>Remove</button>
        </li>
      ))}
    </ol>
  )
}


ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks
