import { useState } from "react";
import "./App.css";
import ApiData from "./data/ApiData";
import Four from "./data/404";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SinglePage from "./data/SinglePage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiData />} />
          <Route path="*" element={<Four />} />
          <Route path="/link/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
