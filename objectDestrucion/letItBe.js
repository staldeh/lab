let task = {
    action: 'Make coffe',
    when: 'Nowish'
}

// object destruction
let { action , when} = task

console.log("action: " +task.action +  ", when: " + task.when )
console.log(task)


console.log(action)
console.log(when)

