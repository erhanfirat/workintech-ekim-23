import { useEffect } from "react";

const CounterCard = ({
  counter,
  arti1,
  artisMiktari,
  yuz,
  eksi1,
  artisMiktariArttir,
  artisMiktariAzalt,
  PI,
  fiyat,
  taneFiyat,
  setTaneFiyat,
}) => {
  // useEffect(() => {
  //   console.log("artış miktarı güncellendi: ", artisMiktari);
  // }, [artisMiktari]);

  useEffect(() => {
    // component did mount
    console.log("CounterCard Componenti Did mount edildi - Yüklendi");

    return () => {
      // component will unmount
      console.error("CounterCard componenti will unmount | kaldırılacak");
    };
  }, []);

  useEffect(() => {
    // CounterCard did update
  });

  return (
    <div className="counter-card">
      <p>PI: {PI}</p>
      <h3>Sayaç</h3>
      <hr />
      <p>
        Counter: <strong>{counter}</strong>
      </p>
      <button onClick={arti1}>+{artisMiktari}</button>
      <button onClick={eksi1}>-{artisMiktari}</button>
      <button onClick={yuz}>100</button>

      <hr />
      <p>
        Artış Miktarı: <strong>{artisMiktari}</strong>
      </p>
      <button onClick={artisMiktariArttir}>+1</button>
      <button onClick={artisMiktariAzalt}>-1</button>

      <hr />
      <p>
        Tane Fiyat: <strong>{taneFiyat}</strong>
      </p>
      <button onClick={() => setTaneFiyat(taneFiyat + 1)}>+1</button>
      <button onClick={() => setTaneFiyat(taneFiyat - 1)}>-1</button>

      <hr />
      <h4>Fiyat: {fiyat} TL</h4>
    </div>
  );
};

export default CounterCard;
