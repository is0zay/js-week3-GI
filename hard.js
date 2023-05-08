// HARD

const newEntry = (name, ssn) => { // use as a constructor for new objects

    const pii = {
        name,
        ssn //these two properties can not be called outside of this function
    }; 

    return {        // use return to give value back to user when called, nothing beyond this point can be reached in the newEntry function
        accessNameFunction : () => {     // must use the function to access the name
        return pii.name;            // returns the name argument passed through the constructor function 
        }
    }
}

const entry1 = newEntry("Jo Doe", '100 00 0000');
const entry2 = newEntry("Mary Jane", "200,00,0000");

console.log(entry1.accessNameFunction());
console.log(entry1.ssn);

console.log(entry2.accessNameFunction());
console.log(entry2.ssn);

