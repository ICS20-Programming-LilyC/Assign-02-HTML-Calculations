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
  let originalPrice = parseFloat(document.getElementById('original-price').value);
  let discountRate = parseFloat(document.getElementById('discount-rate').value);

  // process
  let discountAmount = originalPrice - originalPrice * discountRate;
  let totalPrice = originalPrice - discountAmount;

  // output
  document.getElementById('discount-amount').innerHTML = 'Discounted price is: $ ' + discountAmount.toFixed(2)

  document.getElementById('total-price').innerHTML = 'You will receive $ ' + totalPrice.toFixed(2) + " off."
  }