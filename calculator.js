let members = [
    { name : "khalil", balance : 3200, isActive : true, contributions : 6},
    { name : "fawaz", balance : 3500, isActive : true, contributions : 7},
    { name : "mubarak", balance : 3260, isActive : false, contributions : 7},
    { name : "khalil", balance : 3800, isActive : false, contributions : 5},
    { name : "naomi", balance : 2200, isActive : true, contributions : 5},
    { name : "khalil", balance : 3210, isActive : true, contributions : 6},
    { name : "nasir", balance : 2300, isActive : false, contributions : 4},
]

let totalMembers = members.length
console.log(`Total members : ${totalMembers}`)

let activeMembers = members.filter( member => member.isActive)

console.log(`Active members : ${activeMembers.length}`)

let inActiveMembers = members.filter( member => member.isActive === false)

console.log(`Inactive members : ${inActiveMembers.length}`)