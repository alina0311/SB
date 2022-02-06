import React, { useState } from 'react';
import CollectionList from '../components/collectionList';
import '../style/search.css'

function Search({ boardgames }) {

  const [searchField, setSearchField] = useState("");

  const filteredBoardgames = boardgames.filter(
    boardgame => {
      return (
        boardgame
        .image_title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        boardgame
        .theme
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        boardgame
        .mechanics
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <CollectionList filteredBoardgames={filteredBoardgames} />
    );
  }

  return (
    <>
      <div>
        <p className="f2 search-title">Search a board game</p>
        <div className="search-bar">
        <input 
            type = "search" 
            placeholder = "Search by name" 
            onChange = {handleChange}
          />
       
        </div>
         {searchList()}
      </div>
    </>
      
  );
}

export default Search;