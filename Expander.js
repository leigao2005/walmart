import React, { Component } from 'react';
import './index.css';

const ExpanderWrapHOC = (WrappedComponent, title) => {
    class Expander extends Component {
        state = {
            expended: false
        }
        toggleItemDetail = () => {
            this.setState(prevState => ({
                expended: !prevState.expended
            }))
        }
        render() {
            return (
                <div data-tl-id="CxoShipPupOptSeeItemDetLnk" class="expander expanded pos-items-expander">
                <button class="button icon-button expander-toggle font-semibold button--link" data-automation-id="button"
                    data-tl-id="pos-item-group-expander-expander-button" aria-expanded="true" type="button"
                    onClick={this.toggleItemDetail}>
                    <span class="button-wrapper"><span class="icon-button-children">{this.state.expended ? "Hide " : "See "}{title}</span>
                    <span alt="" class={"elc-icon xs-padding-sides expander-icon " + (this.state.expended ? "elc-icon-minus" : "elc-icon-plus" )}
                        aria-hidden="true"></span></span></button>
                    <div class={"expander-content module " + (this.state.expended ? "" : " hidden")} role="region"
                        aria-labelledby="expander" aria-hidden="false">
                    <div class="collapsible-content" styles="max-height: 4000px; transition: max-height 0ms linear 0s;">
                    <WrappedComponent {...this.props} />
                    </div>
                </div>
                </div>
            );
        }
    }
    return Expander;
}

export default ExpanderWrapHOC;
