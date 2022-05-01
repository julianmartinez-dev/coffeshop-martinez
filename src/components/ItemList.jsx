import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <section className="text-gray-600 body-font animate__animated animate__fadeIn">
      <div className="container pt-10 mx-auto">
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemList