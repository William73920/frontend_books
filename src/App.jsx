import { useEffect, useState } from "react";

import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditBooks from "./pages/EditBooks";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import DeleteBooks from "./pages/DeleteBooks";

function App() {
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        "https://books-backend-qq0e.onrender.com/books"
      );
      console.log(result.data);
    };

    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
}

export default App;
