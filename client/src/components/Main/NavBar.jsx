import React from "react";
import { useHistory , Switch, Route , useNavigate  } from "react-router-dom";
import styles from "./styles.module.css";


const NavBar = () => {
    const navigate = useNavigate();
  return (

    <div>
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-wight" >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </a>
                <ul className="navbar-nav me-auto mb-1 mb-lg-3">
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>{navigate('/Feed')}}>
                      Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>{navigate('/PostBlogs')}}>
                      Post Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>{navigate('/AboutUs')}}>
                      About us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center">
                <a className="text-reset me-1" href="#">
                  {/* <i className="fas fa-shopping-cart"></i> */}
                </a>

                <div className="dropdown">
                  <a
                    className="text-reset me-8 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>{navigate('/Profil')}}>
                        Profil
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>{navigate('/')}}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
