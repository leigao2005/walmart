import React, { Component } from 'react';
import './index.css';
import PosItem from './PosItem';

class ItemList extends Component {
  render() {
    const { items } = this.props
    console.log(items)
    return (
      <div class="pos-item-group" data-automation-id="pos-item-group-default">
        <div class="pos-item-group-items">
          {items.map(
              (posItem, i) =>
                <PosItem
                  key={i}
                  id={i}
                  item_name={posItem.item_name}
                  quantity={posItem.quantity}
                  imgUrl={posItem.imgUrl}
                  price={posItem.price}
                  originalPrice={posItem.originalPrice} />
          )}
        </div>
      </div>
      );
  }
}

export default ItemList;
