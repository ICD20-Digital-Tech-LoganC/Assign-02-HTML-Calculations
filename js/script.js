// Created by: Logan Connors
// Created on: Mar 31 2024
// This file contains the JS functions for index.html

"use strict";

// This Section calculates the TTK for Rainbow Six Siege
function calculateTTK() {
// This function gets the RPM, damage, and opponent health from the user
  let rpm = parseInt(document.getElementById('RPM').value);
  let damage = parseInt(document.getElementById('damage').value);
  let health = parseInt(document.getElementById('opponent_Health').value);
// Then it calculates the TTK
  let ttk = (60 / rpm) * ((health / damage) - 1);
// Then it displays the TTK
  document.getElementById('TTK_answer').innerHTML = 'The total time to kill is ' + ttk.toFixed(3) + ' seconds.';
}

// This Section calculates the Area and Volume of a Torus
function calculateTorus() {
// This function gets the major radius and minor radius from the user
  let R = parseInt(document.getElementById('major_Radius').value);
  let r = parseInt(document.getElementById('minor_Radius').value);
// Then it calculates the Area and Volume
  let area = (2 * Math.PI * R) * (2 * Math.PI * r);
  let volume = (Math.PI * R ** 2) * (2 * Math.PI * r) / 2;
// Then it displays the Area and Volume
  document.getElementById('area').innerHTML = 'The area of the torus is ' + area.toFixed(2) + ' cm.';
  document.getElementById('volume').innerHTML = 'The volume of the torus is ' + volume.toFixed(2) + ' cm.';
}