import { userName } from "../App";

const Greeting = ({ apptenGelenPi, mesaj, log }) => {
  const user = "asd";
  /* 
  props = { apptenGelenPi, mesaj, log }
  */

  // const { apptenGelenPi, mesaj, log } = props;

  const randomSayi = () => {
    return Math.round(Math.random() * 100);
  };

  log(mesaj);

  return (
    <header>
      <h4>App'ten gelen PI: {apptenGelenPi}</h4>
      <h4>App'ten gelen mesaj: {mesaj}</h4>
      <h2>Sayfama Hoşgeldin {userName}</h2>
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

export const Color = "purple";
