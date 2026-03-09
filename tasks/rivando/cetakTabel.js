// Sistem Kasir
// const price = 250_000;
// const money = 275_000;

const cardinaNumber = [1,2,3,4,5,6,7,8,9,10];


export function cetakTabel (num){
  if (typeof num === "number" && num > 0 ){
    cardinaNumber.forEach(number => console.log(`${num} x ${number} = ${number * num} `))
  }else{
    console.log("Paraneter Harus tipe angka dan bernilai positif")
  }
}




// function myFunction(num) {
//   return num * 10;
// }





// export function cashier(price, money) {
//   if (typeof price == "number" && typeof money == "number") {
//     const changes = {
//       50: 0,
//       10: 0,
//       5: 0,
//       2: 0,
//       1: 0,
//     };
//     let diff = money - price;
//     const nominals = Object.keys(changes);
//     for (let i = nominals.length - 1; i >= 0; i--) {
//       const nominal = parseInt(nominals[i]) * 1000;
//       // console.log(nominal);
//       if (diff >= nominal) {
//         changes[nominals[i]] = Math.floor(diff / nominal);
//         diff %= nominal;
//       }
//     }
//     return changes;
//   } else {
//     throw new Error("INVALID");
//   }
// }
