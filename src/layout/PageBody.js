import AnaSayfa from "../pages/AnaSayfa";
import SayacSayfa from "../pages/SayacSayfa";

const PageBody = ({ PI }) => {
  return (
    <div className="page-body">
      <AnaSayfa />
      <SayacSayfa PI={PI} />
      <div className="sticky">
        Selam
      </div>
    </div>
  );
};

export default PageBody;
