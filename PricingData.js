import React, { Component } from 'react';

export const pricingData = {
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

  export const getPricingData = (delay = 1000) => {
      return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(pricingData)
          }, delay);
      });
  };