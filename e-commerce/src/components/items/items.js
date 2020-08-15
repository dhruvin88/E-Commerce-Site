import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./items.css";
import Item from '../item/item'
import {Row, Col} from 'react-bootstrap';


function Items() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([{
    item: {images: {}},
    store: {}
  }]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const items = await data.json();
    setItems(items.data);
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
      <div>
        {items.map(item => (
          <Item name={item.item.name} imgPath={item.item.images.background} price={item.store.cost}/>
        ))}
      </div>
      </Col>
    </Row>
  );
}

export default Items;
