export function countArray(arr){

    if(!(Array.isArray(arr))){
        return "Input harus Array of Number";
    }
    let result = 1;

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "input harus Array of Number";
        }
        result *= arr[i];
    }
    return result;
}

