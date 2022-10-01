/* A Vector is an array of N Number weights  */
class Vector extends Array{
  euclideanDist(v2: Vector)  { // vs is a Vector
    if(v2.length !== this.length) {
      return -999;
    }
    return this.reduce((accumulator, current, i) => {
      let temp = current - v2[i];
      temp = temp * temp;
      accumulator += temp;
      return accumulator
    }, []);
  }
}

export default Vector;
