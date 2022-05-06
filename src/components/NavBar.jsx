import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="mt-20 md:mt-28">
      <ul className="px-4 md:px-0 md:w-2/3 md:mx-auto flex justify-between font-bold uppercase flex-col gap-6">
        <Link to="/">
          <li className="btn-cafe md:w-1/3 text-center">Home</li>
        </Link>
        <li className="btn-cafe md:w-1/3 text-center">
          <a href="#">Nosotros</a>
        </li>
        <li className="btn-cafe md:w-1/3 text-center">
          <a href="#">Productos</a>
        </li>
        <li className="btn-cafe md:w-1/3 text-center">
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar