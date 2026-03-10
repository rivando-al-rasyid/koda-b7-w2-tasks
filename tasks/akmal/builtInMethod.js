export function mapManual(array, callback) { // lakukan export untuk function map
  console.log("===========================================");
  console.log("BuiltInMethod");
  console.log("Map");

  const hasilMap = []; // Wadah untuk hasil baru
  // Proses manual menggunakan for loop dengan sesuai panjang array
  for (let i = 0; i < array.length; i++) {
    //jalankan fungsi perubahan callback pada tiap elemen
    const hasilProses = callback(array[i], i, array);
    // masukkan hasil ke wadah baru
    hasilMap[i] = hasilProses;
  }
  console.log("Hasil");
  //kembalikan ke array baru
  return hasilMap;
}

export function filterManual(array, callback) { // lakukan export untuk function filter
  console.log("Filter");
  const hasil = []; // Wadah untuk hasil baru
  let posisi = 0;
  //lakukan perulangan sebanyak panjang array pada parameter array
  for (let i = 0; i < array.length; i++) {
    //menyimpan ke elemen array sementara 
    if (callback(array[i])) {
      hasil[posisi] = array[i];
      posisi++;
    }
  }
  return hasil;
}

