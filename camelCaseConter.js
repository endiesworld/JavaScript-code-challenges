// Complete the method/function so that it converts dash/underscore 
//delimited words into camel casing. The first word within the output 
//should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function camelCase(str){
    let newString = '';
    let myArray = str.split('-') ;
    if(myArray.length === 1){
        myArray = str.split('_')
    }
    myArray.forEach(element => {
        let newElement = element.replace(element[0], element[0].toUpperCase()) ;
        newString += newElement  ;
    });

    console.log(newString );
}

camelCase("the-stealth-warrior")