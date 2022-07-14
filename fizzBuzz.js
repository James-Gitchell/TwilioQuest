const input = process.argv[2]

const byFive = input%5
const byThree = input%3


 if(byFive === 0 && byThree === 0){
    console.log("JavaScript")
}
else if(byThree === 0 && byFive !== 0){
    console.log("Java")
} else if(byFive === 0 && byThree !== 0){
    console.log("Script")
} else {
     console.log(input)
}