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
let totalWorkingdays = 0;
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
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingdays <= NUM_OF_WORKING_DAYS)
{
   totalWorkingdays++; 
   let empCheck = Math.floor(Math.random() * 10) % 3;
   let empHrs = getWorkingHRs(empCheck); 
  
   if(totalEmpHrs + empHrs <= MAX_HRS_IN_MONTH)
   {
      totalEmpHrs += empHrs;
      dailyWageArr.push(calcDailyWage(empHrs));
   }
}
console.log(dailyWageArr);
let empWage = calcDailyWage(totalEmpHrs);
console.log( "total workingdays: "+totalWorkingdays+ " total empHrs: "+ totalEmpHrs + " empwage : "+empWage);
   
   

   
