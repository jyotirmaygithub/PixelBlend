import { useState,useContext,createContext } from "react";

const SearchInput = createContext();

export function SearchInputFun(props){
    const [searchInput, setSearchInput] = useState("");
    return(
        <SearchInput.Provider value={{searchInput,setSearchInput}}>
            {props.children}
            </SearchInput.Provider>
    )
}
export function UserEnteredInput(){
    return useContext(SearchInput)
}