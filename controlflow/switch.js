// switch (key) {
//     case value:    
//         break;

//     default:
//         break;
// }
const month=3
switch (month) {
    case 1:console.log("JANUARY");
    break;
        
    case 2:console.log("FEBRUARY");
    break;
        
    case 3:console.log("MARCH");//MARCH
    break;
        

    default:console.log("default case executed");//without break it runs all the belowed code where key matched except default
        break;
}