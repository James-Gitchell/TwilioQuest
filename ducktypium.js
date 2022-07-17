class Ducktypium {
    constructor(color) {
        this.color = color.toLowerCase()
        if (this.color != 'red' & this.color != 'blue' & this.color != 'yellow') {
            throw Error('implausible color')
        }
        this.calibrationSequence = []
    }

    refract(color1) {
        this.color1 = color1.toLowerCase()
        if (this.color != 'red' & this.color != 'blue' & this.color != 'yellow') {
            throw Error('implausible color')
        }
        if (this.color1 == this.color) {
            return this.color1
        }
        else if(this.color1 == 'red' && this.color == 'blue'){
            return ('purple')
        }
        else if(this.color1 == 'blue' && this.color == 'red'){
            return ('purple')
        }
        else if(this.color1 == 'red' && this.color == 'yellow'){
            return ('orange')
        }
        else if(this.color1 == 'yellow' && this.color == 'red'){
            return ('orange')
        } else if(this.color1 == 'yellow' && this.color == 'blue'){
            return ('green')
        }
        else if(this.color1 == 'blue' && this.color == 'yellow'){
            return ('green')
          }
         }
         calibrate(numberArray) {
            this.array = numberArray
            this.array.sort()
            this.calibrationSequence = this.array.map(item => item * 3)
         }
        }

/* my logic that didn't work and I see why now*/
/*
class Ducktypium {
   constructor(str){
    let error = "an error has occured";
        try {
            if(str === "Red" || str === "blue" || str === "yellow"){
                this.color = str;
            }else {
                throw error;
            }}
        catch(error){
            console.log(error)
        }
       
    
    this.calibrationSequence = []
    
    }
refract(colorStr){
    let error = "an error has occured";
    colorStr = this.color;
        try{
            switch(colorStr){
            case red:
                colorStr = "purple";
                return colorStr;

                break;
            case yellow:
                colorStr = "orange"
                return colorStr;

                break;
                
            case blue:
                colorStr = "green";
                return colorStr;
                        break;
            
                default:
                    throw error;
             }  
           }
         catch(error){
           console.log(error)
          }
        }
calibrate(arr){
    const sorted = arr.sort((a, b) => a < b ? -1 : 1)
   const mapped = sorted.map(num => num * 3)
   this.calibrationSequence.push(mapped);

}

    }

   // let greenville = new Ducktypium("purple")
  //  console.log(greenville.color)
*/
