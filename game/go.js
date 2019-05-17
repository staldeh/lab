const MapS = require('./map.js')
const objS = require('./object.js')

const Indivudals = {M: new objS("Monster"),
                    D: new objS("DU"),
                    S: new objS("Skatt")}

// World Size
const world = new MapS(5)

//Some objects
world.poke ([0,2], Indivudals.M)
world.poke ([4,4], Indivudals.D)
world.poke ([1,1], Indivudals.S)

//console.log(world.list())
//console.log(Indivudals)
//console.log(world.peek (0,2).name())

//List
for (let g in Indivudals){
    console.log("%s är på %s",Indivudals[g].name(),world.find(Indivudals[g]))

}
