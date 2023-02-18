/**
 * 拆分循环（split Loop）
 */
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
    averageAge += p.age;
}
for (const p of people) {
    totalSalary += p.salary;
}
averageAge = averageAge / people.length;