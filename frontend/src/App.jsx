import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import { useContext, useEffect, useState } from "react";
import DetailPage from "./pages/DetailPage";
import { fetchContext } from "./contexts/FetchProvider";
import { tokenContext } from "./contexts/TokenProvider";

function App() {
  const { apiCategories, getApiPlaces, getApiCategories } =
    useContext(fetchContext);
  const { decode, checkToken } = useContext(tokenContext);

  useEffect(() => {
    getApiPlaces();
    getApiCategories();
    checkToken();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route
            path="/events"
            element={<CategoryPage />}
          />
          <Route path={"/events/:id"} element={<CategoryPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
