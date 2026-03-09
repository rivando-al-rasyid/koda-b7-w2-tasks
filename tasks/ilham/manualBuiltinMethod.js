// versi manual penggunaan map
export const manualMap = (arr,cb) => {
// pertama validasi arr sebagai parameter pertama harus berupa Array
    if(!(Array.isArray(arr))) {
// jika bukan array maka lemparkan error
        throw new Error("Parameter harus berupa Array")
    }
// validasi juga parameter callback nya, harus berupa fungsi
    if(typeof cb !== "function") {
//  jika bukan fungsi maka lemparkan error
        throw new Error("Parameter kedua harus berupa function")
    }
// membuat array baru yang akan menampung array baru sesuai panjang arr
    const hasil = new Array(arr.length)
//  melakukan loop untuk mengiterasi setiap element
    for(let i = 0; i < arr.length; i++){
// menjalankan fungsi callback lalu hasilnya akan dimasukkan di dalam hasil[i], untuk setiap element yang di iterasi
        hasil[i] = cb(arr[i]);
    }
// mengeluarkan hasil dari (hasil) setelah perulangan
    return hasil;
}


// versi manual filter
export const manualFilter = (arr,cb) => {
// validasi apakah parameter bertipe array
    if(!(Array.isArray(arr))) {
// jika tidak maka lemparkan error
        throw new Error("Parameter harus berupa Array")
    }
// validasi juga parameter kedua atau callbacknya harus berupa fungsi
        if(typeof cb !== "function") {
// jika bukan fungsi maka lemparkan error
        throw new Error("Parameter kedua harus berupa function")}
// membuat array kosong dengan nama hasil
const hasil = []
// membuat variabel hasilIndex dari Let agar bisa berubah dan tidak error
let hasilIndex = 0;
// melalukan perulangan
    for(let i = 0; i < arr.length; i++){
// jika callback bernilai true maka akan dijalankan
        if(cb(arr[i])){
            hasil[hasilIndex] = arr[i]
// hasilIndex ditambah 1
            hasilIndex++;
        }
    }
// mengeluarkan hasil akhir dari (hasil)
    return hasil;
}

