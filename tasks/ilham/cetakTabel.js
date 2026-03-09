export const cetakTable = (n) => {
    if(typeof n !== "number"||n < 0 ){
        throw new Error("Parameter harus berupa angka dan harus nomor positif")
    }
    let res = "";
        for(let i =1;i <= 10 ;i++){
        const result = n * i;
res +=`
${n} x ${i} = ${result}`;
}

        return res;
}