import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import ProductYupForm from "../components/ProductYupForm";
import { API } from "../api/api";

const ProductEditPage = () => {
  // productId url den yakala
  const { productId } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState(null);

  const goBack = () => {
    // history geri butonuna tıkla
    history.goBack();
  };

  // productId ye göre product datasını çek
  useEffect(() => {
    API.get("/products/" + productId).then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <>
      <h1>
        <Button className="me-2" onClick={goBack}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        Ürün Düzenleme Sayfası | {product?.name}
      </h1>
      <hr />
      <div>
        {/* Ürün Formu Konulacak */}
        <ProductYupForm productData={product} />
      </div>
    </>
  );
};

export default ProductEditPage;
