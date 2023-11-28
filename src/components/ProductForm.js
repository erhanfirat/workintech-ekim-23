import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    active: true,
    color: "",
  });

  const history = useHistory();

  const productSubmitHandler = (e) => {
    e.preventDefault();
    // sayfa yenilenmesini engelle
    console.log("yeni product: ", product);

    axios
      .post("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", product)
      .then((res) => {
        console.warn("ÜRÜN BAŞARIYLA KAYDEDİLDİ! ", res.data);
        // todo: kullanıcıyı ürünler sayfasına redirect
        history.push("/products");
      });
  };

  const inputChangeHandler = (e) => {
    // todo: inputtaki değeri state e yaz
    const key = e.target.name;

    setProduct({ ...product, [key]: e.target.value });
  };

  return (
    <form onSubmit={productSubmitHandler}>
      <div>
        <label>
          Ürün adı:
          <input
            type="text"
            value={product.name}
            name="name"
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div>
        <label>
          Açıklama:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div>
        <label>
          Fotoğraf:
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div>
        <label>
          Fiyat:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div>
        <label>
          Stok Adet:
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default ProductForm;
