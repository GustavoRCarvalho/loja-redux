import { BrowserRouter } from 'react-router-dom'
import Content from './components/Router/Content'

export default props => (
    <div className="App">
        <BrowserRouter>
            {/* <Menu/> */}
            <Content />
        </BrowserRouter>
    </div>
)