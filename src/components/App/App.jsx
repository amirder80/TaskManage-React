
import "./app.css"
import Layout from "../Layout/Layout.jsx";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}
export default App