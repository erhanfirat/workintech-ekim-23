import Counter from "../components/Counter";

const SayacSayfa = ({ PI }) => {
  return (
    <div className="page">
      <h1>Sayaç Sayfası</h1>
      <hr />
      <Counter PI={PI} sayacBaslangic={0} />
      <Counter PI={PI} sayacBaslangic={50} />
    </div>
  );
};

export default SayacSayfa;
