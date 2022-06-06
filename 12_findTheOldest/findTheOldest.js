const findTheOldest = function(age) {
    const date = new Date();
    for (let i = 0; i < age.length; i++)
        if (age[i].yearOfDeath == undefined) {
            age[i].yearOfDeath = date.getFullYear();
        }
    age.sort((a,b)=>
                (a.yearOfDeath-a.yearOfBirth)>
                (b.yearOfDeath-b.yearOfBirth) ? -1 : 1);
    return age[0];
};

// Do not edit below this line
module.exports = findTheOldest;
