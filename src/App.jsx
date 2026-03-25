import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import bookData from "./utils/books";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./pages/List";
import Edit from "./pages/Edit";
import Details from "./pages/Details";

function App() {
  const [books, setBooks] = useState(bookData);
  const [currentBook, setCurrentBook] = useState(bookData[0]);

  function changeBook(book) {
    setCurrentBook(book);
  }

  function updateBook(updatedBook) {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
    );
    setCurrentBook(updatedBook);
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<List books={books} changeBook={changeBook} />}
        />
        <Route
          path="/home"
          element={<List books={books} changeBook={changeBook} />}
        />
        <Route
          path="/edit/:id"
          element={<Edit currentBook={currentBook} updateBook={updateBook} />}
        />
        <Route
          path="/details/:id"
          element={<Details currentBook={currentBook} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
