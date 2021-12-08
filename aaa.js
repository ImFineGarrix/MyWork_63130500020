class std {
    constructor(name, surname, number, grades = []) {
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.grades = grades;
    }

    average() {
        if (this.grades.length !== 0) {
            return this.grades.reduce((previous, current) => previous + current, 0) /
                this.grades.length
        } else { return "no grades mentioned"; }
    }
}

var student1 = new std("Peter", "Cat", 14444, [1, 3, 4]);
console.log("Average: ", student1.average());
//add new student
var student2 = new std("Prasanna", "sasne", 14444);
console.log(student2);