/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import vando from "./tasks/rivando/index.js"

console.log("===========================================");
// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");
// Use IIFE here
(function taskVando() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const tabelPerkalian = vando.cetakTabel(10);
    console.log(tabelPerkalian);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const tabelPerkalian = vando.cetakTabel("10");
    console.log(tabelPerkalian);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const hitungArray = vando.countArray([1, 2 , 5]);
    console.log(hitungArray);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const hitungArray = vando.countArray(["a", "2" , "5"]);
    console.log(hitungArray);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");

