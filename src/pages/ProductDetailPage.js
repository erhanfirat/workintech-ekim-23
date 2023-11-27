import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ProductDetailPage = () => {
  // productId url den yakala
  const { productId } = useParams();
  const history = useHistory();

  console.log("productId > ", productId);

  const [product, setProduct] = useState({});

  const goBack = () => {
    // history geri butonuna tıkla
    history.goBack();
  };

  // productId ye göre product datasını çek
  useEffect(() => {
    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <>
      <h1>
        <Button className="me-2" onClick={goBack}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        Ürün Detay
      </h1>
      <hr />
      <div>
        <img src={product.img} />
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </>
  );
};

export default ProductDetailPage;
