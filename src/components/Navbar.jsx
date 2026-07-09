import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-center gap-8">
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>

      <Link to="/register" className="hover:text-gray-300">
        Register
      </Link>

      <Link to="/about" className="hover:text-gray-300">
        About
      </Link>
    </nav>
  );
}

export default Navbar;