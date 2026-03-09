//fungsi manual map
export function manualMap(arr, callback){
    //melakukan pengecekan data parameter "array" harus dalam bentuk array, apabila tidak maka akan Error
    if(!(arr instanceof Array)){
        throw new Error("Input Pertama harus bertipekan Array");
    }
    //melakukan pengecekan data parameter "callback" harus dalam bentuk function, apabila tidak maka akan Error
    if(typeof callback !== "function"){
        throw new Error("Input Kedua harus sebuah function");
    }
    let result = [];//membuat array baru untuk menampung hasil

    //melakukan iterasi pada setiap elemen array
    for(let i = 0; i < arr.length; i++){
        const transformElement = callback(arr[i], i, arr);//menerapkan fungsi callback pada perubahan elemen

        result = [...result, transformElement];//memasukkan hasil perubahan pada array baru

    }
    return result;//memanggil array baru
}
  

//fungsi manual filter
export function manualFilter (arr, callback){

    if(!(arr instanceof Array)){
        throw new Error("Input Pertama harus bertipekan Array");
    }
    if(typeof callback !== "function"){
        throw new Error("Input kedua harus sebuah function");
    }
    let result = [];//membuat array baru untuk menampung hasil

    //melakukan iterasi pada setiap elemen pada array
    for(let i = 0; i < arr.length; i++){
        //menerapkan fungsi callback pada setiap elemen
        if(callback(arr[i])){
            result = [...result, arr[i]];//memasukkan perubahan pada array baru
        }
    }
    return result;//memanggil array baru
}

