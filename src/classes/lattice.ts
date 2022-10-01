import Node from './node';
import Vector from './vector';

class Lattice {
  width: number;
  height:number;
  matrix: Node[][] = [];

  constructor(w: number, h: number) { //int, int 40,40 is baseline
		this.width = w;
		this.height = h;
		// this.matrix = new Node();
		// let xstep = .5/this.width;
		// let  ystep = .5/this.height;
		for (let x=0; x<w; x++) {
			for (let y=0; y<h; y++) {
				if(!this.matrix[x]) this.matrix[x] = [];
				this.matrix[x][y] = new Node(3);
				this.matrix[x][y].setX(x);
				this.matrix[x][y].setY(y);
				// Uncomment this for a gradient grid to start from
				//				matrix[x][y].setWeight(0, (xstep * x) + (ystep * y));
				//				matrix[x][y].setWeight(1, (xstep * x) + (ystep * y));
				//				matrix[x][y].setWeight(2, (xstep * x) + (ystep * y));
			}
		}
	}
  getNode(x: number, y: number) { // int int
		return this.matrix[x][y];
	}
	
	getWidth() {
		return this.width;
	}
	
	getHeight() {
		return this.height;
	}

  getBMU(inputVector: Vector) { // Vector
		// Start out assuming that 0,0 is our best matching unit
		let bmu = this.matrix[0][0];
		let bestDist = inputVector.euclideanDist(bmu.getVector());
		let curDist;
		
		// Now step through the entire matrix and check the euclidean distance
		// between the input vector and the given node
		for (let x=0; x<this.width; x++) {
			for (let y=0; y<this.height; y++) {
				curDist = inputVector.euclideanDist(this.matrix[x][y].getVector());
				if (curDist < bestDist) {
					// If the distance from the current node to the input vector
					// is less than the distance to our current BMU, we have a 
					// new BMU
					bmu = this.matrix[x][y];
					bestDist = curDist;
				}
			}
		}
		return bmu;
	}
}

export default Lattice;
