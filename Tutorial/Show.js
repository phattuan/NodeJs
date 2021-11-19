const name = require('./UserName') // đối với modules nằm ngoài thì ../path 
const contr = require('./Controller')
contr(name.user);