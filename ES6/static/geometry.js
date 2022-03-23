const Information = require('./infomation.js');
class Geometry extends Information{
    constructor(name, description, width){
        super(name, description);
        this.width = width;
    }
}

module.exports = Geometry;