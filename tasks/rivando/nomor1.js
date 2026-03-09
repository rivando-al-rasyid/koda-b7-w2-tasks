const produk = [
  { nama: "Laptop", harga: 1000, stok: 5 },
  { nama: "Mouse", harga: 20, stok: 15 },
  { nama: "Keyboard", harga: 50, stok: 0 },
  { nama: "Monitor", harga: 300, stok: 8 }
];

function custArr(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }

  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
      try {
        if (callback(arr[i])) {
      hasil = [...hasil, arr[i]];
    }

  } catch (error) {
      console.error(`Error pada indeks ke-${i}:`, error);
  }

  }
  return hasil;
}

function custMap(arr, callback) {
    if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
    if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    try {
    const itemTransformasi = callback(arr[i]);
    hasil = [...hasil, itemTransformasi];

    } catch (error) {
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