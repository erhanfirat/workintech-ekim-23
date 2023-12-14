import { useState } from "react";
import Counter from "../components/Counter";

const SayacSayfa = ({ PI }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="page">
      <h1>Yumurta Sepeti</h1>
      <hr />
      <button
        className="btn btn-primary"
        data-testid="counter-toggle-btn"
        onClick={() => setShow(!show)}
      >
        Toggle Counter
      </button>
      {show && <Counter PI={PI} sayacBaslangic={0} />}
    </div>
  );
};

export default SayacSayfa;
