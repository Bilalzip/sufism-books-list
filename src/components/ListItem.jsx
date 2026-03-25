import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ book, changeBook }) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium text-black">{book.title}</td>
      <td className="px-6 py-4 text-gray-600">{book.author}</td>
      <td className="px-6 py-4 text-gray-600">{book.year}</td>

      <td className="px-6 py-4">
        <Link
          to={`/edit/${book.id}`}
          onClick={() => changeBook(book)}
          className="inline-block text-xs px-3 py-1.5 rounded-md border hover:bg-black hover:text-white transition"
        >
          Edit
        </Link>
      </td>

      <td className="px-6 py-4">
        <Link
          to={`/details/${book.id}`}
          onClick={() => changeBook(book)}
          className="inline-block text-xs px-3 py-1.5 rounded-md border hover:bg-black hover:text-white transition"
        >
          Details
        </Link>
      </td>
    </tr>
  )
}

export default ListItem