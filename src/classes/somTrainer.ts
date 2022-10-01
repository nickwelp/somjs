import SOMLattice from './lattice';
import SOMNode from './node';
import Vector from './vector';

class somTrainer {
	// These constants can be changed to play with the learning algorithm
	private static START_LEARNING_RATE = 0.07;
	private static NUM_ITERATIONS = 500;
	
	// These two depend on the size of the lattice, so are set later
	private LATTICE_RADIUS: number = NaN;
	private TIME_CONSTANT: number = NaN;
	// private LatticeRenderer renderer;
	private lattice:SOMLattice;
	private inputs:Vector[];
	private running:boolean = false;
  // private running = false;
  private iteration = 0;
  private setState: Function;
  private setLoad: Function;
	
	/** Creates a new instance of SOMTrainer */
	constructor(lat:SOMLattice, input:Vector[], setState: Function, setLoad: Function) {
    this.lattice = lat;
		this.running = false;
    this.inputs = input;
    this.setState = setState;
    this.setLoad = setLoad;
    // These two values are used in the training algorithm
		this.LATTICE_RADIUS = Math.max(this.lattice.getWidth(), this.lattice.getHeight())/2;
		this.TIME_CONSTANT = somTrainer.NUM_ITERATIONS / Math.log(this.LATTICE_RADIUS);
	}
	
	private getNeighborhoodRadius(iteration:number) {
		return this.LATTICE_RADIUS * Math.exp(-iteration/this.TIME_CONSTANT);
	}
	
	private getDistanceFalloff(distSq:number, radius:number) {
		const radiusSq = radius * radius;
		return Math.exp(-(distSq)/(2 * radiusSq));
	}
  
  public getRunning(){
    return this.running;
  }
	
	public start() {
    console.log('starting training on random field');
		if (this.lattice !== undefined) {
			this.running = true;

			while(this.iteration<somTrainer.NUM_ITERATIONS){
        this.run(this.iteration);
        this.iteration++;
      }
      this.running = false;
		}
	}
	
	private run(iteration:number) {
    let lw = this.lattice.getWidth();
		let lh = this.lattice.getHeight();
		let xstart:number, ystart:number, xend:number, yend:number; //ints
		let dist:number, dFalloff:number; // floats
		
		let nbhRadius:number;
		let bmu:SOMNode; 
		let curInput:Vector;
		let learningRate = somTrainer.START_LEARNING_RATE;
		
		nbhRadius = this.getNeighborhoodRadius(iteration)/1;
			// For each of the input vectors, look for the best matching
			// unit, then adjust the weights for the BMU's neighborhood
    for (let i=0; i<this.inputs.length; i++) {
      curInput = this.inputs[i];
      bmu = this.lattice.getBMU(curInput);
      // We have the BMU for this input now, so adjust everything in
      // it's neighborhood
      
      // Optimization:  Only go through the X/Y values that fall within
      // the radius
      xstart = Math.floor(bmu.getX() - nbhRadius - 1);
      ystart = Math.floor(bmu.getY() - nbhRadius - 1);
      xend = Math.floor(xstart + (nbhRadius * 2) + 1);
      yend = Math.floor(ystart + (nbhRadius * 2) + 1);
      if (xend > lw) xend = lw;
      if (xstart < 0) xstart = 0;
      if (yend > lh) yend = lh;
      if (ystart < 0) ystart = 0;
      
      for (let x=xstart; x<xend; x++) {
        for (let y=ystart; y<yend; y++) {
          try {
            dist = bmu.distanceTo(this.lattice.getNode(x,y));
            if (dist <= (nbhRadius * nbhRadius)) {
              dFalloff = this.getDistanceFalloff(dist, nbhRadius);
              this.lattice.getNode(x,y).adjustWeights(curInput, learningRate, dFalloff);
            }
          } catch (err) {
            console.log(x,y)
            console.error(err);
          }
          }
        // }
      }
    }
    iteration++;
    learningRate = somTrainer.START_LEARNING_RATE * Math.exp(-iteration/somTrainer.NUM_ITERATIONS);
    console.log(iteration, this.lattice);
    // update GUI
    this.setLoad(iteration%2===0);
    // this.setState(this.lattice);
	}

	public stop() {
		this.running = false;
	}
}
export default somTrainer;
