import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import { createContext, useReducer } from 'react';
import MyUserReducer from './reducers/MyUserReducers';
import Header from './layout/Header';
import cookie from 'react-cookies';

export const MyUserContext = createContext();

const App = () => {
    const [user, dispatch] = useReducer(MyUserReducer, null);

    return (
        <MyUserContext.Provider value={[user, dispatch]}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </MyUserContext.Provider>
    );
};

export default App;
