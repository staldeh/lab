const MapS = require('./map.js')
const objS = require('./object.js')

const Indivudals = {H: new objS("Häxa"),
                    D: new objS("DU"),
                    S: new objS("Skatt"),
                    K: new objS("Katana"),
                    C: new objS("Chainmail")}

// World Size
const world = new MapS(5)

//Some objects
world.poke ([0,2], Indivudals.H)
world.poke ([4,3], Indivudals.D)
world.poke ([1,1], Indivudals.S)
world.poke ([2,3], Indivudals.K)
world.poke ([3,4], Indivudals.C)

//console.log(world.list())
//console.log(Indivudals)
//console.log(world.peek (0,2).name())

//List
for (let g in Indivudals){
    console.log("%s är på %s",Indivudals[g].name(),world.find(Indivudals[g]))

}
