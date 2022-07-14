function scan(arr){
    let result = []
        for (const [i, v] of arr.entries()) {
            if (arr[i] === "contraband"){
                result.push(i)
            }
  }return result;
}
scan(["contraband", "notContraband", "ourBandNameIsCONTRA", "thatGameRuled", "contraband"])
