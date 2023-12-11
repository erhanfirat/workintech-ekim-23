import { useEffect, useState } from "react";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
    // toast.success("UYGULAMA YÜKLENDİ");
    // toast.error("Bir hata ile karşılaşıldı.");
    // toast.warn("Dikkat!");
  }, []);

  return (
    <>
      <Main PI={PI} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
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

// Linting - ESLint - EcmaScript Lint
