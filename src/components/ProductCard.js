import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ProductCard = ({ product, deleteProduct }) => {
  const history = useHistory();

  const goProductDetail = () => {
    // todo: ürün detay sayfasına git
    history.push(`/products/detail/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.img} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link className="btn btn-primary" to={`/products/detail/${product.id}`}>
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        İncele Link
      </Link>
      <Button onClick={goProductDetail}>
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        İncele Btn
      </Button>
      <Button onClick={() => deleteProduct(product.id)} color="danger">
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        Sil
      </Button>
    </div>
  );
};

export default ProductCard;
