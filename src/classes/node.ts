import Vector from "./vector";

class Node {
  weights: Vector;
  xp: number = NaN;
  yp: number = NaN;
  
  constructor(numberOfWeights: number) {// int
    this.weights = new Vector(numberOfWeights);
    for(let i = 0; i<numberOfWeights; i++){
      this.weights[i] = Math.random();
    }
  }
  getX(){
    return this.xp;
  }
  getY(){
    return this.yp;
  }
  setX(a: number){
    this.xp = a;
  }
  setY(a: number){
    this.yp = a;
  }

  // returns distance ie x/y distance not weight distance
  distanceTo(node2: Node) {
    let xleg, yleg;
		xleg = this.getX() - node2.getX();
		xleg *= xleg;
		yleg = this.getY() - node2.getY();
		yleg *= yleg;
		return xleg + yleg;
  }

  setWeight(index: number, value: number) {
    if(index>this.weights.length - 1) return;
    this.weights[index] = value;
  }

  getWeight(index: number) {
    if(index>this.weights.length - 1) return;
    return this.weights[index];
  }

  getVector() {
    return this.weights;
  }

  adjustWeights(input: Vector, learningRate: number, distanceFalloff: number) {
    let wt;
    let vw;
    for (let w=0; w<this.weights.length; w++) {
      wt = this.weights[w];
      vw = input[w];
      wt += distanceFalloff * learningRate * (vw - wt);
      this.weights[w] = wt;
    }
  }
}

export default Node;
