import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./items.css";

function Items() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([{
    item: {},
    store: {},
    images: {},
    background: {},
    cost: {}
  }]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      {items.map(item => (
        //<img src={item.item.images.background}></img>,
        <h1>{item.item.name}</h1>
        //<div>{item.item.store?.cost}</div>
      ))}
    </div>
  );
}

Items.propTypes = {};

Items.defaultProps = {};

export default Items;
