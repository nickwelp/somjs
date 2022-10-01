/* A Vector is an array of N Number weights  */
class Vector extends Array{
  euclideanDist(v2: Vector)  { // vs is a Vector
    if(v2.length !== this.length) {
      console.log('mismatching lengths!');
      return -999;
    }
    let temp:number = 0;
    let total:number = 0;
    for(let x = 0; x< this.length; x++){
      temp = this[x] - v2[x];
      temp = temp * temp;
      total += temp;
    }
    return total;
  }
}

export default Vector;
