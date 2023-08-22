import { useContext } from 'react';
import { MyUserContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);

    const logout = () => {
        dispatch({
            type: 'logout',
        });
    };
    return (
        <>
            {user !== null ? (
                <header class="p-3 mb-3 border-bottom">
                <div class="container">
                  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                      <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>
            
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li><Link class="nav-link px-2 link-secondary">Overview</Link></li>
                      <li><Link class="nav-link px-2 link-dark">Inventory</Link></li>
                      <li><Link class="nav-link px-2 link-dark">Customers</Link></li>
                      <li><Link class="nav-link px-2 link-dark">Products</Link></li>
                    </ul>
            
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
            
                    <div class="dropdown text-end">
                      <Link class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                      </a>
                      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><Link class="dropdown-item" href="#">New project...</Link></li>
                        <li><Link class="dropdown-item" href="#">Settings</Link></li>
                        <li><Link class="dropdown-item" href="#">Profile</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" href="#">Sign out</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            ) : (
                <></>
            )}
        </>
    );
};

export default Header;