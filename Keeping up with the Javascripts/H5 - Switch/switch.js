// jshint esversion:6
/*
Requirements:
    1. Your function should include at least one switch
    2. Your function must accept any possible combination of inputs 
    3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
        return [5,"minutes"]; 
        The exact label you choose to return for label3 ("minutes" for example) is up to you.
    4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
        timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
        timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
        timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:
    Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

    For example if someone calls:
    timeAdder(20,"hours",4,"hours")
    You could return: [1,"day"] rather than [24,"hours"]

    But if they called
    timeAdder(20,"hours",5,"hours")
    You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.
*/

const FinalProcess = (timeArray) => 
{

    let NV1 = sumArray(NormalizePairValues ("seconds",timeArray[0]), NormalizePairValues ("minutes",timeArray[1]));
    let NV2 = sumArray(NormalizePairValues ("hours",timeArray[2]), NormalizePairValues ("days",timeArray[3]));
    let NV3 = sumArray(NV1, NV2);
    // console.log(NV3);

    let arrayToReturn = [];
    
    if (multivalue)
    {
        if (NV3[3] > 0)
        {
            // Days
            arrayToReturn.push(NV3[3]);
            if (NV3[3] === 1)
                arrayToReturn.push("day");
            else         
                arrayToReturn.push("days");
        }
        if (NV3[2] > 0)
        {
            // hours
            arrayToReturn.push(NV3[2]);
            if (NV3[2] === 1)
                arrayToReturn.push("hour");
            else         
                arrayToReturn.push("hours");        
        }
        if (NV3[1] > 0)
        {
            // minutes
            arrayToReturn.push(NV3[1]);
            if (NV3[1] === 1)
                arrayToReturn.push("minute");
            else         
                arrayToReturn.push("minutes");        
        }
        if (NV3[0] > 0)
        {
            // seconds
            arrayToReturn.push(NV3[0]);
            if (NV3[0] === 1)
                arrayToReturn.push("second");
            else         
                arrayToReturn.push("seconds");        
        }
    }
    else
    {
        let minUnit = null;
        if (NV3[0] > 0)
        {
            // convert everything to seconds
            arrayToReturn.push(NV3[0] + NV3[1] * 60 + NV3[2] * 60 * 60 + NV3[3] * 24 * 60 * 60);
            arrayToReturn.push("second"); 
        } 
            else if (NV3[1] > 0)
            {
                // convert everything to minutes
                arrayToReturn.push( NV3[1] + NV3[2] * 60 + NV3[3] * 24 * 60 );
                arrayToReturn.push("minute");
            }
                else if (NV3[2] > 0)
                {
                    // convert everyting to hours
                    arrayToReturn.push(NV3[2] + NV3[3] * 24);
                    arrayToReturn.push("hour");
                }
                else
                {
                    arrayToReturn.push(NV3[3]);
                    arrayToReturn.push("day");
                }
        if (arrayToReturn[0] > 1) 
        {
            arrayToReturn[1]  = arrayToReturn[1] + "s";
        }    
    }       
    return arrayToReturn;
};  

const sumArray = (a1, a2) => {
    let arrayToBeReturned = [];
    for (var i = 0; i < Math.max(a1.length, a2.length); i++) 
    {
        arrayToBeReturned.push((a1[i] || 0) + (a2[i] || 0));
    }
    return arrayToBeReturned;
};

const validateLabels = (label) =>
{
    let toReturn = false;
    switch (label)
    {
        case "seconds": case "minutes": case "hours": case "days": case "second": case "minute": case "hour": case "day":
        toReturn = true;
        break;

        default:
        toReturn = true;
        break;   
    }
    return toReturn;
};

const validateConcordance = (label,value) =>
{
    let toReturn = false;
    let lastCharacter = label.slice(-1);
    if (lastCharacter === 's')
    {
        switch (value)
        {
            case 1:
                // bad, return false 
                break;
            case 0:
                toReturn = true;
                break;
            default:
                // greater than 1, return true
                toReturn = true;
                break;

        }
    }    
    else
    {
        switch (value)
        {
            case 1:
                // good, return true 
                toReturn = true;
                break;
            case 0:
                // bad, return false
                break;
            default:
                // greater than 1, return false
                break;

        }
    }
    return toReturn;
};

