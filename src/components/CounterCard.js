import { useEffect, useState } from "react";
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
    <div className="counter-card">
      <p>PI: {PI}</p>
      <h3>Sayaç</h3>
      <hr />
      <p>
        Counter: <strong>{counter}</strong>
      </p>
      <button className="btn btn-secondary me-1" onClick={arti1}>
        +{artisMiktari}
      </button>
      <button className="btn btn-secondary me-1" onClick={eksi1}>
        -{artisMiktari}
      </button>
      <button className="btn btn-secondary me-1" onClick={yuz}>
        100
      </button>

      <hr />
      <p>
        Artış Miktarı: <strong>{artisMiktari}</strong>
      </p>
      <Button className="me-1" onClick={artisMiktariArttir}>
        +1
      </Button>
      <Button className="me-1" onClick={artisMiktariAzalt}>
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
