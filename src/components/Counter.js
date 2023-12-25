import { useContext, useEffect, useState } from "react";
import Greeting from "./Greeting";
import CounterCard from "./CounterCard";
import { CounterContext } from "../context/CounterContext";

const Counter = (props) => {
  const {
    counter,
    setCounter,
    artisMiktari,
    setArtisMiktari,
    taneFiyat,
    setTaneFiyat,
  } = useContext(CounterContext);
  const [fiyat, setFiyat] = useState(0);

  const arti1 = () => {
    setCounter(counter + artisMiktari);
  };

  const eksi1 = () => {
    counter - artisMiktari >= 0 && setCounter(counter - artisMiktari);
  };

  const yuz = () => {
    // counter: 5
    setCounter(100);
    // counter ?
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

export default Counter;
