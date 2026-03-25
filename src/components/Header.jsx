import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        

        <h1 className="text-xl font-semibold tracking-tight text-black">
         Sufism Books
        </h1>

     
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link 
            to="/" 
            className="hover:text-black transition"
          >
            Home
          </Link>
           <Link 
            to="https://en.wikipedia.org/wiki/Sufism" 
            className="hover:text-black transition"
          >
            Sufism
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header