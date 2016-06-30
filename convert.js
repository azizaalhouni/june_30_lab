'use strict';

var container = document.getElementById('output');
var submit = document.getElementById('submit');
var clear = document.getElementById('clear');

function inputWindow() {

}

function inchesToCentimeters(inch) {
  var centimeter = inch * 2.54;
  return centimeter;
  console.log(centimeter);
}

function outputWindow() {
  var log = document.createElement('log');
  log.id = 'outputLog';
  log.textContent = inchesToCentimeters(3);
  container.appendChild(log);
  // console.log('this worked but didn\'t show up');
}

function clearOutputWindow() {
  var log = document.querySelectorAll('outputLog');
  container.remove(log);
  console.log('window cleared');
}

submit.addEventListener('click', outputWindow);

clear.addEventListener('click', clearOutputWindow);
