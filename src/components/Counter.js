import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import CounterCard from "./CounterCard";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.sayacBaslangic);
  const [artisMiktari, setArtisMiktari] = useState(1);
  const [taneFiyat, setTaneFiyat] = useState(5);
  const [fiyat, setFiyat] = useState(0);

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
