import React, { useState } from 'react';
import Logo from '../Images/logo.png';
import { UserEnteredInput } from '../Context/SearchContext';

const Search = () => {
  const [UserInput, setUserInput] = useState('')
  const {setSearchInput } = UserEnteredInput();

  const handleEnterKey = (e) => {
    e.preventDefault();
    setSearchInput(UserInput)
  };

  return (
    <div>
      <div className='universal search-box'>
        <form className='universal' onSubmit={handleEnterKey}>
          <img src={Logo} alt="" />
          <input
            type="text"
            value={UserInput}
            onChange={(e)=>setUserInput(e.target.value)}
            placeholder='Search Image'
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
