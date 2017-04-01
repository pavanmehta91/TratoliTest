import React, { Component } from 'react';
import './search.css';

class SearchBar extends Component {
  constructor(){
    super();
    this.searchQuery = this.searchQuery.bind(this);
  }
  searchQuery(){ //Capture search query on change

  }
  doSearch(){ //Send search query to the Parent and perform necessary action there.

  }
  render(){
    return(
      <div className='row'>
        <div className='search-bar-container margin-l-30 padding-lr-0 col-sm-offset-2 col-xs-offset-1 width-40 col-sm-8 col-xs-10'>
          <input className='search-bar' type='text' placeholder='Search for a video using name/tag' />
        </div>
        <div className='clearfix'></div>
      </div>
    )
  }
}
export default SearchBar
