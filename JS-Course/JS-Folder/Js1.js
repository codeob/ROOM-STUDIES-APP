// Valid | not Valid  | access Denied
const Person= "not Valid";

// if (Person == "Valid") {
//        console.log('Access your Profile now');
       
// }else if(Person == "not Valid"){
//     console.log("Sorry Access Denied");  
// }else if (Person == "access Denied") {
//     console.log('Please kindly go back to login form start all over again');
// } else{
//     console.log("No account found ");
    
// }

switch (Person) {
        case "Valid":
           console.log('im coming home');
          break;
        case " not Valid":
           console.log('im coming');    
          break;
        default:
            console.log('hey there');
        break;
}

