function getFirstAmountSorted(arr, num){
    const sorted = arr.sort((a,b) => {
        return a < b ? -1 : 1})
    console.log(sorted)
return sorted.slice(0, num)
console.log(sorted.slice(0, num))
}
getFirstAmountSorted(["bag", "purse", "cat", "dog", "brine"], 1)