import { Route, Routes } from "react-router-dom";
import { Home, About, CatalogSweatshirt, CatalogAll } from '../Pages'

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