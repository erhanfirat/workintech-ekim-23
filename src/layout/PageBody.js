import AnaSayfa from "../pages/AnaSayfa";
import ProductPage from "../pages/ProductPage";
import SayacSayfa from "../pages/SayacSayfa";

const PageBody = ({ PI }) => {
  return (
    <div className="page-body">
      <AnaSayfa />
      <SayacSayfa PI={PI} />
      <div className="sticky">Selam</div>
      <ProductPage />
    </div>
  );
};

export default PageBody;
