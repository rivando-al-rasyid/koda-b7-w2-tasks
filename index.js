/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

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
    const countArray = naufal.countArray(["abc", "a"]);
    console.log(countArray);
  } catch (error) {
    console.log(error.message);
  }

})();
console.log("===========================================");

/**
 * Task Vando
 */

import vando from "./tasks/rivando/index.js";

(function taskVando() {
try {
  const user = ["budi", "siti", "agus"];
  const userKapital = custMap(user, (nama) => nama.toUpperCase());
  console.log("Hasil Map (Kapital):", userKapital);
} catch (error) {
  console.log(error.message);
}
try {
  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Contoh: Mengambil angka yang genap saja
  const angkaGenap = custFilter(angka, (item) => item % 2 === 0);
  console.log("Hasil Filter (Genap):", angkaGenap);
  } catch (error) {
  console.log(error.message);
  }
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

