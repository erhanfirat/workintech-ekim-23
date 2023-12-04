import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";

const ProductYupForm = ({ productData }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    active: true,
    color: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    stock: "",
    active: "",
    color: "",
  });
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Ürün adı boş bırakılamaz.")
      .min(3, "Ürün adı 3 harften kısa olamaz."),
    description: Yup.string(),
    img: Yup.string().url("Fotoğra URL formatı hatalı."),
    price: Yup.number().min(0, "Ürün fiyatı eksi değer alamaz."),
    stock: Yup.number().min(0, "Ürün stok adedi eksi değer alamaz."),
    active: Yup.boolean(),
    color: Yup.string(),
  });

  const productSubmitHandler = (e) => {
    e.preventDefault();
    // sayfa yenilenmesini engelle
    console.log("yeni product: ", product);

    // yeni kayıt ekleme: POST
    // kayıt güncelleme: PUT
    // ?
    if (product.id) {
      // Update: PUT
      axios
        .put(
          "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" +
            product.id,
          product
        )
        .then((res) => {
          console.warn("ÜRÜN BAŞARIYLA KAYDEDİLDİ! ", res.data);
          // todo: kullanıcıyı ürünler sayfasına redirect
          history.push("/products");
        });
    } else {
      // Create: POST
      axios
        .post(
          "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
          product
        )
        .then((res) => {
          console.warn("ÜRÜN BAŞARIYLA KAYDEDİLDİ! ", res.data);
          // todo: kullanıcıyı ürünler sayfasına redirect
          history.push("/products");
        });
    }
  };

  const inputChangeHandler = (e) => {
    // e.target = Input DOM nesnesi
    const { name, value, type, checked } = e.target;
    const inputVal = type === "checkbox" ? checked : value;

    setProduct({ ...product, [name]: inputVal });

    Yup.reach(formSchema, name)
      .validate(inputVal)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    productData && setProduct(productData);
  }, [productData]);

  useEffect(() => {
    console.log("Product: ", product);
    formSchema.isValid(product).then((valid) => setFormValid(valid));
  }, [product]);

  useEffect(() => {
    console.log("formValid: ", formValid);
  }, [formValid]);

  useEffect(() => {
    console.log("formErrors: ", formErrors);
  }, [formErrors]);

  return (
    <form onSubmit={productSubmitHandler}>
      <FormGroup>
        <Label>Ürün adı:</Label>
        <Input
          type="text"
          value={product.name}
          name="name"
          onChange={inputChangeHandler}
          invalid={!!formErrors.name}
        />
        <FormFeedback>{formErrors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Açıklama:</Label>
        <Input
          type="text"
          name="description"
          value={product.description}
          className={formErrors.description ? "error" : ""}
          onChange={inputChangeHandler}
          invalid={!!formErrors.description}
        />
        <FormFeedback>{formErrors.description}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Fotoğraf:</Label>
        <Input
          type="url"
          name="img"
          value={product.img}
          className={formErrors.img ? "error" : ""}
          onChange={inputChangeHandler}
          invalid={!!formErrors.img}
        />
        <FormFeedback>{formErrors.img}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Fiyat:</Label>
        <Input
          type="number"
          name="price"
          value={product.price}
          className={formErrors.price ? "error" : ""}
          onChange={inputChangeHandler}
          invalid={!!formErrors.price}
        />
        <FormFeedback>{formErrors.price}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Stok Adet:</Label>
        <Input
          type="number"
          name="stock"
          value={product.stock}
          className={formErrors.stock ? "error" : ""}
          onChange={inputChangeHandler}
          invalid={!!formErrors.stock}
        />
        <FormFeedback>{formErrors.stock}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Aktif:</Label>
        <Input
          type="checkbox"
          name="active"
          checked={product.active}
          className={formErrors.active ? "error" : ""}
          onChange={inputChangeHandler}
        />
        {/* <FormFeedback>{formErrors.active}</FormFeedback> */}
      </FormGroup>
      <FormGroup>
        <Label>Renk:</Label>
        <Input
          type="select"
          name="color"
          value={product.color}
          className={formErrors.color ? "error" : ""}
          onChange={inputChangeHandler}
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
        </Input>
        <FormFeedback>{formErrors.color}</FormFeedback>
      </FormGroup>
      <Button color="primary" type="submit" disabled={!formValid}>
        Kaydet
      </Button>
    </form>
  );
};

export default ProductYupForm;
