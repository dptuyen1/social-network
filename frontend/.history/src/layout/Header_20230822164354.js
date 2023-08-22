import { useContext } from 'react';
import { MyUserContext } from '../App';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);
    return (
        <>
            {if (user !== null)}
        </>
    );
};

export default Header;
