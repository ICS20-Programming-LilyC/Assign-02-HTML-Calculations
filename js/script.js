// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: March 23 2023
// This file contains the JS functions for index.html


'use strict'
/**
 * This function calculates the discount from your purchases.
 */
function enterClicked () {
  // input
  let originalPrice = parseFloat(document.getElementById('orginal-price').value);
  let discountRate = parseFloat(document.getElementById('discount-rate').value);

  // process
  let discountAmount = originalPrice * discountRate;
  let totalPrice = originalPrice- discountAmount;

  // output
  document.getElementById('total-price').innerHTML = 'Discouted price is: $ ' + totalPrice.toFixed(2)

  document.getElementById('discount-amount').innerHTML = 'You will recieve $ ' + discountAmount.toFixed(2) + " off."
  }