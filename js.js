function abbrName(name){
    const names = name.split(' ');
    const initials = names[0][0].toUpperCase() + '.' + names[1][0].toUpperCase();
    
    return initials;
}
console.log(abbrName('manizabayo elie'))
console.log(abbrName('Lionel Messi'))

function factorial(n){
    if(n===0 || n===1){
        return 1 ;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5))
