export function countArray(arr){
    if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }

  let hasil = 1;


  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' && Number.isNaN(arr[i])) {
      throw new Error(`Elemen pada indek ${i} bukan angka valid.`);
    }
    hasil *= arr[i];

  }
  return hasil;
}
