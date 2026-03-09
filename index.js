/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import ali from "./tasks/ali/index.js"

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

/**
 * Task Naufal
 */

import naufal from "./tasks/naufal/index.js";

console.log("===========================================");
// Use IIFE here

(function taskNaufal() {

  // manual Map function
   try {
    const arr = [1,2,3,4,5];
    const timesByTwo = naufal.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arr = 5;
    const timesByTwo = naufal.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch (error) {
    console.log(error.message);
  }

  // manual Filter function
   try {
    const arr = [1,2,3,4,5,6];
    const evenNumbers = naufal.manualFilter(arr, (n) => n % 2 === 0);
    console.log(evenNumbers);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arr = 5;
    const evenNumbers = naufal.manualFilter(arr, (n) => n * 2);
    console.log(evenNumbers);
  } catch (error) {
    console.log(error.message);
  }

  // cetakTabel
  // Success
  try {
    const cetakTabel = naufal.cetakTabel(3);
    console.log(cetakTabel);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const cetakTabel = naufal.cetakTabel("abc");
    console.log(cetakTabel);
  } catch (error) {
    console.log(error.message);
  }

  // countArray
  // Success
  try {
    const arr = [1,2,3,4,5];
    const countArray = naufal.countArray(arr);
    console.log(countArray);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const countArray = naufal.countArray(['abc', 'a']);
    console.log(countArray);
  } catch (error) {
    console.log(error.message);
  }
  
})();
console.log("===========================================");

/**
 * Task Ali
 */

(function taskAli() {
  const data = [
  { id: 1, name: "Ali Mustadji", hobbies: ["running", "gaming", "swimming", "programming", "soccer", "basketball",]},
  { id: 2, name: "John Doe", hobbies: ["running", "programming", "sketting"] },
  { id: 3, name: "John Takeuchi", hobbies: ["gaming", "fishing", "swimming"] },
  { id: 4, name: "Sir Alex Ferguson ", hobbies: ["running", "basketball", "coaching"] },
  { id: 5, name: "Cristiano Messi", hobbies: ["running", "soccer", "swimming"],
  },
];
  try {
    const manualMap = ali.manualBuilInMap(data,"name","hobbies");
    console.log(manualMap);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const manualFilter = ali.manualBuilInFilter(data,"soccer");
    console.log(manualFilter);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const printTable = ali.printTable(3);
    const printTableEdgeCase = ali.printTable("abs");
    console.log(printTable);
    console.log(printTableEdgeCase);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const count = ali.countArray([1,2,3,4,5]);
    const countEdgeCase = ali.countArray([1,2,3,4,5,"abc"]);
    console.log(count);
    console.log(countEdgeCase);
  } catch (error) {
    console.log(error.message);
  }
})();

console.log("===========================================");


