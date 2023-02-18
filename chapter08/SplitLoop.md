before:
```js
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
    averageAge += p.age;
    totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```

after:
```js
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
    averageAge += p.age;
}
for (const p of people) {
    totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```