import React, { Component } from 'react';
import './index.css';
import Summary from './Summary';
import HiddenSplitor from './HiddenSplitor';
import ExpanderWrapHOC from './Expander';
import ItemList from './ItemList';
import Promotion from './Promotion';

let pricingData = {
  pricing: {
    subtotal: 213.36,
    saving: 3.85,
    tax: 19.20,
    total: 232.56,
    zip: 85050
  },

  posItemList: [{
      item_name: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
      quantity: 1,
      imgUrl: "https://i5.walmartimages.com/asr/5f79b65d-c4ae-458b-8292-07ff3d793693_1.6bfaeeb5ba0d90a1285a4c1a032eaad3.jpeg?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF",
      price: 127.99,
      originalPrice: 137.99
    },
    {
      item_name: "OFM Essentials Racecar-Style Leather Gaming Chair, Multiple",
      quantity: 5,
      imgUrl: "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF",
      price: 85.37,
      originalPrice: 95.37
    }
  ]
}

const WrappedItemList = ExpanderWrapHOC(ItemList, "item details");
const WrappedPromotion = ExpanderWrapHOC(Promotion, "promotion code");

class OrderSummary extends Component {
  render() {
    return (
      <div class="header-order-pos is-new">
        <div class="">
          <div visibleatorabove="medium">
            <div class="persistent-order-summary-container">
              <div class="persistent-order-summary-backdrop"></div>
              <div class="Grid--gutters text-right Grid" x-small="1" medium-sizes="3">
                <div class="Grid-col u-size-1 u-size-3-12-m ">
                  <div class="persistent-order-summary">
                    <Summary pricingData={pricingData} />
                    <HiddenSplitor />
                    <WrappedItemList items={pricingData.posItemList} />
                    <WrappedPromotion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;
