// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { useEffect } from "react";

function App() {
  // let auth = true;
  // const [count, setCount] = useState(0);
  // const router = auth ? PrivateRoutes : PublicRoutes;
  const router = PrivateRoutes;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <1) {
        document.body.classList.remove("stiky-header");
      } else {
        document.body.classList.add("stiky-header");
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
