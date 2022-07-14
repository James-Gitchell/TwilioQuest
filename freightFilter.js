
function scanAndFilter(arr, str){
    let results = []

    for(let i = 0; i < arr.length; i++){
        let arrayStr = arr[i]
        if(arrayStr !== str){
            results.push(arrayStr)
        }
    }
    return results;


}