export const cetakTabel = (data) =>{
    console.log(typeof data)
    const result = []
    if(typeof data !== "number" || data < 0){
        throw new Error("Input tidak valid , harus Nomor")
    }
    for(let i = 1 ; i <= 10 ; i++){
        result.push(`${data} x ${i} = ${data*i}`)
    }
    return result
}