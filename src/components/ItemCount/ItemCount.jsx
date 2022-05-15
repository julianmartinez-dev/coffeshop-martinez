import { useState } from 'react';

const ItemCount = ({ initial, onAdd, stock }) => {
  const [count, setCount] = useState(initial);
  
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-sm btn-circle " onClick={handleSubstract}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      </button>

      <p className="px-3 py-1 border-2 rounded-md font-bold bg-slate-400/50 text-xl">
        {count}
      </p>

      <button className="btn btn-sm btn-circle " onClick={handleAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <button
        className="flex ml-auto items-center gap-2 font-bold btn-cafe btn-white"
        onClick={() => {
          onAdd(count) 
          setCount(initial)
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
