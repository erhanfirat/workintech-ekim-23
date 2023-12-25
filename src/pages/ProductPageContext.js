import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { FetchStates } from "../store/reducers/productReducer";
import { Spinner } from "reactstrap";
import { ProductContext } from "../context/ProductContext";

const ProductPageContext = () => {
  const { products, dispatchProducts } = useContext(ProductContext);

  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  const deleteProduct = (productId) => {
    axios
      .delete(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => {
        console.log("ürün silindi: ", res.data);
        fetchProducts();
      })
      .catch((err) => {
        console.log("ürün silinirken bir hata ile karşılaşıldı: ", err);
      });
  };

  const fetchProducts = () => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        dispatchProducts({ type: "SET_PRODUCTS", payload: res.data });

        toast.success("Ürün datası başarıyla yüklendi!");
      })
      .catch((err) => {
        toast.error(
          "Ürün datası yüklenirken bir hata ile karşılaşıldı: " + err.message
        );
        dispatchProducts({
          type: "CLEAR_PRODUCTS",
        });
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  useEffect(() => {
    setList(
      products.filter((p) =>
        p.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  return (
    <div>
      <h1>Ürünler Sayfası 123 </h1>
      <hr />
      {/* ÜRÜNLER LİSTELENECEK */}
      <div>
        <input
          id="products-filter"
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="products-container gap-2">
        {list.map((product) => (
          <ProductCard2
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPageContext;
