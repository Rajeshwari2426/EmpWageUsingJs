//UC-3 using function get work hours
//constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
function getWorkingHRs(empCheck)
{
   switch (empCheck)
  {
     //employee is present and parttime
    case IS_PART_TIME:
        return PART_TIME_HRS;
        break;
    //employee is present and fulltime
    case IS_FULL_TIME:
       return FULL_TIME_HRS;
       break;
     //employee is absent
    default:
      return 0;
   }
}
//UC4-Using repetaions forloop 
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHRs(empCheck);
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
{
   totalEmpHrs += getWorkingHRs(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log( " Hrs: "+ totalEmpHrs +";"+ "empwage :"+empWage);