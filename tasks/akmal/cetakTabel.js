
export function cetakTabel(n) {
  console.log("===========================================");
  console.log("Cetak Tabel Perkalian");
  if (n >= 1) {
    console.log(`Cetak Tabel ${n}`);
    let result = "";
    for (let i = 1; i <= 10; i++) {
      const hasil = n * i;
      result += `
          ${n} x ${i} = ${hasil}`;
    }
    return result;
  } else {
    return "Parameter harus bertipe data nomor dan harus nomor positif";
  }
}

