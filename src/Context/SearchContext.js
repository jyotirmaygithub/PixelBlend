import { useState, useContext, createContext } from "react";

const SearchInputContext = createContext();

export function SearchInputFun(props) {
  const [SearchInput, setSearchInput] = useState('');
  
  return (
    <SearchInputContext.Provider value={{ SearchInput, setSearchInput }}>
      {props.children}
    </SearchInputContext.Provider>
  );
}

export function UserEnteredInput() {
  return useContext(SearchInputContext);
}
