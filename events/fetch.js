//let discuss about fetch

// first of all fetch handles web api where it has its separate priority query with an highest priory
//which makes it execute before the  task queue operations 


//now the come to the execution part of fetch
// 1) unaccesible data part containing data,onfullfilled[],onrejection[]
// 2) then method which returns a promise//that is handle by node or web browser which makes network request to given url.



// on promise execution by second part it gives an output as resolved or reject which stores into above arrays and then this will pass values to data
//this data then stores into the global execution context..which is in the variable.




///most imp///
//the 404,403 this are the browser error response this does not means ejection this leads into the resolved part
//if the connection does not established this means there is an reject part