import { useState } from 'react';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { errorToast } from '../../helpers/showToast';

const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if([name, lastName, email, email2, phone].includes('')) {
      errorToast('Todos los campos son obligatorios');
      return;
    }
    if(email !== email2) {
        errorToast('Los emails no coinciden');
        return;
    }
    onSubmit(name, lastName, email);
  };
  return (
    <>
      <form
        className="bg-slate-700/10 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-50"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-md font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-1 px-2 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="lastName" className="block  text-md font-bold mb-2">
            Apellido
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-1 px-2 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="phone" className="block  text-md font-bold mb-2">
            Teléfono
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-1 px-2 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block  text-md font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-1 px-2 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email2" className="block  text-md font-bold mb-2">
            Repetir Email
          </label>
          <input
            type="email"
            name="email2"
            id="email2"
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-1 px-2 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn-white w-full text-center bg-transparent/40 mt-5"
        >
          Realizar pedido
        </button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
};

export default Form;
