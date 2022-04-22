
const ItemListContainer = ({huesped}) => {
 

  return (
    <main className="bg-slate-300 flex justify-center items-center h-96">
      <div className="text-center">
        <h1 className="mb-3 text-3xl font-bold">Hola <span className=" underline decoration-wavy decoration-amber-500">{huesped}</span> Bienvenido a mi proyecto</h1>
        <h2 className="text-4xl font-bold">CoffeeShop - Ecommerce</h2>
        <h3 className="mt-3">Julián Martínez - Coderhouse</h3>
      </div>
    </main>
  );
}

export default ItemListContainer