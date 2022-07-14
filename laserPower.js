
function calculatePower(arr){
    let powerArr = []
    for(let i = 0; i < arr.length; i++){
    powerArr.push(arr[i] * 2)
       }
     let reduced =  powerArr.reduce( (a, b) => a + b, 0)
    return reduced;
}


/*

[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => 
previousValue + currentValue, 10 )

*/