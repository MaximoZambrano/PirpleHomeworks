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
