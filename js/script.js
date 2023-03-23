// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: March 23 2023
// This file contains the JS functions for index.html


'use strict'
/**
 * This function calculates the discount from your purchases.
 */
function calculate () {
  // input
  let orginal-price = parseFloat(document.getElementById('orginal-price').value);
  let discount-rate = parseFloat(document.getElementById('discount-rate').value);

  // process
  let discount-amount = orginal-price * discount-rate;
  let total-price = orginal-price - discount-amount;

  // output
  document.getElementById('total-price').innerHTML = 'Discouted price is: $ ' + total-price.toFixed(2)
}

  document.getElementById('discount-amount').innerHTML = 'You will recieve $ ' + discount-amount.toFixed(2) + "off."
}