# SOM JS

This project is based on a wonderful Self Organizing Map tuturial written in C++ then JAVA, and now Typescript and React.

Install with yarn or npm.

`yarn start` builds a webserver serving the interesting page at localhost:3000.

Once running, visit the website and click on the text labeled "RUN" to begin the training process.

This takes the random field, here represented as the random distribution of RGB values, and trains them into a Self Organizing Map. Once trained, one could sumbit additional new Vectors, and learn where the SOM positions them. In this manner, this codebase is an automated multi-scalar categorizer. The positions of submitted items should be with like items, thus creating a tool whereby the algorithm sorts things by similarity. 

The SOM is only as effective as the training data. Right now it trains on 8 RGB values. Pure RGB Red, Yellow, Green, Cyan, Blue, Violet, white, black and gray. My 'pure rgb' I mean, `rgb(255,0,0)` for red or `rgb(0,255,255)` for green. The matrix of the SOM is initialized with random numbers, so the matrxix has node elements that are vectors, which are an array of floats valued 0-1, values like [0.1, 0.2, 0.3 ] which will be multiplied by 255 for the color representation. 