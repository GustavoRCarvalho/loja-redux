import { Route, Routes } from "react-router-dom";
import { Home, About, Catalog } from '../Pages'

export default function Content (props) {
    return <main className="main">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/catalogo" element={<Catalog />}/>
            <Route path="*" element={<div>Error NOT Found</div>}/>
        </Routes>
    </main>
}