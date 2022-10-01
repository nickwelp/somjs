# SOM JS

This project is based on a wonderful Self Organizing Map tuturial written in C++ then JAVA, and now Typescript and React.

Install with yarn or npm.

`yarn start` builds a webserver serving the interesting page at localhost:3000.

Once running, visit the website and click on the text labeled "RUN" to begin the training process.

This takes the random field, here represented as the random distribution of RGB values, and trains them into a Self Organizing Map. Once trained, one could sumbit additional new Vectors, and see where the SOM positions them. In this manner, this codebase is an automated multi-scalar categorizer. The positions of submitted items should be with like items, thus creating a tool whereby the algorithm sorts things by similarity. 