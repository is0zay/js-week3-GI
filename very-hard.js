// VERY HARD

// 1. Create a Person constructor that has three properties: name, job, and age.
function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;

    // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
    Person.prototype.exercise = () => {
        console.log("Running is fun! - said no one ever");
    };
    
    // 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
    Person.prototype.fetchJob = () => {
        console.log(`${this.name} is a ${this.job}.`);
    };
};



const isaiah = new Person("Isaiah", "R2H Apprentice", 23);
console.log(isaiah);
isaiah.exercise();
isaiah.fetchJob();

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
function Programmer(name, job, age, languages) {
    // call function used to pull information from person constructor
    Person.call(this, name, job, age);

    this.languages = languages;

    this.busy = true;

    // 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
    Programmer.prototype.completeTask = () => {
        this.busy = false;
    }
    
    Programmer.prototype.acceptNewTask = () => {
        this.busy = true;
    }
    
    // 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
    Programmer.prototype.offerNewTask = () => {
        if(this.busy) {
            console.log(`${this.name} can't accept any new tasks right now`);
        }else {
            console.log(`${this.name} would love to take on a new responsibility`)
        };
    }

    // 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
    Programmer.prototype.learnLanguage = (language) => {
        
        // this pushes language passed through the function to the languages property in the programmer function
        this.languages.push(language);
    }
    

}


// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
const zay = new Programmer("Zay", "Software Dev", 23, ["javascript"]);

console.log(zay);

zay.completeTask();
console.log(zay.busy);

zay.acceptNewTask();
console.log(zay.busy);

zay.offerNewTask();

console.log(zay.languages);

zay.learnLanguage("typescript");
console.log(zay.languages);



