import React, { Component } from 'react';
import './index.css';

class HiddenSplitor extends Component {
  render() {
    return (
      <div class="pos-split-tender hide-content">
        <div class="order-summary-balance-due order-summary-line clearfix"><span class="order-summary-label"
            data-automation-id="pos-balance-due"><span>Balance due</span></span><span class="order-summary-price text-right"
            data-automation-id="pos-balance-due-amount"><span role="text"><span aria-label="$232.56" role="text"><span
                  class="sup">$</span>232<span class=" ">.</span><span class="sup">56</span></span></span></span></div>
      </div>
    );
  }
}

export default HiddenSplitor;
