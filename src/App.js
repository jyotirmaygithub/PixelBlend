import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singlepage from "./Pages/Singlepage";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav/> */}
        <Routes>
          <Route exact path="*" element={<Home/>}></Route>
          <Route  path="/images/:id" element={<Singlepage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
