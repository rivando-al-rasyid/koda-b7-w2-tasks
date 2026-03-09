const produk = [
  { nama: "Laptop", harga: 1000, stok: 5 },
  { nama: "Mouse", harga: 20, stok: 15 },
  { nama: "Keyboard", harga: 50, stok: 0 },
  { nama: "Monitor", harga: 300, stok: 8 }
];

function custArr(arr, callback) {
  // memeriksa arr adalah sebuah array apabila bukan array dia di jalankan
  if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
  // memeriksa callback adalah sebuah callback apabila bukan callback dia di jalankan
  if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }
  // sebagai template array sesuai recomendasi dari dokumentasi dari javascript
  let hasil = [];
  // perulangan untuk mendapatkan value dari array
  for (let i = 0; i < arr.length; i++) {
      //error handling untuk menambahkan isi array
      try {
        //memeriksa apakah memenuhi callback/keadaan index value true apabila tidak akan di skip ke index selanjutnya
        if (callback(arr[i])) {
            hasil = [...hasil, arr[i]];
        }
  } //menangkap error yang ada
  catch (error) {
      console.error(`Error pada indeks ke-${i}:`, error);
  }

  }
  return hasil;
}

function custMap(arr, callback) {
  // memeriksa arr adalah sebuah array apabila bukan array dia di jalankan
  if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
  // memeriksa callback adalah sebuah callback apabila bukan callback dia di jalankan
  if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }
  // sebagai template array sesuai recomendasi dari dokumentasi dari javascript
  let hasil = [];
  // perulangan untuk mendapatkan value dari array
  for (let i = 0; i < arr.length; i++) {
    //error handling untuk menambahkan isi array
    try {
        //mengubah value dalam index supaya memenuhi callback/keadaan yang di buat
    const itemTransformasi = callback(arr[i]);
    hasil = [...hasil, itemTransformasi];

    }//menangkap error yang ada
    catch (error) {
      console.error(`Error pada indeks ke-${i}:`, error);
    }
  }
  return hasil;
}

// Test 1: Cari produk yang stoknya tersedia
const produkTersedia = custArr(produk, (p) => p.stok > 0);
console.log("Produk Tersedia:", produkTersedia);

// Test 2: Cari produk mahal (harga > 200)
const produkMahal = custArr(produk, (p) => p.harga > 200);
console.log("Produk Mahal:", produkMahal);

// Test 3: Ambil daftar nama produk saja
const daftarNama = custMap(produk, (p) => p.nama);
console.log("Daftar Nama:", daftarNama);

// Test 4: Hitung nilai total stok (harga * stok)
const nilaiInventaris = custMap(produk, (p) => {
  return {
    nama: p.nama,
    totalNilai: p.harga * p.stok
  };
});
console.log("Nilai Inventaris:", nilaiInventaris);