const CounterCard = ({
  counter,
  arti1,
  artisMiktari,
  yuz,
  eksi1,
  artisMiktariArttir,
  artisMiktariAzalt,
  PI,
}) => {
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
    </div>
  );
};

export default CounterCard;
