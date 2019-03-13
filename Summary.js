import { PropTypes } from "react"
import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import './index.css';

class Summary extends React.Component {


  render() {
    const { pricingData } = this.props
    const totalItem = pricingData.posItemList.map(item => item.quantity).reduce((prev, next) => prev + next)
    return (
      <div class="order-summary">
        <div class="order-summary-subtotal order-summary-line"><span class="order-summary-label"><span
              data-automation-id="pos-subtotal-label">Subtotal</span><span class="copy-mini pos-item-qty"
              data-automation-id="pos-item-quantity">{totalItem > 1 ? "(" + totalItem + "items)" : ""}</span></span>
          <span class="Discount order-summary-price text-right"
            data-automation-id="pos-subtotal-price">${pricingData.pricing.subtotal}</span></div>
        <div class="order-summary-line-item order-summary-line"><span class="order-summary-label"
            data-automation-id="pos-shipping-type-0"><button class="button link flyout-trigger button--link"
              data-automation-id="pos-tax-change-zip" data-tl-id="PickupSavingbtn" aria-label="Pickup savings" type="button">
              <span class="button-wrapper"
                data-tip="Picking up your order in the store helps cut costs, and we pass the savings on to you.">Pickup
                savings</span></button>
            <ReactTooltip place="bottom" type="info" effect="solid" />

          </span><span class="Discount order-summary-price text-right" data-automation-id="pos-shipping-price-0">${pricingData.pricing.saving}</span>
          <div class="order-summary-line-extension"></div>
        </div>
        <div class="order-summary-tax order-summary-line"><span class="visuallyhidden">Estimated taxes and fees</span><span
            class="order-summary-label" data-automation-id="pos-tax-label" aria-hidden="true">Est. taxes &amp;
            fees</span><span class="Discount order-summary-price text-right"
            data-automation-id="pos-tax-amount">${pricingData.pricing.tax}</span>
          <div class="order-summary-line-extension zip-line"><span data-automation-id="pos-tax-base-on-zip"><span
                aria-hidden="true">(</span><span aria-hidden="true">Based on 94085</span><span aria-hidden="true">)</span>
            </span></div>
        </div>
        <div>
          <div aria-hidden="true">
            <hr aria-hidden="true" class="divider" />
          </div>
          <div class="order-summary-grand-total order-summary-line"><span class="order-summary-label"
              data-automation-id="pos-grand-total-label"><span class="order-summary-hidden">Estimated Total</span><span
                aria-hidden="true" class="total">Est. total</span></span><span class="Discount order-summary-price text-right"
              data-automation-id="pos-grand-total-amount">${pricingData.pricing.total}</span></div>
        </div>
      </div>
    )
  }
}

export default Summary;
