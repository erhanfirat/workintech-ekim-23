import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { CounterContext } from "../context/CounterContext";
import { SettingsContext } from "../context/SettingsContext";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const [userName, setUserName] = useState("");
  const { theme, setTheme, lang, setLang } = useContext(SettingsContext);
  const storeUserName = useSelector((store) => store.user.name);
  const storeUserEmail = useSelector((store) => store.user.email);
  const { counter } = useContext(CounterContext);

  // const productCount = useSelector((store) => store.products.list.length);
  const { products } = useContext(ProductContext);
  const productCount = products.length;

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
          Ekim 1023 - {storeUserName}, {storeUserEmail}
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
                Yumurta Sepeti [{counter}]
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
                Ürünler [{productCount}]
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
        <div>
          <select
            value={lang}
            className="form-control"
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <option>tr</option>
            <option>en</option>
            <option>fr</option>
            <option>es</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
