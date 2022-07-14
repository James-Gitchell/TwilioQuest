 input1 = process.argv[2]
 input2 = process.argv[3]
//let input1= "dog"
//let input2= "aardvark"
//let newArr = []

let inputOne = input1.toLowerCase()
let inputTwo = input2.toLowerCase()

if(inputOne < inputTwo){
    console.log(-1)
} else if (inputOne > inputTwo){
    console.log(1)
} else if(inputOne === inputTwo){
    console.log(0)
}
/*
newArr.push(input1, input2)

let sorted = newArr.sort((a,b) => {
    let wordA = a.toLowerCase()
    let wordB = b.toLowerCase()

    if ( wordA < wordB ) {
        console.log(1);
      }
      else if (wordA > wordB) {
        console.log(1);
      }
    
      // names must be equal
      console.log(0);
    });

console.log(sorted)*/