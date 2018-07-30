import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListShelves extends Component{

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    updatedShelf: false
  }

  render(){

    const { books, changeShelf } = this.props
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Want to Read' },
                        { type: 'read', title: 'Read'}]

    return(
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const booksOnShelf = books.filter(b => b.shelf === shelf.type)
          return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <ListBooks
                  books={ booksOnShelf }
                  changeShelf={ changeShelf }
                />
              </div>
            </div>
          )
        })}
    </div>
    )
  }
}


export default ListShelves
