/*

Tree Status
0	"alive"
1	"flowering"
2	"shedding"
3+	"other"
*/

const num = process.argv[2]

if (num == 0){
    console.log("alive")
} else if( num == 1) {
    console.log("flowering")
} else if ( num == 2 ) {
console.log("shedding")
} else {
    console.log("other")
}