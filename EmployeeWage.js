//constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
let totalEmpHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
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
//calculating the daily wage
function calcDailyWage(empHrs)
{
   return empHrs * WAGE_PER_HR;
}
let dailyWageArr = new Array()
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS)
{
   totalWorkingDays++; 
   let empCheck = Math.floor(Math.random() * 10) % 3;
   let empHrs = getWorkingHRs(empCheck); 
  
   if(totalEmpHrs + empHrs <= MAX_HRS_IN_MONTH)
   {
      totalEmpHrs += empHrs;
      dailyWageArr.push(calcDailyWage(empHrs));
   }
}
console.log(dailyWageArr);
totalEmpWage = calcDailyWage(totalEmpHrs);
console.log( "total workingdays: "+totalWorkingDays+ " total empHrs: "+ totalEmpHrs + " empwage : "+totalEmpWage);

//Array Helper Functions
//UC 7A - Calc total wage using array forEach traversal or reduce method
let totEmpWage = 0;
function Sum(dailyWage){
    totEmpWage += dailyWage;
}
console.log(dailyWageArr.forEach(Sum));
console.log("UC7A: Total days: "+ totalWorkingDays +", Total Emp Hrs: "+ totalEmpHrs +", Total Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A: EmpWage with reduce: "+ dailyWageArr.reduce(totalWages, 0));

//UC 7B - SHow the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+ dailyWage;
}
let mapDayWithWageArr = dailyWageArr.map(mapDayWithWage);
console.log("UC7B: Daily wage map:");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C: Daily wage filter when fulltime wage earned:");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when fulltime wage was earned using find function
function FindFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D: First time fulltime wage was earned on day:" + mapDayWithWageArr.find(FindFullTimeWage));

//UC 7E - Check if every element of fulltime wage is truely holding fulltime wage
function IsAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E: Check all elements have fulltime wage:" + fullDayWageArr.every(FindFullTimeWage));

//UC 7F - Check if there is any any part time wage
function IsAnyParttimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F: Check if any parttime wage: " + mapDayWithWageArr.some(IsAnyParttimeWage));

//UC 7G - Find the number of days the employee worked
function TotalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G: Number of days emp worked: " + dailyWageArr.reduce(TotalDaysWorked, 0));  
   

   
