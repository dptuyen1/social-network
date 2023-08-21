import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
    );
};

export default App;
