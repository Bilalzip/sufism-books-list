import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


import booksStore from './utils/books'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './pages/List'
import Edit from './pages/Edit'
import Details from './pages/Details'



function App() {

const [bookList, setBookList] = useState(booksStore);

  function updateBook(updatedBook) {
    
    const updatedList = bookList.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );

    setBookList(updatedList);
  }


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<List 
        books={bookList} />} />

        <Route
          path="/edit/:id"
          element={<Edit books={bookList} 
          updateBook={updateBook} />}
        />

        <Route
          path="/details/:id"
          element={<Details books={bookList} />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
