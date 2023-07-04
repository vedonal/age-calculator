
function calculateAge () {

let day = document.getElementById("day_input").value;
let month = document.getElementById("month_input").value;
let year = document.getElementById("year_input").value;
let result = document.querySelector(".result_text");

let currentDate = new Date();

let current_day = currentDate.getDate();
console.log(current_day);
let current_month = 1 + currentDate.getMonth();
let current_year = currentDate.getFullYear();

let months = [31,28,31,30,31,30,31,31,30,31,30,31];

if (day > current_day) {
    current_day += months[current_month-1];
    current_month -= 1;
}

if (month > current_month) {
    current_month += 12;
    current_year -= 1;
}

console.log(day);

let birth_day = current_day - day;
console.log(birth_day);
let birth_month = current_month - month;
let birth_year = current_year - year;



result.textContent = `You are ${birth_year} years ${birth_month} months and ${birth_day} days old. Wish 100 years more!`;

}