const NormalizePairValues = (label,value) =>
{
    let seconds = 0, minutes = 0, hours = 0, days = 0;
    let NormalizedValues = [];
    switch (label)
    {
        case "seconds":
            if (value >= 60)
            {
                minutes = Math.trunc(value/60);
                seconds = value % 60;
            }
            else
            {
                seconds = value;
            }
            break;
        case "minutes":
            if (value >= 60)
            {
                hours = Math.trunc(value/60);
                minutes = value % 60;
            }
            else
            {
                minutes = value;
            }
            break;
        case "hours":
            if (value >= 24)
            {
                days = Math.trunc(value/24);
                hours = value % 24;
            }
            else
            {
                hours = value;
            }        
            break;
        case "days":
            days = value;
            break;
        case "second":
            seconds = value;
            break;
        case "minute":
            minutes = value;
            break;
        case "hour":
            hours = value;
            break;
        case "day":
            days = value;
            break;
        default:
            break;
    }
    NormalizedValues = [seconds,minutes,hours, days];
    return NormalizedValues;
};

// Running timeAdder multiple times produced out-of-order results
// somehow, VS Code execution goes "async", I guess
// This is NOT A FUNCTION TO BE USED IN PRODUCTION as it is a CPU hog
// but it is useful for testing and obtained results in proper order
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}



// Our function
const timeAdder = (value1, label1, value2, label2) => {

    let toReturn = false;

    // parameters validation, types.
    // return false if any validation fails
    // get the types of the passed parameters
    let value1Type = typeof value1;
    let value2Type = typeof value2;
    let label1Type = typeof label1;
    let label2Type = typeof label1;

    // validate parameters types, values must be numbers, labels must be string
    if (!(value1Type === "number" && value2Type === "number" && label1Type === "string" && label2Type === "string"))
    {
        return toReturn;
    }

    // values should be positive
    if (value1 < 0 || value2 < 0)
    {
        return toReturn;
    }
    
    // ensure lowercase in labels
    label1 = label1.toLowerCase();
    label2 = label2.toLowerCase();

    // validate labels content, these must be "seconds" or "minutes" or or "hours" or "days" or "second" or "minute" or "hour" or "day"
    // if not, return false
    if ((!validateLabels(label1)) || !validateLabels(label2))
    {
        return toReturn;
    }

    // validate concordance between values and labels
    // if value 1 is 1, label 1 should be singular (1 hour, not 1 hours), same for value2 and label 2
    // if value 1 is 0, label 1 should be plural (0 hours, not 0 hour), salme for value 2 and label 2
    // if value 1 is greater than 1, label 1 should be plural (5 hours, not 5 hour), same for value 2 and label 2
    if (!(validateConcordance(label1,value1)) || !validateConcordance(label2,value2))
    {
        return toReturn;
    }
 
    // validations passed, let's make the array we'll return
    let toReturnArray = [];
    let NV1 = NormalizePairValues (label1,value1);
    let NV2 = NormalizePairValues (label2,value2);
    let NV3 = sumArray(NV1, NV2);
    // console.log(NV3);
    toReturnArray = FinalProcess(NV3);
    return toReturnArray;
};

// test function 
const testTimeAdder = () => {
    // calls listed in requirements and extra credit
    console.log(timeAdder(1,"minute",3,"minutes"));
    sleep(100);
    console.log(timeAdder(5,"days",25,"hours"));
    sleep(100);
    console.log(timeAdder(1,"minute",240,"seconds"));
    sleep(100);
    console.log(timeAdder(5,"hour",5,"minutes"));
    sleep(100);
    console.log(timeAdder(false,false,5,"minutes"));
    sleep(100);
    console.log(timeAdder({},"days",5,"minutes"));
    sleep(100);
    console.log(timeAdder(20,"hours",4,"hours"));
    sleep(100);
    console.log(timeAdder(20,"hours",5,"hours"));
    sleep(100);
    // extra calls
    console.log("-------------------------------");
    console.log("   Additional calls");
    console.log(timeAdder(40,"minutes",4,"hours"));
    sleep(100);
    console.log(timeAdder(5,"days",25,"minutes"));
    sleep(100);
    console.log(timeAdder(5,"hours",525,"seconds"));
    sleep(100);
    
    } ;
    


console.log("\n-------------------------------------------------------------------------------------");
console.log("Multivalue off");
multivalue = false;
testTimeAdder();


console.log("\n-------------------------------------------------------------------------------------");
console.log("Multivalue on");
multivalue = true;
testTimeAdder();



