import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import Compare from "./Pages/Compare";

import FavoritesContextProvider from "./store/fav-context";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },
    { path: "/favourite", element: <Favourite /> },
    { path: "/compare", element: <Compare /> },
  ]);

  return (
    <div className="App">
      <FavoritesContextProvider>
        <RouterProvider router={router} />
      </FavoritesContextProvider>
    </div>
  );
}
export default App;
