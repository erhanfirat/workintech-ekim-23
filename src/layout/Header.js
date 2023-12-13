import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../utils/hooks/useLocalStorage";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    // component did mount
    // localStorage > user-name değerini kontrol et
    // state e yaz
    setUserName(localStorage.getItem("user-name"));
  }, []);

  return (
    <nav className="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ekim 1023
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sayac">
                Yumurta Sepeti
              </NavLink>
            </li>
            {!userName && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                data-cy="link-products"
              >
                Ürünler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products/create"
                data-cy="link-product-form"
              >
                + Ürün Ekle
              </NavLink>
            </li>
          </ul>
        </div>
        {userName && <div>Merhaba {userName}</div>}
        <div>
          <select
            value={theme}
            className="form-control"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          >
            <option>light</option>
            <option>dark</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
