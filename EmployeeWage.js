//UC-1  employee is present or absent
const IS_PRESENT = 0
let empcheck = Math.floor(Math.random() * 10) % 2;
if (empcheck == IS_PRESENT)
{
console.log("employee is absent");
}
else
{
console.log("employee is present");
}   