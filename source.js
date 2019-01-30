
function date(){
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; 
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var newdate = month + "/" + day + "/" + year;

document.getElementById("demo").innerHTML = newdate
}
