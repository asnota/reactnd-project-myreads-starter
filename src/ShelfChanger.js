import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  render(){

    const { book, books, onChangeShelf } = this.props

    let currentShelf = 'none'

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        break
      }
    }

    return(
          <div className="book-shelf-changer">
            <select onChange={(event) => onChangeShelf(book, event.target.value)}
              defaultValue={ currentShelf }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
    )
  }
}

export default ShelfChanger
