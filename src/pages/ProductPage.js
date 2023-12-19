import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCard2";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FetchStates, ProductActions } from "../store/reducers/productReducer";
import { Spinner } from "reactstrap";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.list);
  const productFetchState = useSelector((store) => store.products.fetchState);

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
    dispatch({
      type: ProductActions.setProductFetchState,
      payload: FetchStates.fetching,
    });
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        dispatch({ type: ProductActions.setProductList, payload: res.data });
        dispatch({
          type: ProductActions.setProductFetchState,
          payload: FetchStates.fetched,
        });
        toast.success("Ürün datası başarıyla yüklendi!");
      })
      .catch((err) => {
        toast.error(
          "Ürün datası yüklenirken bir hata ile karşılaşıldı: " + err.message
        );
        dispatch({
          type: ProductActions.setProductFetchState,
          payload: FetchStates.failed,
        });
      });
  };

  useEffect(() => {
    if (
      productFetchState === FetchStates.notFetched ||
      productFetchState === FetchStates.failed
    ) {
      fetchProducts();
    }
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
        {productFetchState === FetchStates.fetching && <Spinner />}
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

export default ProductPage;
