import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { API } from "../api/api";

const ProductDetailPage = () => {
  // productId url den yakala
  const { productId } = useParams();
  const history = useHistory();
  const token = "CVBER34536DFge5ylk4m746lkm57456klmfdsfgep3574";

  console.log("productId > ", productId);
  console.log("token > ", token);

  const [product, setProduct] = useState({});

  const goBack = () => {
    // history geri butonuna tıkla
    history.goBack();
  };

  // productId ye göre product datasını çek
  useEffect(() => {
    API
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId, { headers: { Authorization: token}}
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
