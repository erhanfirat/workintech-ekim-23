import { ButtonIndigo } from "../components/ButtonIndigo";
import { differenceInDays, formatDistance } from "date-fns";
import { tr } from "date-fns/locale";

const AnaSayfa = () => {
  const yasadigimGun = differenceInDays(new Date(), new Date("1985-12-17"));

  const formatDays = formatDistance(new Date(), new Date("1985-12-17"), {
    addSuffix: false,
    locale: tr,
  });
  return (
    <div className="page">
      <h1>Ana Sayfa</h1>
      <hr />
      <p>Sayfama hoş geldiniz</p>
      <h2>
        Yaşadığım Gün Sayısı: {yasadigimGun} <br /> {formatDays}
      </h2>
      <ButtonIndigo
        onClick={() => {
          alert("Bana tıkladılar...");
        }}
        type="button"
        title="Ben bir butonum, yana yana gezerim"
        data-my-custom-id="ozel-bir-deger"
      >
        Alışverişe Başla
      </ButtonIndigo>

      <ButtonIndigo>Yumurta Sepeti</ButtonIndigo>

      <button className="btn-indigo bg-lime">Yeni Button</button>

      <div className="bg-ozel">Merhaba</div>
    </div>
  );
};

export default AnaSayfa;
