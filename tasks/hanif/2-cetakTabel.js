export function cetakTabel(num) {
    if(typeof num === "number" && num>0){
        for(let i = 1; i <= 10; i++){
            console.log(`${num} x ${i} = ${num*i}`);
        }
    }else {
        console.log("Parameter harus bertipe data nomor dan nomor positif");
    }
}