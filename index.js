// Write your solution in this file!
var customerName ='bob';

function upperCaseCustomerName(){
    var name =customerName.toUpperCase();
    return name;
}

/*function upperCaseCustomerName(){
    return customerName= customerName.toUpperCase();;
}*/
console.log(customerName)
console.log(upperCaseCustomerName())
console.log(customerName)


function setBestCustomer(){
    var bestCustomer ='not bob'
    return bestCustomer;
}

console.log(setBestCustomer())

function overwriteBestCustomer (){
    var bestCustomer ='maybe bob'
    return bestCustomer;
}

console.log(overwriteBestCustomer())

const leastFavoriteCustomer= 'tom'
function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer='Assignment to constant variable.'
}