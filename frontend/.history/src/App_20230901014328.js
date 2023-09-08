import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { createContext, useReducer } from 'react';
import UserReducer from './reducers/UserReducer';
import Header from './layouts/Header';
import cookie from 'react-cookies';

export const UserContext = createContext();

const App = () => {
    const [user, dispatch] = useReducer(UserReducer, cookie.load('user') || null);

    return (
        <UserContext.Provider value={[user, dispatch]}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
