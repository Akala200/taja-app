import React, { Component } from 'react';
//import InputNumber from '../uielements/InputNumber';
import { notification } from '../index';

export default class CartRow extends Component {
  onChange = value => {
    if (!isNaN(value)) {
      if (value !== this.props.quantity) {
        this.props.changeQuantity(this.props.objectID, value);
      }
    } else {
      notification('error', 'Please give valid number');
    }
  };

  render() {
    const {
      price,
      image,
      name,
    } = this.props;
  //  const totalPrice = (price * quantity).toFixed(2);
    return (
      <tr>
        <td className="isoItemImage">
          <img alt="#" src={image} />
        </td>
        <td className="isoItemName">
          <h3>
            {name}
          </h3>
          <p>
          $320
          </p>
        </td>
        <td className="isoItemPrice">
          {price.toFixed(2)}
        </td>
      </tr>
    );
  }
}
