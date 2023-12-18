import { useState } from "react";
import Counter from "../components/Counter";
import CounterByReducer from "../components/CounterByReducer";

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
      {show && <CounterByReducer PI={PI} sayacBaslangic={0} />}
    </div>
  );
};

export default SayacSayfa;
