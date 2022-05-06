import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className="w-full header">
      <div className="md:w-2/3 mx-auto flex flex-col gap-4 md:flex-row justify-between pt-5 items-center ">
        <Link to="/">
          <div className="border-2 p-3 rounded-xl border-amber-200 shadow-slate-50/50 text-slate-200">
            <div className="flex items-center gap-2 text-4xl font-semibold">
              <img src={`/img/coffee-beans.png`} alt="" className="w-12" />
              <p>Coffee Shop</p>
            </div>
            <p className="text-center text-md">Café de autor, donde estes</p>
          </div>
        </Link>

        <CartWidget />
      </div>

      <NavBar />
    </div>
  );
};

export default Header;
