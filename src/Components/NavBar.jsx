import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold">🌌 My Portfolio</h1>
      <div className="space-x-6">
        <Link to="/Home" className="hover:text-blue-400">
          Home
        </Link>
        {/* optional: anchors to sections if one-page */}
      </div>
    </nav>
  );
};

export default NavBar;
