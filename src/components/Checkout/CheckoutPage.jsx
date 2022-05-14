import { useContext } from "react"
import CoffeeShopContext from "../../context/CoffeeShopProvider"


const CheckoutPage = () => {

    const { cart } = useContext(CoffeeShopContext);

    const cartList = cart.map((item) => {
        return <li key={item.id} className="border-b-2 mb-2">{`Marca: ${item.brand} | Producto: ${item.name}`}</li>
    })
  return (
    <div className="flex flex-col justify-center items-center mt-10 text-slate-300">
        <h1 className=" text-2xl">Checkout</h1>
        {!cart.length ? 'No hay productos en el carrito' : (<ul>{cartList}</ul>)}
    </div>
  )
}

export default CheckoutPage