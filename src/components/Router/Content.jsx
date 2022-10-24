import { Route, Routes } from "react-router-dom";
import { Home, About, CatalogSweatshirt } from '../Pages'
import CatalogAll from "../Pages/CatalogAll";

export default function Content (props) {
    return <main className="main">
        <Routes>
            <Route path="" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="roupas">
                <Route path="" element={<CatalogAll />}/>
                <Route path="moletons" element={<CatalogSweatshirt />}/>
            </Route>
            <Route path="*" element={<div>Error NOT Found</div>}/>
        </Routes>
    </main>
}