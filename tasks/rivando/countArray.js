export function countArray(arr){

  let hasil = 1
  arr.forEach(angka => {
    hasil = hasil * angka;
  });
  return hasil;
}
