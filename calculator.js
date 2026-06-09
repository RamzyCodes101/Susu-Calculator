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


let totalPot = members.reduce((acc, member) => acc + member.balance, 0)

console.log(`Total Pot : ${totalPot}`)

let activeMemberPot = activeMembers.reduce((acc, member) => acc + member.balance, 0)

console.log(`Active members pot : ${activeMemberPot} `)

let richestMember = members.reduce( (richest, member) =>  
    member.balance > richest.balance ? member : richest, members[0])

console.log(`Richest member: ${richestMember.name} with GHS ${richestMember.balance}`)

let mostDedicated = members.reduce(( acc, member) => 
    member.contribution > acc.contribution ? member : acc, members[0])

console.log(`${mostDedicated.name} with ${mostDedicated.contributions} contributions`)

let totalContribution = members.reduce(( acc, member) => 
    member.contributions + acc, 0)

console.log(`Total contribution : ${totalContribution}`)

let listactive = activeMembers.map(member => member.name + ' ' + member.balance)

console.log(listactive)

