import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-slate-800 p-4 flex justify-center gap-6 text-lg font-semibold">
      <Link to="/" className="hover:text-accent">Home</Link>
      <Link to="/favorites" className="hover:text-accent">Favorites</Link>
    </nav>
  );
}
export default Navbar;

