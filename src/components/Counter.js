import { useState } from "react";
import Greeting from "./Greeting";
import CounterCard from "./CounterCard";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.sayacBaslangic);
  const [artisMiktari, setArtisMiktari] = useState(1);

  const arti1 = () => {
    setCounter(counter + artisMiktari);
  };

  const eksi1 = () => {
    setCounter(counter - artisMiktari);
  };

  const yuz = () => {
    setCounter(100);
  };

  const artisMiktariArttir = () => {
    setArtisMiktari(artisMiktari + 1);
  };

  const artisMiktariAzalt = () => {
    setArtisMiktari(artisMiktari - 1);
  };

  return (
    <CounterCard
      counter={counter}
      arti1={arti1}
      artisMiktari={artisMiktari}
      eksi1={eksi1}
      yuz={yuz}
      artisMiktariArttir={artisMiktariArttir}
      artisMiktariAzalt={artisMiktariAzalt}
      PI={props.PI}
    />
  );
};

export default Counter;
