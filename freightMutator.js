
function mutate(str){
    let results = []
    for(let i = 0; i < str.length; i++){
     results.push(str[i].toUpperCase())
    }
    return results;
}
mutate(["berry", "carrie", "marryMe"])