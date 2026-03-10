function countArray(angka) {
  console.log("===========================================");
  console.log("Count Array");
  console.log(angka);
  let totalPerkalian = 1;
  for (let i = 0; i < angka.length; i++) {
    totalPerkalian *= angka[i];
  }
  return totalPerkalian;
}

export default countArray;
