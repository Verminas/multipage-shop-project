import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Catalog} from "./pages/catalog/Catalog";

export const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/catalog'} element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};