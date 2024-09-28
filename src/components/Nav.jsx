import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <header className=" bg-teal-500 p-6 flex justify-between items-center">
        <div className=" text-white text-lg font-bold">bdtask</div>
        <nav className="flex  gap-5 ml-auto mr-10">
          <Link to="/" className="text-white">
            All Products
          </Link>
          <Link to="/mobile-apps" className="text-white">
            Mobile Apps
          </Link>
          <Link to="/service" className="text-white">
            Service
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
        </nav>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">
          Grab it now
        </button>
      </header>
    </div>
  );
};

export default Nav;
