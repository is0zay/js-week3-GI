// HARD

const newEntry = (name, ssn) => { // use as a constructor for new objects

    const pii = {
        name,
        ssn,                                

    }; 
        // use return to give value back to user when called, nothing beyond this point can be reached in the newEntry function
       return { sayName: () => {     // must use the function to access the name
            return pii.name;            // returns the name argument passed through the constructor function 
            }
       }
}

// Name is able to be called back using the function sayName() because tne sayName() function is placed outside of the pii object. In addition to this, since the sayName() is inside the newEntry constructor, is has access to the pii.name property because of scope.

const entry1 = newEntry("Austin Mack", '100 00 0000');
const entry2 = newEntry("Mary Jane", "200,00,0000");

console.log(entry1.name);
console.log(entry1.sayName());
console.log(entry1.ssn);

console.log(entry2.name);
console.log(entry2.sayName());
console.log(entry2.ssn);

