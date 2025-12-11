import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40 transition-smooth">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md transition-smooth group-hover:shadow-lg group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Professional Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 transition-smooth group-hover:text-blue-600">
              Our Website
            </h1>
            <p className="text-xs text-gray-500">Professional Services</p>
          </div>
        </Link>

        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-smooth relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-smooth relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/order">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-smooth transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base">
              Order Now
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
