import React from 'react'
import { Link } from 'react-router-dom'

const Edit = ({ currentBook, updateBook }) => {
  function handleChange(event) {
    const { name, value } = event.target

    const updatedBook = {
      ...currentBook,
      [name]: value,
    }

    updateBook(updatedBook);
    
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Manage Book</p>
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Edit Book
          </h2>
        </div>

        <Link
          to="/"
          className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-black hover:text-white transition"
        >
          Back
        </Link>
      </div>

      <section className="border rounded-2xl bg-white shadow-sm p-6 md:p-8">
        <div className="mb-8 flex justify-center">
          <div className="border rounded-xl p-3 bg-gray-50">
            <img
              src={currentBook.cover}
              alt={currentBook.title}
              className="w-48 h-64 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Title
            </label>
            <input
              name="title"
              value={currentBook.title}
              onChange={handleChange}
              className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Author
            </label>
            <input
              name="author"
              value={currentBook.author}
              onChange={handleChange}
              className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Year
            </label>
            <input
              name="year"
              type="number"
              value={currentBook.year}
              onChange={handleChange}
              className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Cover URL
            </label>
            <input
              name="cover"
              value={currentBook.cover}
              onChange={handleChange}
              className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Save & Go Back
            </Link>

            <Link
              to={`/details/${currentBook.id}`}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Edit