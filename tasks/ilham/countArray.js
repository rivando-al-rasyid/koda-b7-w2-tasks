export function countArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Parameter harus berupa Array");
  }
  let hasil = 1;
  for (let i = 0; i < arr.length; i++) {
    hasil *= arr[i];
  }
  return hasil;
}
