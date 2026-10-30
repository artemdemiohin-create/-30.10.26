//Задание 1

const siteA = ['anna', 'ivan', 'anna', 'petr', 'olga'];
const siteB = ['ivan', 'anna', 'sergey', 'olga', 'ivan'];

console.log("set siteA");
const setA = new Set(siteA);
console.log(setA);

console.log("колво уникальных полльзователей");
console.log(setA.size);

console.log("объединение в allVisitors");
const allVisitors = new Set([...siteA, ...siteB]);
console.log(allVisitors);

console.log("обратно в массив");
const uniqueVisitorsArray = [...allVisitors];
console.log(uniqueVisitorsArray);

console.log("есть ли petr в siteA");
console.log(setA.has('petr'));

console.log("есть ли petr в siteB");
const setB = new Set(siteB);
console.log(setB.has('petr'));

//Задание 2

console.log("создание phoneBook");
const phoneBook = new Map();
console.log(phoneBook);

console.log("добавление записей в phoneBook")
phoneBook.set('Ivanov', '+7-900-111-22-33');
phoneBook.set('Petrova', '+7-900-444-55-66');
phoneBook.set('Sidorov', '+7-900-777-88-99');
console.log(phoneBook);

console.log("номер Petrova");
const petrovaNumber= phoneBook.get('Petrova');
console.log(petrovaNumber);

console.log("удаление Sidorov");
phoneBook.delete('Sidorov');
console.log(phoneBook);

console.log("размер и проверка phoneBook на Sidorov");
console.log("Размер справочника: ", phoneBook.size);
console.log("Есть ли Sidorov? ", phoneBook.has('Sidorov'));


console.log("массив имен через spread");
const employeeNames = [...phoneBook.keys()];
console.log(employeeNames);

console.log("дополнительно forEach");
phoneBook.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
});

//Задание 3

const students = [
    {name: 'Anna', grade: 5},
    {name: 'Ivan', grade: 4},
    {name: 'Anna', grade: 3},
    {name: 'Petr', grade: 3},
    {name: 'Olga', grade: 4},
    {name: 'Ivan', grade: 4},
]

console.log("уникальные студенты");
const jsonStrings = students.map(student => JSON.stringify(student));
const uniqueStringSet = new Set(jsonStrings);
const uniqueStudents = [...uniqueStringSet].map(str => JSON.parse(str));
console.log(uniqueStudents);

console.log("группировка по оценкам");
const gardeMap = new Map();

students.forEach(student => {
    const { name, grade } = student;

if (!gardeMap.has(grade)) {
    gardeMap.set(grade, []);
}

gardeMap.get(grade).push(name);
});

console.log(gardeMap);

console.log("вывод результатов");

gardeMap.forEach((namesArray, grade) => {
    console.log(`Оценка ${grade}: ${namesArray.join(', ')}`);
});

//Задание 4

function sumTo(n) {
    if (n === 1) {
        return 1;
    } return n + sumTo(n - 1);
}

console.log(sumTo(1));
console.log(sumTo(3));
console.log(sumTo(5));

//Задание 5

function power(a, n) {
    if (n === 0) {
        return 1;
    }
    return a * power(a,n - 1);
}

console.log(power(2, 0));
console.log(power(2, 3));
console.log(power(3, 2));
console.log(power(5, 3));
