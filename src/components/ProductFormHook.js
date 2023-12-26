import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../api/api";

const ProductFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      img: "",
      price: 0,
      stock: 0,
      active: true,
      color: "",
    },
    mode: "all",
  });

  const history = useHistory();

  const productSubmitHandler = (product) => {
    // sayfa yenilenmesini engelle
    console.log("yeni product: ", product);

    API.post(
      "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
      product
    ).then((res) => {
      console.warn("ÜRÜN BAŞARIYLA KAYDEDİLDİ! ", res.data);
      // todo: kullanıcıyı ürünler sayfasına redirect
      toast.success("Ürün başarıyla kaydedildi! ");
      history.push("/products");
    });
  };

  return (
    <form onSubmit={handleSubmit(productSubmitHandler)}>
      <div>
        <label>
          Ürün adı:
          <input
            type="text"
            {...register("name", { required: "İsim alanı zorunludur." })}
          />
        </label>
        <div>{errors?.name?.message}</div>
      </div>
      <div>
        <label>
          Açıklama:
          <input type="text" {...register("description")} />
        </label>
      </div>
      <div>
        <label>
          Fotoğraf:
          <input
            type="url"
            {...register("img", {
              pattern: {
                value:
                  "[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)",
                message: "Lütfen geçerli bir URL adresi giriniz.",
              },
            })}
          />
        </label>
        <div>{errors?.img?.message}</div>
      </div>
      <div>
        <label>
          Fiyat:
          <input
            type="number"
            {...register("price", {
              min: { value: 0, message: "Fiyat bilgisi eksi değer alamaz." },
            })}
          />
        </label>
        <div>{errors?.price?.message}</div>
      </div>
      <div>
        <label>
          Stok Adet:
          <input
            type="number"
            {...register("stock", {
              min: { value: 0, message: "Stok bilgisi eksi değer alamaz." },
            })}
          />
        </label>
        <div>{errors?.stock?.message}</div>
      </div>
      <div>
        <label>
          Aktif:
          <input type="checkbox" {...register("active")} />
        </label>
      </div>
      <div>
        <label>
          Renk:
          <select
            {...register("color", {
              required: "Lütfen renk bilgisi seçiniz.",
            })}
          >
            <option value="" disabled>
              Lütfen Renk seçiniz...
            </option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="brown">Brown</option>
            <option value="white">White</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <div>{errors?.color?.message}</div>
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default ProductFormHook;
