import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CounterCard = ({
  counter,
  arti1,
  artisMiktari,
  yuz,
  eksi1,
  artisMiktariArttir,
  artisMiktariAzalt,
  PI,
  fiyat,
  taneFiyat,
  setTaneFiyat,
}) => {
  // useEffect(() => {
  //   console.log("artış miktarı güncellendi: ", artisMiktari);
  // }, [artisMiktari]);
  const userName = useSelector((store) => store.user.name);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    // component did mount
    console.log("CounterCard Componenti Did mount edildi - Yüklendi");

    return () => {
      // component will unmount
      console.error("CounterCard componenti will unmount | kaldırılacak");
    };
  }, []);

  useEffect(() => {
    // CounterCard did update
  });

  return (
    <div className="counter-card" data-testid="counter-card">
      <p>PI: {PI}</p>
      <p>Store user name: {userName}</p>
      <h3>Sayaç</h3>
      <hr />
      <p>
        Counter: <strong data-testid="counter-display">{counter}</strong>
      </p>
      <button
        className="btn btn-secondary me-1"
        onClick={arti1}
        data-testid="counter-arttir-btn"
      >
        +{artisMiktari}
      </button>
      <button
        className="btn btn-secondary me-1"
        onClick={eksi1}
        data-testid="counter-azalt-btn"
      >
        -{artisMiktari}
      </button>
      <button className="btn btn-secondary me-1" onClick={yuz}>
        100
      </button>

      <hr />
      <p>
        Artış Miktarı:{" "}
        <strong data-testid="artis-miktari">{artisMiktari}</strong>
      </p>
      <Button className="me-1" onClick={artisMiktariArttir}>
        +1
      </Button>
      <Button
        className="me-1"
        onClick={artisMiktariAzalt}
        data-testid="azalt-artis"
      >
        -1
      </Button>

      <hr />
      <p>
        Tane Fiyat: <strong>{taneFiyat}</strong>
      </p>
      <Button onClick={() => setTaneFiyat(taneFiyat + 1)}>+1</Button>
      <Button onClick={() => setTaneFiyat(taneFiyat - 1)}>-1</Button>

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <hr />
      <h4>Fiyat: {fiyat} TL</h4>
    </div>
  );
};

export default CounterCard;
