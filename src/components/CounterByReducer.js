import { useEffect, useReducer, useState } from "react";
import Greeting from "./Greeting";
import CounterCard from "./CounterCard";



const counterReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      if (state === 100) {
        return state;
      }
      return state + 1;
      break;

    case "decrease":
      if (state === 0) {
        return state;
      }
      return state - 1;
      break;

    case "yuz":
      return 100;

    default:
      return state;
  }
};

const CounterByReducer = (props) => {
  // Uygulama Kuralı: Counter 0 - 100 arası bir değer alabilir
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);

  const [artisMiktari, setArtisMiktari] = useState(1);
  const [taneFiyat, setTaneFiyat] = useState(5);
  const [fiyat, setFiyat] = useState(0);

  const arti1 = () => {
    dispatchCounter({ type: "increase" });
  };

  const eksi1 = () => {
    dispatchCounter({ type: "decrease" });
  };

  const yuz = () => {
    // counter: 5
    // setCounter(100);
    dispatchCounter({ type: "yuz" });
  };

  const artisMiktariArttir = () => {
    setArtisMiktari(artisMiktari + 1);
  };

  const artisMiktariAzalt = () => {
    artisMiktari - 1 >= 0 && setArtisMiktari(artisMiktari - 1);
  };

  useEffect(() => {
    // console.log("Counter: ", counter, " | taneFiyat: ", taneFiyat);
    setFiyat(counter * taneFiyat);
  }, [counter, taneFiyat]);

  useEffect(() => {
    // component did update
    // state veya prop değişmiştir
    // console.log("Counter componenti did update oldu | re-render");
  });

  useEffect(() => {
    // did update
    // console.log("[] Counter componenti did update oldu | re-render");
  }, [
    // tüm state ve propları
    counter,
    artisMiktari,
    taneFiyat,
    fiyat,
    props.sayacBaslangic,
  ]);

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
      fiyat={fiyat}
      taneFiyat={taneFiyat}
      setTaneFiyat={setTaneFiyat}
    />
  );
};

export default CounterByReducer;
