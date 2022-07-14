function scan(arr){
    let count = 0;
   arr.forEach(str => {
    if(str === "contraband"){
        count += 1;
    }
   })
   return count;

}