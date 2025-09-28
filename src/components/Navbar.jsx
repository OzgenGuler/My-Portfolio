import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/frontend">Front-end Skills</Link>
        <Link to="/backend">Back-end Skills</Link>
        <Link to="/portfolio">Portfolio Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
