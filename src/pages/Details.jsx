import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({ currentBook }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-black hover:text-white transition"
        >
          Back
        </Link>
      </div>

      <section className="border rounded-2xl bg-white shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gray-50 border-b md:border-b-0 md:border-r p-6 flex items-center justify-center">
            <img
              src={currentBook.cover}
              alt={currentBook.title}
              className="w-full max-w-sm h-[420px] object-cover rounded-xl border shadow-sm"
            />
          </div>

          <div className="p-8">
            <p className="text-sm text-gray-500 mb-2">Book Details</p>

            <h2 className="text-3xl font-semibold tracking-tight text-black mb-6">
              {currentBook.title}
            </h2>

            <div className="space-y-4 text-sm">
              <div className="border rounded-xl p-4">
                <p className="text-gray-500 mb-1">Title</p>
                <p className="font-medium text-black">{currentBook.title}</p>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500 mb-1">Author</p>
                <p className="font-medium text-black">{currentBook.author}</p>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500 mb-1">Year</p>
                <p className="font-medium text-black">{currentBook.year}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to={`/edit/${currentBook.id}`}
                className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Edit Book
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details