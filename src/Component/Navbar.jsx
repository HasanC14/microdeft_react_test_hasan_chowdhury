import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto text-white">
      <ul className="flex justify-between items-center text-2xl">
        <li className=" hover:scale-110 transition-all ease-in-out">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" hover:scale-110 transition-all ease-in-out">
          <Link to={"/login"}>Login</Link>
        </li>
        <li className=" hover:scale-110 transition-all ease-in-out">
          <Link to={"/register"}>Register</Link>
        </li>
        <li className=" hover:scale-110 transition-all ease-in-out">
          <Link to={"/blogs"}>Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
