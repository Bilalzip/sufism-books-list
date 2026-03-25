import React from 'react'
import ListItem from '../components/ListItem'

const List = ({ books }) => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">

   
      <h2 className="text-2xl font-semibold tracking-tight mb-6 text-black">
        Book List
      </h2>

  
      <div className="border rounded-xl overflow-hidden shadow-sm">

        <table className="w-full text-sm">

       
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Title</th>
              <th className="text-left px-6 py-3 font-medium">Author</th>
              <th className="text-left px-6 py-3 font-medium">Year</th>

              <th className="text-left px-6 py-3 font-medium">Edit</th>
              <th className="text-left px-6 py-3 font-medium">Details</th>
            </tr>
          </thead>

  
          <tbody>
            {books.map((book) => (
              <ListItem key={book.id} book={book} />
            ))}
          </tbody>

        </table>
      </div>
    </main>
  )
}

export default List