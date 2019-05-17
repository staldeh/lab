let math = require('mathjs')


//let m = math.matrix([[0, 0, 0], [1, 1, 1], [2, 2, 2]])

class MapS {
    constructor(size) {
        this._m = math.matrix(math.ones([size, size]))
        
    }

    poke (loc, obj) { 
        this._m.set (loc, obj)
    }
    peek (x,y) { 
        return this._m.subset(math.index(x,y))
    }
    list () {
        return this._m.valueOf()
    }
    move () {
        // Can not move outside map
        // Can not move to occupied slot
        // Encouter?
    }
    find (obj) {
        let r = "Not found on Map!"
        this._m.forEach (function (value, index, matrix) {
            //console.log(obj._name, value._name)
            if (obj._name == value._name) {
                r=index
                
            } 
        })
        return r
    }
}
module.exports = MapS;