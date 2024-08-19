function findTheOldest(people) {
    let oldest = people.reduce((prev, current) => {
        let prevAge = (prev.yearOfDeath || new Date().getFullYear()) - prev.yearOfBirth;
        let currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
        return (prevAge > currentAge) ? prev : current;
    });
    console.log(oldest);
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "John",
        yearOfBirth: 1910,
    }
];

findTheOldest(people);
