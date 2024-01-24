import React from "react";

//router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import Aloqa_Uchun from "./pages/Aloqa_Uchun";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Mainlayout from "./layout/Mainlayout";
import Detail from "./pages/Detail";
import CategoryProduct from "./pages/CategoryProduct";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/aloqa_uchun" element={<Aloqa_Uchun />} />
        <Route
          path="/:category"
          element={<CategoryProduct />}
          // errorElement={<Error />}
        />
        <Route
          path="/:category/:id"
          element={<Detail />}
          errorElement={<Error />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default App;