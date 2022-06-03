import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <section className="text-gray-600 animate__animated animate__fadeIn">
      <div className="container pt-10 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Item key={product.id} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
