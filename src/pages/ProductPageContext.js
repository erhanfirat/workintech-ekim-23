import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
import { ProductContext } from "../context/ProductContext";
import { API } from "../api/api";

const ProductPageContext = () => {
  const { products, dispatchProducts } = useContext(ProductContext);

  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  const deleteProduct = (productId) => {
    API.delete("/products/" + productId)
      .then((res) => {
        console.log("ürün silindi: ", res.data);
        fetchProducts();
      })
      .catch((err) => {
        console.log("ürün silinirken bir hata ile karşılaşıldı: ", err);
      });
  };

  const fetchProducts = () => {
    API.get("/products")
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

export default ProductPageContext;
