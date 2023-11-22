const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
