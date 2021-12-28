function sum(a,b){
    return a+b;
}

console.log('Sum is '+ sum(20,5));

const person={
    name:'Ross',
    age:23,
    greet(){
        console.log('My name is '+this.name);
    }
};

person.greet();