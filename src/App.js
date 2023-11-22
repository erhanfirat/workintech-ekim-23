import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Greeting, { Color } from "./components/Greeting";
import Main from "./layout/Main";

export const userName = "Ali";

function App() {
  const [sayacBaslangic, setSayacBaslangic] = useState(50);
  const PI = 3.1415;
  const log = (msj) => console.log(msj);

  useEffect(() => {
    // app componentinin did mount
    // tüm uygulama çalıştırıldı ve yüklendi
    // Sadece 1 kere çalışır
    console.warn("APP DID MOUNT! UYGULAMA YÜKLENDİ!");
  }, []);

  return (
    <Main PI={PI} />
    // JSX - Updated HTML
    // <div className="App">
    //   {Color}
    //   <br />
    //   <Greeting apptenGelenPi={PI} mesaj="Merhaba" log={log}></Greeting>
    //   <hr />
    //   <Counter sayacBaslangic={sayacBaslangic} />
    // </div>
  );
}

export default App;
