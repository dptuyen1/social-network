import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import { createContext, useReducer } from 'react';
import MyUserReducer from './reducers/userReducer';
import Header from './layout/Header';
import cookie from 'react-cookies';
import userReducer from './reducers/userReducer';

export const MyUserContext = createContext();

const App = () => {
    const [user, dispatch] = useReducer(userReducer, cookie.load('user') || null);

    return (
        <MyUserContext.Provider value={[user, dispatch]}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </MyUserContext.Provider>
    );
};

export default App;
