import { toast, ToastContainer } from "react-toastify";

export const Alert = {
  success: (text) => {
    return toast.success(text, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  error: (text) => {
    return toast.error(text, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  warn: (text) => {
    return toast.warn(text, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  info: (text) => {
    return toast.info(text, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  dark: (text) => {
    return toast.dark(text, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};
export default function AlertContainer() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
