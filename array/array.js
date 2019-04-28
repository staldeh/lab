var list = []
const size = 50;

function createSomeObject(id) {
    const data = '{ "name":' + id + ', "status":"1", "city":"Sthlm"}'
    return JSON.parse(data)

}

for(var i = 0; i < size; i++) {
    list.push(createSomeObject(i));
}

//console.log(list.length)
list.forEach(function(item, index, array) {
    console.log(index, item);
  });

list[35].status = '2';

list.forEach(function(item, index, array) {
    console.log(index, item);
  });
