export const countArray = (data) => {
    let result = 1 ;
    for(let i = 0 ; i < data.length ; i++){
        if(typeof data[i] !== "number"){
            return `data input tidak valid pada index ke-${i} = ${data[i]}`;
        }else{
            result *= data[i] ;
        }
    }
    return result
}
