console.log('Hello Peter')

const fs= require('fs')
fs.writeFileSync('Hello.txt','Hello Peter Parker')

function userDetails(name,age){
    return 'Name is '+ name + ', Age is ' +age;
} 

console.log(userDetails('Dubba',18));