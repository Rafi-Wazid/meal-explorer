import { NavLink } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const showToast = (section) => {
    let message;
    switch (section.toLowerCase()) {
      case "home":
        message = "Welcome to the feast headquarters! 🏠🍽️";
        break;
      case "appetizers":
        message = "Time to tease your taste buds! 🎉🥐";
        break;
      case "desserts":
        message = "Sweet journey starts now—grab a spoon! 🍰😄";
        break;
      case "specials":
        message = "Diving into the sea of specials! 🌊🍤";
        break;
      default:
        message = `Exploring ${section} like a food ninja! 🥷🍴`;
    }
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored", // Use colored theme as base
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-amber-50">
      <div className="logo text-3xl md:text-4xl font-bold text-amber-600 hover:text-amber-700 transition-colors duration-300 ease-in-out transform hover:scale-105 p-4 logo-font">
        Meal Explorer
      </div>
      <div className="space-x-8 font-bold mt-4 md:mt-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-amber-600"
          }
          onClick={() => showToast("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/appetizers"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-amber-600"
          }
          onClick={() => showToast("Appetizers")}
        >
          Appetizers
        </NavLink>
        <NavLink
          to="/desserts"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-amber-600"
          }
          onClick={() => showToast("Desserts")}
        >
          Desserts
        </NavLink>
        <NavLink
          to="/specials"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-amber-600"
          }
          onClick={() => showToast("Specials")}
        >
          Specials
        </NavLink>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        className="custom-toast"
      />
    </div>
  );
};

export default Header;