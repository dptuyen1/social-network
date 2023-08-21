import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

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
