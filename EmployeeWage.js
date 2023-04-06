//UC1
const isAbsent=0;
let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck==isAbsent)
console.log("the employee is absent");
else
console.log("the employee is present");
  
//UC2
const isPartTime=1;
const isFullTime=2;

const part_Time_Hr = 4;
const full_Time_Hr = 8;

const Wage_Per_Hr=20;

{
    let empHour = 0;
    let empCheck = Math.floor(Math.random()*10)%3;

    switch(empCheck)
    {
        case isPartTime: empHour=part_Time_Hr;break;
        case isFullTime: empHour=full_Time_Hr;break;
        default:empHour=0;
    }
    let empWage = empHour * Wage_Per_Hr;
    console.log(empHour);
    console.log(empWage);
}

//UC3
{
    const isPartTime=1;
    const isFullTime=2;
    
    const part_Time_Hr = 4;
    const full_Time_Hr = 8;
    
    const Wage_Per_Hr=20;
    
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHour=getWorkingHours(empCheck);

    let empWage = empHour * Wage_Per_Hr;

    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
        case isPartTime: return part_Time_Hr;
        case isFullTime: return full_Time_Hr;
        default: return 0;
        } 
    }

    console.log(empHour);
    console.log(empWage);
}


