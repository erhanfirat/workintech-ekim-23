import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";

const Main = ({ PI }) => {
  return (
    <div className="layout">
      <Header />
      <PageBody PI={PI} />
      <Footer />
    </div>
  );
};

export default Main;
