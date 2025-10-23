import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-slate-800 p-4 flex justify-center gap-6 text-lg font-semibold">
      <Link to="/"   className="text-white hover:text-accent transition-colors duration-300 font-medium">Home</Link>
      <Link to="/favorites"  className="text-white hover:text-accent transition-colors duration-300 font-medium">Favorites</Link>
    </nav>
  );
}
export default Navbar;

