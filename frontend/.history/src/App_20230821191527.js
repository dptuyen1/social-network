import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" />
                <Route path="/profile" />
            </Routes>
        </Router>
    );
};

export default App;
