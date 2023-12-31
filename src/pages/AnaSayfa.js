import { ButtonIndigo } from "../components/ButtonIndigo";
import { differenceInDays, formatDistance, isWeekend } from "date-fns";
import { tr } from "date-fns/locale";
import { useSelector } from "react-redux";

const AnaSayfa = () => {
  const storeUserName = useSelector((store) => store.user.name);

  const yasadigimGun = differenceInDays(new Date(), new Date("1997-06-08"));
  const formatDays = formatDistance(new Date(), new Date("1997-06-08"), {
    addSuffix: false,
    locale: tr,
  });

  return (
    <div className="page">
      <h1>Ana Sayfa - {storeUserName}</h1>
      <hr />
      <p>Sayfama hoş geldiniz</p>
      <p>
        {isWeekend(new Date())
          ? "Oley tatil!"
          : "Tatili anlamlı kılan çalışmaktır"}
      </p>
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
