import { Route, Routes } from "react-router-dom";
import { Home, About } from '../Pages'

export default props => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<div>Error NOT Found</div>}/>
        </Routes>
    </main>
}