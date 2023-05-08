// VERY HARD

function Person (name, job, age) {
    this.name = name,
    this.job = job,
    this.age = age,
    this.exercise = () => {
        console.log("Running is fun! - said no one ever");
    },

    this.fetchJob = () => {
        console.log(`${this.name} is a ${this.job}`);
    }
}