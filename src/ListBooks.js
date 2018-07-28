import React from 'react'
import PropTypes from 'prop-types'


function ListBooks (props){
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content"></div>
    </div>
  )
}


ListBooks.propTypes = {

}

export default ListBooks
