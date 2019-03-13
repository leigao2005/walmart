import React from 'react'

class PosItem extends React.Component {
    render() {
        const { id, item_name, quantity, imgUrl, price, originalPrice } = this.props
        return (
          <div class="pos-item pos-item-regular clearfix">
            <div class="pull-left">
              <div class="pos-item-flags"></div>
              <div class="pos-item-thumbnail"><img src={imgUrl} alt="" aria-hidden="true" /></div>
            </div>
            <div class="pos-item-qty-price">
              <div class="Grid--gutters text-left Grid" x-small-sizes="9,3" medium="1">
                <div class="Grid-col u-size-9-12 u-size-1-m ">
                  <div class="pos-item-product-name" data-automation-id={"pos-item-product-name-" + id}>
                    <div class="truncate">
                      <div class="truncated-content"><span>{item_name}</span><span
                          class="truncate-toggle truncate-toggle-collapsed">…</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pos-item-qty pos-item-quantity-message hide-content-max-l"><span class="pos-item-quantity-message"
                  aria-hidden="true">Qty: {quantity}</span><span class="ada-element-invisible">Quantity: 1</span></div>
              <div class="pos-item-price" data-automation-id="pos-item-price-0">
                <div><span class="pos-item-price-block order-summary-pickup-saving-price"><span role="text"><span
                        aria-label={price} role="text"><span class="sup">$</span>{price}</span></span></span><span
                    class="pos-item-price-block pos-item-original-price"><span><span class="ada-element-invisible">original price:
                        {originalPrice}</span><span aria-hidden="true"><span role="text"><span aria-label={originalPrice}
                            role="text"><span class="sup">$</span>{originalPrice}</span></span></span></span></span></div>
              </div>
              <div class="pos-item-qty regular hide-content-l" data-automation-id="pos-item-qty-0"><span
                  class="pos-item-quantity-message" aria-hidden="true">Qty: {quantity}</span><span
                  class="ada-element-invisible">Quantity: {quantity}</span></div>
            </div>
            <div class="pos-item-variants"></div>
          </div>
        )
    }
}

export default PosItem;