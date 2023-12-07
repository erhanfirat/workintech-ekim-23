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
    <div className="product-card d-flex flex-column gap-2">
      <img src={product.img} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button onClick={goProductDetail}>
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        İncele
      </Button>
      <Link className="btn btn-primary" to={`/products/edit/${product.id}`}>
        <i className="fa-solid fa-pen me-2"></i>
        Düzenle
      </Link>
      <button
        onClick={() => deleteProduct(product.id)}
        className="btn btn-danger"
      >
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        Sil
      </button>
    </div>
  );
};

export default ProductCard;
