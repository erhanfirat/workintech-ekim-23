import { useState } from "react";
import Greeting from "./Greeting";

const Counter = () => {
  const [counter, setCounter] = useState(100);
  const [artisMiktari, setArtisMiktari] = useState(1);
  let imitasyonCounter = 0;

  console.log("Counter Component fonksiyonu çalıştı! ", counter);

  const arti1 = () => {
    // ?
    // counter + 1
    // counter = counter + 1;
    setCounter(counter + artisMiktari);
    console.log("counter > ", counter);
    // 100 tunahan pınar muhammed
    // 101 anıl sevda aytekin burak görkem uğur
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

  const imitasyonCounterArttir = () => {
    imitasyonCounter++;
    console.log("yeni imitasyonCounter: ", imitasyonCounter);
  };

  return (
    <div>
      <p>imitasyonCounter: {imitasyonCounter}</p>
      <button onClick={imitasyonCounterArttir}>+1</button>

      <p>Counter: {counter}</p>
      <button onClick={arti1}>+{artisMiktari}</button>
      <button onClick={eksi1}>-{artisMiktari}</button>
      <button onClick={yuz}>100</button>

      {/* JavaScript eXpression => JSX */}
      {counter === 110 && <p> Mükemmel - Conditional Rendering</p>}
      {counter === 110 && <Greeting />}

      <hr />
      <p>Artış Miktarı: {artisMiktari}</p>
      <button onClick={artisMiktariArttir}>+1</button>
      <button onClick={artisMiktariAzalt}>-1</button>
    </div>
  );
};

export default Counter;
