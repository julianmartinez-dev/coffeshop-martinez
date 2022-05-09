import { useContext } from "react";
import CoffeeShopContext from "../../context/CoffeeShopProvider";
import CartItem from "./CartItem";


const CartListItem = () => {
    const { cart} = useContext(CoffeeShopContext);

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full ">

        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cant</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartListItem;
