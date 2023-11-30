import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");

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
        setProducts(res.data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  return (
    <div>
      <h1>Ürünler Sayfası</h1>
      <hr />
      {/* ÜRÜNLER LİSTELENECEK */}
      <div>
        <input
          id="products-filter"
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="products-container">
        {products
          .filter((p) =>
            p.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
