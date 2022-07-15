class TargetingSolution {
constructor(object){
    this.xcoord =String(object.x),
    this.ycoord =String(object.y),
    this.zcoord =String(object.z)
}
 target(){
    return `(${this.xcoord}, ${this.ycoord}, ${this.zcoord})`
}

}
const m = new TargetingSolution({
     x: 12,
     y: 5, 
     z: 8
    })
console.log(m.target())