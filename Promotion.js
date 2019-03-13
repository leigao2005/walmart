import React, { Component } from 'react';
import './index.css';

class Promotion extends Component {
  state = {
    validCoupon: true,
    appliedCoupon: false
  }

  validateCoupon = e => {
    if (!this.state.appliedCoupon) {
      this.setState({
        validCoupon: document.getElementById("promoCode").value === "DISCOUNT",
        appliedCoupon: document.getElementById("promoCode").value === "DISCOUNT"
      })
    }
    e.preventDefault();
  }
  render() {
    console.log(this.state.validCoupon)
    console.log(this.state.appliedCoupon)
    return (
      <div class="">
        <form class="order-summary-promo-form">
          <div class={"field " + (this.state.validCoupon ? "" : " field--error") + " field--secondary" }>
            <input placeholder="Promo code" aria-invalid="false" data-automation-id="order-summary-promo-box"
              arialabel="Promo Code" tealeafid="CxoShipPupOptPromoInp" name="promoCode" initialvalue=""
              class={"field-input " + (this.state.validCoupon ? "" : " field-input--error") + " field-input--secondary" }
              id="promoCode" type="text" />
            <label class={"field-label " + (this.state.validCoupon ? "" : " field-label--error") + " field-label--secondary" }>
              <span class={"field-label-text " + (this.state.validCoupon ? "" : " visuallyhidden")}
                data-automation-id="order-summary-promo-box-label" aria-hidden="false">
                {this.state.appliedCoupon ? "Coupon applied" : "Promo code"}</span><span
                class={"field-label-error " + (this.state.validCoupon ? " visuallyhidden" : "" )} aria-live="polite"
                data-automation-id="order-summary-promo-box-error">Sorry, this code is not
                applicable.</span></label>
          </div><button class="button form-save-button pull-right button--link" data-automation-id="promoCode-apply-btn"
            data-tl-id="button" type="submit" onClick={this.validateCoupon}><span class="button-wrapper">Apply</span></button>
        </form>
      </div>
    );
  }
}

export default Promotion;
