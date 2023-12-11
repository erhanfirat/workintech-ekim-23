import LoginForm from "../components/LoginForm";
import ProductForm from "../components/ProductForm";
import ProductFormHook from "../components/ProductFormHook";
import ProductYupForm from "../components/ProductYupForm";

const ProductCreatePage = () => {
  return (
    <div className="page">
      <h1>Create Product Page</h1>
      <hr />
      <ProductFormHook />
    </div>
  );
};

export default ProductCreatePage;
