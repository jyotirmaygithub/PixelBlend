// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singlepage from "./Pages/Singlepage";
import { SearchInputFun } from "./Context/SearchContext" 
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchInputFun>
          {/* <Home/> */}
          <Routes>
            <Route exact path="*" element={<Home />} />
            <Route path="/images/:id" element={<Singlepage />} />
          </Routes>
        </SearchInputFun>
      </Router>
    </div>
  );
}

export default App;
