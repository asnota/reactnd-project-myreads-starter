import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListShelves extends Component{

  static propTypes = {

  }

  state = {

  }

  render(){
    return(
      <div className="list-books-content">
        <ListBooks
          title="Currently Reading"
        />
        <ListBooks
          title="Want to Reading"
        />
        <ListBooks
          title="Read"
        />
      </div>
    )
  }
}


export default ListShelves
