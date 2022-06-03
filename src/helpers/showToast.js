import { Slide, toast } from "react-toastify";

const errorToast = (message) => {
     toast.error(message, {
       position: 'bottom-right',
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       transition: Slide,
     });
}

const successToast = (message) => {
    toast.success(message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
    });
}


export { 
    errorToast,
    successToast
}