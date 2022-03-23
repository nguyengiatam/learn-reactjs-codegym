class Information{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    calculate (value = 1){
        return value*3;
    }
}

module.exports = Information;