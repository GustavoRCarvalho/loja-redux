import { Route, Routes } from "react-router-dom";
import { Home, About, Catalog, Product } from "../Pages";

export default function Content(props) {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="roupas">
          <Route path="id=:id" element={<Product />} />
          <Route path=":catalog" element={<Catalog />} />
        </Route>
        <Route path="*" element={<div>Error NOT Found</div>} />
      </Routes>
    </main>
  );
}
