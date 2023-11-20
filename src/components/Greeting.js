const Greeting = () => {
  const user = "asd";

  const randomSayi = () => {
    return Math.round(Math.random() * 100);
  };

  return (
    <header>
      <h2>Sayfama Hoşgeldin {user}</h2>
      <p className={user == "Ali" ? "highlight" : ""}>
        {user == "Ali"
          ? "Vay efendim kimleri görüyoruz"
          : "Sen de mi geldin..."}
      </p>
      <p>{randomSayi()}</p>
    </header>
  );
};

export default Greeting;
