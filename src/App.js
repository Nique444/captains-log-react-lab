import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs" element={<New />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
