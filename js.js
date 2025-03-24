function abbrName(name){
    const names = name.split(' ');
    const initials = names[0][0].toUpperCase() + '.' + names[1][0].toUpperCase();
    
    return initials;
}
console.log(abbrName('manizabayo elie'))