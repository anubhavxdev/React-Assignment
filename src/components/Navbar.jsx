import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-zinc-900 px-4 py-4 text-white">
      <div className="flex items-center justify-between sm:justify-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-zinc-700 p-2 text-white transition hover:bg-zinc-800 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        <div className="hidden gap-8 sm:flex sm:items-center">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>

          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-20 border-b border-zinc-800 bg-zinc-900 px-4 py-4 shadow-lg transition-all duration-200 sm:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/register" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Register
          </Link>

          <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;