import React from 'react';
import PropTypes from 'prop-types';
import './item.css';
import {Row, Col} from 'react-bootstrap';

const item = ({name, imgPath, price}) => (
  <div>
    <h3>{name}</h3>
    <img src={imgPath}></img>
    <p>VBucks: {price}</p>
    <br/>
  </div>
);

item.propTypes = {};

item.defaultProps = {};

export default item;
